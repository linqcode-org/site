// node --test api/test — exercises the contact Function without Azure: Graph and the token endpoint are faked.
const test = require("node:test");
const assert = require("node:assert/strict");

process.env.EMAIL_SERVICE_TENANT_ID = "tenant";
process.env.EMAIL_SERVICE_CLIENT_ID = "client";
process.env.EMAIL_SERVICE_CLIENT_SECRET = "secret";
process.env.EMAIL_SERVICE_FROM = "caixa@example.com";

const { handler } = require("../src/functions/contato.js");

const sent = [];
global.fetch = async (url, init) => {
  if (String(url).includes("/oauth2/v2.0/token")) {
    return new Response(JSON.stringify({ access_token: "token" }), { status: 200 });
  }
  sent.push(JSON.parse(init.body));
  return new Response(null, { status: 202 });
};

const context = { error: () => {} };
const request = (body, contentType = "application/json") => ({
  method: "POST",
  headers: new Headers({ "content-type": contentType }),
  text: async () => body,
});
const valid = {
  nome: "Ana <b>Silva</b>",
  email: "ana@example.com",
  empresa: "",
  telefone: "11 99999-0000",
  assunto: "Orçamento",
  mensagem: "Linha 1\n<script>alert(1)</script>",
};

test("sends the fields as escaped HTML with the visitor as reply-to", async () => {
  sent.length = 0;
  const res = await handler(request(JSON.stringify(valid)), context);
  assert.equal(res.status, 200);
  const message = sent[0].message;
  assert.equal(message.subject, "Contato pelo site: Orçamento");
  assert.equal(message.replyTo[0].emailAddress.address, "ana@example.com");
  assert.match(message.body.content, /Ana &lt;b&gt;Silva&lt;\/b&gt;/);
  assert.match(message.body.content, /Linha 1<br>&lt;script&gt;/);
  assert.doesNotMatch(message.body.content, /<script>/);
  assert.doesNotMatch(message.body.content, /Empresa/);
});

test("rejects a missing required field", async () => {
  const res = await handler(request(JSON.stringify({ ...valid, telefone: " " })), context);
  assert.equal(res.status, 400);
  assert.match(res.jsonBody.error, /telefone/);
});

test("rejects an invalid e-mail", async () => {
  const res = await handler(request(JSON.stringify({ ...valid, email: "ana" })), context);
  assert.equal(res.status, 400);
});

test("drops honeypot submissions without sending", async () => {
  sent.length = 0;
  const res = await handler(request(JSON.stringify({ ...valid, website: "http://spam" })), context);
  assert.equal(res.status, 200);
  assert.equal(sent.length, 0);
});

test("a plain form post is redirected to the thank-you page", async () => {
  const body = new URLSearchParams(valid).toString();
  const res = await handler(request(body, "application/x-www-form-urlencoded"), context);
  assert.equal(res.status, 303);
  assert.match(res.headers.Location, /obrigado$/);
});

test("a failed send redirects a plain form post with erro=1", async () => {
  const original = global.fetch;
  global.fetch = async () => new Response(null, { status: 500 });
  const body = new URLSearchParams(valid).toString();
  const res = await handler(request(body, "application/x-www-form-urlencoded"), context);
  global.fetch = original;
  assert.equal(res.status, 303);
  assert.match(res.headers.Location, /obrigado\?erro=1$/);
});

test("refuses other methods and oversized bodies", async () => {
  assert.equal((await handler({ method: "GET" }, context)).status, 405);
  assert.equal((await handler(request("x".repeat(20001)), context)).status, 413);
});

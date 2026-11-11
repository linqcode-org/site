// Single source for the site's facts and copy. Pages, JSON-LD, llms.txt and the sitemap read from here,
// so a phone number or a service changes in one place. All copy comes from the previous site.

export const company = {
  name: "Linqcode",
  legalName: "LINQCODE CONSULTORIA LTDA",
  cnpj: "38.350.776/0001-04",
  url: "https://www.linqcode.com.br",
  tagline: "Consultoria e desenvolvimento de sistemas",
  description:
    "Consultoria e desenvolvimento de sistemas sob medida: web sites, e-commerce, aplicativos mobile, aplicações customizadas, inteligência artificial e cloud para unificar os processos da sua empresa.",
  email: "contato@linqcode.com.br",
  phoneDisplay: "+55 11 9 6634-2251",
  phoneE164: "+5511966342251",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=5511966342251&text=Ol%C3%A1%2C+quero+fazer+um+or%C3%A7amento%21&app_absent=0",
  social: [
    { name: "Instagram", url: "https://www.instagram.com/linqcode/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/linqcode" },
    { name: "Facebook", url: "https://www.facebook.com/linqcode" },
  ],
  analyticsId: "G-6Y2LW033JK",
  facebookDomainVerification: "m37l9f4zwi8oj4eygl4o0bqmfd4et2",
} as const;

export const nav = [
  { href: "/solucoes", label: "Soluções" },
  { href: "/sobre", label: "Quem somos" },
  { href: "/clientes", label: "Clientes" },
  { href: "/contato", label: "Contato" },
] as const;

export const hero = {
  title: "Soluções tecnológicas para unificar os processos da sua empresa",
  subtitle: "Consultoria e desenvolvimento de sistemas sob medida para transformar seu negócio.",
};

export type ServiceKey = "web" | "ecommerce" | "mobile" | "custom" | "ia" | "cloud";

export type Service = {
  key: ServiceKey;
  anchor: string;
  name: string;
  short: string;
  pitch: string;
  features: string[];
};

// The four deliveries: one per petal of the symbol.
export const services: Service[] = [
  {
    key: "web",
    anchor: "site-institucional",
    name: "Site institucional",
    short: "Crie agora mesmo o cartão de visita da sua empresa. Tenha seu próprio site.",
    pitch: "Crie agora mesmo o cartão de visita da sua empresa.",
    features: [
      "Páginas responsivas",
      "Hospedagem inclusa",
      "Conta de e-mail",
      "Suporte",
      "WhatsApp",
      "Atualização mensal",
      "Certificado de segurança SSL",
      "Relatórios Google Analytics",
    ],
  },
  {
    key: "ecommerce",
    anchor: "ecommerce",
    name: "E-commerce",
    short: "Tenha sua loja na internet. Customize conforme seu negócio.",
    pitch: "Tenha sua própria loja virtual personalizada.",
    features: [
      "Páginas responsivas",
      "Hospedagem inclusa",
      "Conta de e-mail",
      "Suporte",
      "WhatsApp",
      "Chat online",
      "Atualização mensal",
      "Integração com meio de pagamento",
      "Envio de e-mail para carrinho abandonado",
      "Certificado de segurança SSL",
      "Relatórios Google Analytics",
    ],
  },
  {
    key: "mobile",
    anchor: "mobile",
    name: "Mobile",
    short: "Desenvolvimento de aplicativos. Integre a mobilidade ao seu negócio.",
    pitch: "Integre a mobilidade aos seus processos.",
    features: [
      "Disponível nas plataformas Android e iOS",
      "Desenvolvemos do zero",
      "Totalmente customizável",
      "Suporte",
      "Manutenção",
      "Integração com bases existentes",
      "Mensageria push",
      "Atualização mensal",
    ],
  },
  {
    key: "custom",
    anchor: "aplicacao-customizada",
    name: "Aplicações customizadas",
    short: "Nada no mercado te atende por completo? Crie sua própria solução.",
    pitch: "Nada no mercado te atende, está na hora de desenvolver sua própria solução.",
    features: ["Desenvolvemos do zero", "Suporte", "Manutenção", "Hospedagem", "Ambiente"],
  },
];

// The core of the symbol (the white square that links the petals): capabilities behind every delivery.
// New copy written on 2026-11-11 at the owner's request; not from the previous site.
export const core = {
  title: "Inteligência artificial e cloud no centro de cada solução",
  text: "Do site ao sistema sob medida, cada entrega pode usar inteligência artificial e rodar na nuvem.",
};

export const coreServices: Service[] = [
  {
    key: "ia",
    anchor: "inteligencia-artificial",
    name: "Inteligência artificial",
    short: "Coloque a IA para trabalhar nos processos da sua empresa, integrada aos sistemas que você já usa.",
    pitch: "Automatize tarefas e atendimento com inteligência artificial conectada aos dados da sua empresa.",
    features: [
      "Assistentes e chatbots para atendimento",
      "Automação de tarefas repetitivas",
      "Leitura e extração de dados de documentos",
      "Integração com os modelos de IA do mercado",
      "Integração com seus sistemas e bases existentes",
      "Uso seguro dos dados da empresa",
    ],
  },
  {
    key: "cloud",
    anchor: "cloud",
    name: "Cloud",
    short: "Seus sistemas na nuvem, com segurança, disponibilidade e custo sob controle.",
    pitch: "Infraestrutura em nuvem segura para seus sistemas crescerem sem preocupação.",
    features: [
      "Migração de sistemas para a nuvem",
      "Hospedagem e infraestrutura gerenciada",
      "Backups e alta disponibilidade",
      "Monitoramento",
      "Deploy automatizado (CI/CD)",
      "Otimização de custos de infraestrutura",
    ],
  },
];

export const allServices: Service[] = [...services, ...coreServices];

export const solutionsIntro =
  "Possuímos uma metodologia de desenvolvimento alinhada a resultados, com a estratégia necessária para que sua aplicação tenha o sucesso esperado.";

export const whatWeDoIntro =
  "Desenvolvemos soluções digitais que simplificam processos e geram resultados reais para o seu negócio.";

export const howWeWork = {
  intro: [
    "Nosso time está focado em gerar transformação.",
    "Sempre pensando em um relacionamento de confiança e parceria.",
    "Com amor e dedicação no que fazemos, buscamos tornar sonhos em realidade.",
    "A satisfação de nossos clientes é o que nos move.",
  ],
  principles: [
    { name: "Agilidade", text: "Focamos na transformação, em acelerar resultados." },
    { name: "Simplicidade", text: "Focamos naquilo que realmente importa e gera resultados." },
    { name: "Compromisso", text: "Nosso cliente, nosso projeto! Trabalhamos como donos do produto." },
  ],
};

export const technologies = {
  intro: "Utilizamos as melhores tecnologias do mercado para entregar soluções robustas, escaláveis e modernas.",
  areas: [
    { key: "backend", name: "Backend", text: "APIs robustas e microsserviços escaláveis" },
    { key: "frontend", name: "Frontend", text: "Interfaces modernas e responsivas" },
    { key: "mobile", name: "Mobile", text: "Apps nativos e multiplataforma" },
    { key: "database", name: "Banco de dados", text: "Modelagem e alta disponibilidade" },
    { key: "cloud", name: "Cloud", text: "Infraestrutura em nuvem segura" },
    { key: "quality", name: "Qualidade", text: "Testes automatizados e CI/CD" },
  ],
} as const;

export const testimonial = {
  client: "Funerária Central de Barueri",
  quote: "O sistema é bom e não dá problemas, e quando acontece, a Linqcode sempre se prontifica em resolvê-los.",
  author: "Sergio",
};

export const about = {
  headline: "A Linqcode tem como objetivo transformar sua empresa",
  text: "Especializada em consultoria de sistemas e desenvolvimento de softwares que buscam simplificar e unificar os processos de seus clientes através de soluções tecnológicas.",
  commitments: [
    {
      key: "pessoas",
      name: "Pessoas",
      text: "Antes de qualquer CNPJ lidamos com pessoas, nosso anseio é poder tornar os seus sonhos realidade, ver a satisfação e o sorriso no rosto de nossos clientes.",
    },
    {
      key: "empresas",
      name: "Empresas",
      text: "Transformar empresas, para terem processos mais enxutos, automatizados, trazer de fato valor ao seu negócio. Conhecendo a necessidade do mercado, com experiências anteriores, queremos de fato fazer a diferença.",
    },
  ],
  valuesIntro: [
    "A Linqcode é mais que uma empresa, somos pessoas que almejam impactar pessoas, trazer transformação, ser mais do que entregamos e criar relacionamentos duradouros.",
    "Com determinação e paixão no que fazemos, queremos oferecer a melhor experiência que nossos clientes possam ter.",
  ],
  values: [
    { name: "Respeito", text: "Base dos nossos princípios, acima de tudo." },
    { name: "Atenção", text: "Com empatia em entender a necessidade e o momento de nossos clientes." },
    { name: "Compromisso", text: "Lealdade aos nossos princípios e confiabilidade com nossos clientes." },
    {
      name: "Simplicidade",
      text: "Um bom trabalho está na sua simplicidade. Simplicidade não quer dizer menos, mas o essencial.",
    },
    {
      name: "Agilidade",
      text: "Fadados a processos retrógrados e lentos, queremos entregar a melhor experiência para nossos clientes.",
    },
  ],
  extras: [
    {
      name: "Segmento",
      text: "Por desenvolvermos soluções personalizadas, atingimos os mais diversos segmentos do mercado.",
    },
    { name: "Colaboração", text: "Indivíduos e interações estão à frente de processos, ferramentas e contratos." },
  ],
};

export const clientsIntro =
  "Temos orgulho de ter contribuído com a transformação digital de empresas de diversos segmentos.";

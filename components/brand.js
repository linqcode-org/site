import style from './brand.module.css'

export default function Brand({ isBlack }){
    return <img className={style.img} src={ isBlack ? "/logo-white.png" : "/logo-black.png" } alt="logo-linqcode" />
}
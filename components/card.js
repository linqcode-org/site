import Link from 'next/link'
import styles from './card.module.css'

export default function Card({id, img, title, content, className, footer, link}){
    return <div className={`${styles.card} ${className || ''}`}>
        <Link href={link || `#${id}`}>
            <a>
                <div className={styles.cardHeader}>
                    <img  src={img} />
                </div>
                <div className={styles.cardTitle}>
                    {title}
                </div>
                <hr />
                <div className={styles.cardBody}>
                    {content}
                </div>
                <div className={styles.footer}>
                    {footer}
                </div>
            </a>
        </Link>
    </div>
}
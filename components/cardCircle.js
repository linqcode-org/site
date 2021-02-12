import styles from './cardCircle.module.css'

export default function CardCircle({title, content}){
    return (
        <div className={styles.card}>
            <div>
                <div className={styles.cardHeader}>
                    <span>{title}</span>
                </div>
                <hr/>
                <div className={styles.cardBody}>
                    <span>{content}</span>
                </div>
            </div>
        </div>
    )
}
import styles from "./card.module.css";

export default function Card (props: any) {
    const { title, details, available, imageURL} = props;
    return(
        <div className={styles.card}>
            <img src={imageURL} height="240"/>
            <h5 className={styles.title}>{title}</h5>
            <div className={styles.details}>
                <h6>{available}</h6>
                <h6>$25.50</h6>
            </div>
        </div>
    )
}

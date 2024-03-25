import styles from "./errortext.module.css"

export default function ErrorText(props: any) {
  const { error } = props;
  return(
    <h4 className={styles.heading} style={{display: error ? 'block' : 'block' }}>{error}</h4>
  )
}
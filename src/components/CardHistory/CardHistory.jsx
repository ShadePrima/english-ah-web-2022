import styles from './CardHistory.module.scss'

const CardHistory = (props) => {
  return (
    <div className={styles.wrapper}>
    <h2>{props.title}</h2>
    <div className={styles.card}>
        <div >

        </div>
    </div>
</div>
  )
}

export default CardHistory
import styles from './CardHistory.module.scss'

const CardHistory = (props) => {
  const {arr} = props

  


  return (
    <div className={styles.wrapper}>
      <h2>{props.title}</h2>
      <div className={styles.card}>
        <div className='d-flex flex-column'>
        {arr.map((obj) => (
          <span>{obj.title}</span>          
        ))}
        </div>
      </div>
    </div>
  )
}

export default CardHistory
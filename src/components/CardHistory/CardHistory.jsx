import styles from './CardHistory.module.scss'

const CardHistory = ({arr, posts, title}) => {
  // const {arr} = props
  const myPosts = posts || []

  


  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <div className={styles.card}>
        <div className='d-flex flex-column'>
        {myPosts.map((obj) => (
          <span>{obj.value}</span>          
        ))}
        </div>
      </div>
    </div>
  )
}

export default CardHistory
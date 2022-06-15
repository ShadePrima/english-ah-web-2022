import styles from './CardTranslate.module.scss'

const CardTranslate = (props) => {
  const {posts} = props
  console.log(posts.value)


 

  return (
    <div className={styles.wrapper}>
      <h2>{props.title}</h2>
      <div className={styles.card}>
        <div>          
          
          
        </div>
      </div>
    </div>
  )
}


export default CardTranslate
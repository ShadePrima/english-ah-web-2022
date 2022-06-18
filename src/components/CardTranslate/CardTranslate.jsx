
import styles from './CardTranslate.module.scss'

function CardTranslate({ arr, title, posts }) {
  const myPosts = posts || [{id: '', value: ''}]
  console.log(myPosts)


  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <div className={styles.card}>
        <div className='d-flex flex-column'>
          {/* {lastElement.title} */}
          {/* {myPosts.map((obj) => (
            obj[0].value
          ))} */}
          {myPosts[myPosts.length-1].value}

        </div>
      </div>
    </div>
  )
}


export default CardTranslate
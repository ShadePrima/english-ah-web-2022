
import styles from './CardTranslate.module.scss'

const CardTranslate = (props) => {
  // console.log(props)
  const {arr, posts} = props
  // console.log(arr)
  const lastElement = arr[arr.length - 1]
  console.log(lastElement)
 

  return (
    <div className={styles.wrapper}>
      <h2>{props.title}</h2>
      <div className={styles.card}>
        <div className='d-flex flex-column'>          
          {lastElement.title}
                 
        </div>
      </div>
    </div>
  )
}


export default CardTranslate
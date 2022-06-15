import React from 'react'
import styles from './Card.module.scss'


function Card(props) {  
    

    return (
        <div className={styles.wrapper}>
            <h2>{props.title}</h2>
            <div className={styles.card}>
                <div >
                    <input 
                    placeholder='Enter your word'
                    value={props.word}
                    onChange={props.newText}
                    autoFocus 
                    className={styles.input} 

                    />
                </div>
            </div>
        </div>
    )
}
export default Card
import { useState } from "react"



function Card(props) {
    const [textareaText, setTextareaText] = useState('')
    const [texts, setTexts] = useState([])
    console.log(texts)

  

    const addNewText = () => {
        const newText = {
            id: Math.random(),
            value: textareaText
        }
        console.log(newText) 
        setTexts([...texts, newText])
        setTextareaText('')
    }
    console.log(addNewText)
   
    return (
        <div className="container">
            <h3>Words</h3>
                <button
                    onClick={addNewText}
                >
                    Translate
                </button>
            <div className="card d-flex">


                <div className='card__left'>

                    <textarea
                        placeholder='Enter your word'
                        autoFocus
                        value={textareaText}
                        onChange={(e) => setTextareaText(e.target.value)}
                    >
                    </textarea>
                </div>

                <div className='card__centr'>
                </div>

                <div className='card__right'>
                    
                    {texts.map((obj) => (
                        obj.value
                    ))}
                </div>

            </div>
        </div>

    )
}
export default Card
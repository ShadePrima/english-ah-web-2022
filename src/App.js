import { useState } from 'react';
import Card from './components/Card'
import Drawer from './components/Drawer';

import Header from './components/Header';
import History from './components/History';

const arr = [

  { number: 1, title: 'word1' },
  // {number: 2, title: 'word2'},
  // {number: 3, title: 'word3'},
  // {number: 4, title: 'word4'},
  // {number: 5, title: 'word5'},
]


function App() {
  const [textareaText, setTextareaText] = useState('')
  const [texts, setTexts] = useState([])

  const addNewText = () => {
    const newText = {
      id: Math.random(),
      value: textareaText
    }
    console.log(newText)
    setTexts([...texts, newText])
    setTextareaText('')
  }

  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex aligh-center justify-between mb-40">
          <h1 >English words</h1>
        </div>


        <div className="container">
          <h3>Words</h3>
          <button
            className='mb-10 cardButton'
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




        {/* <div>
          {arr.map((obj) => (
            <Card 
              addNewText={addNewText}
              textareaText={textareaText}
              texts={texts}
              title={obj.title} 
              />
          ))}
        </div> */}


        <h3>History</h3>
        <div className='mt-20'>          
          <History
            texts={texts}
            title={textareaText}
          />
        </div>

      </div>
    </div>
  );
}

export default App;

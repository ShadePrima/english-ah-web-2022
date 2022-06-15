
import Header from './components/Header';
import Card from './components/Card/Card';
import CardHistory from './components/CardHistory/CardHistory';
import CardTranslate from './components/CardTranslate/CardTranslate';
import React from 'react';

const arr = [
  { title: 'pen' },
  { title: 'appel'},
  { title: 'book' },
  { title: 'bird' },
  { title: 'table' },
  { title: 'sky' },
  // { name: 'Men’s Sneakers Jordan Air Jordan 11', price: 140, imageUrl: '/img/sneakers/2.jpg' },
  // { name: 'Men’s Sneakers Nike Air Max 270 ', price: 150, imageUrl: '/img/sneakers/2.jpg' }
]

function App() {
  
  const [words, setWords] = React.useState('')
  const [posts, setPosts] = React.useState('')
  console.log(words)
  console.log(posts)


  // const myArr = posts


  // console.log(posts)
 


    const newText = (event) => {      
        setWords(event.target.value)        
    }



    const addNewPost = () => {
      const newPost = {
        id: Math.random(),
        value: words,        
      }
      
      setPosts([...posts, newPost ])
      setWords('')
    }
    

  return (
    <div className="wrapper clear">
      <Header />
      
      <Card
        title='Enter your word'
        newText={newText}
        word={words}        
      />

      <button
      onClick={addNewPost}
      className='ml-50'
      >
      Translate
      </button>
      
      <CardTranslate
        title='Translate'
        words={words}
        arr={arr}
        posts={posts}
      />
      

      <CardHistory
        title='History'
        posts={posts}
        arr={arr}
      />


    </div>   
  );
}

export default App;

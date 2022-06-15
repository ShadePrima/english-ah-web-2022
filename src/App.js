
import Header from './components/Header';
import Card from './components/Card/Card';
import CardHistory from './components/CardHistory/CardHistory';
import CardTranslate from './components/CardTranslate/CardTranslate';
import React from 'react';



function App() {
  
  const [word, setWord] = React.useState('')
  const [posts, setPosts] = React.useState('')

  // const myPosts = posts
  // console.log(myPosts)
 


    const newText = (event) => {
        setWord(event.target.value)
    }

    const addNewPost = () => {
      const newPost = {
        // id: Math.random(),
        value: word,        
      }
      
      setPosts([...posts, newPost ])
      setWord('')
    }
    

  return (
    <div className="wrapper clear">
      <Header />
      
      <Card
        title='Enter your word'
        newText={newText}
        word={word}        
      />

      <button
      onClick={addNewPost}
      className='waves-effect waves-light btn ml-50'
      >
      Translate
      </button>


     <CardTranslate
        title='Translate'
        word={word}
        posts={posts}
     />

      <CardHistory
        title='History'
      />

        <div>
          <h1>example</h1>
          {/* {posts.map((post) => 
            <p>{post}</p>
          )} */}
        </div>

    </div>   
  );
}

export default App;

import Card from './components/Card'
import Drawer from './components/Drawer';

import Header from './components/Header';
import History from './components/History';

const arr = [

  {number: 1, title: 'word1'},
  // {number: 2, title: 'word2'},
  // {number: 3, title: 'word3'},
  // {number: 4, title: 'word4'},
  // {number: 5, title: 'word5'},
]


function App() {

 
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex aligh-center justify-between mb-40">
          <h1 >English words</h1>
        </div>

        
        <div>
          {arr.map((obj) => (
            <Card 
              title={obj.title} 
              />
          ))}
        </div>

      
        <h3>History</h3>
        <div className='mt-20'>
        {arr.map((obj) => (
          <History
            number={obj.number}
            title={obj.title}
          />
        ))}
        </div>

      </div>
    </div>
  );
}

export default App;

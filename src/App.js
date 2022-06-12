import Card from './components/Card'
import Drawer from './components/Drawer';
import Header from './components/Header';
import History from './components/History';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex aligh-center justify-between mb-40">
          <h1 >English word</h1>
        </div>
        
        <div className='cards d-flex'>
          <Card />
        </div>

        <div className='mt-40'>
        <History/>
        </div>

      </div>
    </div>
  );
}

export default App;

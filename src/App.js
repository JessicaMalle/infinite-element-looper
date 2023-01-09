import './App.css';
import InfiniteLoop from './components/inifinite-loop';
import Logo01 from './assets/logo-01.png';
import Logo02 from './assets/logo-02.png';
import Logo03 from './assets/logo-03.png';
import Logo04 from './assets/logo-04.png';
import Logo05 from './assets/logo-05.png';
import Logo06 from './assets/logo-06.png';

function App() {
  return (
    <div className="app">
      <InfiniteLoop>
        <img src={Logo01} />
        <img src={Logo02} />
        <img src={Logo03} />
        <img src={Logo04} />
        <img src={Logo05} />
        <img src={Logo06} />
      </InfiniteLoop>
    </div>
  );
}

export default App;

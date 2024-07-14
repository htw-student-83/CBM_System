import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Mainpage  from './components/main';
import Server_Connection from "./components/Server_Connection";
import TCP_Connection from "./components/TCP_Connection";
import Lokal_Connection from "./components/Lokal_Connection";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <class className="page">
          <Routes>
            <Route path = '/cashbox' element = {<Mainpage/>}/>
            <Route path = '/cashbox/serverArt' element = {<Server_Connection/>}/>
            <Route path = '/cashbox/serverArt/tcp' element= {<TCP_Connection/>}/>
            <Route path = '/cashbox/serverArt/lokal' element = {<Lokal_Connection/>}/>
          </Routes>
        </class>
      </BrowserRouter>
    </div>
  );
}

export default App;

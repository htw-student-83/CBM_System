import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Mainpage  from './components/main';
import Server_Connection from "./components/Server_Connection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <class className="page">
          <Routes>
            <Route
                path = '/'
                element = {<Mainpage/>}
            />
            <Route
                path = '/cashbox/serverArt'
                element = {<Server_Connection/>}
            />
          </Routes>
        </class>
      </BrowserRouter>
    </div>
  );
}

export default App;

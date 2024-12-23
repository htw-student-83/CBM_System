import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Mainpage  from './components/Main';
import Server_Connection from "./components/Server_Connection";
import TCP_Connection from "./components/TCP_Connection";
import Lokal_Connection from "./components/Lokal_Connection";
import Login from "./components/Login";
import ServerDown from "./components/ServerIsDown";
import PasswortVergessen from "./components/passwort_vergessen";
import Registrierung from "./components/registrierung";
import Hauptmenu from "./components/Hauptmenu";
import Einzahlung from "./components/Einzahlung";
import Auszahlung from "./components/Auszahlung";
import User from "./components/UserDataView";
import AccountDelete from "./components/AccountDelete";
import Logout from "./components/Logout";
import ProzessErfolgreich from "./components/ProzessErfolgreich";
import LadeBalken from "./components/LadeBalken";
import ProzessNichtErfolgreich from "./components/ProzessNichtErfolgreich";
import SicherheitsabfrageEinzahlung from "./components/SicherheitsabfrageEinzahlung";
import SicherheitsabfrageAuszahlung from "./components/SicherheitsabfrageAuszahlung";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <class className="page">
          <Routes>
            <Route path = '/' element = {<Mainpage/>}/>
            <Route path = '/cashbox/serverArt' element = {<Server_Connection/>}/>
            <Route path = '/cashbox/serverArt/tcp' element= {<TCP_Connection/>}/>
            <Route path = '/cashbox/serverArt/lokal' element = {<Lokal_Connection/>}/>
            <Route path = '/cashbox/serverFail' element = {<ServerDown/>}/>
            <Route path = '/cashbox/user/passwordforgot' element = {<PasswortVergessen/>}/>
            <Route path = '/cashbox/user/registrierung' element = {<Registrierung/>}/>
            <Route path = '/cashbox/login' element = {<Login/>}/>
            <Route path = '/cashbox/userdataview' element = {<User/>}/>
            <Route path = '/cashbox/logout/:id' element = {<Logout/>}/>
            <Route path = '/cashbox/account_loeschung' element = {<AccountDelete/>}/>
            <Route path = '/cashbox/hauptmenu' element = {<Hauptmenu/>}/>
            <Route path = '/cashbox/einzahlung' element = {<Einzahlung/>}/>
            <Route path = '/cashbox/einzahlung/abfrage' element = {<SicherheitsabfrageEinzahlung/>}/>
            <Route path = '/cashbox/prozess_laeuft' element = {<LadeBalken/>}/>
            <Route path = '/cashbox/prozess_erfolgreich' element = {<ProzessErfolgreich/>}/>
            <Route path = '/cashbox/auszahlung' element = {<Auszahlung/>}/>
            <Route path = '/cashbox/auszahlung/abfrage' element = {<SicherheitsabfrageAuszahlung/>}/>
            <Route path = '/cashbox/prozess_nicht_erfolgreich' element = {<ProzessNichtErfolgreich/>}/>
          </Routes>
        </class>
      </BrowserRouter>
    </div>
  );
}

export default App;

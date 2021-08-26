import Header from "./component/Header";
import EventExample from "./component/EventExample";
import ListComponent from "./component/ListComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsSearch from "./pages/NewsSearch";
import AddUser from "./pages/AddUser";
import AuthResult from "./pages/AuthResult";
import Main from "./pages/Main";
import Balance from "./pages/Balance";
import QrCode from "./pages/QrCode";
import QrcodeReader from "./pages/QrcodeReader";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <Header title="테스트 페이지 1"></Header>
          <EventExample/>
        </Route>
        <Route path="/test2" exact>
          <Header title="테스트 페이지 2"></Header>
          <ListComponent/>
        </Route>
        <Route path="/news" exact>
          <NewsSearch/>
        </Route>
        <Route path="/adduser" exact>
          <AddUser/>
        </Route>
        <Route path="/authResult" exact>
          <AuthResult/>
        </Route>
        <Route path="/main" exact>
          <Main/>
        </Route>
        <Route path="/balance" exact>
          <Balance/>
        </Route>
        <Route path="/qrcode" exact>
          <QrCode/>
        </Route>
        <Route path="/qrreader" exact>
          <QrcodeReader/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

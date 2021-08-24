import Header from "./component/Header";
import EventExample from "./component/EventExample";
import ListComponent from "./component/ListComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosTest from "./pages/AxiosTest";

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
        <Route path="/axios" exact>
          <Header title="엑시오스 테스트"></Header>
          <AxiosTest/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

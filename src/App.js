import Header from "./components/Header";
import Start from "./pages/Start";
import Footer from "./components/Footer";
import {Switch, Route} from 'react-router-dom'
import Input from "./pages/input";
import Output from "./pages/output";
import FailedExchange from "./pages/failedExchange";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Routes the UI can take, corresponding to application's pages*/}
      <Switch>
        <Route exact path='/' render={() => (
          <Start />
        )} />
        <Route path="/converter" render={() => (
          <Input />
        )} />
        <Route path="/conversion" render={() => (
          <Output />
        )} />
        <Route path="/exchange-error" render={() => (
          <FailedExchange />
        )} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import {HashRouter, Route} from 'react-router-dom'

function App() {
  return (
     <HashRouter>
        <div className="">
         <Route path="/" exact component={Home} />
         <Route path="/dashboard" exact component={Dashboard} />
       </div>
     </HashRouter>
  );
}

export default App;

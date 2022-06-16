import { Pages } from "./pages/Pages";
import { Category } from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import {Search} from './components/Search';
function App() {
  return (
    <div className="App">
      {/*
      this gives the functionality to navigate around pages.
      so if category has links in it and wants to navigate to it can now because \
      it is wrapped with browser router.
    */}
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;

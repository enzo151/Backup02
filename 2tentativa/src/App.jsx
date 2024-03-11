
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" eLement={<Home />}/>
          <Route path="/sobre" eLement={<Sobre />}/>
          <Route path="/contato" eLement={<Contato />}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
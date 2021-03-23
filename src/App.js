import React from 'react'

import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from '../src/Home/home';
import Murree from '../src/Murree'
import KASHMIR from '../src/Home/Header/kashmir/kashmir'
import Shogran from '../src/Home/Header/Shogran'
import Contact from '../src/Home/Header/Contact/contact'
import Header from '../src/Home/Header/header'
import Footer from '../src/Home/Footer/footer'




const App=()=>{

    return(    

      <div>
<BrowserRouter>
<div>
  <Header/>
</div>
      <Route exact path="/" component={Home}/>
      
      <Route path="/Murree" component={Murree}/>
      <Route path="/Kashmir" component={KASHMIR}/>
      <Route path="/Shogran" component={Shogran}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Home" component={Home}/>

      <div>
  <Footer/>
</div>
      
      </BrowserRouter>


      </div>




      
    )
      
  }

export default App
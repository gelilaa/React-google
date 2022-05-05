
import './App.css';
import { Fragment } from 'react';
import {Header} from "./components/header/Header.jsx";
import {Footer} from "./components/footer/Footer"
import { Body } from './components/body/Body';



function App() {
  // for (let i = 1; i <= 100; i++) {
  //   if (i % 3 === 0) {
  //     console.log("fizz",i);
  //   }
  //   if (i % 5 === 0) {
  //     console.log("buzz", i);
  //   }
  //   if (i % 3 === 0 && i % 5 === 0) {
  //     console.log("fizzbuzz", i);
  //   }
  // }

  return (
    
    <Fragment>
      <Header/>
     <Body/>
<Footer/>
    </Fragment>
  );
}

export default App;

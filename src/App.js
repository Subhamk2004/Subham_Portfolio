import './App.css'; // we are importing the app.css file and we can 
// change the css from there if we want to;

import $ from "jquery";//******* */
import Navbar from './Components/Navbar';
import Landingpage from './Components/Landingpage';
let name = "Subham Kumar";

function App() {
  return (
    <>
    <Landingpage></Landingpage>
    <Navbar></Navbar>
    </>

  );
}

// Below I used jQuery inside react app by importing the jQuery 
// you can see above




// we have to use closing tagd for every element so that JSX don't
// throw errors

// we have to use camelCase in JSX

// use {} curly brackets to use JS variables and function inside
// html elements as in line 23;

// The above thing which is inside the function is completely both html
// and JS and we will call it[ (JSX) ], it's syntax is like 

// function app_name(){
//   return (
//     JSX body.......
//       ...............
//  );
// }

// if I want to use more than one element inside a varibale or a fnction 
// then we have to use JS fragments which are :
// < >
//   more than one html elements inside this;
// </> 

export default App;

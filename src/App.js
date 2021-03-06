import './App.css';
import React , {useState} from 'react';
import Navbar from './components/navbar'
import StripeCheckout from "react-stripe-checkout"


function App() {

  var [ price , setprice ] = useState(0);

  return (
    <>
    <Navbar/>
    <div className = "content-box">
      <h1>HAPPY TO HELP YOU</h1>  
      <p>Your contribution has the power to uplift needy people in dire situations. We’re working towards a nation where its children,people live a secure life, full of opportunities for growth and development. Presently, we have ongoing projects running across 18 states of India, where we were able to reach a total of 10.37 lakh needy in 2020.
      Come, play your part. Come, donate.</p>
    </div>
    <div className="donate-section">
    <h2>DONATE HERE</h2>
    <p>donate as you wish to help the people in need</p>
    <input type="number" placeholder="enter amount" onChange = {Event => setprice(Event.target.value) }/>
    <StripeCheckout stripeKey="pk_test_51Io3U5SEwXz2aiklhqztYOutoVgCzVaEwTpNtWjmDlDWfxqorxS0555av2Dl4SIxt68mfBuQ3XDQ4YD2guHfLtXy00D4WJL37c" token="" name="DONATE usd" amount = {price*100}>
      <button className="btn-large">DONATE {price} $ </button>
    </StripeCheckout>
    </div>
    <footer>
    ©HelpInNeed , 2021 (this is an intenship project for <a href ="https://www.thesparksfoundationsingapore.org/">Sparks foundation</a> by <a href="https://www.linkedin.com/in/sumit-mehra-6579171b4/">Sumit Mehra</a>)
    </footer>
    </>
  );
}

export default App;

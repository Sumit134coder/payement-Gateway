import './App.css';
import React , {useState} from 'react';
import StripeCheckout from "react-stripe-checkout"

function App() {

  const [ product , setproduct ]=useState({
    name: "react from fb",
    price:10,
    productBy: "facebook"
  })
  return (
    <>
    <h1>Hello</h1>
    <StripeCheckout stripeKey="" token="" name="DONATE" >
      <button className="btn-large">DONATE</button>
    </StripeCheckout>
    </>
  );
}

export default App;

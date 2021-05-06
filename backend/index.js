import express, { json } from 'express';
import cors from 'cors';

const stripe = require("stripe")("sk_test_51Io3U5SEwXz2aiklNTvVQjjSIkAhTJj4tZNpQeXyKiM32FojL5cnlZ5SvGXZoT4khL9ealb4krgRHK7fONkWuFjr008lBSm6hu")
import uuid from "uuid";



const app = express();

//midleware

app.use(express.json())
app.use(cors());


//listen and get
app.get("/",(req,res)=>{
    res.send("it works at site");
})


app.post("/payment",(req,res)=>{
    const{ product , token} = req.body;
    console.log("PRODUCT",product);
    console.log("PRICE",product.price);
    const idempotencyKey = uuid();
    
    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: product.price*100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: product.name,
            shipping : {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }

            }
        } , {idempotencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err) )


})

app.listen(8282,()=>{
    console.log("LISTENIG AT PORT 8282")
})
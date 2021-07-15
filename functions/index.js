const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51J4fkjB4m1qW0l8krEnrZVb1ZflZj6cF53o0mVAsacK0ENkpOT7XzhIPfnvwCLsr9zIfPYvDMXI3J25Putcb4Ywr00P8Wnjhnl");


const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) =>
  response.status(200).send("Hello world from firebase"));

app.post("/payment/create", async function(request, response) {
  const total = request.query.total;

  console.log("Payment Request Recieved this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

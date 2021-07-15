import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { addBasketTotal } from './Reducer';
import { useEffect } from 'react';
import axios from './axios';
import { db } from './firebase';



const Payment = () => {

    const history = useHistory();
    const [{ basket, user, shipData }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    //Generate special stripe secret for customer to charge.
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payment/create?total=${addBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket]);

    console.log('The Client Secret is', clientSecret);

    const handleCardDetail = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            db
                .collection('users')
                .doc(user?.uid)
                .collection('address')
                .doc(paymentIntent.id)
                .set({
                    name: shipData.name,
                    phone: shipData.phone,
                    address: shipData.address,
                    city: shipData.city,
                    country: shipData.country
                })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            dispatch({
                type: "SET_SHIPPING_DATA",
                shipData: {}
            })

            history.replace('/orders')
        })
    }

    return (
        <>
            <div className="payment">
                <div className="payment-container">
                    <h1>
                        Checkout ( <Link to="/checkout"> {basket.length} Items </Link>)
                    </h1>
                    <div className="payment-section">
                        <div className="payment-title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment-address">
                            <p> {user?.email} </p>
                            <p> {shipData.name} </p>
                            <p> {shipData.phone} </p>
                            <p> {shipData.address}, {shipData.city}, {shipData.country} </p>
                        </div>
                    </div>

                    <div className="payment-section">
                        <div className="payment-title">
                            <h3>Review Items</h3>
                        </div>
                        <div className="payment-items">
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="payment-section">
                        <div className="payment-method">
                            <h3>Payment Method</h3>
                        </div>
                        <div className="payment-details">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleCardDetail} />
                                <div className="payment-priceDetails">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total : {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={addBasketTotal(basket)}
                                        displayType={'text'}
                                        thousandSeperator={true}
                                        prefix={'$'}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing...</p> : 'Order Now'}</span>
                                    </button>
                                </div>
                                {error && <div>{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment;

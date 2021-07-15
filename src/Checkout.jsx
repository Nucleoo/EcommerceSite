import React from 'react'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {

    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <>
            <div className="checkout">
                <div className="checkout-left">
                    <img className="checkout-ad"
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                        alt="Product AD" />

                    <div>
                        <h3>Hello, {user ? (user?.email) : 'Guest'}</h3>
                        <h2 className="checkout-title">Your Shopping Basket</h2>
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
                <div className="checkout-right">
                    <Subtotal />
                </div>
            </div>
        </>
    )
}

export default Checkout;

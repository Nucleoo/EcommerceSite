import React from 'react'
import { useStateValue } from './StateProvider'


const CheckoutProduct = ({ id, title, price, rating, image }) => {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <>
            <div className="checkoutProduct">
                <img className="checkoutProduct-image"
                    src={image} alt="Prodcut" />
                <div className="checkoutProduct-info">
                    <p className="checkoutProduct-title">{title}</p>
                    <p className="checkoutProduct-price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct-rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>🌟</p>
                            ))}
                    </div>
                    <button onClick={removeFromBasket}>Remove from Cart</button>
                </div>
            </div>
        </>
    )
}

export default CheckoutProduct;

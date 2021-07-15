import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider';

const myStyle = {
    color: "#074bb0"
};

const Shipping = () => {

    const history = useHistory();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const [{ shipData }, dispatch] = useStateValue();

    const shippingData = (event) => {
        event.preventDefault();

        dispatch({
            type: "SET_SHIPPING_DATA",
            shipData: {
                name: name,
                phone: phone,
                address: address,
                city: city,
                country: country
            }
        });

        history.push("/payment");
    }

    return (
        <>
            <div className="shipping">
                <div className="shipping-container">
                    <h1>Shipping Address</h1>

                    <form >
                        <h5>Name</h5>
                        <input type="text" value={name}
                            onChange={event => setName(event.target.value)} required="required" />
                        <h5>Phone</h5>
                        <input type="number" value={phone}
                            onChange={event => setPhone(event.target.value)} required />
                        <h5>Address</h5>
                        <input type="text" value={address}
                            onChange={event => setAddress(event.target.value)} required />
                        <h5>City</h5>
                        <input type="text" value={city}
                            onChange={event => setCity(event.target.value)} required />
                        <h5>Country</h5>
                        <input type="text" value={country}
                            onChange={event => setCountry(event.target.value)} required />

                        <p style={{
                            fontSize: "12px",
                            marginTop: "15px",
                            textAlign: "justify"
                        }}>
                            By continuing, you agree to Amazon's <span style={myStyle}>Conditions of Use</span> and <span style={myStyle}>Privacy Notice</span>.</p>

                        <button className="shipping-button" type="submit"
                            onClick={shippingData}>Continue
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Shipping

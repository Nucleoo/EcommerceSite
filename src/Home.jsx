import React from 'react'
import mainImg from './Images/Image1.jpg'
import Product from './Product';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home-container">
                    <img className="home-image" src={mainImg} alt="Image1" />

                    <div className="home-row">
                        <Product
                            id="12321341"
                            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                            price={11.96}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                        />
                        <Product
                            id="49576374"
                            title="Object-Oriented Programming with C++ | 7th Edition Book | Paperback-20 September 2017"
                            price={11.60}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/41LBD-XtzYL._SX377_BO1,204,203,200_.jpg"
                        />

                    </div>
                    <div className="home-row">
                        <Product
                            id="49087540"
                            title="Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body"
                            price={19.99}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/61eoFn%2BlpDL._SL1500_.jpg"
                        />
                        <Product
                            id="23445930"
                            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                            price={98.99}
                            rating={5}
                            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        />
                        <Product
                            id="135435405"
                            title="Noise Defy Over Ear Bluetooth Headphones with Active Noise Cancellation, Upto 30 Hour Playback"
                            price={59.36}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/61AihvKIw-L._SL1500_.jpg"
                        />
                    </div>
                    <div className="home-row">
                        <Product
                            id="1233850"
                            title="New Apple iPhone 11 (64GB) - Black Smartphone 6.1-inch"
                            price={785.39}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"
                        />
                        <Product
                            id="3254354345"
                            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                            price={598.99}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SL1500_.jpg"
                        />
                        <Product
                            id="534278682"
                            title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver"
                            price={1276.98}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/51TdkJSqeQL._SL1000_.jpg"
                        />
                    </div>
                    <div className="home-row">
                        <Product
                            id="90829332"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                            price={1094.98}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/81Zt42ioCgL.jpg"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;

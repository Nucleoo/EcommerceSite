import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const linkStyle = {
    textDecoration: "none",
};

const Header = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <>
            <div className="header">
                <Link to="/">
                    <img className="header-logo"
                        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo" />
                </Link>
                <div className="header-search">
                    <input className="header-searchInput" type="text" />
                    <SearchIcon className="header-searchIcon" />
                </div>
                <div className="header-nav">
                    <Link to={!user && '/login'} style={linkStyle}>
                        <div className="header-option" onClick={handleAuth}>
                            <span className="header-optionOne">Hello {!user ? 'Guest' : user.email}</span>
                            <span className="header-optionTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>
                    <Link to={user ? "/orders" : "/login"} style={linkStyle}>
                        <div className="header-option">
                            <span className="header-optionOne">Returns</span>
                            <span className="header-optionTwo">& Orders</span>
                        </div>
                    </Link>
                    <div className="header-option">
                        <span className="header-optionOne">Your</span>
                        <span className="header-optionTwo">Prime</span>
                    </div>

                    <Link to="/checkout" style={linkStyle}>
                        <div className="header-basketOption">
                            <ShoppingBasketIcon />
                            <span className="header-optionTwo header-basketCount">
                                {basket?.length}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;

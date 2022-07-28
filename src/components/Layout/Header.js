import {Fragment} from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css'

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            {/* <button>Cart</button> */}
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            {/* since the class has a '-' in it */}
            <img src={mealsImage} alt="A table full of delicious food!" />
            {/* can also add as a url here we did it locally */}
            
        </div>
    </Fragment>
}
export default Header;
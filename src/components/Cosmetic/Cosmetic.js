import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic

    const addToCart = (id) => {
        // console.log('item added', id);
        // localStorage.setItem(id, 1)
        addToDb(id)
    }

    // const addToCartWithParameter = () => addToCart(id)

    const removeFromCart = id => {
        removeFromDb(id);
        // console.log('inside fake db', id);
    }


    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p>Id: {id}</p>
            {/* <button onClick={addToCartWithParameter}>Add to cart</button> */}
            {/*  Shortcut */}
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;
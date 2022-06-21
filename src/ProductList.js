import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getproducts, getADDCart} from './redux/actions/productaction';
import {Link} from 'react-router-dom';

const ProductList = ()=>{
    const dispatch = useDispatch();
    const prodList = useSelector(state => state.products.productList);
    const handleAddToCart = (e, prodId) =>{
        dispatch(getADDCart(prodId))
    }

    useEffect(()=>{
        dispatch(getproducts());
    },[])

    
    return (
        <div>
            <h2>Product List </h2>
            <div>
               <Link to="/viewcart"> <button className='primary' type='button'>View Cart</button></Link> 
            </div>
            <div className="cardDiv">
                {prodList.length > 0 && prodList.map((prodval,index)=>{
                return (
                    <div className="card" key={index} >
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{prodval.name}</h5>
                            <p className="card-text">{prodval.productDescription}</p>
                            <a href="#" className="btn btn-primary" onClick={(e)=>handleAddToCart(e,index)}>Add To Cart</a>
                        </div>
                    </div>
                )
                })}           
            </div>
      </div>
    )
}

export default ProductList;
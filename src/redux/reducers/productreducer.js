import * as type from '../constants';

const initialState = {
    productList: [],
    cartList:[],
}

export default function ProductReducers(state=initialState, action) {
    switch(action.type){
        case type.GET_PRODUCT_LIST:
            return {
                ...state,
            }
        case type.ADD_CART_ACTION_CLICK:
           const getproductid = action.payload;
           const getProdlist = [...state.productList];
           const getSelectedProd =  getProdlist.filter((val,index)=>getproductid ===index);
           return {
            ...state,
            cartList:[...state.cartList,...getSelectedProd],
           }

        case type.PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                productList: action.payload
            }
        
        case type.PRODUCT_LIST_FAILED:
            console.log('PRODUCT_LIST_FAILED',action.payload);
            
        default:
        return state

    }
}


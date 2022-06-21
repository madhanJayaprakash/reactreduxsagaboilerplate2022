import * as type from '../constants';

export function getproducts(productList) {
    return { 
      type: type.GET_PRODUCT_LIST
    }
  }

  export function getproducts_success(productList) {
    return { 
      type: type.PRODUCT_LIST_SUCCESS,
      payload: productList,
    }
  }

  export function getproducts_failed(errormsg) {
    return { 
      type: type.PRODUCT_LIST_FAILED,
      payload: errormsg,
    }
  }

  export function getADDCart(id){
    return{
        type: type.ADD_CART_ACTION_CLICK,
        payload:id,
    }
  }
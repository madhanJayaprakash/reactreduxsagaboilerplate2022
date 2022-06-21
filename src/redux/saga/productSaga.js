import { call, put, takeLatest } from 'redux-saga/effects';
import { getproducts_success, getproducts_failed } from '../actions/productaction';
import {data} from "../../dataJson";

const apiUrl = `https://jsonplaceholder.typicode.com/users`;
function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

function* fetchProducts(action) {
   try {
      //const products = yield call(getApi);
      const products = data;
      //yield put({type: 'PRODUCT_LIST_SUCCESS', products: products});
      yield put(getproducts_success(products))
   } catch (e) {
      yield put(getproducts_failed(e.message));
   }
}

function* productSaga() {
   yield takeLatest('GET_PRODUCT_LIST', fetchProducts);
}

export default productSaga;
import { api, API_BASE_URL } from "../../config/apiConfig";
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    //const { data } = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}` );
    const { data } = await api.get(`/api/products?color=${colors}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&pageSize=${pageSize}&pageNumber=${pageNumber}`);
    console.log("find filter products data ", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data, });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  console.log("productId in action ", productId);
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    console.log("find product by id data ", data);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST });

    const { data } = await api.post( `/api/admin/products/`,product
     // product.data
     
    );

    dispatch({type: CREATE_PRODUCT_SUCCESS,payload: data,});

    console.log("created product  dashboard", data);
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const deleteProduct = (productId) => async (dispatch) => {
  console.log("delete product action",productId)
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    let {data} = await api.delete(`${API_BASE_URL}api/admin/products/${productId}/delete`);

    console.log("delete product ",data)

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: productId,
      
    });

    console.log("product delte ",data)
  } catch (error) {
    console.log("catch error ",error)
    dispatch({
      type: DELETE_PRODUCT_FAILURE,
      payload:
         error.response && error.response.data.message
          ? error.response.data.message
          : error.message, 
    });
  }
};

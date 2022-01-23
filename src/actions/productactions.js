// add product to the server
import { authaxios, instance } from "./../utils/axios";

export const addproduct = (productdata) => async (dispatch) => {
  console.log(productdata, 'odododod')
  try {
    dispatch({ type: "ADD_PRODUCT_PENDING" })
    const { data } = await authaxios.post("/admin/product/new", productdata);
    dispatch({ type: "ADD_PRODUCT_FULFILLED", payload: data.success })

  } catch (err) {
    dispatch({ type: "ADD_PRODUCT_REJECTED", error: (err.response && err.response.data.message) || err.message })
  }
}


// get all products from the server
export const getallProducts = (keyword = '', ratings = 0, gte = 1, lte = 26009, page = 1, category = '') => async (dispatch) => {
  const link = category.length === 0 ? `/products?ratings[gte]=${ratings}&price[gte]=${gte}&price[lte]=${lte}&page=${page}&keyword=${keyword}` : `/products?ratings[gte]=${ratings}&price[gte]=${gte}&price[lte]=${lte}&page=${page}&keyword=${keyword}&category=${category}`
  console.log(link)
  try {
    dispatch({ type: "ALL_PRODUCTS_PENDING" })

    const { data } = await instance.get(link);
    dispatch({ type: "ALL_PRODUCTS_FULFILLED", payload: data })
  } catch (err) {
    dispatch({ type: "ALL_PRODUCTS_REJECTED", error: err.message || err.response.data.message })

  }
}


// admin get all product
export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: "ALL_PRODUCTS_PENDING" })

    const { data } = await instance.get('/admin/all-orders');
    dispatch({ type: "ALL_PRODUCTS_FULFILLED", payload: data })
  } catch (err) {
    dispatch({ type: "ALL_PRODUCTS_REJECTED", error: err.message || err.response.data.message })

  }
}


// get single products from the server

export const getSingleProduct = (product_id) => async (dispatch) => {
  try {
    dispatch({ type: "SINGLE_PRODUCT_PENDING" })
    const { data } = await instance.get(`/product/${product_id}`);
    dispatch({ type: "SINGLE_PRODUCT_FULFILLED", payload: data.product })
  }
  catch (err) {
    dispatch({ type: "SINGLE_PRODUCT_REJECTED", error: err.response.data.message || err.message })
  }
}
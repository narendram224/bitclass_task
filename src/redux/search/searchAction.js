import { HANDLE_CHANGE_SEARCH_FIELD, HANDLE_CHANGE_CATEGORY, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "./searchType"

 export const handleChangeSearch = (value)=>{
    return {
        type:HANDLE_CHANGE_SEARCH_FIELD,payload:value
    }
}
 export const handleChangeCategory = user=>{
        return {
            type:HANDLE_CHANGE_CATEGORY,
            payload:user
        }
}  
const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST,
    }
}
const fetchProductSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products,
    }
}

const fetchProductFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error,
    }
} 

// Api call code for fetch all Stock Fetch

export const fetchActualData= () => {
    return (dispatch) => {
        dispatch(fetchProductRequest())
        // notify.current.openToaster('Loading the stock data')
        fetch('./assets/DummyData.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('HTTP error ' + response.status)
                }
                return response.json()
            })
            .then((result) => {
                dispatch(fetchProductSuccess(result))
            })
            .catch(function (err) {
                dispatch(fetchProductFailure(err))
            })
    }
}
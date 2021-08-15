import { HANDLE_CHANGE_SEARCH_FIELD, HANDLE_CHANGE_CATEGORY, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_REQUEST, HANDLE_FOLLOW } from "./searchType";
import produce from "immer";
const initialState ={
    loading: false,
    allProduct: [],
    searchTerm: '',
    tempAllArray: [],
    error: '',
    active:"all"
}

const searchReducer = produce((draft=initialState,action)=>{
    switch (action.type) {
        case HANDLE_CHANGE_SEARCH_FIELD:
            draft.searchTerm = action.payload;
            return draft
        case HANDLE_CHANGE_CATEGORY:
            draft.active = action.payload;
            return draft
         case FETCH_PRODUCTS_REQUEST:
            draft.loading = true
            draft.error = ''
            return draft
        case FETCH_PRODUCTS_SUCCESS:
            draft.loading = false
            draft.allProduct = action.payload
            draft.error = ''
            return draft
        case FETCH_PRODUCTS_FAILURE:
            draft.loading = false
            draft.error = ''
            return draft
        case HANDLE_FOLLOW:
           const objIndex =  draft.allProduct.findIndex((course)=>course.id===action.payload);
           if (objIndex !== -1){
            draft.allProduct[objIndex].follow=!draft.allProduct[objIndex].follow;

           }
           return draft;
        default:
            return draft;
    }
}
)

export default searchReducer;
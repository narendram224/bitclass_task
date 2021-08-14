import { combineReducers } from "redux";

import searchReducer from "./search/searchReducer";

 const rootReducers = combineReducers({
 
    search:searchReducer
});
export default rootReducers;
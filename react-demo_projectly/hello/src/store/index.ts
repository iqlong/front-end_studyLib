import { configureStore } from "@reduxjs/toolkit"
import storeLibReducer from '../pages/storeLib/storeLibSlice'

const store = configureStore({
    reducer: {
        /**Reducer<unknow, anyAction> */
        storeLib: storeLibReducer
    }
})
export default store
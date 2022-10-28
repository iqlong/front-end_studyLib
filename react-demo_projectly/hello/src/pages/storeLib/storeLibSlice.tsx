import { createSlice } from "@reduxjs/toolkit";

export const storeLibSlice = createSlice({
    // redux devTool 中可以用于标识action的名字
    name: 'storeLib',
    initialState: {
        storeNum: 0
    },
    reducers: {
        increament: (state) => {
            state.storeNum += 1
        },
        decrement: (state) => {
            state.storeNum -= 1
        },
        increamentByAmount: (state, action) => {
            state.storeNum += action.payload
        }
    }
})

// 导出所有的actions 和 selectCount
// === 在组件中需要使用的方法导出 
export const {increament, decrement, increamentByAmount} = storeLibSlice.actions
export const selectStoreLib = (state) => {
    return state.storeLib.storeNum
}

// 导出给总的store中使用的
export default storeLibSlice.reducer
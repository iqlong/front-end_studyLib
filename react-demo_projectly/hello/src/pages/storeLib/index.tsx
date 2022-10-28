import {increament, decrement, increamentByAmount, selectStoreLib} from './storeLibSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'

export default function StoreLib() {
    const count = useSelector(selectStoreLib)
    const dispatch = useDispatch()

    return (<>
        {count}
        <br/>
        <Button onClick={() => {
            dispatch(increament())
        }}>增加</Button>
        <hr/>
        <Button onClick={() => {
            dispatch(decrement())
        }}>减少</Button>
        <hr/>
        <Button onClick={() => {
            dispatch(increamentByAmount(5))
        }}>指定增加 - 5</Button>
        
    </>)
}
import React, { FC, ReactElement, useEffect, useState, useContext } from "react";
import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
import ProductRow from "./ProductRow/ProductRow";
import {StudnetMes} from "../FilterableProductTable";

const ProductTable: FC<any> = (props) => {
    const { tableData } = props;
    const [ formateData, setFormateData ] = useState<object>([])
    // const [ getContent, setContent] = useState<ReactElement[]>([])
    const mes = useContext(StudnetMes)

    const [stu, setStu] = useState({name: '小红', age: 12})

    useEffect(() => {
        const collectMap = new Map()
        tableData.forEach((item) => {
            const key = item.category;
            const itemObj = {
                price: item.price,
                name: item.name
            }
            if(!collectMap.has(key)) {
                collectMap.set(key, [itemObj])
            }else {
                collectMap.get(key).push(itemObj);
            }
        })
        setFormateData(collectMap)
    }, [tableData])

    function showData(map_data) {
        const content: ReactElement[] = [];
        map_data.forEach((item, key) => {
            const categoryRow = <ProductCategoryRow text = {key} key={key} />
            content.push(categoryRow)
            item.forEach((item) => {
                const productRow = <ProductRow text = {item} key={item.name} />
                content.push(productRow)
            })
        })
        // 导致无限循环的报错
        // setContent(content)
        return content
    }

    return (
        <div>
            <h3>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price</h3>
            { showData(formateData) }
            <button onClick={() => {
                setStu({...stu, name: '小明'})

                // 没有效果的修改
                // stu.name = '小明'
                // setStu(stu)
            }}>修改学生的信息</button>
            <ul>
                <li>{stu.name}</li>
                <li>{stu.age}</li>
            </ul>
            <ul>
                <li>{mes.name}</li>
                <li>{mes.age}</li>
            </ul>
        </div>
    )
}

export default ProductTable

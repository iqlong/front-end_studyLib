import React, { FC, ReactElement, useEffect, useState } from "react";
import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
import ProductRow from "./ProductRow/ProductRow";

const ProductTable: FC<any> = (props) => {
    const { tableData } = props;
    const [ formateData, setFormateData ] = useState<object>([])
    const [ getContent, setContent] = useState<ReactElement[]>([])

    useEffect(() => {
        let collectMap = new Map()
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
        let content: ReactElement[] = [];
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
        </div>
    )
}

export default ProductTable

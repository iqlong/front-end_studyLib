import MyButton from "./components/Button";
import { Button } from "antd";
    
export default () => {
  return (
    <>
      <MyButton type="dashed" onClick={(e) => {console.log('使用原生的click事件,' + e.target.textContent)}}>你好，btn组件</MyButton>
      <Button danger type="primary">
        你好，btn组件
      </Button>
      <Button danger ghost>Danger Default</Button>
      <Button ghost  type="primary">Danger Default</Button>
    </>
  );
};

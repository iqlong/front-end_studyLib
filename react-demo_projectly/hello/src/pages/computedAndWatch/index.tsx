import React, { FC, useState, useMemo } from "react";
// import './index.scss'
import Styles from './index.module.scss'

const cwAchieve: FC = () => {
  const [baseData, setBaseData] = useState("西瓜妹妹");

  const resData = useMemo(() => {
    return baseData + "798";
  }, [baseData]);

  function watchBaseData(oldData) {
    return (newData) => {
      oldData !== newData && console.log(`oldBaseData: ${oldData}`);
      return newData;
    };
  }

  return (
    <>
      <div className={Styles.testCssModule}>{resData}</div>
      {/* <div className= "testCssModule">{resData}</div> */}
      <button
        onClick={() => {
          setBaseData((oldState) => {
            return watchBaseData(oldState)('西瓜太郎')
          } 
          );
        }}
      >
        realChange
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
            setBaseData((oldState) => {
              return watchBaseData(oldState)('西瓜妹妹')
            });
          }}
      >
        fakeChange
      </button>
      <hr />
    </>
  );
};

export default cwAchieve;

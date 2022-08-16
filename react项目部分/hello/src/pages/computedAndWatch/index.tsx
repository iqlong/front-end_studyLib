import React, { FC, useState, useCallback, useMemo } from "react";

const cwAchieve: FC = () => {
  const [baseData, setBaseData] = useState("西瓜妹妹");

  const resData = useMemo(() => {
    console.log("you already use the useMemo()!");
    console.log(`newBaseData: ${baseData}`);

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
      <div>{resData}</div>
      <button
        onClick={() => {
          setBaseData((oldState) => {
            return watchBaseData(oldState)('西瓜太郎')
          }
            //     (oldState) => {
            //     console.log(`oldBaseData: ${oldState}`);
            //     return '西瓜太郎'
            // }
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

import React, { useState } from "react";

const Basic_Todo_List = () => {
  const bioData = [
    {
      id: 1,
      name: "kashaf",
    },
    {
      id: 2,
      name: "ayesha",
    },
    {
      id: 3,
      name: "hira",
    },
  ];

  // console.log(bioData);

  const [cleardata, setClearData] = useState(bioData);

  const cleardt = () => {
    setClearData([]);
  };

  //remove btn

  const removeElem = (id) => {
    //  alert(id)

    const myNewArray = cleardata.filter((curElm) => {
      //jis pe click hoga uski id match kregi or jin ki match nai 
      //means wo jo click nai huye so wo new array mai store hojaega
      return curElm.id != id;
    });
    setClearData(myNewArray);
  };
  return (
    <>
      {
        //if multiple element use return ()
        cleardata.map((curElm) => {
          return (
            // key is unique ==in our bioData id is unique
            <h1 key={curElm.id}>
              Name:{curElm.name} id: {curElm.id}
              {/* <button  onClick={removeElem(curElm.id)}> remove</button>   if we do this ,so it will automatically call when page refresh that's why we make fat arrow function*/}
              <button onClick={() => removeElem(curElm.id)}> remove</button>
              {/* when button click so it will call  () and removeElem(curElm.id) this is inside the () */}
            </h1>
          );
        })
      }
      <button onClick={cleardt}>clear</button>
    </>
  );
};

export default Basic_Todo_List;

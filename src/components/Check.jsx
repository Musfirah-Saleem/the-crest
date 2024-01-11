import { useState } from "react";
import React, { useRef, useEffect } from "react";

const Check = ({ children, name, birthday }) => {
  const [Name, setName] = useState("sufi");
  const changeName = () => {
    if (Name == "sufi") {
      setName("musfi");
    } else {
      setName("sufi");
    }
  };
  const myItems = [
    { id: 1, text: "item1" },
    { id: 2, text: "item2" },
    { id: 3, text: "item3" },
  ];
  // Creating a ref
  const myInputRef = useRef(null);
  // const [search, setSearch] = useState("");
  // const [num, setNum] = useState("");
  // const [address, setAddress] = useState("");
  const [myFormData, setMyFormData] = useState({
    search: "",
    num: "",
    address: "",
  });
  const handleForms = (e) => {
    // Destructure event properties
    const { name, value } = e.target;

    // Update the state based on the input name
    setMyFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  console.log(myFormData);

  const handleSearch = (e) => {
    // console.log(e.target.value);
    // setSearch(e.target.value);
  };

  return (
    <>
      <ul>
        {myItems?.map((elem, index) => {
          return (
            <li style={{ color: "white" }} key={index}>
              {elem.text}
              {elem.id}
            </li>
          );
        })}
      </ul>
      <h1 style={{ color: "white" }}>{name}</h1>
      {children}
      <h1 style={{ color: "white" }}> {birthday}</h1>
      <p style={{ color: "white" }}>{Name}</p>

      <button onClick={changeName}>change name</button>
      <br />
      {/* <input type="text" ref={myInputRef} />
      <br />
      <button onClick={() => console.log(myInputRef.current.value)}>
        Log Input Value
      </button> */}
      {/* <input type="text" onChange={(e) => handleSearch(e)} /> */}
      <input type="text" name="search" onChange={(e) => handleForms(e)} />

      <h1 style={{ color: "white" }}>{myFormData.search}</h1>
      <input type="number" name="num" onChange={(e) => handleForms(e)} />
      <h1 style={{ color: "white" }}>{myFormData.num}</h1>
      <input type="text" name="address" onChange={(e) => handleForms(e)} />
      <h1 style={{ color: "white" }}>{myFormData.address}</h1>
    </>
  );
};

export default Check;

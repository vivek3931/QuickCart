import React, { createContext, useEffect, useState } from "react";
import products from "../components/data";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [productId, setProductId] = useState("");
  const [filteredObject, setFilteredObject] = useState([]);
  const [input, setInput] = useState('');
  const[searchdata , setSearchData] = useState([]);
  const [theme , setTheme] = useState('dark');

  useEffect(()=>{
    if(input !== ""){
      const filteredSearch =  products.filter(product => {
        return product.name.toLowerCase().includes(input.toLowerCase())
      })
      setSearchData(filteredSearch);
        }
        else{
          setSearchData([])
        }
  },[input])

  useEffect(() => {
    if (productId) {
      const filtered = products.filter((product) => product.id === productId);
      setFilteredObject((prev) => [...prev, ...filtered]);
    } else {
      setFilteredObject([]);
    }
  }, [productId]);



  return (
    <UserContext.Provider value={{ productId, setProductId, filteredObject  , setInput, setSearchData ,searchdata , theme , setTheme}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

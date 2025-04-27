import React, { createContext, useEffect, useState } from "react";
import products from "../components/data";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [productId, setProductId] = useState("");
  const [filteredObject, setFilteredObject] = useState([]);

  useEffect(() => {
    if (productId) {
      const filtered = products.filter((product) => product.id === productId);
      setFilteredObject((prev) => [...prev, ...filtered]);
    } else {
      setFilteredObject([]);
    }
  }, [productId]);

  return (
    <UserContext.Provider value={{ productId, setProductId, filteredObject }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

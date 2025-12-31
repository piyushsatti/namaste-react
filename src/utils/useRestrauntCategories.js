import { useState, useEffect } from "react";

import { SWIGGY_CATEGORIES_API_URL } from "./constants";

const useRestarauntCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const raw_data = await fetch(SWIGGY_CATEGORIES_API_URL);
    const data = (await raw_data.json())?.data?.cards;
    setCategories(data);
  };

  return categories;
};

export default useRestarauntCategories;

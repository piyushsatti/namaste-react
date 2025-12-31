import { useState, useEffect } from "react";

import { SWIGGY_MENU_API_URL } from "./constants";

const useRestrauntMenu = (id) => {
  const [restrauntMenu, setRestrauntMenu] = useState(null);

  useEffect(() => {
    // fetchMenu();
    console.log("useRestrauntMenu called");
  }, []);

  const fetchMenu = async () => {
    const raw_data = await fetch(SWIGGY_MENU_API_URL + id);
    const data = await raw_data.json();
    console.log(data);
    setRestrauntMenu(data);
  };

  return restrauntMenu;
};

export default useRestrauntMenu;

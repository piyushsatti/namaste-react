import { Link } from "react-router-dom";

import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

import useRestarauntCategories from "../utils/useRestrauntCategories";

const Body = () => {
  const categories = useRestarauntCategories();

  const restaurants =
    categories[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? null;

  console.log(restaurants);

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap">
      {restaurants.map((restaurant) => (
        <Link key={restaurant.info.id} to={"restaurants/" + restaurant.info.id}>
          <RestrauntCard info={restaurant.info} />
        </Link>
      ))}
    </div>
  );
};

export default Body;

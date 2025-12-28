import { useEffect, useState } from "react";

import RestrauntCard from "./Restraunt";
import resData from "../utils/constants";

const Body = () => {

  const [restraunts, setRestraunts] = useState(resData);

  useEffect(() => {
    const a = async () => {
      const raw_data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const data = await raw_data.json();
      console.log(data.data.cards.slice(3));
      setRestraunts(data.data.cards.slice(3));
    }
    a();
  }, []);

  return (
    <div className="body">
      <div className="body-top">
          <div className="filter">
            <button className="filter-btn" onClick={
              () => {
                setRestraunts(resData.filter(
                  (restraunt) => {
                    return restraunt.card.card.info.avgRating > 4.3;
                  }
                ))
              }
            }
            >
              Top Rated Restraunts
            </button>
          </div>
          <div className="Search">
            Search
          </div>
      </div>
      <div className="res-container">
        { 
          restraunts.map((restraunt) => {
              return <RestrauntCard key={restraunt.card.card.info.id} resData={restraunt}/>
            }
          )
        }
      </div>
    </div>
  );
}

export default Body;
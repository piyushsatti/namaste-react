import RestrauntCard from "./Restraunt";
import resData from "../utils/constants";

const Body = () => {
  return (
    <div className="body">
        <div className="Search">
          Search
        </div>
        <div className="res-container">
          { 
            resData.map((restraunt) => {
                return <RestrauntCard key={restraunt.card.card.info.id} resData={restraunt}/>
              }
            )
          }
        </div>
    </div>
  );
}

export default Body;
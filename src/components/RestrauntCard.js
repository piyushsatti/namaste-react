import { SWIGGY_IMG_CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = props.info;

  return (
    <div className="flex">
      <div className="img-container w-36 h-36 flex-shrink-0 overflow-hidden rounded-xl">
        <img
          className="w-auto h-auto object-cover object-center"
          src={SWIGGY_IMG_CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="card-data w-1/2 h-1/2 p-4 m-2">
        <h1>{name}</h1>
        <h5 className="text-gray-600">
          {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}
        </h5>
        <h4>Rating: {avgRating}</h4>
        <h4>Delivery Time: {sla?.slaString}</h4>
      </div>
    </div>
  );
};

export default RestrauntCard;

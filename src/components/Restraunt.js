const RestrauntCard = (props) => {

  const { resData } = props;

  const { img, name, cuisines, rating } = resData.card.card.info;

  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img 
        className="res-logo"
        alt="res-logo"
        src={img}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{rating}</h4>
    </div>
  );
}

export default RestrauntCard;
import { useParams } from "react-router-dom";

const RestrauntMenu = () => {
  const resId = useParams();

  return (
    <div>
      <h1>Restraunt Menu Page</h1>
    </div>
  );
};

export default RestrauntMenu;

import { useLocation } from "react-router-dom";

const Profile = () => {
  const { pathname } = useLocation();
  const username = pathname.slice(1);
  return <h1>{username}</h1>;
};

export default Profile;

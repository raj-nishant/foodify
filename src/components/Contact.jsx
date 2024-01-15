import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <div>This is contact us section</div>
    </>
  );
};

export default Contact;

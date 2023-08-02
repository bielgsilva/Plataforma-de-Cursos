import { useContext } from "react";
import UserContext from "../context/Context";

function UseUser() {
  return useContext(UserContext);
}

export default UseUser;

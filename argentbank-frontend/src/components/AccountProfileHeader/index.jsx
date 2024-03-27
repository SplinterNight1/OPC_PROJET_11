import "./style.css";
import { useState } from "react";
import EditUserInfo from "../EditUserInfo";
import { useSelector } from "react-redux";

export default function AccountProfileHeader() {
  const userProfile = useSelector((state) => state.userReducer.userProfile);
  const [showEditor, setShowEditor] = useState(false);

  const handleNameEditor = () => {
    setShowEditor(true);
  };

  const userFullName = userProfile
    ? `${userProfile.firstName} ${userProfile.lastName}`
    : "";

  return (
    <div className="header bg-dark">
      <h1>
        Welcome back
        <br />
        {userFullName}!
      </h1>
      <button className="edit-button" onClick={handleNameEditor}>
        Edit Name
      </button>

      {showEditor && <EditUserInfo onClose={() => setShowEditor(false)} />}
    </div>
  );
}

import "./style.css";
import Button from "../../ui/Button";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editUserName, getUserProfile } from "../../../actions/user.action";
import PropTypes from "prop-types"; // Import de PropTypes pour la vérification des types des props

import { z } from "zod";

const EditUserInfo = ({ onClose }) => {
  // Récupération du profil utilisateur depuis le state Redux
  const userProfile = useSelector((state) => state.userReducer.userProfile);

  const [newUserName, setNewUserName] = useState(userProfile.userName);

  const dispatch = useDispatch();

  const userNameSchema = z.string().regex(/^[a-zA-Z0-9]+$/, {
    message: "User name must contain only letters and numbers.",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleEditUserName = async () => {
    //We could also add a maximum character limit
    //Verify if user entered nothing or added only spaces
    if (!newUserName.trim()) {
      setErrorMessage("User name cannot be empty or contain only spaces.");
      // Delete message after 5 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return;
    }

    try {
      const dt = userNameSchema.parse(newUserName);
      console.log("🚀 ~ handleEditUserName ~ dt:", dt);

      // Dispatching the action to edit the username with the new name
      await dispatch(editUserName(newUserName));
      // Dispatching the action to fetch the user profile again (updated)
      await dispatch(getUserProfile());
      onClose();
    } catch (error) {
      console.error("Error editing user name:", error);
      setErrorMessage("User name must contain only letters and numbers.");

      // Delete message after 5 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  const handleCancel = () => {
    setNewUserName(userProfile.userName);
    onClose();
  };

  const handleChange = (e) => {
    setNewUserName(e.target.value);
    // Effacer le message d'erreur lorsque l'utilisateur commence à modifier le champ
    setErrorMessage("");
    console.log("e.target.value", e.target.value);
  };

  return (
    <div className="editUserInfo">
      <div className="label-userName">
        <label htmlFor="userName">User name:</label>
        <input
          type="text"
          id="userName"
          value={newUserName}
          // onChange={(e) => setNewUserName(e.target.value)}
          onChange={handleChange}
          placeholder="Enter a new user name"
          autoComplete="section-edit userName"
        />
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="label-firstName">
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          value={userProfile.firstName}
          readOnly
          autoComplete="section-edit firstName"
        />
      </div>

      <div className="label-lastName">
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          value={userProfile.lastName}
          readOnly
          autoComplete="section-edit lastName"
        />
      </div>

      <div className="EditUserBtn">
        <Button
          className="btn-edituserinfo"
          title="Save"
          onClick={handleEditUserName}
        />
        <Button
          className="btn-edituserinfo"
          title="Cancel"
          onClick={handleCancel}
        />
      </div>
    </div>
  );
};

export default EditUserInfo;

EditUserInfo.propTypes = {
  onClose: PropTypes.func.isRequired, // La prop onClose doit être une fonction et est requise / on aurai pu utiliser du TS pour ce projet
};

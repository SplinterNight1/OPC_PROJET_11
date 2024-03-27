import "./style.css";
import Button from "../../ui/Button";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editUserName, getUserProfile } from "../../../actions/user.action";
import PropTypes from "prop-types"; // Import de PropTypes pour la vérification des types des props

const EditUserInfo = ({ onClose }) => {
  // Récupération du profil utilisateur depuis le state Redux
  const userProfile = useSelector((state) => state.userReducer.userProfile);

  const [newUserName, setNewUserName] = useState(userProfile.userName);

  const dispatch = useDispatch();

  const handleEditUserName = async () => {
    try {
      // Dispatch de l'action d'édition du nom d'utilisateur avec le nouveau nom
      await dispatch(editUserName(newUserName));
      // Dispatch de l'action pour récupérer à nouveau le profil utilisateur (mise à jour)
      await dispatch(getUserProfile());
      onClose();
    } catch (error) {
      console.error("Error editing user name:", error);
    }
  };

  const handleCancel = () => {
    setNewUserName(userProfile.userName);
    onClose();
  };

  return (
    <div className="editUserInfo">
      <div className="label-userName">
        <label htmlFor="userName">User name:</label>
        <input
          type="text"
          id="userName"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="Enter a new user name"
          autoComplete="section-edit userName"
        />
      </div>

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

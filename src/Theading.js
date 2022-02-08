
import React from "react";

const Theading = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.Leaderboard}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
    </tr>
  );
};

export default Theading;
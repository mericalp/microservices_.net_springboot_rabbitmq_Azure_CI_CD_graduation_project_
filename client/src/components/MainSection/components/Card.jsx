import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { axiosDelete } from "../../../axiosServices";

const Card = ({ AnimalData, handleEdit, handleReRender}) => {
  const [dropDown, setDropdown] = useState(false);

  const handleDelete = async(id) => {
    try {
      const res = await axiosDelete(`/animals/${id}`);
      console.log(res);
      handleReRender();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card-component">
      <div className="card-inner">
        <div className="dropdownContainer">
          <BsThreeDotsVertical size={20} onClick={() => setDropdown(!dropDown)} />
          {dropDown && (
            <ul className="dropdown" onMouseLeave={() => setDropdown(false)}>
              <li onClick={() => handleEdit(AnimalData.id)}>Edit</li>
              <li onClick={() => handleDelete(AnimalData.id)}>Delete</li>
            </ul>
          )}
        </div>
        <div className="profileImage">
          <img src={AnimalData.coverImageUrl} alt={AnimalData.name} />
        </div>
        <div className="emp-detail">
          <h3>{AnimalData.name} {AnimalData.type}</h3>
          <p>{AnimalData.breed}</p>
        </div>
      </div>
      <div className="job-role">
        <p>{AnimalData.sex}</p>
      </div>
    </div>
  );
};

export default Card;

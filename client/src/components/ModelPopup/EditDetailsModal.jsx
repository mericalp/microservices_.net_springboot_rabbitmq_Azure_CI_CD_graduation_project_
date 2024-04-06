

import React, { useState } from 'react';
import { useFormik } from 'formik';
import './ModelPopup.css';
import { axiosPut } from '../../axiosServices';

const EditDetailsModal = ({ animalById, setEditModal }) => {
  const { name, type, sex, color, breed, coverImageUrl, age } = animalById;
  const [loading, setLoading] = useState(false);


  const formik = useFormik({
    initialValues: {
      name,
      type,
      sex,
      color,
      breed,
      coverImageUrl,
      age,
    },
    onSubmit: values => {
      handleEdit(values);
    }
  });
  console.log(animalById.name);
  console.log("animalById.name");
  console.log(animalById.name);
  const handleEdit = async (values) => {
    setLoading(true);
    try {
      const res = await axiosPut(`/animals/${animalById.id}`, values);
      console.log(res.data);
      setLoading(false);
      setEditModal(false);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };


  console.log(formik.initialValues);

  return (
    <div className="modalContainer">
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="modalBox">
          <div className="modalHeader">
            <h2>Edit Animal Details</h2>
            <button className="close-btn" onClick={() => EditDetailsModal(false)}>X</button>
          </div>
          <div className="modalInner">
            <div className="input-container">
              <div className="input-box">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder={animalById.name}
                  required
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
              <div className="input-box">
                <label htmlFor="type">Type</label>
                <input
                  type="text"
                  name="type"
                  required
                  placeholder={animalById.type}
                  onChange={formik.handleChange}
                  value={formik.values.type}
                />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="coverImageUrl">Image</label>
              <input
                type="text"
                name="coverImageUrl"
                required
                placeholder={animalById.coverImageUrl}
                onChange={formik.handleChange}
                value={formik.values.coverImageUrl}
              />
            </div>
            <div className="input-container">
              <div className="input-box">
                <label htmlFor="sex">Sex</label>
                <input
                  type="text"
                  name="sex"
                  required
                  placeholder={animalById.sex}
                  onChange={formik.handleChange}
                  value={formik.values.sex}
                />
              </div>
              <div className="input-box">
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                  name="age"
                  required
                  placeholder={animalById.age}
                  onChange={formik.handleChange}
                  value={formik.values.age}
                />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="color">Color</label>
              <input
                type="text"
                name="color"
                required
                placeholder={animalById.color}
                onChange={formik.handleChange}
                value={formik.values.color}
              />
            </div>
          </div>
          <div className="modalFooter">
            <button className="add-btn" type="submit">{loading ? 'Saving...' : 'Save Changes'}</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditDetailsModal;

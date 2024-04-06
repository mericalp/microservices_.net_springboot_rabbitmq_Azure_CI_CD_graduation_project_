import React, { useState } from "react";
import "./ModelPopup.css";
import { useFormik } from 'formik'
import { axiosPost } from "../../axiosServices";

const ModelPopup = ({ setShowModal }) => {
  const [loading, setLoading] = useState(false)

  const createAnimal = async (values) => {
    setLoading(true)
    try {
      const formData = new FormData();
      Object.keys(values).forEach(key => {
        formData.append(key, values[key]);
      });
      const res = await axiosPost('/animals/', formData);
      console.log(res);
      setLoading(false);
      setShowModal(false);
    } catch (err) {
      console.log(err);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      sex: '',
      breed: '',
      age: '',
      color: '',
      coverImageUrl: ''
    },
    onSubmit: values => {
      createAnimal(values)
    },
  });

  return (
    <div className="modalContainer">
      <form onSubmit={formik.handleSubmit}>
        <div className="modalBox">
          <div className="modalHeader">
            <h2>New Animal Details</h2>
            <button className="close-btn" onClick={() => setShowModal(false)}>X</button>
          </div>
          <div className="modalInner">
            <div className="input-container">
              <div className="input-box">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
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
                  id="type"
                  required
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
                id="coverImageUrl"
                required
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
                  id="sex"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.sex}
                />
              </div>
              <div className="input-box">
                <label htmlFor="color">Color</label>
                <input
                  type="text"
                  name="color"
                  id="color"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.color}
                />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                name="age"
                id="age"
                required
                onChange={formik.handleChange}
                value={formik.values.age}
              />
            </div>
            <div className="modalFooter">
              <button className="add-btn" type="submit">{loading ? 'Saving...' : 'Save Details'}</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModelPopup;
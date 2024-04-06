import React, { useEffect, useState } from "react";
import "./MainSection.css";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Card from "./components/Card";
import ModelPopup from "../ModelPopup/ModelPopup";
import { axiosForSearchGet, axiosGet } from "../../axiosServices";
import EditDetailsModal from "../ModelPopup/EditDetailsModal";

const MainSection = ({ setAnimalsId }) => {
  const [showModal, setShowModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [animal, setAnimals] = useState([])
  const [animalById, setAnimalById] = useState([])
  const [reRender, setReRender] = useState(false)

  const getAllAnimals = async () => {
    try {
      const res = await axiosGet('/animals/')
      setAnimals(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  const getAnimalById = async (id) => {
    try {
      const res = await axiosGet(`/animals/${id}`)
      setAnimalById(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  const handleSearch = async (e) => {
    console.log("Arama fonksiyonu tetiklendi:", e.target.value);
    try {
      const searchTerm = e.target.value;
      if (searchTerm.trim() !== "") {
        const res = await axiosForSearchGet(`/search?searchTerm=${e.target.value}`);
        setAnimals(res.data);
      } else {
        // Eğer arama terimi boşsa, tüm hayvanları tekrar getir
        getAllAnimals();
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  
  const handleEdit = async (id) => {
    getAnimalById(id)
    setEditModal(true)
  }
  const handleReRender = () => {
    setReRender(true)
  }

  useEffect(() => {
    getAllAnimals()
  }, [showModal, editModal, reRender])
  return (
    <>
      {
        showModal && <ModelPopup setShowModal={setShowModal} />
      }
      {
        editModal && <EditDetailsModal setEditModal={setEditModal} animalById={animalById} />
      }

      <main className="mainContainer">
        <div className="mainWrapper">
          <h1>
            {/*People <span className="animal-count">{animal.co}</span>*/}
          </h1>
          <div className="animalHeader">
            <div className="searchBox">
              <input
                type="text"
                placeholder="Search by name, email, designation etc"
                onChange={handleSearch}
              />
              <BiSearch size={20} />
            </div>
            <button className="add-btn"
              onClick={() => setShowModal(true)}
            ><IoMdAdd size="20" color="#fffff" />Add Animal</button>
          </div>
          <div className="Animals">
            {
              animal && animal.map((animal) => {
                // burasii ------------------
                return <div key={animal.id} onClick={() => setAnimalsId(animal.id)}>
                <Card
                  AnimalData={animal}
                  handleEdit={handleEdit}
                  handleReRender={handleReRender}
                />
                </div>
              })
            }
          </div>
        </div>
      </main>
    </>
  );
};

export default MainSection;

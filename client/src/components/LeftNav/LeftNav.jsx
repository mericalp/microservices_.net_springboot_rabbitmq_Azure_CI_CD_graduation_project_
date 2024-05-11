import React, { useEffect, useState, useCallback } from 'react'
import './LeftNav.css'
import { axiosGet } from '../../axiosServices'

const LeftNav = ({ animalId }) => {
  const [animalById, setAnimalById] = useState({})

  // useCallback ile fonksiyonu memoize ediyoruz
  const getAnimalsById = useCallback(async () => {
    try {
      const res = await axiosGet(`/animals/${animalId}`)
      setAnimalById(res.data)
    } catch (err) {
      console.log(err)
    }
  }, [animalId]); // animalId değiştiğinde fonksiyon yeniden oluşturulacak

  // useEffect içinde getAnimalsById fonksiyonunu çağırıyoruz
  useEffect(() => {
    getAnimalsById();
  }, [getAnimalsById]); // getAnimalsById fonksiyonunu bağımlılık listesine ekliyoruz

  return (
    <nav className='leftNav'>
      <div className="animalsDetail">
        <h2>Full Detail</h2>
        <img src={animalById.coverImageUrl} alt={animalById.name || "Animal"} />
        <h1>{animalById.name} {animalById.type}</h1>
        <p>{animalById.description}</p>
        <p>{animalById.weight}</p>
        <p>{animalById.color}</p>
      </div>
    </nav>
  )
}

export default LeftNav

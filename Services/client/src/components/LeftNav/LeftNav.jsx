import React, { useEffect, useState } from 'react'
import './LeftNav.css'
import { axiosGet } from '../../axiosServices'

const LeftNav = ({ animalId }) => {
  const [animalById, setanimalById] = useState([])


  const getAnimalsById = async () => {
    try {
      const res = await axiosGet(`/animals/${animalId}`)
      setanimalById(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getAnimalsById()
  }, [animalId])

  return (
    <nav className='leftNav'>
      <div className="animalsDetail">
        <h2>Full Detail</h2>
        <img src={animalById.coverImageUrl}/>
        <h1>{animalById.name} {animalById.type}</h1>
        <p>{animalById.description}</p>
        <p>{animalById.weight}</p>
        <p>{animalById.color}</p>
        {/*<p className='date'>{animalById.description}</p>*/}
      </div>
    </nav>
  )
}

export default LeftNav

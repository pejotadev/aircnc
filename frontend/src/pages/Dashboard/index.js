import React, { useEffect, useState } from "react";
import api from '../../services/api';

export default function Dashboard() {
  const [spots, setSpots] = useState([])  

  useEffect(() => {  
    async function loadSpots() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard',{
        headers: {
          user_id
        }
      })

      console.log(response)
      setSpots(response.data)
    }

    loadSpots()
  }, [])
  
  return (
    <React.Fragment>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header />
            <strong>{spot.adress}</strong>
            <span>{spot.price}</span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );    
}
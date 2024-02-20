import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Profile.css"

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://express-t4.onrender.com/api/users/${id}`
          );
          setProfile(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      };
      fetchData();

  },[id])

  return (
    <div>
      {profile ? (
        <>
          <h2>Profile Details</h2>
          <img src={profile.picture} alt="N/A"/>
          <p><b> Name: </b>{profile.name}</p>
          <p><b> About: </b>{profile.about}</p>
          <p><b> Age: </b>{profile.age}</p>
          <p><b> Eye color: </b>{profile.eyeColor}</p>
          <p><b> Gender: </b>{profile.gender}</p>
          <p><b> Company: </b>{profile.company}</p>
          <p><b> Email: </b>{profile.email}</p>
          <p><b> Phone: </b>{profile.phone}</p>
          <p><b> Address: </b>{profile.address}</p>
        </>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default Profile;

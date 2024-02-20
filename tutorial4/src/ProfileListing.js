import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import "./ProfileListing.css";

const profilesUrl="https://express-t4.onrender.com/api/users";

function ProfileListing() {

const [listing,setListing]=useState([])
const [search, setSearch] = useState("");

useEffect(()=>{
     axios.get(profilesUrl)
     .then((response)=>
            {   
                setListing(response.data);
                console.log(response.data)
            } 
            )   
      .catch((err)=>{console.log(err)});}, []
        )

const filteredList = listing.filter(
            (data) =>
              data.name.toLowerCase().includes(search.toLowerCase()) ||
              data.name.toLowerCase().includes(search.toLowerCase())
          );        

return(

    <div>
      <div>
      
        <input
          type="text"
          id="search"
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
     </div>

    <div className="profile-grid">  
         {filteredList.map((data)=>(
            <div key={data._id} className="profile-card">
                <Link to={`/profile/${data._id}`}>
                <img src={data.picture} alt="N/A"/>
                <p>{data.name}</p>
                </Link>
            </div>
         ))}
    </div>
    </div>
);  

}

export default ProfileListing;
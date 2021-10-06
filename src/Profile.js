import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css'
import ProfileData from './components/ProfileData'

const Profile = () => {
const { user, isAuthenticated, isLoading } = useAuth0();

 if (isLoading) {
return <div>Loading ...</div>;
}

 return (
isAuthenticated && (
    <>
<div id='proDiv'>
<img id='proImg' src={user.picture} alt={user.name} />
<h2>{user.name}</h2>
<p>{user.email}</p>
</div>
<ProfileData email={user.email}/>
</>

)
);
};

export default Profile;
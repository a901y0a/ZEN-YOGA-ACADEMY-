import { useState } from 'react';
import '../../assets/profile.css';
import Img from "../../assets/profile.jpg";
import Navi from '../../components/nav';

function Profile() {
  
  const [userData, setUserData] = useState({
    firstName: 'Agalya',
    email: 'agal13@example.com',
    gender:'female',
    age:21
  });

  const [profileImage, setProfileImage] = useState(Img);
  
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedData, setEditedData] = useState({ ...userData });
  const [editedImage, setEditedImage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditedImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ ...editedData });
    if (editedImage) {
      setProfileImage(editedImage);
    }
    setIsEditMode(false);
  };

  return (
    <>
      <Navi />
      <div className='pro'>
      <div className='whole'>
        <div>
          <img className="profilepic" src={profileImage} alt="profile" />
         
          {isEditMode && (
            <input style={{marginLeft:"20%",width:"50%",height:"20%"}}
              className='changedp'
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          )}
        </div>
        
        <div className="pcontainer">
          {isEditMode ? (
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <div className="formaa">
                <label>
                  <b>Name</b><br />
                  <input style={{marginLeft:"150%",width:"100%",height:"100%"}}
                    type="text"
                    name="firstName"
                    value={editedData.firstName}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="formaa">
                <label>
                  <b>Email</b><br />
                  <input style={{marginLeft:"150%",width:"100%",height:"100%"}}
                    type="email"
                    name="email"
                    value={editedData.email}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className='formaa'>
                <label>
                  <b>Gender</b><br />
                  <input style={{marginLeft:"150%",width:"100%",height:"100%"}}
                    type="text"
                    name="gender"
                    value={editedData.gender}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="formaa">
                <label>
                  <b>Age</b><br />
                  <input  style={{marginLeft:"150%",width:"100%",height:"100%"}}
                    type="number"
                    name="age"
                    value={editedData.age}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="btn-group">
                <button className="btn" type="submit">Save</button>
                <button className="btn" onClick={() => setIsEditMode(false)}>Cancel</button>
              </div>
            </form>
          ) : (
            <div>
              <p>
                <strong>Name:</strong> {userData.firstName}
              </p>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
              <p>
                <strong>Gender:</strong> {userData.gender}
              </p>
              <p>
                <strong>Age:</strong> {userData.age}
              </p>
              <button className="btn" onClick={() => setIsEditMode(true)}>Edit</button>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
}

export default Profile;

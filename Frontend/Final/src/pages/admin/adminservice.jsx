import axios from 'axios';
import { useEffect, useState } from "react";
import '../../assets/adminservice.css';
import '../../assets/service.css';
import Navi from '../../components/nav';

function AdminService() {
    const [cards, setCards] = useState([]);
    const [editedText, setEditedText] = useState("");
    const [editedImage, setEditedImage] = useState("");
    const [editedName, setEditedName] = useState("");
    const [editedCharge, setEditedCharge] = useState("");
    const [editCardId, setEditCardId] = useState(null);
    const token=localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] =   ` Bearer ${token}`;
    console.log("Token:", token);
    console.log("Headers:", axios.defaults.headers.common);
    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = () => {
        axios.get('http://localhost:8080/api/services',{
          headers:{
            Authorization:`Bearer ${sessionStorage.getItem('token')}`
          }
        })
            .then(response => {
                setCards(response.data.map(service => ({
                    id: service.id,
                    image: service.image,
                    text: service.description,
                    name:service.name,
                    charge:service.charge,
                })));
            })
            .catch(error => console.error("There was an error fetching the cards!", error));
    };

    const handleAddCard = () => {
        const newCard = {
            name: "New Course",
            description: "Description",
            charge: 0, 
            image: "https://i.redd.it/x4kd5gb91t851.jpg",
        };

        axios.post('http://localhost:8080/api/services', newCard,{
          headers:{
            Authorization:`Bearer ${sessionStorage.getItem('token')}`
          }
        })
            .then(()=>fetchCards() // Reload cards to include the new one
            )
            .catch(error => console.error("There was an error!", error));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/services/${id}`,{
          headers:{
            Authorization:`Bearer ${sessionStorage.getItem('token')}`
          }
        })
            .then(() => {
                fetchCards(); // Reload cards after deletion
            })
            .catch(error => console.error("There was an error!", error));
    };

    const handleSave = (id) => {
        
        const serviceUpdate = {
            name: editedName, // Assuming you also handle name updates
            description: editedText,
            charge: editedCharge, // Assuming charge is managed elsewhere
            image: editedImage,
        };

        axios.put(`http://localhost:8080/api/services/${id}`, serviceUpdate,{
          headers:{
            Authorization:`Bearer ${sessionStorage.getItem('token')}`
          }
        })
            .then(() => {
                fetchCards(); // Reload cards to show the updated one
            })
            .catch(error => console.error("There was an error!", error));

        // Resetting edit state
        setEditCardId(null);
        setEditedText("");
        setEditedImage("");
        setEditedName("");
        setEditedCharge("");
    };

    const handleEdit = (id) => {
        const card = cards.find(card => card.id === id);
        setEditCardId(id);
        setEditedText(card.text);
        setEditedImage(card.image);
        setEditedName(card.name);
        setEditedCharge(card.charge);
    };

    return (
        <>
            <Navi/>
            <div style={{ marginLeft: "10%" }}>
              <br></br>
                <div>
                    <button className="addbutton" onClick={handleAddCard} style={{ marginBottom: "20px" }}>Add Course</button>
                </div>
                {cards.map((card) => (
                    <div className="scard" key={card.id} style={{ width: "20%" }}>
                        <img src={card.image || "https://i.redd.it/x4kd5gb91t851.jpg"} alt={"Image " + card.id} />
                        {editCardId === card.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editedName}
                                    onChange={(e) => setEditedName(e.target.value)}
                                    style={{ marginTop: "20px", marginBottom: "20px" }}
                                />
                                <input
                                    type="number"
                                    value={editedCharge}
                                    onChange={(e) => setEditedCharge(e.target.value)}
                                    style={{ marginTop: "20px", marginBottom: "20px" }}
                                />
                                <input
                                    type="text"
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                    style={{ marginTop: "20px", marginBottom: "20px" }}
                                />
                                <input
                                    type="text"
                                    value={editedImage}
                                    onChange={(e) => setEditedImage(e.target.value)}
                                    placeholder="Image URL"
                                    style={{ marginBottom: "20px" }}
                                />
                                <button className="sbutton" onClick={() => handleSave(card.id)}>Save</button>
                            </>
                        ) : (
                            <>
                            <p>{card.text}</p>
                            <p>{card.name}</p>
                            <p>{card.charge}</p>
                            </>
                        )}
                        <div className="card-buttons">
                            <button className="sbutton" onClick={() => handleEdit(card.id)}>Edit</button>
                            <button className="sbutton" onClick={() => handleDelete(card.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AdminService;
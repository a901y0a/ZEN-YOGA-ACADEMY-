import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import '../assets/signup.css';
import { loginSuccess } from './Redux/authSlice';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
      });
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const dispatch = useDispatch();
      const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post('http://localhost:8080/products/authenticate', credentials)
          .then((res) => {
            console.log('Login successful');
            const details = res.data;
            console.log('Token and Role: ', details);
            const token = details;
            const tokenExpiration = new Date();
            tokenExpiration.setHours(tokenExpiration.getHours() + 1);
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('tokenExpiration', tokenExpiration.toString());
            // sessionStorage.setItem('role', details.role);
          })
          .then(() => {
            const token = sessionStorage.getItem('token');
            const tokenExpiration = sessionStorage.getItem('tokenExpiration');
            // const role = sessionStorage.getItem('role');
    
            if (token && tokenExpiration && new Date(tokenExpiration) > new Date()) {
              const decodedToken = jwtDecode(token);
            // const role = decodedToken.role;
            // console.log(role);
            const {exp,iat,roles,sub} = decodedToken;
            dispatch(loginSuccess({exp,iat,roles,sub})); 
            console.log("Stored Redux:",{roles,exp,iat,sub});
              
              if (roles === 'USER') {
                navigate('/home');
              } else if (roles === 'ADMIN') {
                navigate('/status');
              }
            } else {
              console.log('Invalid credentials');
            }
          })
          .catch((error) => {
            console.error('Error logging in:', error);
          });
      };
    // const [formData, setFormData] = useState({
    //     username: "",
    //     password: ""
    // });
    // const [error, setError] = useState('');
    // const navigate = useNavigate();

    // const handleChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:8080/jobs/authenticate', formData);
    //         if (response.data.success) {
    //             navigate("/Home");
    //         } else {
    //             setError('Invalid credentials. Please try again.');
    //         }
    //     } catch (error) {
    //         console.error('Login Error:', error);
    //         setError('Error logging in. Please try again later.');
    //     }
    // };

    return (
        <div className="flex justify-center items-center h-screen">
            <LoginForm
                formData={credentials}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                
            />
        </div>
    );
};

const LoginForm = ({ handleSubmit, handleChange, formData }) => (
    <center>
        <div style={{ paddingTop: "70px" }} className=" justify-center items-center h-screen">
            <div style={{ width: "30%" }}></div>
            <h1 className='text-3xxl text-center '>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className="block font-bold">
                        Username:
                    </label>
                    <input
                        style={{ height: "10%", width: "80%" }}
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="shadow appearance-none rounded w-full leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block font-bold">
                        Password:
                    </label>
                    <input
                        style={{ height: "10%", width: "80%" }}
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="shadow appearance-none rounded w-full leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
               
                <div className="flex items-center justify-center">
                    <button className='custom-btn mt-4 md:mt-0' type="submit">
                     Sign In
                    </button>
                </div>
                <br />
                <center><p>Have you already got an account ?<u> <a href='/signup'>Sign up</a></u></p></center>
            </form>
        </div>
    </center>
);

export default Login;

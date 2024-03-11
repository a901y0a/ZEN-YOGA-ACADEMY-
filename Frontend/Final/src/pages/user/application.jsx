import axios from 'axios'; // Import axios
import React, { useState } from 'react';
import '../../assets/application.css';
import Navi from '../../components/nav';

function Application() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        gender: '',
        academy: '',
        schedulePreference: '',
        age: '',
        city: '',
        address: '',
        dateOfBirth: ''
    });

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:8080/application/add", formData);
            console.log("Response:", response.data);
            console.log('Application submitted successfully');
            setShowSuccessMessage(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                gender: '',
                academy: '',
                schedulePreference: '',
                age: '',
                city: '',
                address: '',
                dateOfBirth: ''
            });

            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        } catch (error) {
            console.error("Error submitting application:", error);
            setErrorMessage('Error submitting application');
        }
    };

    return (
        <>
            <Navi/>
            <div className="applicationaa">
                <div className="form-container">
                    <center>
                        <h2 style={{ color: "black" }}>Yoga Online Application Form</h2>
                        <form style={{ height: "100vh" }} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="Age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="dateOfBirth"
                                    placeholder="DD-MM-YYYY(DOB)"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select
                                    name="academy"
                                    value={formData.academy}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Academy</option>
                                    <option value="YogaWorks - Chennai">YogaWorks - Chennai</option>
                                    <option value="The Yoga Collections-Ramanathapuram">The Yoga Collections-Ramanathapuram</option>
                                    <option value="Hot 8 Yoga - Los Angeles">Hot 8 Yoga - Los Angeles</option>
                                    <option value="Bikram Yoga - London">Bikram Yoga - London</option>
                                    <option value="CorePower Yoga - US">CorePower Yoga - US</option>
                                    <option value="Yoga Tree - Coimbatore">Yoga Tree - Coimbatore</option>
                                    <option value="Moda Yoga - Tirupur">Moda Yoga - Tirupur</option>
                                    <option value="Bandri Yoga - Kalangal">Moda Yoga - Tirupur</option>
                                    <option value="Yin Yoga Center - Bangalore">Yoga Tree - Coimbatore</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select
                                    name="schedulePreference"
                                    value={formData.schedulePreference}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Schedule Preference</option>
                                    <option value="1-3 months">1-3 months</option>
                                    <option value="3-6 months">3-6 months</option>
                                    <option value="6 months - 1 year">6 months - 1 year</option>
                                    <option value="2 years">2 years</option>
                                    <option value="More than 2 years">More than 2 years</option>
                                </select>
                            </div >
                            <div className="aaa">
                                <button style={{ color: "black", width: "20%" }} type="submit">Book your Application</button>
                            </div>
                        </form>
                    </center>
                </div>
            </div>
            {showSuccessMessage && (
                <div className="notification-popup">
                    <p>Application successfully submitted</p>
                </div>
            )}
            {errorMessage && (
                <div className="notification-popup error">
                    <p>{errorMessage}</p>
                </div>
            )}
        </>
    );
}

export default Application;

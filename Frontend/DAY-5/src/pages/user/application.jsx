import React, { useState } from 'react';
import '../../assets/application.css'; // Import the CSS file with professional styling

function Application() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        gender: '',
        academy: '',
        schedulePreference: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation here (e.g., check for empty fields, validate email format, etc.)
        console.log(formData); // For testing, you can log the form data to the console
    };

    return (
        <div className="container">
            <div className="background-image">
                <div className="form-container">
                    <h2>Yoga Online Application Form</h2>
                    <form onSubmit={handleSubmit}>
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
                                {/* Add options for different academies */}
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
                                {/* Add options for schedule preferences */}
                            </select>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Application;

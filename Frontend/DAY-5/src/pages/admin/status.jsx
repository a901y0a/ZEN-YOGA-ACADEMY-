import React, { useState } from 'react';
import '../../assets/status.css';
import Navi from '../../components/nav';
const Status = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', course: 'Computer Science', academy: 'XYZ Academy', admissionNo: '2024ABC123', age: 20 },
    { id: 2, name: 'Jane Smith', course: 'Engineering', academy: 'ABC Academy', admissionNo: '2024DEF456', age: 22 },
  ]);

  const [newStudent, setNewStudent] = useState({ name: '', course: '', academy: '', admissionNo: '', age: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.course && newStudent.academy && newStudent.admissionNo && newStudent.age) {
      const updatedStudents = [...students, { ...newStudent, id: Date.now() }];
      setStudents(updatedStudents);
      setNewStudent({ name: '', course: '', academy: '', admissionNo: '', age: '' });
    }
  };

  const handleDeleteStudent = (studentId) => {
    const updatedStudents = students.filter((student) => student.id !== studentId);
    setStudents(updatedStudents);
  };

  const handleUpdateStudent = (studentId, updatedStudent) => {
    const updatedStudents = students.map((student) =>
      student.id === studentId ? { ...student, ...updatedStudent } : student
    );
    setStudents(updatedStudents);
  };

  return (
    <>
    <Navi/>
    <div className='Status'>
    <div className="containerbb py-5" >
      <h1 className="text-center mb-4">Student Information</h1>
<br></br>
      <table style ={{marginTop:"5%"}}className="table table-striped">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Academy</th>
            <th>Admission No</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.academy}</td>
              <td>{student.admissionNo}</td>
              <td>{student.age}</td>
              <td>
                <button className="btn btn-danger mr-2" onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                <button className="btn btn-primary" onClick={() => handleUpdateStudent(student.id, { name: `Updated ${student.name}`, age: student.age + 1 })}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
<p className="mt5">
      <h2 className="mt-4">Add Student</h2>
      </p>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-groupa">
            <label htmlFor="nameInput">Student Name:</label>
            <input style={{width:"50%"}}
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              value={newStudent.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-groupa">
            <label htmlFor="courseInput">Course:</label>
            <input style={{width:"50%"}}
              type="text"
              className="form-control"
              id="courseInput"
              name="course"
              value={newStudent.course}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-groupa">
            <label htmlFor="academyInput">Academy:</label>
            <input style={{width:"50%"}}
              type="text"
              className="form-control"
              id="academyInput"
              name="academy"
              value={newStudent.academy}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-groupa">
            <label htmlFor="admissionNoInput">Admission No:</label>
            <input style={{width:"50%"}}
              type="text"
              className="form-control"
              id="admissionNoInput"
              name="admissionNo"
              value={newStudent.admissionNo}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-groupa">
            <label htmlFor="ageInput">Age:</label>
            <input style={{width:"50%"}}
              type="number"
              className="form-control"
              id="ageInput"
              name="age"
              value={newStudent.age}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <button style={{width:"150px"}}className="btn btn-success" onClick={handleAddStudent}>Add Student</button>
    </div>
    </div>
    </>
  );
};

export default Status;

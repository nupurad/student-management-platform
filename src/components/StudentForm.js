import { useState } from 'react';

export default function AddStudentForm({ setStudents }) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    course: '',
    grade: '',
    enrollmentDate: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.id || !formData.name || !formData.course || !formData.grade || !formData.enrollmentDate) {
      setMessage('❌ Please fill out all fields.');
      return;
    }

    // Add new student
    setStudents(prev => [...prev, formData]);
    setMessage('✅ Student added successfully!');

    // Clear form
    setFormData({
      id: '',
      name: '',
      course: '',
      grade: '',
      enrollmentDate: '',
    });

    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div style={{ marginBottom: '20px' , fontFamily:'Roboto',}}>
      <h3>Add New Student</h3>

      {message && <p>{message}</p>}

      {/* --- HERE --- */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '20px',
          fontFamily:'Roboto'
        }}
      >
        <input style={{padding: '8px',borderRadius: '5px',border: '1px solid #ccc',flex: '1 1 200px',minWidth: '150px'}}
          type="text"
          name="id"
          placeholder="Student ID"
          value={formData.id}
          onChange={handleChange}
        />
        <input style={{padding: '8px',borderRadius: '5px',border: '1px solid #ccc',flex: '1 1 200px',minWidth: '150px'}}
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input style={{padding: '8px',borderRadius: '5px',border: '1px solid #ccc',flex: '1 1 200px',minWidth: '150px'}}
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
        />
        <input style={{padding: '8px',borderRadius: '5px',border: '1px solid #ccc',flex: '1 1 200px',minWidth: '150px'}}
          type="text"
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          onChange={handleChange}
        />
        <input style={{padding: '8px',borderRadius: '5px',border: '1px solid #ccc',flex: '1 1 200px',minWidth: '150px'}}
          type="date"
          name="enrollmentDate"
          placeholder="Enrollment Date"
          value={formData.enrollmentDate}
          onChange={handleChange}
        />
        <button style={{padding: '10px',backgroundColor: '#4A90E2',color: 'white',border: 'none',borderRadius: '5px',cursor: 'pointer',flex: '1 1 200px',minWidth: '150px', fontFamily:'Roboto'}}
        type="submit">
        Add Student
        </button>
      </form>
      {/* --- END FORM --- */}
    </div>
  );
}

import { useState } from 'react';

export default function StudentForm({ setStudents }) {
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

    // Clear success message after few seconds (optional)
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Add New Student</h3>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="Student ID"
          value={formData.id}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="date"
          name="enrollmentDate"
          value={formData.enrollmentDate}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

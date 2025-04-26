import { useState, useEffect } from 'react';
import StudentTable from '../components/StudentTable';
import AddStudentForm from '../components/StudentForm';


  export default function Students() {
  const [students, setStudents] = useState(() => {
  const saved = localStorage.getItem('students');
  return saved ? JSON.parse(saved) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Management</h2>
      <AddStudentForm setStudents={setStudents} />
      <StudentTable students={students} setStudents={setStudents} />
    </div>
  );
}
  
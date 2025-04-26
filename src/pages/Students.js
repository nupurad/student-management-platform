import { useState, useEffect } from 'react';
import StudentTable from '../components/StudentTable';
import StudentForm from '../components/StudentForm';


  export default function Students() {
  
    const [students, setStudents] = useState(() => {
      const saved = localStorage.getItem('students');
      if (saved) return JSON.parse(saved);
      return [
        { id: 'S001', name: 'Alice', course: 'Math', grade: 'A', enrollmentDate: '2024-01-15' },
        { id: 'S002', name: 'Bob', course: 'Physics', grade: 'B', enrollmentDate: '2024-02-10' },
        { id: 'S003', name: 'Charlie', course: 'Chemistry', grade: 'A-', enrollmentDate: '2024-03-05' }
      ];
    });
  
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);
  
  return (
    <div style={{ padding: '25px' , fontFamily:'Roboto'}}>
      <h1 style={{textAlign: "center"}}>Student Management</h1>
      <StudentForm setStudents={setStudents} />
      <StudentTable students={students} setStudents={setStudents} />
    </div>
  );
}
  
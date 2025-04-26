import { useState } from 'react';

export default function StudentTable({ students }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedStudents = [...students].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const filteredStudents = sortedStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ overflowX: 'auto', marginTop: '20px', fontFamily:'Roboto' }}>
  <h3>Student List</h3>

  {/* Search Bar */}
  <input
    type="text"
    placeholder="Search by name or ID"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
  />

  {/* Table */}
  <table style={{
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
    fontFamily:'Roboto'
  }}>
  <thead>
    <tr>
      <th style={{backgroundColor: '#f2f2f2',cursor: 'pointer',padding: '12px',borderBottom: '1px solid #ddd',fontFamily:'Roboto',}} onClick={() => handleSort('id')}>Student ID</th>
      <th style={{backgroundColor: '#f2f2f2',cursor: 'pointer',padding: '12px',borderBottom: '1px solid #ddd',fontFamily:'Roboto',}} onClick={() => handleSort('name')}>Name</th>
      <th style={{backgroundColor: '#f2f2f2',cursor: 'pointer',padding: '12px',borderBottom: '1px solid #ddd',fontFamily:'Roboto',}} onClick={() => handleSort('course')}>Course</th>
      <th style={{backgroundColor: '#f2f2f2',cursor: 'pointer',padding: '12px',borderBottom: '1px solid #ddd',fontFamily:'Roboto',}} onClick={() => handleSort('grade')}>Grade</th>
      <th style={{backgroundColor: '#f2f2f2',cursor: 'pointer',padding: '12px',borderBottom: '1px solid #ddd',fontFamily:'Roboto',}} onClick={() => handleSort('enrollmentDate')}>Enrollment Date</th>
    </tr>
  </thead>
  <tbody>
    {filteredStudents.length === 0 ? (
      <tr>
        <td colSpan="5" align="center">No students found</td>
      </tr>
    ) : (
      filteredStudents.map((student, index) => (
        <tr key={index}>
          <td style={{padding: '10px',borderBottom: '1px solid #ddd',alignItems:'center',textAlign: 'center',fontFamily:'Roboto',}}> {student.id}</td>
          <td style={{padding: '10px',borderBottom: '1px solid #ddd',alignItems:'center',textAlign: 'center',fontFamily:'Roboto',}}> {student.name}</td>
          <td style={{padding: '10px',borderBottom: '1px solid #ddd',alignItems:'center',textAlign: 'center',fontFamily:'Roboto',}}> {student.course}</td>
          <td style={{padding: '10px',borderBottom: '1px solid #ddd',alignItems:'center',textAlign: 'center',fontFamily:'Roboto',}}> {student.grade}</td>
          <td style={{padding: '10px',borderBottom: '1px solid #ddd',alignItems:'center',textAlign: 'center',fontFamily:'Roboto',}}> {student.enrollmentDate}</td>
        </tr>
      ))
    )}
  </tbody>
</table>

</div>

  );
}

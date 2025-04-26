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
    <div style={{ marginTop: '20px' }}>
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
      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>Student ID</th>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('course')}>Course</th>
            <th onClick={() => handleSort('grade')}>Grade</th>
            <th onClick={() => handleSort('enrollmentDate')}>Enrollment Date</th>
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
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.grade}</td>
                <td>{student.enrollmentDate}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

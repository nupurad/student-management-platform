import { useState } from 'react';

export default function StudentTable({ students }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });


  const handleSortDropdown = (key, direction) => {
    if (direction === '') {
      setSortConfig({ key: null, direction: 'asc' });
    } else {
      setSortConfig({ key, direction });
    }
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
  <th
  style={{
    backgroundColor: '#f2f2f2',
    padding: '12px',
    borderBottom: '1px solid #ddd',
    fontFamily: 'Roboto',
    textAlign: 'center'
  }}
>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span>Student ID</span>
    <select
      onChange={(e) => handleSortDropdown('id', e.target.value)}
      style={{
        marginLeft: '10px',
        fontSize: '12px',
        borderRadius: '5px',
        padding: '2px 5px',
        border: '1px solid #ccc',
        borderBottom: '1px solid #ddd',
        borderRight: '1px solid #ddd',
      }}
    >
      <option value="">--</option>
      <option value="asc">⬆️ Asc</option>
      <option value="desc">⬇️ Desc</option>
    </select>
  </div>
</th>

<th
  style={{
    backgroundColor: '#f2f2f2',
    padding: '12px',
    borderBottom: '1px solid #ddd',
    fontFamily: 'Roboto',
    textAlign: 'center'
  }}
>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span>Name</span>
    <select
      onChange={(e) => handleSortDropdown('id', e.target.value)}
      style={{
        marginLeft: '10px',
        fontSize: '12px',
        borderRadius: '5px',
        padding: '2px 5px',
        border: '1px solid #ccc'
      }}
    >
      <option value="">--</option>
      <option value="asc">⬆️ Asc</option>
      <option value="desc">⬇️ Desc</option>
    </select>
  </div>
</th>

<th
  style={{
    backgroundColor: '#f2f2f2',
    padding: '12px',
    borderBottom: '1px solid #ddd',
    fontFamily: 'Roboto',
    textAlign: 'center'
  }}
>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span>Course</span>
    <select
      onChange={(e) => handleSortDropdown('id', e.target.value)}
      style={{
        marginLeft: '10px',
        fontSize: '12px',
        borderRadius: '5px',
        padding: '2px 5px',
        border: '1px solid #ccc'
      }}
    >
      <option value="">--</option>
      <option value="asc">⬆️ Asc</option>
      <option value="desc">⬇️ Desc</option>
    </select>
  </div>
</th>

<th
  style={{
    backgroundColor: '#f2f2f2',
    padding: '12px',
    borderBottom: '1px solid #ddd',
    fontFamily: 'Roboto',
    textAlign: 'center'
  }}
>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span>Grade</span>
    <select
      onChange={(e) => handleSortDropdown('id', e.target.value)}
      style={{
        marginLeft: '10px',
        fontSize: '12px',
        borderRadius: '5px',
        padding: '2px 5px',
        border: '1px solid #ccc'
      }}
    >
      <option value="">--</option>
      <option value="asc">⬆️ Asc</option>
      <option value="desc">⬇️ Desc</option>
    </select>
  </div>
</th>

<th
  style={{
    backgroundColor: '#f2f2f2',
    padding: '12px',
    borderBottom: '1px solid #ddd',
    fontFamily: 'Roboto',
    textAlign: 'center'
  }}
>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span>Enrollment Date</span>
    <select
      onChange={(e) => handleSortDropdown('id', e.target.value)}
      style={{
        marginLeft: '10px',
        fontSize: '12px',
        borderRadius: '5px',
        padding: '2px 5px',
        border: '1px solid #ccc'
      }}
    >
      <option value="">--</option>
      <option value="asc">⬆️ Asc</option>
      <option value="desc">⬇️ Desc</option>
    </select>
  </div>
</th>
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
          <td style={{padding: '10px',alignItems:'center',textAlign: 'center',fontFamily:'Roboto',borderBottom: '1px solid #ddd',borderRight: '1px solid #ddd',}}> {student.id}</td>
          <td style={{padding: '10px',alignItems:'center',textAlign: 'center',fontFamily:'Roboto',borderBottom: '1px solid #ddd',borderRight: '1px solid #ddd',}}> {student.name}</td>
          <td style={{padding: '10px',alignItems:'center',textAlign: 'center',fontFamily:'Roboto',borderBottom: '1px solid #ddd',borderRight: '1px solid #ddd',}}> {student.course}</td>
          <td style={{padding: '10px',alignItems:'center',textAlign: 'center',fontFamily:'Roboto',borderBottom: '1px solid #ddd',borderRight: '1px solid #ddd',}}> {student.grade}</td>
          <td style={{padding: '10px',alignItems:'center',textAlign: 'center',fontFamily:'Roboto',borderBottom: '1px solid #ddd',borderRight: '1px solid #ddd',}}> {student.enrollmentDate}</td>
        </tr>
      ))
    )}
  </tbody>
</table>

</div>

  );
}


import { Routes, Route, Navigate } from 'react-router-dom';
import Students from './pages/Students';
import Chat from './pages/Chat';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/students" element={<Students />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Navigate to="/students" />} />
      </Routes>
    </div>
  );
}

export default App;

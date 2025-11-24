import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddEvent from './pages/AddEvent';
import TimelinePage from './pages/TimelinePage';
import Map from './components/Map';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add-event" element={<AddEvent />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;

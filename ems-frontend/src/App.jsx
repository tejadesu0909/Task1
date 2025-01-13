import './App.css';
import EmployeeComponent from './components/EmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import LoginComponent from './components/LoginComponent';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<LoginComponent />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ListEmployeeComponent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees"
            element={
              <ProtectedRoute>
                <ListEmployeeComponent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-employee"
            element={
              <ProtectedRoute>
                <EmployeeComponent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-employee/:id"
            element={
              <ProtectedRoute>
                <EmployeeComponent />
              </ProtectedRoute>
            }
          />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;

import { ConfirmProvider } from "material-ui-confirm";
import "./App.css";
import EmployeeComponent from "./components/EmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import LoginComponent from "./components/LoginComponent";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import LandingPage from "./pages/LandingPage";
import { useLocation } from "react-router";
import Register from "./components/LandingPageComponents/register";
import GetStarted from "./components/LandingPageComponents/GetStarted";
import LearnMore from "./components/LandingPageComponents/LearnMore";
import SeeReports from "./components/LandingPageComponents/SeeReports";
import Support from "./components/LandingPageComponents/QuickLinksSupport";
import Contact from "./components/LandingPageComponents/QuickLinksContactUs";
import Features from "./components/LandingPageComponents/QuickLinksFeatures";
import Faqs from "./components/LandingPageComponents/QuickLinksFaqs";
import ExploreFeatures from "./components/LandingPageComponents/ExploreFeatures";

function App() {
  // const location = useLocation();
  const hiddenPaths = [
    "/", "/login", "/register", "/getStarted", "/learnMore",
    "/SeeReports", "/QuickLinksSupport", "/QuickLinksContactUs",
    "/QuickLinksFeatures", "/QuickLinksFaqs", "/ExploreFeatures"
  ];
  const hideHeader = hiddenPaths.includes(location.pathname);
  
  return (
    <BrowserRouter>
      <ConfirmProvider>
        {!hideHeader && <HeaderComponent />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<Register />} />
          <Route path="/getStarted" element={<GetStarted />} />
          <Route path="/learnMore" element={<LearnMore />} />
          <Route path="/ExploreFeatures" element={<ExploreFeatures />} />
          <Route path="/SeeReports" element={<SeeReports />} />
          <Route path="/QuickLinksSupport" element={<Support />} />
          <Route path="/QuickLinksContactUs" element={<Contact />} />
          <Route path="/QuickLinksFeatures" element={<Features />} />
          <Route path="/QuickLinksFaqs" element={<Faqs />} />

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
      </ConfirmProvider>
    </BrowserRouter>
  );
}

export default App;

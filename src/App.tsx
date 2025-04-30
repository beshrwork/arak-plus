import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import TermsOfServicePage from "./Pages/TermsOfServicePage/TermsOfServicePage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<PrivacyPolicyPage />} /> */}
          {/* <Route path="/terms" element={<TermsOfServicePage />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;

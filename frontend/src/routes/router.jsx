import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BriefingRegister from "../pages/BriefingRegister/BriefingRegister";
import BriefingListing from "../pages/BriefingListing/BriefingListing";
import Welcome from "../pages/Welcome/Welcome"; 
import Modal from "../Modal/ModalEdit/ModalEdit";
export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/listar" element={<BriefingListing />} />
        <Route path="/cadastrar" element={<BriefingRegister />} />
        <Route path="/" element={<Welcome />} /> 
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
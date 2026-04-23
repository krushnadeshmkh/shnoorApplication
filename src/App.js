import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './componets/Home';
import About from './componets/About';
import Services from './componets/Services';
import Logistics from './componets/Logistics';
import ShnoorCareers from './componets/ShnoorCareers';
import EnterpriseManagement from './componets/services/EnterpriseManagement';
import BackgroundVerification from './componets/services/BackgroundVerification';
import DataAI from './componets/services/DataAI';
import ConsultingStaffing from './componets/services/ConsultingStaffing';
import NetworkManagement from './componets/services/NetworkManagement';
import ExportManagement from './componets/ExportManagement';
import Contact from './componets/Contact';
import TermsAndConditions from './componets/TermsAndConditions';
import PrivacyPolicy from './componets/PrivacyPolicy';
import RecruitmentScams from './componets/RecruitmentScams';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/services" element={<Services/>} />
           <Route path="/logistics" element={<Logistics/>} />
            <Route path="/careers" element={<ShnoorCareers/>} />
             <Route path="/enterprise-management" element={<EnterpriseManagement/>} />
             <Route path="/backgroundVerification" element={<BackgroundVerification/>} />
             <Route path="/dataAI" element={<DataAI/>} />
             <Route path="/consultingStaffing" element={<ConsultingStaffing/>} />
               <Route path="/networkManagement" element={<NetworkManagement/>} />
                <Route path="/export-management" element={<ExportManagement/>} />
                 <Route path="/contact" element={<Contact/>} />
                <Route path="/termandconditions" element={<TermsAndConditions/>} />
                 <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
                  <Route path="/recruitmentscams" element={<RecruitmentScams/>} />
      </Routes>
    </Router>
  );
}

export default App;
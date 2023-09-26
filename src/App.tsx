import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import FWave from "./components/fwave";
function App() {
   const navigate = useNavigate();
   return (
      <>
         <h1
            onClick={() => {
               navigate("/payments");
            }}>
            Make Payment
         </h1>
         <Routes>
            <Route path="/payments" element={<FWave />} />
         </Routes>{" "}
      </>
   );
}

export default App;

import "./App.css";
import { MainComponent } from "./components/MainComponent";
// import { BrowserRouter as Router, Route, Routes, Link, useParams, BrowserRouter } from 'react-router-dom';
// import { EmailEnvelope } from "./Portals/EmailEnvelope";

function App() {

  return (
    <div className="background">
      <MainComponent/>
      
{/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent/>}/>
          <Route path="/envelope" element={<EmailEnvelope/>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

import {useState} from "react"
import { Routes, Route } from "react-router-dom"
import { getUser } from "../../utilities/users-service";
import './App.css';
import AuthPage from "../AuthPage/AuthPage";
import EditAbductionPage from "../EditAbductionPage/EditAbductionPage";
import NewAbductionPage from "../NewAbductionPage/NewAbductionPage";
import AbductionHistory from "../AbductionHistory/AbductionHistory";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser()) //the initial value for the state is the return from the getUser function

  return (
    <main className="App">
      {user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/abductions/new" element={ <NewAbductionPage /> } />
            <Route path="/abductions" element={ <AbductionHistory /> } />
            <Route path="/abductions/:id" element={ <EditAbductionPage /> } />
          </Routes>
        </>
        : 
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


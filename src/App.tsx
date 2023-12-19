import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import MainScreen from "./components/mainScreen/MainScreen";
import IntroScreen from "./components/introScreen/IntroScreen";
import RefereeScreenManagement from "./components/refereeScreenManagement/RefereeScreenManagement";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import UserContext from "./context/UserContext";
import { useState } from "react";
import { Container } from "react-bootstrap";
import PreLogin from "./components/PreLogin";
import CoachReferee from "./components/Coach-Referee";
import LeagueList from './components/LeagueList';
import TeamList from './components/TeamList';
import PlayersList from './components/PlayersList';
import Scoreboard from './components/Scoreboard';
import Test from './components/Test';

interface Tuser {
  email: string;
  password: string;
}

function App() {
  const [loginUser, setLoginUser] = useState<Tuser | null>(null)

  return (
    <UserContext.Provider value={{}}>
      <BrowserRouter>
      <Header></Header>
      <Container fluid>
      <Routes>
        <Route path="/" element={<PreLogin></PreLogin>} />
        <Route path="/admin-coach-referee" element={<CoachReferee></CoachReferee>} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>} />
        {/* <Route path="/home" element={<MainScreen></MainScreen>} /> */}
        <Route path="/admin-league" element={<LeagueList></LeagueList>}/>
        <Route path="/admin-team" element={<TeamList></TeamList>}/>
        <Route path="/coach-player" element={<PlayersList></PlayersList>}/>
        {/* <Route path="/manager/:matchID" element={<RefereeScreenManagement></RefereeScreenManagement>}/> */}
        <Route path="/scoreboard" element={<Scoreboard></Scoreboard>}/>
        <Route path="/test" element={<Test></Test>}/>
        </Routes>
        {/* <Footer></Footer> */}
       
      </Container>
    
      </BrowserRouter>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/refereeMatch/:matchID" element={<RefereeScreenManagement />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
    </UserContext.Provider>
  );
}

export default App;

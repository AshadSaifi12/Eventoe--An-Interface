import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Home from "./pages/home/Home";
// import Hotel from "./pages/hotel/Hotel";
// import List from "./pages/list/List";
import Signup from "./pages/signup/Signup";
import ProfileUpdate from "./pages/profile/ProfileUpdate";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile.jsx";
import HomeBefore from "./pages/home/Home2.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<HomeBefore/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/Update" element={<ProfileUpdate/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
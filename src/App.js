
import SideBar from "./Pages/SideBar";
import Navbar from "./Pages/Navbar";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <SideBar />
     <Navbar/>
    
    </div>
  );
};

export default App;

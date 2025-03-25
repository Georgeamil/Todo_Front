import MenuDownList from "./Components/MenuDownList";
import SideBarHeading from "./Components/SideBarHeading";
import SideBarProfile from "./Components/SideBarProfile";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuorList from "./Components/MenuorList";
import PersonIcon from "@mui/icons-material/Person";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
// import ProjectOverview from "./Components/ProjectOverview";
import LightorDark from "./Components/LightorDark";
import SpokeIcon from "@mui/icons-material/Spoke";

import { useState } from "react";
const SideBar = () => {
  const [bgcolor, setbgColor] = useState('');
  const [bgLight,setLight]=useState('Light')
  return (
    <div
      style={{
        height: "100%",
        width: "20%",
        backgroundColor: " #F8F8F8",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "8px",
        paddingRight: "8px",
        overflow: "auto",
      }}
    >
      <SideBarHeading />

      <SideBarProfile />
      
        <MenuorList name={"Menu"} />
      
      <div onClick={() => {
        setbgColor('Overview');
      }}>
        <MenuDownList name={"Overview"} Icon={DashboardIcon} bgcolor={bgcolor} />
      </div>
      <div onClick={() => {
        setbgColor('TaskList');
      }}>
      <MenuDownList name={"TaskList"} Icon={FormatListBulletedIcon} bgcolor={bgcolor} /></div>
      <div onClick={() => {
        setbgColor('Project Overview');
      }}><MenuDownList name={"Project Overview"} Icon={SpokeIcon} bgcolor={bgcolor}/></div>
      <div onClick={() => {
        setbgColor('Calender');
      }}>
      <MenuDownList name={"Calender"} Icon={CalendarMonthIcon} bgcolor={bgcolor} /></div>
      <div onClick={() => {
        setbgColor('Settings');
      }}><MenuDownList name={"Settings"} Icon={SettingsIcon} bgcolor={bgcolor} /></div>
      <MenuorList name={"List"} />
      <div onClick={() => {
        setbgColor('Personal');
      }}><MenuDownList name={"Personal"} Icon={PersonIcon} bgcolor={bgcolor} /></div>
       <div onClick={() => {
        setbgColor('Design');
      }}><MenuDownList name={"Design"} Icon={ColorLensIcon} bgcolor={bgcolor} /></div>
       <div onClick={() => {
        setbgColor('Development');
      }}><MenuDownList name={"Development"} Icon={LaptopChromebookIcon} bgcolor={bgcolor} /></div>
       <div onClick={() => {
        setbgColor('Research');
      }}><MenuDownList name={"Research"} Icon={DriveFileRenameOutlineIcon} bgcolor={bgcolor} /></div>
      <LightorDark bgLight={bgLight} setLight={setLight}/>
    </div>
  );
};

export default SideBar;

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PrioritySearch from "./Components/PrioritySearch";
import DueDate from "./Components/DueDate";
import Tags from "./Components/Tags";
import Assignees from "./Components/Assignes";
import NewTask from "./Components/NewTask";
import TICO from "./Components/TICO";
import FirstLayer from "./Components/FirstLayer";
import SecondLayer from "./Components/SecondLayer";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import OutboundIcon from '@mui/icons-material/Outbound';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
const Navbar = () => {
  return (
    <div style={{ height: "100%", width: "83%" }}>
      <div
        style={{
          width: "100%",
          height: "11%",
          backgroundColor: "#ff8c00",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "75px",

          paddingLeft: "15px",
        }}
      >
        <div>
          <p style={{ fontSize: "15px", color: "white" }}>
            Project / My Projects
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <p style={{ fontSize: "35px", color: "white" }}>My Project</p>
            <KeyboardArrowDownOutlinedIcon
              style={{ color: "white", fontSize: "35px" }}
            />
          </div>
        </div>
        <div
          style={{
            paddingTop: "8px",
            paddingRight: "30px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <CalendarMonthIcon style={{ color: "white" }} />
          <p style={{ fontSize: "15px", color: "white" }}>10 March 2025</p>
        </div>
      </div>
<div style={{overflow:"auto"}}>
      <PrioritySearch />
      <DueDate />
      <Tags />
      <Assignees />
      <NewTask />
      <div
        style={{
          height: "100%",
          marginLeft: "7px",
          marginRight: "10px",
          border: "1px dotted white",
          borderRadius: "12px",
          padding: "3px",
          marginTop: "5px",
        }}
      >
        <TICO />
<FirstLayer/>
<SecondLayer/>
<div style={{display:"flex"}}>
        <div
          style={{
            marginTop:"8px",
            marginLeft: "27px",
            border: "1px dotted grey",
            borderRadius: "10px",
            width: "19%",
            backgroundColor: "#afeeee",
            padding:"7px"
          }}
        >
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          
            <p style={{fontSize:"17px",display:"flex",alignItems:"center"}}>25 Feb 2025</p>
          
            <OutboundIcon /></div>
          <div style={{marginTop:"20px"}}>
            <p style={{fontSize:"30px"}}>Slicing Landing Page</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop:"37px"
            }}
          >
            <p>9:00 - 9:30 AM</p>
            <GroupOutlinedIcon />
          </div>
        </div>
     

      
        <div
          style={{
            marginTop:"8px",
            marginLeft: "23px",
            border: "1px dotted grey",
            borderRadius: "10px",
            width: "18.9%",
            backgroundColor: "#40e0d0",
            padding:"7px"
          }}
        >
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          
            <p style={{fontSize:"17px",display:"flex",alignItems:"center"}}>14 Feb 2025</p>
          
            <OutboundIcon /></div>
          <div style={{marginTop:"20px"}}>
            <p style={{fontSize:"30px"}}>Analyze Research Data</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop:"37px"
            }}
          >
            <p>9:00 - 9:30 AM</p>
            <GroupOutlinedIcon />
          </div>
        </div>

        <div
          style={{
            marginTop:"8px",
            marginLeft: "21px",
            border: "1px dotted grey",
            borderRadius: "10px",
            width: "19%",
            backgroundColor: "#87ceeb",
            padding:"7px"
          }}
        >
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          
            <p style={{fontSize:"17px",display:"flex",alignItems:"center"}}>< CheckCircleOutlineIcon style={{fontSize:"17px"}}/>Today</p>
          
            <OutboundIcon /></div>
          <div style={{marginTop:"25px"}}>
            <p style={{fontSize:"30px"}}>Develop Back-End System</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop:"30px"
            }}
          >
            <p>9:00 - 9:30 AM</p>
            <GroupOutlinedIcon />
          </div>
        </div>
        <div
          style={{
            marginTop:"8px",
            marginLeft: "23px",
            border: "1px dotted grey",
            borderRadius: "10px",
            width: "18.7%",
            backgroundColor: "#87ceeb",
            padding:"7px"
          }}
        >
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          
            <p style={{fontSize:"17px",display:"flex",alignItems:"center"}}><QueryBuilderIcon style={{fontSize:"17px"}}/>24 Feb 2025</p>
          
            <OutboundIcon /></div>
          <div style={{marginTop:"20px"}}>
            <p style={{fontSize:"30px"}}>Optimize Web Performance</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop:"37px"
            }}
          >
            <p>9:00 - 9:30 AM</p>
            <GroupOutlinedIcon />
          </div>
        </div>
      </div>


      </div>

      </div>
    </div>
  );
};
export default Navbar;

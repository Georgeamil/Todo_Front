import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import OutboundIcon from '@mui/icons-material/Outbound';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
const SecondLayer=()=>{
    return(<div style={{display:"flex"}}>
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




    )
}
export default SecondLayer;
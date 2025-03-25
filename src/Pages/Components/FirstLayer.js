import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import OutboundIcon from '@mui/icons-material/Outbound';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

const FirstLayer=()=>{
    return(<div style={{display:"flex"}}>
        <div
          style={{
            marginTop:"8px",
            marginLeft: "27px",
            border: "1px dotted grey",
            borderRadius: "10px",
            width: "17.5%",
            backgroundColor: "#ffdab9",
            padding:"7px"
          }}
        >
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          
            <p style={{fontSize:"17px",display:"flex",alignItems:"center"}}><StarOutlinedIcon style={{fontSize:"17px"}}/>Today</p>
          
            <OutboundIcon /></div>
          <div style={{marginTop:"20px"}}>
            <p style={{fontSize:"30px"}}>Create a Visual Studio Guide</p>
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
            width: "17.5%",
            backgroundColor: "#ffe4e1",
            padding:"7px"
          }}
        >
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          
            <p style={{fontSize:"17px",display:"flex",alignItems:"center"}}><StarOutlinedIcon style={{fontSize:"17px"}}/>Today</p>
          
            <OutboundIcon /></div>
          <div style={{marginTop:"20px"}}>
            <p style={{fontSize:"30px"}}>Testing and User Feedback</p>
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
            width: "17.5%",
            backgroundColor: "#87ceeb",
            padding:"7px"
          }}
        >
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          
            <p style={{fontSize:"17px",display:"flex",alignItems:"center"}}>< CheckCircleOutlineIcon style={{fontSize:"17px"}}/>Today</p>
          
            <OutboundIcon /></div>
          <div style={{marginTop:"25px"}}>
            <p style={{fontSize:"30px"}}>Meeting with Client</p>
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
            width: "17.5%",
            backgroundColor: "#87ceeb",
            padding:"7px"
          }}
        >
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          
            <p style={{fontSize:"17px",display:"flex",alignItems:"center"}}><QueryBuilderIcon style={{fontSize:"17px"}}/>24 Feb 2025</p>
          
            <OutboundIcon /></div>
          <div style={{marginTop:"20px"}}>
            <p style={{fontSize:"30px"}}>Creting Mockups for Dribble shots</p>
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
export default FirstLayer;
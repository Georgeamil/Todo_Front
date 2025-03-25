import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
const TICO =()=>{
    return(
        
        <div style={{display:"flex",gap:"20px",marginTop:"10px",marginLeft:"27px",alignItems:"center"}}>
          <div style={{display:"flex",backgroundColor:"white",justifyContent:"space-between",border:"1px dotted grey",borderRadius:"12px",padding:"5px",width:"20%"}}>
            <div style={{display:"flex",alignItems:"center",gap:"5px",fontSize:"17px"}}><p>Todo </p><StarOutlinedIcon style={{fontSize:"14px"}}/></div>
            <div style={{color:"grey"}}>
                <MoreHorizOutlinedIcon/>
                < AddBoxOutlinedIcon/>
            </div>
          </div>
          <div style={{display:"flex",backgroundColor:"white",justifyContent:"space-between",border:"1px dotted grey",borderRadius:"12px",padding:"5px",width:"20%"}}>
          <div style={{display:"flex",alignItems:"center",gap:"5px",fontSize:"17px"}}><p>InProgress</p></div>
          <div style={{color:"grey"}}>
                <MoreHorizOutlinedIcon/>
                < AddBoxOutlinedIcon/>
            </div></div>
            <div style={{display:"flex",backgroundColor:"white",justifyContent:"space-between",border:"1px dotted grey",borderRadius:"12px",padding:"5px",width:"20%"}}>
            <div style={{display:"flex",alignItems:"center",gap:"3px",fontSize:"17px"}}>  <p>Completed</p><FiberManualRecordOutlinedIcon style={{fontSize:"15px"}}/>
            </div>
            <div style={{color:"grey"}}>
                <MoreHorizOutlinedIcon/>
                < AddBoxOutlinedIcon/>
            </div>
          </div>
          <div style={{display:"flex",backgroundColor:"white",justifyContent:"space-between",border:"1px dotted grey",borderRadius:"12px",padding:"5px",width:"20%"}}>
          <div style={{display:"flex",alignItems:"center",gap:"3px",fontSize:"17px"}}> <p>Overdue</p></div>
          
          <div style={{color:"grey"}}>
                <MoreHorizOutlinedIcon/>
                < AddBoxOutlinedIcon/>
            </div></div>

            <div style={{border:"1px dotted grey",backgroundColor:"white",borderRadius:"12px",padding:"6px",width:"12%",marginRight:"8px"}}>
          
          <div style={{display:"flex",justifyContent:"space-between",color:"grey"}}>
                <MoreHorizOutlinedIcon/>
                < AddOutlinedIcon />
            </div></div>
            
          
        </div>

    )
}
export default TICO;
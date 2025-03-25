import Brightness5Icon from "@mui/icons-material/Brightness5";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const LightorDark = ({ bgLight,setLight  }) => {

  const AddOne = () => {

  }

  return (
    <div
      style={{
        marginTop: "125px",
        display: "flex",
        borderRadius: "13px",
        backgroundColor: "#dcdcdc",
        border: "1px solid white",
        paddingRight: "12px",
        marginRight:"2px",
        paddingLeft:"3px",
        paddingTop:"2px",
        paddingBottom:"2px",
        gap: "1px",
        alignItems: "center",
        marginBottom:"25px"
      }}
    >
      <div
        style={{
          borderRadius: "19px",
          backgroundColor: "white",
          border: "1px solid #dcdcdc",
          marginRight:"2px",
          paddingTop: "10px",

          paddingBottom: "10px",
          paddingLeft: "17px",
          paddingRight: "22px",
          backgroundColor: bgLight === "Light" ? "white" : "#dcdcdc",

          display: "flex",
          alignItems: "center",
          gap: "9px",
        }}
        onClick={() => {
            setLight('Light');
          }}
      >
        <Brightness5Icon />
        <p >Light</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "7px",
          backgroundColor: bgLight === "Dark" ? "white" : "#dcdcdc",

          paddingRight: "26px",
          border: "1px solid #dcdcdc",
          marginRight:"5px",
          marginLeft:"2px",
          paddingLeft: "11px",
          paddingRight:"25px",
          paddingTop:"11px",
          paddingBottom:"11px",
          borderRadius: "19px",
        }}
        onClick={() => {
            setLight('Dark');
          }}
        
      >
        <BedtimeIcon style={{ paddingLeft: "7px" }} />
        <p >Dark</p>
      </div>
    </div>
  );
};
export default LightorDark;

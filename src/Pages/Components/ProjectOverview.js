import SpokeIcon from "@mui/icons-material/Spoke";
const ProjectOverview = ({color}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "13px",
        alignItems: "center",
        marginTop: "8px",
        paddingLeft: "14px",
        backgroundColor:color,
        borderRadius: "8px",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "13px",
      }}
    >
      <SpokeIcon style={{ fontSize: "25px", color: "white" }} />
      <p style={{ fontSize: "17px", color: "white", fontWeight: "bold" }}>
        Project Overview
      </p>
    </div>
  );
};
export default ProjectOverview;

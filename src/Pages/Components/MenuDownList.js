import DashboardIcon from "@mui/icons-material/Dashboard";

const MenuDownList = ({ name, Icon, bgcolor }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "13px",
        alignItems: "center",
        marginTop: "8px",
        marginBottom: "8px",
        border:"1px solid #F8F8F8",
        padding:"10px",
        borderRadius:"12px",
        backgroundColor: bgcolor === name ? "orange" : "#F8F8F8",
        paddingLeft: "14px",
      }}
    >
      <Icon style={{ fontSize: "25px", color: "gray" }} />
      <p style={{ fontSize: "17px", color: "gray" }}>{name}</p>
    </div>
  );
};
export default MenuDownList;

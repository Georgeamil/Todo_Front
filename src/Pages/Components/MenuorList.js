import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const MenuorList = ({ name }) => {
  return (
    <div
      style={{
        marginTop: "35px",
        color: "gray",
        display: "flex",
        justifyContent: "space-between",
      
      }}
    >
      <p style={{ fontsize: "15px" }}>{name}</p>
      <KeyboardArrowDownOutlinedIcon />
    </div>
  );
};
export default MenuorList;

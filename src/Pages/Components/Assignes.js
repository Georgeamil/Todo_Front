import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
const Assignees = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "78px",
        marginTop: "18px",
        marginLeft: "35px",
        alignItems: "center",
      }}
    >
      <div>
        <p style={{ color: "grey" }}>Assignees</p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            border: "1px dotted grey",
            borderRadius: "17px",
            padding: "7px",
          }}
        >
          <AccountCircleOutlinedIcon />
          Ivan Moses
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            border: "1px dotted grey",
            borderRadius: "17px",
            padding: "7px",
          }}
        >
          <BrokenImageOutlinedIcon />
          Hatypo Studio
        </p>
        <p
          style={{
            border: "1px dotted grey",
            borderRadius: "17px",
            padding: "9px",
          }}
        >
          + 2 more
        </p>
        <p
          style={{
            border: "1px dotted grey",
            borderRadius: "19px",
            padding: "3px",
          }}
        >
          <AddOutlinedIcon />
        </p>
      </div>
    </div>
  );
};
export default Assignees;

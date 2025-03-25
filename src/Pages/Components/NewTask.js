import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const NewTask = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "20px",
        marginLeft: "35px",
        marginRight: "47px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "7px",
          border: "1px dotted white ",
          borderRadius: "12px",
          padding: "7px",
          backgroundColor: "orange",
          color: "white",
        }}
      >
        <p>New Task</p>
        <ArrowDropDownCircleOutlinedIcon />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "17px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            border: "1px dotted grey ",
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          {" "}
          <p>Filter</p>
          <KeyboardArrowDownOutlinedIcon />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            border: "1px dotted grey ",
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          <p>Sort</p>
          <KeyboardArrowDownOutlinedIcon />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            border: "1px dotted grey ",
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          <p>Label</p>
          <KeyboardArrowDownOutlinedIcon />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            border: "1px dotted grey ",
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          <p>Category</p>
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </div>
    </div>
  );
};
export default NewTask;

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const SideBarProfile = () => {
  return (
    <div
      style={{
        width: "99%",
        borderRadius: "16px",
        border: "1px solid lightgray",
        paddingTop: "12px",
        paddingBottom: "12px",
        marginTop: "22px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          //   justifyContent: "center",
          paddingLeft: "12px",
          gap: "6px",
        }}
      >
        <div
          style={{
            height: "36px",
            width: "36px",
            borderRadius: "18px",
            backgroundColor: "violet",
          }}
        >
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/3/31/a07c234b-ab97-4ad4-96b1-e1e88ec45e45.jpg"
            style={{
              height: "36px",
              width: "36px",
              borderRadius: "18px",
              objectFit: "contain",
            }}
          />
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <p style={{ fontSize: "16.5px" }}>Irvan Moses</p>
            <KeyboardArrowDownOutlinedIcon
              style={{ margin: 0, padding: 0, fontSize: 19 }}
            />
          </div>
          <p style={{ fontSize: "12.5px", color: "gray" }}>
            irvanmoses10@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBarProfile;

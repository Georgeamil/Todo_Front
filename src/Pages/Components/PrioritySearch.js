import SearchIcon from "@mui/icons-material/Search";
const PrioritySearch = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "18px",
        paddingRight: "45px",
        paddingLeft: "35px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "100px", alignItems: "center" }}>
        <p style={{ color: "grey" }}>Priority</p>
        <p
          style={{
            border: "1px dotted grey",
            borderRadius: "10px",
            padding: "5px",
            backgroundColor: "#87ceeb",
          }}
        >
          Medium
        </p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "72px",
          border: "1px dotted grey",
          borderRadius: "10px",
          padding: "5px",
          alignItems: "center",
        }}
      >
        <p>Search task or project</p>
        <SearchIcon />
      </div>
    </div>
  );
};
export default PrioritySearch;

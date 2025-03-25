const Tags=()=>{
    return(
        <div
        style={{
          display: "flex",
          gap: "120px",
          marginTop: "18px",
          marginLeft: "35px",
          alignItems: "center"
        }}
      >
        <div>
          <p style={{ color: "grey" }}>Tags</p>
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
              border: "1px dotted grey",
              borderRadius: "10px",
              padding: "5px",
              backgroundColor: "#ffe4e1",
            }}
          >
            Meetings
          </p>
          <p
            style={{
              border: "1px dotted grey",
              borderRadius: "10px",
              padding: "5px",
              backgroundColor: "#ffdab9",
            }}
          >
            UI Designs
          </p>
          <p style={{
              border: "1px dotted grey",
              borderRadius: "10px",
              padding: "5px",
              backgroundColor: "#afeeee",
            }}>Development</p>
          <p style={{
              border: "1px dotted grey",
              borderRadius: "10px",
              padding: "5px",
              backgroundColor: "#40e0d0",
            }}>UX Research</p>
        </div>
        </div>
     
    )
}
export default Tags;
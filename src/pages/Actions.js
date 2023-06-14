import React from "react";
import Grid from "@mui/material/Grid";
import "../footers/footer.css";
import ActionFooter from "../footers/ActionFooter";

const Actions = () => {
  return (
    <>
      <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item   >
          <div className="gridData">
            Action page 
          </div>
          <Grid>
          <div className="footer-pin">
            <ActionFooter/>
          </div>
          </Grid>
        </Grid>
        <Grid item xs={2} className="rightbarGrid">
          <div className="rightbar"> this is Action right side bar</div>
        </Grid>
      </Grid>
      
    </>
  );
};

export default Actions;

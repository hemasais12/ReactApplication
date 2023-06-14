import React from "react";
import Grid from "@mui/material/Grid";
import "../footers/footer.css";
import AccountFooter from "../footers/AccountFooter";

const Account = () => {
  return (
    <>
      <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item   >
          <div className="gridData">
            Account page 
          </div>
          <Grid>
          <div className="footer-pin">
            <AccountFooter/>
          </div>
          </Grid>
        </Grid>
        <Grid item xs={2} className="rightbarGrid">
          <div className="rightbar"> this is Account right side bar</div>
        </Grid>
      </Grid>
      
    </>
  );
};

export default Account;

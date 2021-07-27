import { Grid } from "@material-ui/core";
import React from "react";

interface IProps {
  heading: string;
  mainText: string;
  bottomText: string;
}
const BrandingBannerSection: React.FC<IProps> = ({ heading, mainText, bottomText }) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <h1>{heading}</h1>
          <h3>{mainText}</h3>
          <h4>{bottomText}</h4>
          <button>Submit a request</button>
        </Grid>
        <Grid item xs={8}>
          image
        </Grid>
      </Grid>
    </div>
  );
};

export default BrandingBannerSection;

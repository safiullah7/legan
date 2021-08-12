import { Button, Container, Grid, IconButton, TextField } from "@material-ui/core";
import { TrendingFlatOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import EditIcon from '@material-ui/icons/Edit';
import * as yup from 'yup';
import { useFormik } from "formik";

interface IProps {
  heading: string;
  mainText: string;
  bottomText: string;
}
const BrandingBannerSection: React.FC<IProps> = ({ heading, mainText, bottomText }) => {

  const [editmode, setEditMode] = useState(false);
  const validationSchema = yup.object({
    heading: yup
      .string()
      .required('Heading text is required'),
    mainText: yup
      .string()
      .required('Main text is required'),
    bottomText: yup
      .string()
      .required('BottomText is required')
  });
  const formik = useFormik({
    initialValues: {
      heading: heading || 'heading was empty',
      mainText: mainText || 'mainText was empty',
      bottomText: bottomText || 'bottom text was empty'
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Container maxWidth="xl" style={{ backgroundColor: 'white', paddingBottom: '50px' }}>
        <Grid container>
          <Grid item md={5} sm={12} xs={12} >
            <DivBrandingBannerContent>
              <IconButton aria-label="edit" onClick={() => setEditMode(!editmode)}>
                <EditIcon fontSize="inherit" />
              </IconButton>
              {editmode === false ? (
                <div>
                  <h1>
                    {heading}
                  </h1>
                  <p>
                    {mainText}
                  </p>
                  <span>
                    {bottomText}
                  </span>
                </div>
              ) : (
                <form onSubmit={formik.handleSubmit}>
                  <TextField
                    fullWidth
                    id="heading"
                    name="heading"
                    label="Heading"
                    value={formik.values.heading}
                    onChange={formik.handleChange}
                    error={formik.touched.heading && Boolean(formik.errors.heading)}
                    helperText={formik.touched.heading && formik.errors.heading}
                  />
                  <br/>
                  <br/>
                  <TextField
                    multiline
                    fullWidth
                    id="mainText"
                    name="mainText"
                    label="Main Text"
                    value={formik.values.mainText}
                    onChange={formik.handleChange}
                    error={formik.touched.mainText && Boolean(formik.errors.mainText)}
                    helperText={formik.touched.mainText && formik.errors.mainText}
                  />
                  <br/>
                  <br/>
                  <TextField
                    fullWidth
                    id="mainText"
                    name="mainText"
                    label="Bottom Text"
                    value={formik.values.bottomText}
                    onChange={formik.handleChange}
                    error={formik.touched.bottomText && Boolean(formik.errors.bottomText)}
                    helperText={formik.touched.bottomText && formik.errors.bottomText}
                  />
                  <Button color="primary" variant="contained" fullWidth type="submit">
                    Save
                  </Button>
                </form>
              )}
              <br />
              <Button
                variant="outlined"
                color="primary"
                endIcon={<TrendingFlatOutlined className="large" />}
              >
                <span>SUBMIT A REQUEST</span>
                {/* <img src="/arrow.svg" alt="arrow" style={{ color: 'white', backgroundColor: 'white' }} /> */}
              </Button>
            </DivBrandingBannerContent>
          </Grid>
          <Grid item md={7} sm={12} xs={12}>
            <BrandingBannerMap>
              <object aria-label="map-image" className="map-img" data="/map.svg" type="image/svg+xml" ></object>
            </BrandingBannerMap>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const DivBrandingBannerContent = styled.div`
  margin-top: 150px;
  text-align: left;
  padding-left: 45px;
  @media (max-width: 850px){
    margin-top: 50px;
  }
  @media (max-width: 550px){
    padding-left:5px;
    margin-top: 0px;
  }
  h1{
    font-size: 2rem;
    font-weight: 700;
    color: rgba(59, 86, 110, 1);
  }
  p{
    font-size: 22px;
    font-weight: 400;
    color: rgba(111, 139, 164, 1);
  }
  span{
    color: rgba(111, 139, 164, 1);
    font-weight: 300;
    font-size: 22px;
  }
  button{
    margin-top: 30px;
    font-weight: 700;
    padding: 5px 30px;
    border-color: rgba(34, 147, 251, 1);
    .large{
      font-size: 36px;
    }
    span{
      font-size: 15px;
      font-weight: 500;
      color: rgba(34, 147, 251, 1)
    }
    &:hover{
      box-shadow : inset 22em 0px 0px 0px #2293FB;
      transition-duration: 0.75s;
      background-color: #2293FB;
      border-color: rgba(34, 147, 251, 1);
      *{
        transition-delay: 0.25s;
        color: white;
      }
    }
  }
`;

const BrandingBannerMap = styled.div`
  .map-img{
    margin-top: 50px;
    width: 100%;
    float: left;
    height: auto;
    margin-left: 15px;
    @media (max-width: 800px){
      margin-top: 0px;
    }
  }
`;

export default BrandingBannerSection;
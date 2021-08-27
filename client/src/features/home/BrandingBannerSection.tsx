import { Button, Container, Dialog, Grid, IconButton, Slide, TextField } from "@material-ui/core";
import { TrendingFlatOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import EditIcon from '@material-ui/icons/Edit';
import * as yup from 'yup';
import { useFormik } from "formik";
import { useAppDispatch } from "../../store.hooks";
import { updateHomeContent } from "./home.slice";
import { IBannerContent } from "../../models/home";
import { TransitionProps } from "@material-ui/core/transitions";
import Submit from "../submit/Submit";

interface IProps {
  bannerContent: IBannerContent
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const BrandingBannerSection: React.FC<IProps> = ({ bannerContent }) => {
  const dispatch = useAppDispatch();
  const [editmode, setEditMode] = useState(false);
  const [openDialog, setOpenDialog] = React.useState<true | false>(false);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  }
  const handleOpenDialog = () => {
    setOpenDialog(true)
  }
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
      heading: bannerContent.heading || 'heading was empty',
      mainText: bannerContent.mainText || 'mainText was empty',
      bottomText: bannerContent.bottomText || 'bottom text was empty'
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(updateHomeContent(values));
      setEditMode(false);
    },
  });
  return (
    <>
      <Container maxWidth="xl" style={{ backgroundColor: 'white', paddingBottom: '50px' }}>
        <Grid container>
          <Grid item md={5} sm={12} xs={12} >
            <DivBrandingBannerContent>
              {editmode === false ? (
                <div>
                  <h1 className="h1">
                    {bannerContent.heading}
                    <IconButton aria-label="edit" color="primary" onClick={() => setEditMode(true)}>
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  </h1>
                  <p>
                    {bannerContent.mainText}
                  </p>
                  <span className="text-span">
                    {bannerContent.bottomText}
                  </span>
                </div>
              ) : (
                <form onSubmit={formik.handleSubmit}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="heading"
                    name="heading"
                    label="Heading"
                    value={formik.values.heading}
                    onChange={formik.handleChange}
                    error={Boolean(formik.touched.heading && formik.errors.heading)}
                  />
                  <br />
                  <br />
                  <TextField
                    multiline
                    fullWidth
                    id="mainText"
                    variant="outlined"
                    name="mainText"
                    label="Main Text"
                    value={formik.values.mainText}
                    onChange={formik.handleChange}
                    error={Boolean(formik.touched.mainText && formik.errors.mainText)}
                  />
                  <br />
                  <br />
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="bottomText"
                    name="bottomText"
                    label="Bottom Text"
                    value={formik.values.bottomText}
                    onChange={formik.handleChange}
                    error={Boolean(formik.touched.bottomText && formik.errors.bottomText)}
                  />
                  <Button className="save-btn" size="small" color="primary" variant="contained" fullWidth type="submit" >
                    Save
                  </Button>
                </form>
              )}
              <br />
              <Button
                className='submit-btn'
                variant="outlined"
                color="primary"
                endIcon={<TrendingFlatOutlined className="large" />}
                onClick={() => handleOpenDialog()}
              >
                <span className="submit-span">SUBMIT A REQUEST</span>
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
        <Dialog
          className="dialog-box"
          open={openDialog}
          keepMounted
          TransitionComponent={Transition}
          transitionDuration={500}
          onClose={handleCloseDialog}
          fullWidth
          scroll="body"
        >
          <Submit handleCloseDialog={handleCloseDialog} />
        </Dialog>
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
  .h1{
    font-size: 2rem;
    font-weight: 700;
    color: rgba(59, 86, 110, 1);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  p{
    font-size: 22px;
    font-weight: 400;
    color: rgba(111, 139, 164, 1);
  }
  .text-span{
    color: rgba(111, 139, 164, 1);
    font-weight: 300;
    font-size: 22px;
  }
  .save-btn{
    margin-top: 15px;
    padding: 6px 0px;
    *{
    color: white;
    }
  }
  .submit-btn{
    margin-top: 30px;
    font-weight: 700;
    padding: 5px 30px;
    color: rgba(34, 147, 251, 1);
    border-color: rgba(34, 147, 251, 1);
    .large{
      font-size: 36px;
    }
    .submit-span{
      font-size: 15px;
      font-weight: 500;
      color: rgba(34, 147, 251, 1);
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
  margin-top: 15px;
  @media (max-width: 850px){
    margin-top: 30px;
  }
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
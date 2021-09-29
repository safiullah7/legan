import { Container, Grid, TextField, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from "react";
import styled from 'styled-components';
import { IBriefAboutUsContent, IService } from "../../models/home";
import * as yup from 'yup';
import { FieldArray, Form, Formik, } from "formik";
import { updateBriefAboutUsContent } from "./home.slice";
import { useAppDispatch } from "../../store.hooks";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { v4 as uuidv4 } from 'uuid';
import { AboutUsArray } from '../../models/home';
import IconPicker from "../../controls/IconPicker";
import { TransitionProps } from "@material-ui/core/transitions";
import { useSelector } from "react-redux";
import { getAuthSelector } from "../login/auth.slice";
interface IProps {
  briefAboutUsContent: IBriefAboutUsContent
}


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const BriefAboutUsSection: React.FC<IProps> = ({ briefAboutUsContent }) => {

  const { isLoggedIn } = useSelector(getAuthSelector);

  const dispatch = useAppDispatch();
  const { heading, mainText, services } = briefAboutUsContent;
  const fullHeading = heading.split(' ');
  const headingPart1 = fullHeading.shift();
  const headingPart2 = fullHeading.join(' ');
  const refScroll = React.useRef(null);
  const executeScroll = () => (refScroll as any).current.scrollIntoView({ behavior: 'smooth' });
  const [editmode, setEditMode] = useState(false);
  const [openDialog, setOpenDialog] = React.useState<true | false>(false);
  const [deleteIndex, SetDeleteIndex] = React.useState<number>(-1);

  const handleCloseDialog = () => {
    SetDeleteIndex(-1);
    setOpenDialog(false);
  }
  const handleOpenDialog = (index: number) => {
    SetDeleteIndex(index);
    setOpenDialog(true);
  }

  const validationSchema = yup.object({
    heading: yup
      .string()
      .required('Heading text is required'),
    mainText: yup
      .string()
      .required('Main text is required'),
    services: yup
      .array()
      .of(
        yup.object().shape({
          name: yup.string().min(4, 'too short').required('Required'), // these constraints take precedence
          description: yup.string().min(3, 'cmon').required('Required'), // these constraints take precedence
        })
      )
      .required('Must have services') // these constraints are shown if and only if inner constraints are satisfied
      .min(3, 'Minimum of 3 services'),
  });

  const initialValues = {
    heading: briefAboutUsContent.heading || '',
    mainText: briefAboutUsContent.mainText || '',
    services: briefAboutUsContent.services || null
  };

  return (
    <>
      <DivHomeAbout>
        <Container className="container" maxWidth="xl" ref={refScroll}>
          {!editmode ? (
            <DivHomeAboutContent>
              <Grid className="about-first-grid" container spacing={3}>
                <Grid item md={7} sm={9} xs={12}>
                  <h1 className="h1">
                    <span>
                      <span className="bolder">{headingPart1} </span>
                      <span className="bold">{headingPart2}</span>
                    </span>
                    {isLoggedIn && (
                      <IconButton className="edit-icon" color='primary' aria-label="edit" onClick={() => setEditMode(true)}>
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                    )}
                  </h1>
                  <p>
                    {mainText}
                  </p>
                </Grid>
              </Grid>
              <Grid className="about-2nd-grid" container>
                {services && services.map((service: IService, index: number) => {
                  return (
                    <Grid item md={4} sm={6} xs={12} key={index}>
                      <DivAboutGridConsulting size={services.length} index={index} check={AboutUsArray.includes(index)}>
                        <object aria-label={service.name} className="about-us-logos" data={service.imageUrl} type="image/svg+xml" ></object>
                        <h3>{service.name}</h3>
                        <p>
                          {service.description}
                        </p>
                      </DivAboutGridConsulting>
                    </Grid>
                  )
                })}
              </Grid>
            </DivHomeAboutContent>
          ) : (
            <DivHomeAboutContent>
              <Formik
                initialValues={initialValues}
                // to do
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                  console.log(JSON.stringify(values, null, 2));
                  dispatch(updateBriefAboutUsContent(values));
                  setEditMode(false);
                  setTimeout(() => {
                    executeScroll();
                  }, 0);
                }}
              >
                {({ values, setFieldValue, handleChange, touched, errors }) => (
                  <Form>
                    <Grid className="about-first-grid" container spacing={3}>
                      <Grid item md={7} sm={9} xs={12}>
                        <TextField
                          className="text-feild"
                          variant='outlined'
                          fullWidth
                          id="heading"
                          name="heading"
                          label="Heading"
                          value={values.heading}
                          onChange={handleChange}
                          error={Boolean(touched.heading && errors.heading)}
                        />
                        <br />
                        <br />
                        <TextField
                          className="text-feild"
                          variant='outlined'
                          fullWidth
                          multiline
                          id="mainText"
                          name="mainText"
                          label="Main Text"
                          value={values.mainText}
                          onChange={handleChange}
                          error={Boolean(touched.mainText && errors.mainText)}
                        />
                      </Grid>
                    </Grid>
                    <DivEditAboutUsContent>
                      <FieldArray name="services">
                        {({ insert, remove, push }) => (
                          <div className="edit-cards">
                            <Grid container>
                              {values && values.services && values.services.length > 0 &&
                                values.services.map((service, index) => (
                                  <Grid className={`edit-card-grid`} item md={4} sm={6} xs={12} key={index}>
                                    <Card className="edit-card">
                                      <object aria-label={service.name} className="about-us-logo-changer" data={service.imageUrl} type="image/svg+xml" ></object>
                                      <CardContent>
                                        <IconPicker index={index} image={service.imageUrl} setFieldValue={setFieldValue} />
                                        <TextField
                                          variant='outlined'
                                          fullWidth
                                          id={`services.${index}.id`}
                                          name={`services.${index}.name`}
                                          label="Name"
                                          value={service.name}
                                          onChange={handleChange}
                                          error={service.name === '' && Boolean(touched.services)}                                        // helperText={touched.mainText && errors.mainText}
                                        />
                                        <br />
                                        <br />
                                        <TextField
                                          variant='outlined'
                                          className="edit-card-description"
                                          fullWidth
                                          multiline
                                          maxRows={3}
                                          id={`services.${index}.id`}
                                          name={`services.${index}.description`}
                                          label="Description"
                                          value={service.description}
                                          onChange={handleChange}
                                          error={service.description === '' && Boolean(touched.services)}
                                        // helperText={touched.mainText && errors.mainText}
                                        />
                                      </CardContent>
                                      <br />
                                      <CardActions>
                                        <Button size="small" fullWidth variant="contained" color="secondary" onClick={() => handleOpenDialog(index)}>
                                          Remove
                                        </Button>
                                        <Dialog
                                          className="dialog-box"
                                          open={openDialog && (deleteIndex === index)}
                                          keepMounted
                                          TransitionComponent={Transition}
                                          transitionDuration={500}
                                          onClose={handleCloseDialog}
                                          fullWidth
                                        >
                                          <DialogTitle style={{ textAlign: 'center' }} >
                                            Confirmation Message
                                          </DialogTitle>
                                          <DialogContent>
                                            <DialogContentText>
                                              Are you sure, you want to delete the tab ?
                                            </DialogContentText>
                                          </DialogContent>
                                          <DialogActions>
                                            <Button style={{ width: '150px' }} size="small" onClick={handleCloseDialog} color="secondary" variant="contained">
                                              NO
                                            </Button>
                                            <Button style={{ width: '150px' }} size="small" onClick={() => { remove(index); handleCloseDialog(); }} color="primary" variant="contained">
                                              YES
                                            </Button>
                                          </DialogActions>
                                        </Dialog>
                                      </CardActions>
                                    </Card>
                                  </Grid>
                                ))}
                            </Grid>
                            <div className="edit-btns">
                              <Button variant="contained" fullWidth size="large" color="primary"
                                onClick={() => push({ _id: uuidv4(), name: '', description: '', imageUrl: '/Consulting.svg' })}>
                                Add service
                              </Button>
                              <Button fullWidth variant="outlined" size="large" color="primary" type="submit">
                                Save
                              </Button>
                              <div className="service-error">Note: Minimum of 3 services are required</div>
                            </div>
                          </div>
                        )}
                      </FieldArray>
                    </DivEditAboutUsContent>
                  </Form>
                )}
              </Formik>
            </DivHomeAboutContent>
          )}
        </Container>
      </DivHomeAbout >
    </>
  );
};

const DivHomeAbout = styled.div`
.container{
  background-color: #F9FCFE;
  padding: 75px 65px;
  text-align: left;
}
`;

const DivHomeAboutContent = styled.div`
.text-feild{
  background-color: white;
}
  width: 100%;
  margin: 0px auto;
  padding-left: 3px;
  text-align: left;
  .about-us-logos{
    width: 85px;
    height: 85px;
  }
  .h1{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    *{
      font-size: 28px;
      color: rgba(0, 102, 153, 1);
    }
    .bolder{
      font-weight: 700;
    }
    .bold{
      font-weight: 500;
    }
  }
  p{
    font-size: 20px;
    color: rgba(111, 139, 164, 1);
    font-weight: 400;
  }
  .stars{
    float: right;
  }
  .about-first-grid{
    margin-top: 15px;
    margin-bottom: 30px;
  }
  .about-2nd-grid{
    border: 0.7px solid #DDE6EE;
  }
  @media (max-width: 800px){
   .stars{
     margin-right: -25px
   }
  }
  @media (max-width: 600px){
    width: 98%;
    margin: 0px auto;
    .stars{
      display: none;
    }
  }
`;

interface IStyledProps {
  check: true | false,
  index: number,
  size: number,
}

const DivAboutGridConsulting = styled.div<IStyledProps>`
  margin: 15px 0px;
  padding: 30px 10px 30px 30px;
  min-height: 250px;
  border-left: ${(props) => props.check ? '0.7px solid #DDE6EE' : 'none'};
  border-right: ${(props) => props.check ? '0.7px solid #DDE6EE' : 'none'};
  h3{
    font-size: 20px;
    font-weight: 500;
    color: rgba(59, 86, 110, 1);
  }
  p{
    font-size: 16px;
    font-weight: 400;
    color: rgba(111, 139, 164, 1);
  }
  @media (max-width:960px){
    border-left: none;
    border-right: ${(props) => props.index % 2 === 0 ? '0.7px solid #DDE6EE' : 'none'};
    padding: 20px;
    margin: 10px 5px;
  }
  @media (max-width: 600px){
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: ${(props) => props.index + 1 === props.size ? 'none' : '0.7px solid #DDE6EE'};
    padding: '10px';
    margin: 5px;
    text-align: center;
  }
`;
const DivEditAboutUsContent = styled.div`
.text-feild{
  background-color: white;
}
.edit-card-grid{
  padding: 15px;
  .edit-card{
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-flow: column;
    border-radius: 15px;
    height: 420px;
    max-width: 450px;
  .about-us-logo-changer{
      padding: 15px;
      height: 90px;
      width: 90px;
      margin: 0px auto;
    }
    .edit-card-description{
      *{
         ::-webkit-scrollbar {
          width: 7px;
          border-radius: 25px;
        }
        ::-webkit-scrollbar-track {
          background-color: rgba(0,0,0,0.06);
        }
        ::-webkit-scrollbar-thumb {
          background-color: lightgrey;
          border-radius: 25px;
      }
        }
    }
    button{
      margin-top: -10px;
      margin-bottom: 15px;
    }
  }
}
.edit-btns{
    button{
      margin: 5px 15px;
      width: 200px;
      @media (max-width: 600px){
        width: 94%;
      }
    }
  }
  .service-error{
    color: rgba(0,0,0,0.45);
    font-weight: 500;
    margin: 15px;
  }
`;

export default BriefAboutUsSection;

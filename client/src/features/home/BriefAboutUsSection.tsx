import { Container, Grid, TextField, IconButton, Button } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from "react";
import styled from 'styled-components';
import { IBriefAboutUsContent, IService } from "../../models/home";
import * as yup from 'yup';
import { ErrorMessage, Field, FieldArray, Form, Formik, useFormik } from "formik";
import { updateBriefAboutUsContent } from "./home.slice";
import { makeStyles } from '@material-ui/core/styles';
import { useAppDispatch } from "../../store.hooks";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

interface IProps {
  briefAboutUsContent: IBriefAboutUsContent
}

const BriefAboutUsSection: React.FC<IProps> = ({ briefAboutUsContent }) => {

  const dispatch = useAppDispatch();
  const { heading, mainText, services } = briefAboutUsContent
  const [headingPart1, headingPart2] = heading.split(' ');

  const [editmode, setEditMode] = useState(false);

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

  const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 343,
      borderRadius: 20,
    },
    content: {
      padding: 24,
    },
  }));

  const classes = useStyles();


  // const formik = useFormik({
  //   initialValues: {
  //     heading: briefAboutUsContent.heading || 'heading was empty',
  //     mainText: briefAboutUsContent.mainText || 'mainText was empty',
  //     services: briefAboutUsContent.services || 'bottom text was empty'
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));

  //     //dispatch(updateBriefAboutUsContent(values));
  //   },
  // });
  const initialValues = {
    heading: briefAboutUsContent.heading || 'heading was empty',
    mainText: briefAboutUsContent.mainText || 'mainText was empty',
    services: briefAboutUsContent.services || [
      {
        id: '1',
        imageUrl: '/about-bag.png',
        name: 'Consulting',
        description: 'Provision of online consutling services in matters ranging from internet law to intellectual property.'
      },
      {
        id: '2',
        imageUrl: '/about-draft.png',
        name: 'Document Drafting',
        description: 'We draft/review any tech and non-tech contracts including NDAs, SLAs, IP Lisening/Assignment, EULAs, etc.'
      },
    ]
  };

  return (
    <>
      <DivHomeAbout>
        <IconButton aria-label="edit" onClick={() => setEditMode(!editmode)}>
          <EditIcon fontSize="inherit" />
        </IconButton>
        <Container className="container" maxWidth="xl">
          {!editmode ? (
            <DivHomeAboutContent>
              <Grid className="about-first-grid" container spacing={3}>
                <Grid item md={7} sm={9} xs={12}>
                  <h1>
                    <span className="bolder">{headingPart1} </span>
                    <span className="bold">{headingPart2}</span>
                  </h1>
                  <p>
                    {mainText}
                  </p>
                </Grid>
              </Grid>
              <Grid className="about-2nd-grid" container>
                {services.map((service: IService) => {
                  return (
                    <Grid item md={4} sm={6} xs={12}>
                      <DivAboutGridConsulting>
                        <img src={service.imageUrl} alt="about-bag" />
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
                // validationSchema={validationSchema}
                onSubmit={async (values) => {

                  console.log(JSON.stringify(values, null, 2));
                }}
              >
                {({ values, handleChange, touched, errors }) => (
                  <Form>
                    <Grid className="about-first-grid" container spacing={3}>
                      <Grid item md={7} sm={9} xs={12}>
                        <TextField
                          variant='outlined'
                          fullWidth
                          id="heading"
                          name="heading"
                          label="Heading"
                          value={values.heading}
                          onChange={handleChange}
                          error={touched.heading && Boolean(errors.heading)}
                          helperText={touched.heading && errors.heading}
                        />
                        <br />
                        <br />
                        <TextField
                          variant='outlined'
                          fullWidth
                          multiline
                          id="mainText"
                          name="mainText"
                          label="Main Text"
                          value={values.mainText}
                          onChange={handleChange}
                          error={touched.mainText && Boolean(errors.mainText)}
                          helperText={touched.mainText && errors.mainText}
                        />
                      </Grid>
                    </Grid>
                    <div>

                      <FieldArray name="services">
                        {({ insert, remove, push }) => (

                          <div style={{ display: "flex" }}>
                            {values.services.length > 0 &&
                              values.services.map((service, index) => (
                                <div key={index}>
                                  <Card className={classes.root}>
                                    <CardActionArea>
                                      <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={service.imageUrl}
                                      />
                                      <CardContent>
                                        <TextField
                                          variant='outlined'
                                          fullWidth
                                          id={`services.${index}.id`}
                                          name={`services.${index}.name`}
                                          label="Name"
                                          value={service.name}
                                          onChange={handleChange}
                                        // error={service.name && Boolean(errors.mainText)}
                                        // helperText={touched.mainText && errors.mainText}
                                        />
                                        <br />
                                        <br />
                                        <TextField
                                          variant='outlined'
                                          fullWidth
                                          multiline
                                          id={`services.${index}.id`}
                                          name={`services.${index}.description`}
                                          label="Description"
                                          value={service.description}
                                          onChange={handleChange}
                                        // error={service.name && Boolean(errors.mainText)}
                                        // helperText={touched.mainText && errors.mainText}
                                        />
                                      </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                      <Button size="small" color="secondary" onClick={() => remove(index)}>
                                        Remove
                                      </Button>
                                    </CardActions>
                                  </Card>
                                </div>
                              ))}
                            <Button size="large" color="primary" onClick={() => push({ name: '', description: '' })}>
                              Add service
                            </Button>
                          </div>
                        )}
                      </FieldArray>
                      <button type="submit">Invite</button>
                    </div>
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
  @media (max-width: 550px){
    padding: 45px 10px;
  }
}
`;

const DivHomeAboutContent = styled.div`
  width: 100%;
  margin: 0px auto;
  padding-left: 3px;
  text-align: left;
  img{
    width: 85px;
    height: 85px;
  }
  h1{
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

const DivAboutGridConsulting = styled.div`
  margin: 15px;
  padding: 30px;
  min-height: 250px;
  border-right: 0.7px solid #DDE6EE;
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
  @media (max-width:850px){
    padding: 20px;
    margin: 0px;
  }
  @media (max-width: 600px){
   padding: 0px;
   margin: 15px;
   border-right: none;
   text-align: center;
   border-bottom: 0.7px solid #DDE6EE;
  }
`;

const DivAboutGridDrafting = styled(DivAboutGridConsulting)`
  @media (max-width: 850px){
    border-right: none;
  }
`;

const DivAboutGridResearch = styled(DivAboutGridConsulting)`
  border-right: none;
  @media (max-width: 600px){
    border-bottom: none;
  }
`;

export default BriefAboutUsSection;

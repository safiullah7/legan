import { Button, Container, Grid, IconButton, TextField } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import IndustryExpertiseList from './IndustryExpertiseList';
import { IIndustryExpertiseContentList } from '../../../models/home';
import { Edit } from '@material-ui/icons';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../store.hooks';
import { updateIndustryExpertiseHead } from '../home.slice';
import { getAuthSelector } from '../../login/auth.slice';
import { useSelector } from 'react-redux';

interface IPropsIndustryExpertise {
  mainHeading: string,
  text: string,
  contentList: IIndustryExpertiseContentList[],
};

const IndustryExpertise: React.FC<IPropsIndustryExpertise> = (
  { mainHeading, text, contentList }
) => {

  const { isLoggedIn } = useSelector(getAuthSelector);

  const dispatch = useAppDispatch();
  const heading = mainHeading.split(' ');
  const headingPart1 = heading.shift();
  const headingPart2 = heading.join(' ');
  const [editMode, setEditMode] = React.useState<true | false>(false);

  const newSchema = Yup.object().shape({
    heading: Yup.string().required('required'),
    description: Yup.string().required('required'),
  });
  const formik = useFormik({
    initialValues: {
      heading: mainHeading || 'Empty',
      description: text || 'description is Empty',
    },
    validationSchema: newSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        dispatch(updateIndustryExpertiseHead({
          heading: values.heading,
          description: values.description,
        }))
        setSubmitting(false);
        setEditMode((editMode) => !editMode);
      }
      catch (error) {
        console.log(error);
        setSubmitting(false);
        setErrors(error);
      }
    }
  });
  const { handleSubmit, errors, touched, getFieldProps } = formik;

  return (
    <>
      <DivHomeIndustry>
        <Container className="container" maxWidth="xl">
          <DivHomeIndustryContent>
            <Grid className="about-first-grid" container spacing={3}>
              <Grid item md={7} sm={9} xs={12}>
                {
                  editMode ?
                    <DivEditForm>
                      <FormikProvider value={formik}>
                        <Form noValidate onSubmit={handleSubmit}>
                          <TextField
                            className="text-feild"
                            label="heading"
                            variant="outlined"
                            fullWidth
                            {...getFieldProps('heading')}
                            error={Boolean(errors.heading && touched.heading)}
                          />
                          <TextField
                            className="text-feild"
                            multiline
                            maxRows={3}
                            label="description"
                            variant="outlined"
                            fullWidth
                            {...getFieldProps('description')}
                            error={Boolean(errors.description && touched.description)}
                          />
                          <Button
                            fullWidth
                            color="primary"
                            variant="contained"
                            type="submit"
                            className="submit-btn"
                          >
                            save
                          </Button>
                        </Form>
                      </FormikProvider>
                    </DivEditForm>
                    :
                    <>
                      <h1 className="h1">
                        <span>
                          <span className="bolder">{headingPart1} </span>
                          <span className="bold">{headingPart2}</span>
                        </span>
                        {isLoggedIn && (
                          <IconButton className="edit-Expertise-icon" color='primary' aria-label="edit" onClick={() => setEditMode(true)}>
                            <Edit fontSize="inherit" />
                          </IconButton>
                        )}
                      </h1>
                      <p>{text}</p>
                    </>
                }
              </Grid>
              {/* <Grid item md={5} sm={3}>
                <img className="stars" src="/stars.png" alt="stars container" />
              </Grid> */}
            </Grid>
            <IndustryExpertiseList
              isLoggedIn={isLoggedIn}
              contentList={contentList}
            />
          </DivHomeIndustryContent>
        </Container>
      </DivHomeIndustry>
    </>
  );
};

const DivHomeIndustry = styled.div`
.container{
  background-color: #F9FCFE;
  padding: 75px 65px;
  @media (max-width: 550px){
    padding: 45px 10px;
  }
    text-align: left;
}
`;

const DivHomeIndustryContent = styled.div`
  width: 100%;
  margin: 0px auto;
  padding-left: 3px;
  text-align: left;
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

const DivEditForm = styled.div`
.submit-btn{
    margin: 15px 15px 15px 0px;
}
.text-feild{
    margin: 15px 15px 15px 0px;
    background-color: white;
}
`;

export default IndustryExpertise;

import { Button, Container } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab';
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import BodyHeader from '../../controls/BodyHeader';
import { useAppDispatch } from '../../store.hooks';
import { getHomeContentAsync, getHomeContentSelector } from '../home/home.slice';
import GeneralForm from './GeneralForm';

const General = () => {

    const { homeContent, loadingContent } = useSelector(getHomeContentSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (homeContent.generalContent.whitepaperLink === '')
            dispatch(getHomeContentAsync());
    }, [dispatch, homeContent.generalContent.whitepaperLink])

    return (
        <div>
            <Container>
                <div style={{ marginTop: 120 }}>
                    <BodyHeader
                        heading="General"
                        headingColor="rgba(59, 86, 110, 1)"
                    />
                </div>
                <div style={{ textAlign: 'left' }}>
                    {loadingContent ? (
                        <Skeleton animation="wave" />
                    ) : (
                        <GeneralForm />
                    )}
                    <br />
                </div>
            </Container>
        </div>
    )
}

export default General

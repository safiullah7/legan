import * as React from 'react';
import { Box, Container, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField } from '@material-ui/core';
import { getQueriesAsync, getSubmitRequestSelector } from './submitrequest.slice';
import { useSelector } from 'react-redux';
import { Skeleton } from '@material-ui/lab';
import { useAppDispatch } from '../../store.hooks';
import BodyHeader from '../../controls/BodyHeader';
import { ISubmitRequest } from '../../models/submit';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import './Requests.css';

const Requests = () => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const [selectedQuery, setSelectedQuery] = React.useState<ISubmitRequest | null>(null);
    const { queries, queriesLoading } = useSelector(getSubmitRequestSelector);

    const navigateToExternalUrl = (url: string, shouldOpenNewTab: boolean = true) => {
        const updatedUrl = `${url}`;
        shouldOpenNewTab ? window.open(updatedUrl, "_blank") : window.location.href = updatedUrl;
    }

    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(getQueriesAsync());
    }, [dispatch])

    return (
        <div style={{ minHeight: 800 }}>
            <div style={{ marginTop: 120 }}>
                <BodyHeader
                    heading="Submitted Requests"
                    headingColor="rgba(59, 86, 110, 1)"
                />
            </div>
            {queriesLoading ? (
                <>

                </>
            ) : (
                queries === null ? (
                    <p>No submitted requests.</p>
                ) : (
                    <>
                        <Grid container style={{ margin: 50 }}>
                            <Grid item xs={4}>
                                <List>

                                    {queries.map((query) => (
                                        <div className={query === selectedQuery ? "list-item-selected" : ""}>
                                            <ListItem onClick={() => setSelectedQuery(query)}>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <ImageIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={query.name} secondary={query.queryType} />
                                            </ListItem>
                                        </div>
                                    ))}
                                </List>
                            </Grid>
                            <Grid item xs={8} style={{ textAlign: "left" }}>
                                <div>
                                    <div className='request-details'>
                                        <span>Name : <p>||||||||||</p></span>{selectedQuery?.name}<br />
                                        <span>Email : <p>|||||||||||</p></span>{selectedQuery?.email}<br /><hr />
                                        <span>Type : <p>|||||||||||</p></span>{selectedQuery?.queryType}<br />
                                        <span>Website : <p>|||||||</p></span>{selectedQuery?.website}<br />
                                        <span>Country : <p>|||||||</p></span>{selectedQuery?.country}<br /><hr />
                                        <span>Description : <p>|</p></span>{selectedQuery?.description}<br /><hr />
                                        {selectedQuery?.attachedFilePath && (
                                            <>
                                                <span>File : <p>|</p></span>
                                                <span><a href={selectedQuery?.attachedFilePath} target={'_blank'} rel="noreferrer">Click to view the file</a></span>
                                                <br />
                                            </>
                                        )}
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </>

                )
            )}
        </div>
    );
}

export default Requests
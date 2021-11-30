import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { teal, indigo } from '@mui/material/colors';
// import { findByState } from '../utils/API'
// import SearchResults from './SearchResults';
// import Profile from "./Profile"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper'



const primary = indigo[500];
const primaryLight = indigo[200];
const primaryDark = indigo[900];
const secondary = teal[500];
const secondaryLight = teal[200];

const Photographers = ({ users }) => {
    if (!users.length) {
        return <h3>No photgraphers Yet</h3>;
    }
    return (
        <Grid item xs={12}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 1,
                m: 1,
                bgcolor: primaryLight,
                borderStyle: "solid",
                borderColor: primaryDark,
                borderWidth: "5px",
                borderRadius: "10px"
            }}>
                {users &&
                    users.map((user) => (
                        <Card sx={{ maxWidth: 345 }} key={user.id}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={user.image}
                                    alt=""
                                />
                                <CardContent sx={{
                                    bgcolor: primaryLight
                                }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Name : {user.companyName}
                                        Specialty: {user.photoType}
                                    </Typography>
                                    <Link
                                        to={`/profile/${user.id}`}
                                    >
                                        <Button></Button>
                                        View more of this photographers information!
                                    </Link>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            </CardActions>
                        </Card>
                    ))
                }
            </Box>
        </Grid>)
};

export default Photographers;
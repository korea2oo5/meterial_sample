import React from 'react'
import Layout from '../components/Layout'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup/AvatarGroup";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});


function CardSample() {
    const classes = useStyles();

    return (
        <Layout>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h6">
                            세탁 O2O 서비스 개발
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <AvatarGroup max={4} spacing={"small"}>
                        <Avatar alt="Remy Sharp" src="https://source.unsplash.com/user/erondu" />
                        <Avatar alt="Travis Howard" src="https://source.unsplash.com/user/erondu" />
                        <Avatar alt="Cindy Baker" src="https://source.unsplash.com/user/erondu" />
                        <Avatar alt="Agnes Walker" src="https://source.unsplash.com/user/erondu" />
                        <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/user/erondu" />
                    </AvatarGroup>
                </CardActions>
            </Card>
        </Layout>
    )
}

export default CardSample
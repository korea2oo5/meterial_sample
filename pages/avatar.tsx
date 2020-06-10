import React from 'react'
import Layout from '../components/Layout'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

function AvatarSample() {
    return (
        <Layout>
            <AvatarGroup max={4} spacing={"small"}>
                <Avatar alt="Remy Sharp" src="https://source.unsplash.com/user/erondu" />
                <Avatar alt="Travis Howard" src="https://source.unsplash.com/user/erondu" />
                <Avatar alt="Cindy Baker" src="https://source.unsplash.com/user/erondu" />
                <Avatar alt="Agnes Walker" src="https://source.unsplash.com/user/erondu" />
                <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/user/erondu" />
            </AvatarGroup>
        </Layout>
    )
}

export default AvatarSample
import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import Link from 'next/link'

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591


function Header() {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link href="/">
                <StyledBreadcrumb
                    component="a"
                    href="#"
                    label="Home"
                />
            </Link>
            <Link href="/blog">
            <StyledBreadcrumb component="a" href="#" label="blog"  />
            </Link>
        </Breadcrumbs>
    )
}

export default Header
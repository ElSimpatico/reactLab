/**React imports */
import React from 'react';

/**Third-party imports */
import { Grid } from '@material-ui/core';

/** Local */
import { HeaderProps } from './headerProps';
import { useStyles } from './style';

export const Header: React.FC<HeaderProps> = props => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid xs={8}>
                <div className={classes.title}>
                    <h1>{props.title}</h1>
                    {props.subTitle && <span>{props.subTitle}</span>}
                </div>
            </Grid>
            <Grid xs={4}>
                <div className={classes.price}>
                    <h1>{props.price}</h1>
                </div>
            </Grid>
        </Grid>
    );
};

/** React imports */
import React from 'react';

/** Third-party imports */
import CircularProgress from '@material-ui/core/CircularProgress';

/** Local imports */
import { SpinnerProps, SIZE_TYPES } from './spinnerProps';

import { useStyles } from './style';

export const Spinner: React.FC<SpinnerProps> = props => {
    const classes = useStyles();
    function getSize(size: string): number {
        switch (size) {
            case SIZE_TYPES.small:
                return 20;
            case SIZE_TYPES.middle:
                return 50;
            case SIZE_TYPES.big:
                return 100;
            default:
                return 40;
        }
    }

    const spinnerSize = props && props.size ? props.size : '';
    return (
        <div className={classes.wrapped}>
            <CircularProgress
                classes={{
                    root: classes.root
                }}
                size={getSize(spinnerSize)}
            />
        </div>
    );
};

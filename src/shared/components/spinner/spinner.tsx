import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './style';
import { SpinnerProps, SIZE_TYPES } from './spinnerProps';

const Spinner: React.FC<SpinnerProps> = props => {
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
        <CircularProgress
            classes={{
                root: classes.root
            }}
            size={getSize(spinnerSize)}
        />
    );
};

export default Spinner;

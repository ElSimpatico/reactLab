import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            position: 'fixed' /*it can be fixed too*/,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
            color: '#ff571a'
        }
    })
);

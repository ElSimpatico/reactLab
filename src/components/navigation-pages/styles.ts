import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        position: {
            position: 'absolute',
            bottom: '2px',
            width: '100%'
        },
        root: {
            backgroundColor: 'black',
            color: 'white'
        },
        indicator: {
            backgroundColor: '#ff571a',
            height: '4px'
        }
    })
);

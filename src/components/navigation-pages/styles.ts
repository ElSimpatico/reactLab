import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            backgroundColor: 'black',
            color: 'white',
            position: 'absolute',
            bottom: '0',
            width: '100%'
        },
        indicator: {
            backgroundColor: '#ff571a',
            height: '4px'
        }
    })
);

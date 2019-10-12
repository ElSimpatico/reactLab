import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        wrapped: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        },
        root: {
            position: 'absolute',
            flexShrink: 0,
            color: '#ff571a'
        }
    })
);

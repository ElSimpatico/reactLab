import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            position: 'relative',
            height: 'calc(100vh - 22px)',
            width: '100vw'
        },
        wrappedContent: {
            margin: '20px',
            overflowY: 'auto',
            overflowX: 'hidden',
            maxHeight: '80vh'
        }
    })
);

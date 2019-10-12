import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        wrapped: {
            margin: '20px'
        },
        wrappedContent: {
            overflowY: 'auto',
            overflowX: 'hidden',
            maxHeight: '80vh'
        }
    })
);

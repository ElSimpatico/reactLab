import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        multimedia: {
            margin: 'auto',
            display: 'block'
        },
        content: {
            marginLeft: '50px'
        }
    })
);

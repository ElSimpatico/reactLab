import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        multimedia: {
            maxWidth: '365px',
            height: '185px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
                width: '100%',
                height: '100%'
            }
        },
        content: {
            marginLeft: '50px'
        }
    })
);

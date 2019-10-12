import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        carBodyImage: {
            width: 'auto',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& img': {
                width: '100%',
                height: '100%'
            }
        },

        hidde: {
            display: 'none'
        },

        cardBodyPrice: {
            display: 'grid',
            justifyContent: 'end',
            justifyItems: 'end',
            '& > span': {
                fontSize: 'x-large'
            }
        }
    })
);

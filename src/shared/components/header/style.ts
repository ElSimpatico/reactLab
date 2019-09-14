import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        title: {
            '& > h1': {
                display: 'inline-block',
                marginRight: '10px'
            },
            '& > span': {
                fontSize: 'xx-large'
            }
        },
        price: {
            textAlign: 'right',
            '& > h1': {
                display: 'inline-block'
            }
        }
    })
);

import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        wrapped: {
            position: 'absolute',
            width: '100%',
            bottom: '80px',
            display: 'flex',
            justifyContent: 'center'
        },

        contained: {
            color: 'white',
            backgroundColor: '#ff571a',
            '&:hover': {
                backgroundColor: '#ff571a'
            }
        },

        containedPrimary: {
            '&:hover': {
                backgroundColor: '#ff571a'
            }
        },

        sizeLarge: {
            padding: '15px 66px'
        },

        disabled: {
            color: 'white !important',
            backgroundColor: '#ff571a91 !important'
        }
    })
);

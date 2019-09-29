import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        wrapperSlider: {
            '& .slider': {
                overflowX: 'hidden',
                overflowY: 'auto',
                height: '65vh',
                '& .slide': {
                    overflowX: 'hidden',
                    overflowY: 'auto'
                }
            }
        },
        slideContent: {
            width: '70%',
            marginLeft: '50%',
            transform: 'translateX(-50%)'
        },
        carBodyImage: {
            width: 'auto',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
                width: '100%',
                height: '100%'
            }
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

import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        wrapperSlider: {
            display: 'contents',
            '& .slider': {
                overflowX: 'hidden',
                overflowY: 'auto',
                height: '65vh',
                '& .slide': {
                    overflowX: 'hidden'
                }
            }
        },
        slideContent: {
            width: '70%',
            marginLeft: '50%',
            transform: 'translateX(-50%)'
        }
    })
);

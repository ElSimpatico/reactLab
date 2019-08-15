import React from 'react';

// Translations
import { useTranslation } from 'react-i18next';

// Properties
import { CarCardProps } from './car-card-props';

// Styles
import { useStyles } from './styles';

const CarCard: React.FC<CarCardProps> = props => {
    const [t] = useTranslation('common');
    const classes = useStyles();

    return (
        <div>
            <img className={classes.multimedia} src={props.car.image} />
            <div className={classes.content}>
                <p>{props.car.title}</p>
                <p>{`${t('from')} ${props.car.price}`}</p>
            </div>
        </div>
    );
};

export default CarCard;

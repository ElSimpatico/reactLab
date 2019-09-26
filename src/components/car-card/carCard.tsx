import React from 'react';

// Translations
import { useTranslation } from 'react-i18next';

// Properties
import { CarCardProps } from './car-card-props';

// Styles
import { useStyles } from './styles';

export const CarCard: React.FC<CarCardProps> = props => {
    const [t] = useTranslation('common');
    const classes = useStyles();

    return (
        <div>
            <div className={classes.multimedia}>
                <img
                    src={props.car.image}
                    onClick={() => props.onClick(props.car)}
                />
            </div>
            <div className={classes.content}>
                <p>{props.car.name}</p>
                <p>{`${t('from')} ${props.car.price}`}</p>
            </div>
        </div>
    );
};

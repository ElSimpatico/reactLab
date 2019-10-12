/** React imports */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

/** Local imports */
import { Spinner, SIZE_TYPES } from '@shared/components';
import { CarCardProps } from './car-card-props';
import { useStyles } from './styles';

export const CarCard: React.FC<CarCardProps> = props => {
    const [t] = useTranslation('common');
    const classes = useStyles();

    const [isLoadingImage, setIsLoadingImage] = useState(true);

    return (
        <div>
            <div className={classes.multimedia}>
                {isLoadingImage && <Spinner size={SIZE_TYPES.middle}></Spinner>}
                <img
                    className={isLoadingImage ? classes.hidde : ''}
                    src={props.car.image}
                    onLoad={() => setIsLoadingImage(false)}
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

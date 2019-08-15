import React from 'react';

import { useTranslation } from 'react-i18next';
import { CarCardProps } from './car-card-props';

const CarCard: React.FC<CarCardProps> = props => {
    const [t] = useTranslation('common');

    return (
        <div>
            <img
                src={props.carLineGroup.image}
                style={{
                    margin: 'auto',
                    display: 'block'
                }}
            />
            <div
                style={{
                    marginLeft: '50px'
                }}
            >
                <p>{props.carLineGroup.title}</p>
                <p>{`${t('from')} ${props.carLineGroup.price}`}</p>
            </div>
        </div>
    );
};

export default CarCard;

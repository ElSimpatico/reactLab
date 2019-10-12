/** React imports */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

/** Local imports */
import { BodyCardProps } from './body-card-props';
import { Spinner, SIZE_TYPES } from '@shared/components';
import { useStyles } from './styles';

export const BodyCard: React.FC<BodyCardProps> = props => {
    const [isLoadingImage, setIsLoadingImage] = useState(true);

    const [t] = useTranslation('common');
    const classes = useStyles();

    return (
        <>
            <div className={classes.carBodyImage}>
                {isLoadingImage && <Spinner size={SIZE_TYPES.middle}></Spinner>}
                <img
                    className={isLoadingImage ? classes.hidde : ''}
                    src={props.body.image}
                    alt={props.body.name}
                    onLoad={() => setIsLoadingImage(false)}
                ></img>
            </div>
            <div className={classes.cardBodyPrice}>
                <span>{t('from').toUpperCase()}</span>
                <h2>{props.body.price}</h2>
            </div>
        </>
    );
};

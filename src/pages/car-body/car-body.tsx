/**React imports */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

/**Third-party imports */
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

/**Local imports */
import { State } from '@shared/state';
import { Spinner, SIZE_TYPES } from '@shared/components';
import { getBodiesByCarModel } from '@services';
import { Car } from '@shared/models';
import { setBodyName, setShowHeader } from '@shared/actions';
import { useStyles } from './styles';

export const CarBody: React.FC = () => {
    const dispatch = useDispatch();
    const [t] = useTranslation('common');
    const classes = useStyles();

    const [isLoading, setIsLoading] = useState(true);
    const [bodies, setBodies] = useState<Car[]>([]);

    const { modelId } = useSelector((state: State) => state.carConfigurator);

    async function loadData() {
        const bodiesResponse: Car[] = await getBodiesByCarModel(modelId);
        dispatch(setBodyName(bodiesResponse[0].name));
        dispatch(setShowHeader(true));
        setBodies(bodiesResponse);
        setIsLoading(false);
    }

    useEffect(() => {
        loadData();
    }, []);

    function onChangeCarBody(index: number) {
        const carBody: Car = bodies[index];
        dispatch(setBodyName(carBody.name));
    }

    return isLoading ? (
        <Spinner size={SIZE_TYPES.big}></Spinner>
    ) : (
        <div className={classes.wrapperSlider}>
            <Slider
                onSlideChange={(event: any) =>
                    onChangeCarBody(event.slideIndex)
                }
            >
                {bodies.map((body: Car, index: number) => {
                    return (
                        <div key={`${body.id}_${index}`}>
                            <div className={classes.slideContent}>
                                <div className={classes.carBodyImage}>
                                    <img src={body.image} alt={body.name}></img>
                                </div>
                                <div className={classes.cardBodyPrice}>
                                    <span>{t('from').toUpperCase()}</span>
                                    <h2>{body.price}</h2>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

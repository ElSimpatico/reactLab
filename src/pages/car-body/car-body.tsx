/**React imports */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/**Third-party imports */
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

/**Local imports */
import { State } from '@shared/state';
import { Spinner, SIZE_TYPES } from '@shared/components';
import { getBodiesByCarModel } from '@services';
import { Car } from '@shared/models';
import {
    setBodyName,
    setShowHeader,
    setShowNextButton,
    setDisabledNextButton
} from '@shared/actions';
import { BodyCard } from '@components';
import { useStyles } from './styles';

const CarBody: React.FC = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const [isLoading, setIsLoading] = useState(true);
    const [bodies, setBodies] = useState<Car[]>([]);

    const { modelId } = useSelector((state: State) => state.carConfigurator);

    async function loadData() {
        const bodiesResponse: Car[] = await getBodiesByCarModel(modelId);

        dispatch(setBodyName(bodiesResponse[0].name));
        dispatch(setShowHeader(true));
        dispatch(setShowNextButton(true));
        setBodies(bodiesResponse);
        setIsLoading(false);
        dispatch(setDisabledNextButton(false));
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
                                <BodyCard body={body}></BodyCard>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default CarBody;

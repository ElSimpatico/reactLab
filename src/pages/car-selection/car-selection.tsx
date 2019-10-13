/** React imports */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

/** Third-party imports */
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';

/** Local imports */
import { Spinner, SIZE_TYPES } from '@shared/components';
import { Car } from '@shared/models';
import { ROUTES_PAGE } from '@shared/enums';
import { getCars } from '@services';
import {
    setModelId,
    setModelName,
    setTotalPrice,
    setShowHeader,
    setShowNextButton
} from '@shared/actions';
import { RouteComponentProps } from 'react-router-dom';

import { CarCard } from '@components';

const CarSelectionInternal: React.FC<RouteComponentProps> = props => {
    const [cars, setCars] = useState<Car[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    async function loadData() {
        let carsResponse: Car[] = [];
        try {
            dispatch(setShowHeader(false));
            dispatch(setShowNextButton(false));
            carsResponse = await getCars();
            setCars(carsResponse);
        } catch (err) {
            // TODO handle error
            console.error(err);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        loadData();
    }, []);

    function selectCarModel(car: Car) {
        dispatch(setModelId(car.id));
        dispatch(setModelName(car.name));
        dispatch(setTotalPrice(car.price));
        props.history.push(`/${ROUTES_PAGE.CAR_BODY}`);
    }

    return isLoading ? (
        <Spinner size={SIZE_TYPES.big} />
    ) : (
        <Grid container spacing={6}>
            {cars.map((car: Car, index: number) => {
                return (
                    <Grid xs={4} item key={`${car.id}_${index}`}>
                        <CarCard car={car} onClick={selectCarModel} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

const CarSelection = withRouter(CarSelectionInternal);

export { CarSelection as default };

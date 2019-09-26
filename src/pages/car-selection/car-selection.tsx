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
import { CarCard } from '@components';
import { getCars } from '@services';
import { setModelId, setModelName, setTotalPrice } from '@shared/actions';
import { RouteComponentProps } from 'react-router-dom';

const CarSelectionInternal: React.FC<RouteComponentProps> = props => {
    const [cars, setCars] = useState<Car[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    async function loadData() {
        let carsResponse: Car[] = [];
        try {
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
        dispatch(setModelId(car.key));
        dispatch(setModelName(car.name));
        dispatch(setTotalPrice(car.price));
        props.history.push(`/${ROUTES_PAGE.CAR_BODY}`);
    }

    if (isLoading) {
        return <Spinner size={SIZE_TYPES.big} />;
    }
    return (
        <Grid container spacing={6}>
            {cars.map((car: Car, index: number) => {
                return (
                    <Grid xs={4} item key={`${car.key}_${index}`}>
                        <CarCard car={car} onClick={selectCarModel} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export const CarSelection = withRouter(CarSelectionInternal);

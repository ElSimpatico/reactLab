/** React imports */
import React, { useState, useEffect } from 'react';

/** Third-party imports */
import Grid from '@material-ui/core/Grid';

/** Local imports */
import { Spinner, SIZE_TYPES } from '@shared/components';
import { Car } from '@shared/models';
import { CarCard } from '@components';
import { getCars } from '@services';

export const CarSelection: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [isLoading, setIsLoading] = useState(true);

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

    if (isLoading) {
        return <Spinner size={SIZE_TYPES.big} />;
    }
    return (
        <Grid container spacing={6}>
            {cars.map((car: Car, index: number) => {
                return (
                    <Grid xs={4} item key={`${car.key}_${index}`}>
                        <CarCard car={car} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

import React, { useState, useEffect } from 'react';

// Components
import { Spinner, SIZE_TYPES } from '@shared/components';
import Grid from '@material-ui/core/Grid';
import { CarCard } from '@components';

// Models
import { Car } from '@shared/models';

// Services
import { getCars } from '@services';

export const CarSelection: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    async function loadData() {
        const carsResponse = await getCars();
        setCars(carsResponse);
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
            {cars.map(car => {
                return (
                    <Grid xs={4} item>
                        <CarCard car={car} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

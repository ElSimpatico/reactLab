import React, { useState, useEffect } from 'react';

// Components
import Spinner from '../shared/components/spinner/spinner';
import Grid from '@material-ui/core/Grid';
import CarCard from '../components/car-card/carCard';

// Properties
import { SIZE_TYPES } from '../shared/components/spinner/spinnerProps';

// Models
import { Car } from '../shared/models/car';

// Services
import { getCars } from '../shared/services/car';

const CarSelection: React.FC = () => {
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

export default CarSelection;

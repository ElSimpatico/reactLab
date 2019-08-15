import React, { useState, useEffect } from 'react';

// Components
import Spinner from '../shared/components/spinner/spinner';
import Grid from '@material-ui/core/Grid';
import CarCard from '../components/car-card/carCard';

// Properties
import { SIZE_TYPES } from '../shared/components/spinner/spinnerProps';

// Models
import { CarLineGroup } from '../shared/models/carLineGroup';

// Services
import { getCarLineGroups } from '../shared/services/carLineGroups';

const CarLineGroups: React.FC = () => {
    const [carLineGroups, setCarLineGroups] = useState<CarLineGroup[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    async function loadData() {
        const carLineGroups = await getCarLineGroups();
        setCarLineGroups(carLineGroups);
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
            {carLineGroups.map(carLineGroup => {
                return (
                    <Grid xs={4} item>
                        <CarCard carLineGroup={carLineGroup} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default CarLineGroups;

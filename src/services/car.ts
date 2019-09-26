/** Third-party libraries import */
import { OK } from 'http-status-codes';

/** Local imports */
import { Car } from '@shared/models';
import { get } from './api/methods';
import Endpoints from './api/endpoints';

/**
 * Get collection of car selection models
 * @returns { Promise <Car[]> } Promise of car collection
 * @throws Error if response status isn't OK
 */
export async function getCars(): Promise<Car[]> {
    const response = await get(Endpoints.cars.models);

    if (response.status === OK) {
        const cars: Car[] = response.data;
        return cars;
    } else {
        throw new Error('Error getting the list of car selection models');
    }
}

export async function getBodiesByCarModel(modelId: string): Promise<Car[]> {
    const pathsVariable = { modelId };
    const response = await get(Endpoints.cars.bodies, pathsVariable);
    if (response.status === OK) {
        const bodies: Car[] = response.data;
        return bodies;
    } else {
        throw new Error('Error getting the list of car model bodies');
    }
}

import { Car } from '../models/car';
import carLineGroups from '../mocks/carLineGroups';

function getCarsMock(): Promise<Car[]> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(carLineGroups);
        }, 1000);
    });
}
export async function getCars(): Promise<Car[]> {
    const carLineGroups: Car[] = await getCarsMock();
    return carLineGroups;
}

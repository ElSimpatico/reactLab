import { Car } from '@shared/models';
import { context } from '@mocks';

function getCarsMock(): Promise<Car[]> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(context);
        }, 1000);
    });
}
export async function getCars(): Promise<Car[]> {
    const carLineGroups: Car[] = await getCarsMock();
    return carLineGroups;
}

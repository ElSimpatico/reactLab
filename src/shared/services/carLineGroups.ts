import { CarLineGroup } from '../models/carLineGroup';
import carLineGroups from '../mocks/carLineGroups';

function getCarLineGroupsMocks(): Promise<CarLineGroup[]> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(carLineGroups);
        }, 1000);
    });
}
export async function getCarLineGroups(): Promise<CarLineGroup[]> {
    const carLineGroups: CarLineGroup[] = await getCarLineGroupsMocks();
    return carLineGroups;
}

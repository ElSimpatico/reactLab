import { Car } from '@shared/models';

export interface CarCardProps {
    car: Car;
    onClick: (car: Car) => void;
}

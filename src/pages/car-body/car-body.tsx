/**React imports */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/**Local imports */
import { State } from '@shared/state';
import { Header, Spinner, SIZE_TYPES } from '@shared/components';
import { getBodiesByCarModel } from '@services';
import { Car } from '@shared/models';
import { setBodyName } from '@shared/actions';

export const CarBody: React.FC = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);
    const [bodies, setBodies] = useState<Car[]>([]);

    const { modelId, modelName, totalPrice, bodyName } = useSelector(
        (state: State) => state.carConfigurator
    );

    async function loadData() {
        const bodiesResponse: Car[] = await getBodiesByCarModel(modelId);
        dispatch(setBodyName(bodiesResponse[0].name));
        setBodies(bodiesResponse);
        setIsLoading(false);
        console.log(bodiesResponse);
    }

    useEffect(() => {
        loadData();
    }, []);

    return isLoading ? (
        <Spinner size={SIZE_TYPES.big}></Spinner>
    ) : (
        <Header
            title={modelName}
            subTitle={bodyName}
            price={totalPrice}
        ></Header>
    );
};

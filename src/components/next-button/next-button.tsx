/** React imports */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

/** Third-party imports */
import { Button } from '@material-ui/core';

/** Local imports */
import { routes, Router } from '@shared/routes';
import { setDisabledNextButton } from '@shared/actions';
import { State } from '@shared/state';
import { useStyles } from './styles';

const NextButtonInternal: React.FC<RouteComponentProps> = props => {
    const [t] = useTranslation('common');
    const dispatch = useDispatch();
    const classes = useStyles();

    const { disabledNextButton } = useSelector((state: State) => state.layout);

    function onNextPage(): void {
        const indexRouter = routes.findIndex(
            (route: Router) => route.path === props.location.pathname
        );
        const nextRoute: Router = routes[indexRouter + 1];
        dispatch(setDisabledNextButton(true));
        props.history.push(nextRoute.path);
    }

    return (
        <div className={classes.wrapped}>
            <Button
                classes={{
                    contained: classes.contained,
                    sizeLarge: classes.sizeLarge,
                    containedPrimary: classes.containedPrimary,
                    disabled: classes.disabled
                }}
                size={'large'}
                variant={'contained'}
                onClick={() => onNextPage()}
                disabled={disabledNextButton}
            >
                {t('next')}
            </Button>
        </div>
    );
};

export const NextButton = withRouter(NextButtonInternal);

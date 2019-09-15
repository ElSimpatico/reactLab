/** Third-party imports */
import { RouteComponentProps } from 'react-router';

/** Local imports */
import { Router } from '@shared/routes';

export interface NavigationPageProps extends RouteComponentProps {
    routes: Router[];
}

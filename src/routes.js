import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/components/Main';

const Routes = createAppContainer(createSwitchNavigator({ Main }));

export default Routes;

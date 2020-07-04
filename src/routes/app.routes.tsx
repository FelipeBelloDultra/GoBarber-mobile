import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashborad from '../pages/Dashborad';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Dashborad" component={Dashborad} />
  </App.Navigator>
);

export default AppRoutes;

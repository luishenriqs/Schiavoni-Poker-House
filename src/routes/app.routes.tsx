import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Logout } from '../pages/Logout';
import { NewGame } from '../pages/NewGame';
import { NewPlayer } from '../pages/NewPlayer';
import { FinancialRoutes } from '../pages/Financial/Financial.routes';
import { PlayersRoutes } from '../pages/Play/Players.routes';

// import { Background } from 'victory-native';
// import { ActivityIndicatorComponent } from 'react-native';

const Drawer = createDrawerNavigator();

// Route to app menu;
export function AppRoutes() {
  return (
    <Drawer.Navigator
      // initialRouteName='Play'

      // drawerStyle={{
      //   backgroundColor: '#1780A1',
      //   width: 200,
      // }}
      // drawerContentOptions={{
      //   activeTintColor: '#FFF',
      //   inactiveTintColor: '#723C70',
      //   itemStyle: {borderRadius: 8},
      //   labelStyle: {fontWeight: 'bold'}
      // }}
    >
      <Drawer.Screen 
        name="Play"
        component={PlayersRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen 
        name="NewGame" 
        component={NewGame}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen 
        name="NewPlayer" 
        component={NewPlayer}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen 
        name="Financeiro" 
        component={FinancialRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen 
        name="Logout" 
        component={Logout}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

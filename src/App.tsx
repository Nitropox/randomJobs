import React, { ReactNode } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GeneratorScreen } from 'components/GeneratorScreen/GeneratorScreen';
import { AppContextProvider } from 'components/AppContext/AppContext';
import { JobsListScreen } from 'components/JobListScreen/JobsListScreen';
import { FiltersModal } from 'components/FiltersModal/FiltersModal';

type RootStackParamList = {
  Generator: undefined;
  Jobs: undefined;
  Filters: undefined;
};

export type ScreenProp = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App = (): JSX.Element => {
  return (
    <AppContextProvider>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Generator"
            component={GeneratorScreen}
            options={{
              header: (): ReactNode => null,
            }}
          />
          <Stack.Screen
            name="Jobs"
            component={JobsListScreen}
            options={{
              header: (): ReactNode => null,
            }}
          />
          <Stack.Screen
            name="Filters"
            component={FiltersModal}
            options={{
              header: (): ReactNode => null,
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
};

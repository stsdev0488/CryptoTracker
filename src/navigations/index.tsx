import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Home } from '@screens/Home';
import { AddCrypto } from '@screens/AddCrypto';

const AppNavigator = createStackNavigator();
export const AppNavigation = () => {
  return (
    <AppNavigator.Navigator initialRouteName="Home">
      <AppNavigator.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name="AddCrypto"
        component={AddCrypto}
        options={{
          title: '',
          headerLeft: ({ onPress }) => (
            <TouchableOpacity
              style={styles.headerLeftContainer}
              onPress={onPress}
            >
              <Icon name="chevron-left" color="#385774" size={24} />
              <Text style={styles.headerLeftTitle}>Back to list</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </AppNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  headerLeftTitle: {
    color: '#385774',
    fontSize: 16,
  },
});

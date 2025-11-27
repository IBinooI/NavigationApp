import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 42,
            itemName: 'Sample Item',
          })
        }
      />

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;

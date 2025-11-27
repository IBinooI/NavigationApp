import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  const { itemId, itemName } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.text}>Item ID: {itemId}</Text>
      <Text style={styles.text}>Item Name: {itemName}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />

      <Button
        title="Update Params"
        onPress={() => navigation.setParams({ itemName: 'Updated Item' })}
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
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DetailsScreen;

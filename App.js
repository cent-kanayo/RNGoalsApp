import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);
  const onGoalHandler = (value) => {
    setGoal(value);
  };
  const onAddHandler = () => {
    setGoalsList((prev) => [...prev, goal]);
    setGoal('');
    console.log(goalsList);
  };
  return (
    <View style={styles.appContainer}>
      <StatusBar style="dark" />
      <View style={styles.inputArea}>
        <TextInput
          value={goal}
          onChangeText={onGoalHandler}
          style={styles.input}
          placeholder="Enter your goals"
        />
        <Button onPress={onAddHandler} title="Add Goal" />
      </View>
      <View style={styles.listContainer}>
        <Text>Goals List</Text>
        {goalsList.map((goal) => (
          <View style={styles.listItems} key={goal}>
            <Text style={styles.listItemsText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputArea: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'red',
    paddingBottom: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    flex: 1,
    borderColor: '#cccccc',
    height: 30,
    padding: 8,
  },
  listContainer: {
    flex: 5,
  },
  listItems: {
    marginVertical: 16,
    padding: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 8,
  },
  listItemsText: {
    color: 'white',
  },
});

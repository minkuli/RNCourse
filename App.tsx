import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [courseGoals, setCourseGoals] = useState<{ text: string; id: string; }[]>([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals(currentGoals => [...currentGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (goalId: string) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

   

  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.appContainer}>
        <Button title="Add new goal" color="#520623" onPress={startAddGoalHandler} />
        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList 
            data={courseGoals}
            renderItem={({ item }) => (
              <GoalItem item={item} onDeleteGoal={deleteGoalHandler} />
            )}
            keyExtractor={(item, index) => index.toString()}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#d65a8a',
  },
  goalsContainer: {
    flex: 5,
  },
});

import { StyleSheet, View, Text, Pressable } from "react-native";

interface GoalItem {
    text: string;
    id: string;
}
interface GoalItemProps {
  item: GoalItem;
  onDeleteGoal: (goalId: string) => void;
}

export const GoalItem = ({ item, onDeleteGoal }: GoalItemProps) => {
    const deleteGoalHandler = () => {   
        onDeleteGoal(item.id);
    }

  return (
    <View style={styles.goalItem}>
        <Pressable android_ripple={{color: '#dddddd'}} onPress={deleteGoalHandler} style={(pressed) => pressed && styles.pressedItem}>
            <Text style={styles.goalItemText}>{item.text}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        backgroundColor: '#82334a',
        borderWidth: 1,
        borderColor: '#5e0acc',
        borderRadius: 6
    },
    goalItemText: {
      padding: 8,
      color: 'black',
      fontSize: 16
    },
    pressedItem: {
        backgroundColor: '#dddddd'  
    }
  });
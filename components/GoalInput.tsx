import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";



interface GoalInputProps {
  onAddGoal: (enteredText: string) => void;
  visible: boolean;
  onCancel: () => void;
}

export const GoalInput = ({ onAddGoal, visible, onCancel }: GoalInputProps) => {
    const [enteredGoalText, setEnteredGoalText] = useState<string>('');

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText);
        setEnteredGoalText(''); 
    }
    return (
    <Modal visible={visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image source={require('../assets/images/image.png')} style={styles.image}/>
            <TextInput style={styles.textInput} placeholder="Your course goal" onChangeText={goalInputHandler} value={enteredGoalText}/>
            <View style={styles.buttonContainer}>
                <View>
                    <Button title="Add goal" onPress={addGoalHandler} color='#46574a'/>
                </View>
                <View>
                    <Button title="Cancel" onPress={onCancel} color='#f31282'/>
                </View>
            </View>
        </View>
    </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#f1f1f1",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#cccccc',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#f31282',
        borderRadius: 6,
        backgroundColor: '#e3b3c1',
        color: '#252e27',
        width: '80%',
        marginRight: 8,
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    }
    });
import { StatusBar } from "expo-status-bar";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { appStyles as styles } from "./AppStyles";

export default function App() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <Text style={styles.title}>TODO App</Text>
            <Text style={styles.disc}>
                Enter your task in the text box to add new task.
            </Text>

            <TextInput
                style={styles.textbox}
                placeholder="Write your task."
                value={task}
                onChangeText={setTask}
            />

            <TouchableOpacity
                onPress={addTask}
                style={styles.taskButtonContainer}
            >
                <Text style={styles.taskButton}>Add Task</Text>
            </TouchableOpacity>

            <FlatList
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.taskItem}>
                        <Text style={styles.taskText}>{item}</Text>
                        <TouchableOpacity
                            hitSlop={90}
                            onPress={() => deleteTask(index)}
                        >
                            <Text style={styles.deleteButton}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            <StatusBar style="dark" />
        </SafeAreaView>
    );
}


import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    disc: {
        fontSize: 16,
        marginBottom: 20,
    },
    textbox: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    taskButtonContainer: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 20,
    },
    taskButton: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    taskItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: "#f3f3f3",
        borderRadius: 5,
        marginBottom: 10,
    },
    taskText: {
        fontSize: 16,
    },
    deleteButton: {
        color: "red",
        fontWeight: "bold",
    },
});


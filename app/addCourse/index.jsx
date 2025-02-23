import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constant/Colors'
import Button from '../../components/Shared/Button'
export default function AddCourse() {
    const [loading, setloading] = useState(false);
    const OnGenerateTopic = () => {
        // Get topic idea from AI
    };  
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create New Course!</Text>
            <Text style={styles.subTitle}>What you want to learn today?</Text>
            <Text style={styles.description}>Write what course you want to create. (Ex: Learn React Js, Digital Marketing Guide, 10th Science Chapter)</Text>

            <View style={styles.inputWrapper}>
                <TextInput placeholder='Ex: Learn Web Development' numberOfLines={3} multiline={true} style={styles.inputText} />

                <Button text={"Create Course"} type="outline" onPress={() => { }} loading={loading} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        paddingTop: Platform.OS === "ios" && 45,
        backgroundColor: Colors.BG_GRAY,
        flex: 1,
        gap: 10
    },
    title: {
        fontSize: 30,
        fontFamily: "outfit-bold",
        color: Colors.BLACK
    },
    subTitle: {
        fontSize: 25,
        fontFamily: "outfit",
        color: Colors.BLACK
    },
    description: {
        fontSize: 16,
        color: Colors.GRAY,
        fontFamily: "outfit",
        textAlign: "justify"
    },
    inputText: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
        fontFamily: "outfit",
        color: Colors.BLACK,
        height: 100,
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    inputWrapper: {
        gap: 20,
        width: "100%"
    }
})
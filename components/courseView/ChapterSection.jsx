import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constant/Colors'
import ChapterCard from './ChapterCard'

export default function ChapterSection({ course }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chapters</Text>

            <FlatList
                data={course.chapters}
                renderItem={({ item, index }) => (
                    <ChapterCard key={index} chapter={item} index={index+1} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: Colors.BG_GRAY,
    },
    title: {
        fontSize: 25,
        fontFamily: "outfit-bold",
        color: Colors.BLACK
    }
})
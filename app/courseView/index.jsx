import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Colors } from '../../constant/Colors';
import Intro from '../../components/courseView/Intro';
import ChapterSection from '../../components/courseView/ChapterSection';

export default function courseView() {
    const { courseParams } = useLocalSearchParams();
    const course = JSON.parse(courseParams);
    return course && (

        <FlatList
            data={[]}
            ListHeaderComponent={
                <View style={styles.container}>
                    <Intro course={course} />
                    <ChapterSection course={course} />
                </View>
            }
        />
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "ios" && 45,
        backgroundColor: Colors.BG_GRAY,
    }
})
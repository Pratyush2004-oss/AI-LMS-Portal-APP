import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { imageAssets } from '../../constant/Option'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constant/Colors'
import * as Progress from "react-native-progress";
import ProgressCard from '../Shared/ProgressCard'
export default function ProgressDetail({ courseList }) {
    const GetCompletedChapter = (course) => {
        const completedChapter = course?.completedChapter?.length;
        const perc = completedChapter / course?.chapters?.length;
        return perc;
    }
    const getCompletedChapterLength = (course) => {
        return course?.completedChapter?.length ?? 0;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Progress</Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={courseList}
                renderItem={({ item, index }) => (
                    <ProgressCard item={item} course={item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title: {
        fontSize: 25,
        fontFamily: "outfit-bold",
        color: Colors.WHITE
    },
    CourseTitle: {
        fontSize: 19,
        fontFamily: "outfit-bold",
        flexWrap: 'wrap'
    },
    titleContainer: {
        width: 175
    },
    itemWrapper: {
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 275,
        marginRight: 10
    },
    imageWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        gap: 10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10
    },
    ProgressContainer: {
        marginBottom: 10,
        gap: 4
    }

})
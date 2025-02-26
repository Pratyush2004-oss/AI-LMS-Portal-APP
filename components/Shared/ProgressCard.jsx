import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import * as Progress from 'react-native-progress'
import { imageAssets } from '../../constant/Option'
import { Colors } from '../../constant/Colors'
export default function ProgressCard({ item, course }) {
    const getCompletedChapterLength = (course) => {
        return course?.completedChapter?.length ?? 0;
    }
    const GetCompletedChapter = (course) => {
        const completedChapter = course?.completedChapter?.length;
        const perc = completedChapter / course?.chapters?.length;
        return perc;
    }
    return (
        <View style={styles.itemWrapper}>
            <View style={styles.imageWrapper}>
                <Image source={imageAssets[item.banner_image]} style={styles.image} />
                <View style={styles.titleContainer}>
                    <Text style={styles.CourseTitle} numberOfLines={2}>{item.courseTitle}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, flexWrap: 'wrap' }}>
                        <Ionicons name="book-outline" size={17} color={Colors.BLACK} />
                        <Text style={{ fontFamily: 'outfit' }}>
                            {item.chapters.length} Chapters</Text>
                    </View>
                </View>
            </View>
            <View style={styles.ProgressContainer}>
                <Progress.Bar progress={GetCompletedChapter(item)} width={250} color={Colors.PRIMARY} />
                <Text style={{ fontFamily: 'outfit' }}>{ }{getCompletedChapterLength(item)} out of {item.chapters.length} Chapter Completed</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
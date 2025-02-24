import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { imageAssets } from '../../constant/Option'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constant/Colors'
import * as Progress from "react-native-progress";
export default function ProgressDetail({ courseList }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Progress</Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={courseList}
                renderItem={({ item, index }) => (
                    <View key={index} style={styles.itemWrapper}>
                        <View style={styles.imageWrapper}>
                            <Image source={imageAssets[item.banner_image]} style={styles.image} />
                            <View style={styles.titleContainer}>
                                <Text style={styles.CourseTitle} numberOfLines={2}>{item.courseTitle}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, flexWrap: 'wrap' }}>
                                    <Ionicons name="book-outline" size={17} color="black" />
                                    <Text style={{ fontFamily: 'outfit' }}>
                                        {item.chapters.length} Chapters</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.ProgressContainer}>
                            <Progress.Bar progress={1 / item.chapters.length} width={250} color={Colors.PRIMARY} />
                            <Text style={{ fontFamily: 'outfit' }}>1 out of {item.chapters.length} Chapter Completed</Text>
                        </View>
                    </View>
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
        fontFamily: "outfit-bold"
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
        backgroundColor: Colors.BG_GRAY,
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
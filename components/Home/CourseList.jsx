import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { imageAssets } from '../../constant/Option'
import { Colors } from '../../constant/Colors'
import { Ionicons } from '@expo/vector-icons'
export default function CourseList({ courseList }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Courses</Text>
            <FlatList
                style={styles.courseContainer}
                data={courseList}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View key={index} style={styles.itemContainer}>
                        <Image source={imageAssets[item.banner_image]} style={styles.image} />
                        <Text style={styles.courseTitle}>{item.courseTitle}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Ionicons name="book-outline" size={17} color="black" />
                            <Text style={{ fontFamily: 'outfit' }}>
                                {item.chapters.length} Chapters</Text>
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
        fontFamily: "outfit-bold",
    },
    courseContainer: {
        gap: 10,
    },
    itemContainer: {
        gap: 5,
        padding: 10,
        backgroundColor: Colors.BG_GRAY,
        borderRadius: 15,
        marginRight: 10,
        width: 260,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 10,
        marginTop: 10
    },
    courseTitle: {
        fontSize: 18,
        fontFamily: "outfit-bold",
    }
})
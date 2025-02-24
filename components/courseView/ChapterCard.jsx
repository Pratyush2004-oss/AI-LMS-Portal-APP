import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constant/Colors'
import { Ionicons } from '@expo/vector-icons'

export default function ChapterCard({ chapter, index }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{index}.</Text>
            <Text style={styles.title} numberOfLines={1}>{chapter.chapterName}</Text>
            <TouchableOpacity style={styles.btn}>
                <Ionicons name='play' size={20} color={Colors.PRIMARY} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: Colors.BG_GRAY,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: Colors.BLACK,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 14,
        fontFamily: "outfit-bold",
        color: Colors.BLACK,
        marginRight: 10,
        flexWrap: 'wrap',
        maxWidth: '80%'
    },
    btn:{
        borderRadius: 10,
        marginLeft: 'auto'
    }
})
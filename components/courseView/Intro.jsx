import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { imageAssets } from '../../constant/Option'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constant/Colors'
import Button from '../Shared/Button'
import { useRouter } from 'expo-router'
export default function Intro({ course }) {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <Image source={imageAssets[course.banner_image]} style={styles.image} />
      <View style={{ padding: 15 }}>
        <Text style={styles.courseTitle}>{course.courseTitle}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Ionicons name="book-outline" size={17} color="black" />
          <Text style={{
            fontFamily: 'outfit', fontSize: 18
          }}>
            {course.chapters.length} Chapters</Text>
        </View>
        <Text style={[styles.description, { marginTop: 15, fontSize: 20, fontFamily: "outfit-bold", color: Colors.BLACK }]}>Description: </Text>
        <Text style={styles.description}>{course.description}</Text>

        <Button text={'Start Now'} type='fill' onPress={() => { }} />
      </View>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="arrow-back-circle-outline" size={35} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  courseTitle: {
    fontSize: 25,
    fontFamily: "outfit-bold",
    marginTop: 10
  },
  description: {
    fontFamily: "outfit",
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'justify',
    marginVertical: 5,
    color: Colors.GRAY,
  },
  backBtn: {
    position: 'absolute',
    top: 15,
    left: 15,
    borderRadius: 50,
  }
})
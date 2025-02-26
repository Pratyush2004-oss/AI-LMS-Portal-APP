import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constant/Colors'
import { CourseCategory } from "../../constant/Option"
import CourseListByCategory from '../../components/Explore/CourseListByCategory'
export default function Explore() {
  return (
    <FlatList
      style={{flex: 1, backgroundColor: Colors.WHITE}}
      data={[]}
      ListHeaderComponent={
        <View style={styles.container}>
          <Text style={styles.title}>Explore More Courses</Text>

          {
            CourseCategory.map((item, index) => (
              <View key={index} style={{ marginTop: 10 }}>
                <CourseListByCategory category={item} />
              </View>
            ))
          }
        </View>
      }
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: Colors.WHITE,
    flex: 1
  },
  title: {
    fontSize: 30,
    fontFamily: "outfit-bold"
  }
})
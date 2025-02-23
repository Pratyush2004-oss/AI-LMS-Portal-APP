import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import { Colors } from '../../constant/Colors'
import EmptyState from '../../components/Home/EmptyState'
export default function home() {
  return (
    <View style={styles.container}>
      <Header />

      <EmptyState />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: Platform.OS === "ios" && 45,
    flex: 1,
    backgroundColor: Colors.WHITE
  }
})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { UserDetailContext } from '../../context/UserdetailContext'
import { Ionicons } from '@expo/vector-icons';
export default function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return userDetail && (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Hello, {userDetail.name.split(' ')[0]} 👋🏼 </Text>
        <Text style={styles.subTitle}>Let's Get Started</Text>
      </View>
      <TouchableOpacity>
        <Ionicons name='settings-outline' size={35} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 30
  },
  subTitle: {
    fontSize: 20,
    fontFamily: "outfit"
  }
})
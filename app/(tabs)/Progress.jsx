import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailContext } from '../../context/UserdetailContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../configs/firebaseConfig';
import ProgressCard from '../../components/Shared/ProgressCard';
import { Colors } from '../../constant/Colors';
import { useRouter } from 'expo-router';

export default function Progress() {
  const [courseList, setcourseList] = useState([]);
  const { userDetail } = useContext(UserDetailContext);
  const [loading, setloading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    userDetail && GetCourseList();
  }, [userDetail]);

  const GetCourseList = async () => {
    setloading(true);
    const q = query(collection(db, "Courses"),
      where("createdBy", "==", userDetail.email));
    const querySnapshot = await getDocs(q);

    setcourseList([]);
    querySnapshot.forEach((doc) => {
      setcourseList(prev => [...prev, doc.data()]);
    });
    setloading(false);
  }
  return (
    <View>
      <Image
        source={require('../../assets/images/wave.png')}
        style={{ width: '100%', height: 650, position: 'absolute' }}
      />
      <View style={{ padding: 20, marginTop: 20, gap: 20 }}>
        <Text style={styles.title}>Course Progress</Text>
        <FlatList
          refreshing={loading}
          onRefresh={() => GetCourseList()}
          data={courseList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index} style={{ marginBottom: 20 }} onPress={() => router.push({
              pathname: `/courseView/${item.docId}`,
              params: {
                courseParams: JSON.stringify(item)
              }
            })} >
              <ProgressCard item={item} width={'97%'} />
            </TouchableOpacity>
          )}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontFamily: "outfit-bold",
    color: Colors.WHITE
  },
})
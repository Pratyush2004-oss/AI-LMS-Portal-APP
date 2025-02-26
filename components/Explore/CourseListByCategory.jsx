import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db } from '../../configs/firebaseConfig'
import { imageAssets } from '../../constant/Option';
import { Colors } from '../../constant/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import CourseList from '../Home/CourseList';
export default function CourseListByCategory({ category }) {
    const [courseList, setcourseList] = useState();
    const [loading, setloading] = useState(false)

    useEffect(() => {
        getCourseListByCategory();
    }, []);
    const router = useRouter();

    const getCourseListByCategory = async () => {
        try {
            setloading(true);
            const q = query(collection(db, "Courses"),
                where("category", "==", category));
            const querySnapShot = await getDocs(q);
            setcourseList([]);
            querySnapShot.forEach((doc) => {
                setcourseList(prev => [...prev, doc.data()]);
            });

        } catch (error) {
            console.log(error)
        }
        finally {
            setloading(false);
        }
    }

    return courseList && (
        <View>
            {
                courseList.length > 0 && <CourseList courseList={courseList} category={category} enroll={true} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
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
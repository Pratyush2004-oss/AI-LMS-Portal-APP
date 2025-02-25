import { ActivityIndicator, Dimensions, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as Progress from "react-native-progress";
import { Colors } from '../../constant/Colors';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../configs/firebaseConfig'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
export default function ChapterView() {
    const { chapterParams, docId, chapterIndex, chapterName } = useLocalSearchParams();
    const chapters = JSON.parse(chapterParams);
    const [currentPage, setcurrentPage] = useState(0);
    const [loading, setloading] = useState(false);
    const router = useRouter();
    const GetProgress = (currentPage) => {
        const perc = currentPage / (chapters?.content?.length - 1);
        return perc;
    }

    const OnChapterComplete = async () => {
        setloading(true);
        // Save Chapter Complete 
        try {
            await updateDoc(doc(db, 'Courses', docId), {
                completedChapter: arrayUnion(chapterIndex)
            })
            ToastAndroid.show("Chapter Completed Successfully", ToastAndroid.BOTTOM);
        } catch (error) {
            console.log(error)
        }
        finally {
            setloading(false);
        }

        // Go Back
        router.replace(`/courseView/${docId}`);
    }
    return chapters && (
        <View style={styles.container}>
            <Text style={styles.title}>{chapterIndex} : {chapterName}</Text>
            <Progress.Bar progress={GetProgress(currentPage)} width={Dimensions.get('screen').width * 0.85} color={Colors.PRIMARY} style={{ marginTop: 20 }} />
            <Text style={{ fontFamily: 'outfit', textAlign: 'center', marginTop: 5 }}>{currentPage + 1} out of {chapters.content.length}</Text>

            <View style={styles.chapterContainer}>
                <View>
                    <Text style={styles.title}>{chapters.content[currentPage].topic}</Text>
                    {
                        chapters.content[currentPage].explain && (
                            <Text style={styles.explaination}>{chapters.content[currentPage].explain}</Text>
                        )
                    }
                </View>
                {
                    chapters.content[currentPage].example && (
                        <View>
                            <Text style={[styles.title, { fontSize: 18 }]}>Example : </Text>
                            <Text style={styles.exampleCode}>{chapters.content[currentPage].example}</Text>
                        </View>
                    )
                }
                {
                    chapters.content[currentPage].code && (
                        <View>
                            <Text style={[styles.title, { fontSize: 18 }]}>Code : </Text>
                            <Text style={[styles.exampleCode, { backgroundColor: Colors.BLACK, color: Colors.WHITE }]}>{chapters.content[currentPage].code}</Text>
                        </View>
                    )
                }
            </View>

            <View style={styles.btnContainer}>
                {
                    currentPage > 0 ? (
                        <TouchableOpacity onPress={() => setcurrentPage(currentPage - 1)} disabled={currentPage === 0}>
                            <Ionicons name='arrow-back-circle-outline' size={35} color={Colors.PRIMARY} />
                        </TouchableOpacity>
                    ) : (<View></View>)
                }
                <Text style={{ fontFamily: 'outfit', textAlign: 'center', marginTop: 5 }}>{currentPage + 1} out of {chapters.content.length}</Text>
                {
                    currentPage < chapters.content.length - 1 ? (
                        <TouchableOpacity onPress={() => setcurrentPage(currentPage + 1)} disabled={currentPage === chapters.content.length - 1}>
                            <Ionicons name='arrow-forward-circle-outline' size={35} color={Colors.PRIMARY} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.btn} onPress={() => OnChapterComplete()} >
                            {
                                loading ? (
                                    <ActivityIndicator color={Colors.WHITE} />
                                ) : (
                                    <Text style={styles.btnTxt}>Finish</Text>
                                )
                            }
                        </TouchableOpacity>
                    )
                }
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BG_GRAY,
        padding: 20
    },
    chapterContainer: {
        flex: 1,
        backgroundColor: Colors.BG_GRAY,
        borderRadius: 10,
        marginTop: 20,
        gap: 15
    },
    title: {
        fontSize: 23,
        fontFamily: "outfit-bold",
        color: Colors.BLACK
    },
    explaination: {
        fontSize: 18,
        textAlign: 'justify',
        fontFamily: "outfit",
        color: Colors.GRAY
    },
    exampleCode: {
        gap: 5,
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
        fontFamily: "outfit",
    },
    btnContainer: {
        position: 'absolute',
        bottom: 10,
        left: 15,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btn: {
        padding: 10,
        backgroundColor: Colors.GREEN,
        borderRadius: 10,
        color: Colors.WHITE
    },
    btnTxt: {
        fontFamily: "outfit-bold",
        color: Colors.WHITE,
    },

})
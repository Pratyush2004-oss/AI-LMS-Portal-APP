import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constant/Colors';
import * as Progress from 'react-native-progress';
import Button from '../../components/Shared/Button';
export default function Quiz() {
    const { courseParams } = useLocalSearchParams();
    if (courseParams) {
        const course = JSON.parse(courseParams);
    }
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/wave.png')} style={styles.wave} />
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Pressable>
                        <Ionicons name="arrow-back" size={35} color={Colors.WHITE} />
                    </Pressable>
                    <Text style={{ color: Colors.WHITE, fontSize: 25, fontFamily: 'outfit-bold' }}>0 of 5</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Progress.Bar progress={0.3} width={Dimensions.get('screen').width * 0.85} color={Colors.LIGHT_GREEN} />
                </View>
                <View style={styles.quizContainer}>
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
                <Button text={'Next'} type='fill' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {

    },
    wave: {
        width: '100%',
        height: 800,
    },
    quizContainer: {
        padding: 20,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        marginTop: 20,
        height: Dimensions.get('screen').height * 0.7,
        elevation: 5
    }
})
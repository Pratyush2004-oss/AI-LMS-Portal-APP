import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constant/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from "@/configs/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useContext } from "react";
import { UserDetailContext } from "@/context/UserdetailContext";

export default function Index() {
  const {setuserDetail} = useContext(UserDetailContext);
  const router = useRouter();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const result = await getDoc(doc(db, "users", user.email));
      setuserDetail(result.data());
      router.replace("(tabs)/Home");
    }
  })
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/landing.png")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to Coaching Guru</Text>
        <Text style={styles.description}>
          Transform your ideas into engaging educational content, effortlessly
          with AI!! 📚🤖{" "}
        </Text>
        <View style={styles.btnWrapper}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => router.push("/auth/signup")}
          >
            <Text style={styles.btnTxt}>Get Started</Text>
            <Ionicons name="arrow-forward" size={24} color={Colors.PRIMARY} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btn,
              {
                backgroundColor: Colors.PRIMARY,
                borderColor: Colors.WHITE,
                borderWidth: 1,
              },
            ]}
            onPress={() => router.push("/auth/signin")}
          >
            <Text style={[styles.btnTxt, { color: Colors.WHITE }]}>
              Already have an Account?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
  },
  image: {
    height: 300,
    width: "100%",
    borderRadius: 10,
    marginTop: 70,
  },
  textContainer: {
    height: "100%",
    backgroundColor: Colors.PRIMARY,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 25,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: Colors.WHITE,
    fontFamily: "outfit-bold",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "outfit",
    color: Colors.WHITE,
    marginTop: 20,
    lineHeight: 25,
    letterSpacing: 1.6,
  },
  btnWrapper: {
    marginTop: 30,
    gap: 20,
  },
  btn: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  btnTxt: {
    fontSize: 18,
    fontFamily: "outfit-bold",
    color: Colors.PRIMARY,
  },
});

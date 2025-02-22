import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constant/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();
  const [showPassword, setshowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Welcome Back</Text>
      <View style={styles.textInputWrapper}>
        <TextInput placeholder="Email" style={styles.textInput} />
        <TextInput
          placeholder="password"
          style={styles.textInput}
          {...(showPassword && { secureTextEntry: true })}
        />
        <TouchableOpacity
          onPress={() => setshowPassword(!showPassword)}
          style={{
            position: "absolute",
            right: 20,
            top: 145,
          }}
        >
          {showPassword ? (
            <Ionicons name="eye-off-outline" size={24} color={Colors.BLACK} />
          ) : (
            <Ionicons name="eye-outline" size={24} color={Colors.BLACK} />
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.login}>
        <Text style={styles.loginTxt}>Don't have an account! </Text>
        <Pressable onPress={() => router.push("/auth/signup")}>
          <Text
            style={[
              styles.loginTxt,
              { color: Colors.PRIMARY, fontFamily: "outfit-bold" },
            ]}
          >
            Register Now
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: "outfit-bold",
  },
  textInputWrapper: {
    width: "100%",
    marginTop: 30,
    gap: 20,
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    fontFamily: "outfit",
  },
  btn: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
  },
  btnTxt: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: "outfit-bold",
    textAlign: "center",
  },
  login: {
    position: "absolute",
    bottom: 20,
    padding: 20,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  loginTxt: {
    fontSize: 18,
    fontFamily: "outfit",
  },
});

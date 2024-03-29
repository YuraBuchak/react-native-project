import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { AuthInput } from "./AuthTextInput";
import { useNavigation } from "@react-navigation/native";

export const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const data = {
    login,
    email,
    password,
  };

  const navigation = useNavigation();

  const handleShowPass = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const changeLogin = (text) => {
    setLogin(text);
  };

  const changeEmail = (text) => {
    setEmail(text);
  };

  const changePass = (text) => {
    setPassword(text);
  };

  const handleAuthentication = () => {
    console.log(data);
    navigation.navigate("BottomNavigator");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image style={styles.placeholderUserImage} />
          <View style={styles.iconWrapper}>
            <AntDesign name="plus" size={20} color="#FF6C00" />
          </View>
        </View>

        <Text style={styles.title}>Реєстрація</Text>

        <View style={styles.form}>
          <AuthInput
            value={login}
            placeholder={"Логін"}
            onChangeText={changeLogin}
          />
          <AuthInput
            value={email}
            placeholder={"Адреса електронної пошти"}
            onChangeText={changeEmail}
          />
          <AuthInput
            value={password}
            placeholder={"Пароль"}
            secureTextEntry={isPasswordHidden ? true : false}
            onChangeText={changePass}
          />
          <TouchableOpacity style={styles.showText} onPress={handleShowPass}>
            <Text style={styles.showPassword}>
              {isPasswordHidden ? "Показати" : "Приховати"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={handleAuthentication}>
            <Text style={styles.btnText}>Зареєструватися</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#ffffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 66,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#212121",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 33,
  },
  form: {
    width: "100%",
  },
  input: {
    position: "relative",
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    fontSize: 16,
    color: "#212121",
    fontWeight: "400",
    lineHeight: 18,
  },
  showText: {
    position: "absolute",
    top: 176,
    right: 16,
    fontSize: 16,
  },
  showPassword: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
  },
  btn: {
    width: "100%",
    marginTop: 27,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "400",
    lineHeight: 18,
  },
  linkText: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18,
  },
  imageWrapper: {
    position: "absolute",
    transform: [{ translateY: -60 }],
    top: 0,
  },
  placeholderUserImage: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  iconWrapper: {
    position: "absolute",
    bottom: 14,
    right: 114,
    borderColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: 50,
    padding: 2,
    backgroundColor: "transparent",
    transform: [{ translateX: 125 }],
  },
});

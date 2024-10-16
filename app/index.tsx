import { Link, router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  const [count, setCount] = useState(0);
  // const onPress = () => setCount((count) => count + 1);

  console.log(text, number);
  console.log(typeof text, typeof number);

  const onPress = () => {
    router.push("/(tabs)");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.titleContainer}>Login</Text>
        <View style={styles.loginContainer}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Digite seu email"
            keyboardType="email-address"
          />
          <Text>Senha</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNumber}
            value={number}
            placeholder="Digite sua senha"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        {/* <View style={styles.countContainer}>
          <Text>Count: {count}</Text>
        </View> */}
        <View>
          <Link href={"register"}>Cadastrar</Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    color: "#04386aaa",
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 30,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  loginContainer: {
    marginTop: 40,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 40,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});

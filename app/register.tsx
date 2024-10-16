import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Register() {
  return (
    <>
      <View>
        <Text>Teste com Link</Text>
        <View>
          <Link href={"/"}>voltar</Link>
        </View>
      </View>
    </>
  );
}

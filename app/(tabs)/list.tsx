import { Item } from "@/components/item";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import data from "../../constants/dataEx.json";

const styles = StyleSheet.create({
  containerFlat: {
    flex: 1,
  },
  back: {
    paddingHorizontal: 20,
  },
});

export default function List() {
  return (
    <>
      <SafeAreaView style={styles.containerFlat}>
        <FlatList
          style={styles.back}
          data={data}
          renderItem={({ item }) => (
            <Item name={item.nome} age={item.idade} date={item.data} />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
}

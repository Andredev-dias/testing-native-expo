import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: "#4168a4d4",
    margin: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
    height: 80,
  },
});

export const Item = ({
  name,
  age,
  date,
}: {
  name: string;
  age: number;
  date: string;
}) => {
  return (
    <>
      <View style={styles.itemList}>
        <Text>{name}</Text>
        <Text>{age}</Text>
        <Text>{date}</Text>
      </View>
    </>
  );
};

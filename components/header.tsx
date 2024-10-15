import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

const styles = StyleSheet.create({
  tinyLogo: {
    height: 100,
    width: 100,
  },
  background: {
    backgroundColor: "#090909",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  temQserNoText: {
    color: "#ffffff",
  },
});

export const Header = ({ image }: { image: ImageSourcePropType }) => {
  return (
    <>
      <View style={styles.background}>
        <Text style={styles.temQserNoText}>Header exemplo</Text>
        <Image style={styles.tinyLogo} source={image} />
      </View>
    </>
  );
};

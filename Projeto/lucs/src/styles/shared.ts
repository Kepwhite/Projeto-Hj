import { Platform, StatusBar, StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.select({ android: StatusBar.currentHeight }),
    backgroundColor: colors.background,
  },
});

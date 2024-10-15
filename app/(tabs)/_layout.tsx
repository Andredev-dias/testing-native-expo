import { Header } from "@/components/header";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Header image={require("../../assets/images/react-logo.png")} />
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <>
                <h1>👋</h1>
              </>
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="register"
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <>
                <h1>🧑</h1>
              </>
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="list"
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <>
                <h1>🧾</h1>
              </>
            ),
          }}
        ></Tabs.Screen>
      </Tabs>
    </>
  );
}

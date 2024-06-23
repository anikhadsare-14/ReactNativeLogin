import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import colors from "./constants/colors";

export default function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors._e8ecf4 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("./assets/logo.png")}
            style={styles.headerImg}
            alt="Logo"
          />
          <Text style={styles.title}>Sing in to MyApp!</Text>
          <Text style={styles.subtitle}>
            Get access to your portfolio and more
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.inputControl}
              value={form.email}
              keyboardType="email-address"
              placeholder="animesh@gmail.com"
              placeholderTextColor={colors._6b7288}
              onChangeText={(email) => setForm({ ...form, email })}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              secureTextEntry
              style={styles.inputControl}
              value={form.password}
              placeholder="********"
              placeholderTextColor={colors._6b7288}
              onChangeText={(password) => setForm({ ...form, password })}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("Successfully logged in");
              }}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sing In</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              marginTop: "auto",
            }}
          >
            <Text style={styles.formFooter}>
              Don't have an account?{" "}
              <Text style={{ textDecorationLine: "underline" }}>Sing up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 36,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors._1e1e1e,
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: colors._929292,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: colors._222,
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: colors._222,
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  btn: {
    backgroundColor: colors._075ccc,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors._075ccc,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.white,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 16,
    fontWeight: "600",
    color: colors._222,
    textAlign: "center",
    letterSpacing: 0.15,
  },
});

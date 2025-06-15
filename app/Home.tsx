import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Catalogo de Vinhos</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do vinho"
          keyboardType="default"
          autoCapitalize="none"
          value={name}
          onChangeText={setName}
        />
      </View>
        <View style={styles.CardWine}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_953124-MLB82294981060_022025-O-vinho-tinto-cordero-malbec-750ml-mosquita-muerta.webp" alt="Vinho" />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  CardWine: {
    width: "100%",
    height: 130,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingTop: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    marginBottom: 8,
    paddingTop: 10
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: "#F9FAFB",
    fontSize: 16,
    width: "100%",
  },
  button: {
    backgroundColor: "#2563EB",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  backText: {
    textAlign: "center",
    color: "#2563EB",
    fontSize: 16,
    fontWeight: "500",
  },
});

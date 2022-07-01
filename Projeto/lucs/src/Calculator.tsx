import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import {
  Caption,
  Headline,
  Subheading,
  Text,
  TextInput,
  Title,
} from "react-native-paper";
import shared from "./styles/shared";
import DropDown from "react-native-paper-dropdown";
import volumes from "./config/volumes.json";

function Calculator() {
  const dropdownData = volumes.map((v) => ({ label: v.name, value: v.unity }));
  const [showDropdown, setShowDropdown] = useState(false);
  const [unitySelected, setUnitySelected] = useState(dropdownData[0].value);

  const [total, setTotal] = useState("0");
  const [porcentagem, setPorcentagem] = useState("0");

  const totalAlcoolPercent =
    (parseInt(total, 10) / 100) * parseInt(porcentagem, 10);

  return (
    <SafeAreaView style={shared.AndroidSafeArea}>
      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <DropDown
          mode="outlined"
          label="Unidade de Medida"
          showDropDown={() => setShowDropdown(true)}
          onDismiss={() => setShowDropdown(false)}
          list={dropdownData}
          value={unitySelected}
          setValue={(value) => setUnitySelected(value)}
          visible={showDropdown}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
      >
        <TextInput
          mode="outlined"
          label="Volume de líquido"
          style={{ flex: 1 }}
          keyboardType="numeric"
          value={total.replace(/^0+/, "")}
          onChangeText={setTotal}
        />
        <Headline
          style={{ marginHorizontal: 16, width: "20%", textAlign: "center" }}
        >
          {unitySelected}
        </Headline>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
      >
        <TextInput
          mode="outlined"
          label="Porcentagem de alcool"
          style={{ flex: 1 }}
          keyboardType="numeric"
          value={porcentagem.replace(/^0+/, "")}
          onChangeText={setPorcentagem}
        />
        <Headline
          style={{ marginHorizontal: 16, width: "20%", textAlign: "center" }}
        >
          %
        </Headline>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <Title>O total de alcool no líquido é de:</Title>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Subheading>{porcentagem}%</Subheading>
          <Subheading>
            Equivalente a: {totalAlcoolPercent} {unitySelected}
          </Subheading>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Calculator;

import { View, StyleSheet, Text } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import { Listing } from "@/interfaces/listing";
import BottomSheet, { TouchableOpacity } from "@gorhom/bottom-sheet";
import Listings from "./Listings";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import ListingsMap from "./ListingsMap";
import listginsDataGeo from "@/assets/data/airbnb-listings.geo.json";

interface Props {
  listings: Listing[];
  category: string;
}

const ListingsBottomSheet = ({ listings, category }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "100%"], []);
  const [refresh, setRefresh] = useState(0);
  const geoItems = useMemo(() => listginsDataGeo, []);

  const showMap = () => {
    bottomSheetRef.current?.collapse();
    setRefresh(refresh + 1);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingsMap listings={geoItems} />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={{ backgroundColor: Colors.light.grey }}
        enablePanDownToClose={false}
        index={1}
        style={styles.sheetContainer}
      >
        <View style={{ flex: 1 }}>
          <Listings listings={listings} category={category} refresh={refresh} />
          <View style={styles.absoluteView}>
            <TouchableOpacity onPress={showMap} style={styles.btn}>
              <Text style={{ fontFamily: "mon-sb", color: "white" }}>Map</Text>
              <Ionicons name="map" size={20} color={"#fff"} />
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  absoluteView: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: Colors.light.dark,
    padding: 14,
    height: 50,
    borderRadius: 30,
    flexDirection: "row",
    marginHorizontal: "auto",
    alignItems: "center",
    gap: 8,
  },
  sheetContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default ListingsBottomSheet;

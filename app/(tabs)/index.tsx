import { View } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listginsData from "@/assets/data/airbnb-listings.json";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Explore = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listginsData as any, []);
  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <ListingsBottomSheet listings={items} category={category} />
    </View>
  );
};

export default Explore;

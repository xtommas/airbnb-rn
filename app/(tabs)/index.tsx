import { View } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listginsData from "@/assets/data/airbnb-listings.json";

const Explore = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listginsData as any, []);
  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  return (
    <View>
      <View style={{ flex: 1, marginTop: 130 }}>
        <Stack.Screen
          options={{
            header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
          }}
        />
        <Listings listings={items} category={category} />
      </View>
    </View>
  );
};

export default Explore;

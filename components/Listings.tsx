import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";
import { Listing } from "@/interfaces/listing";

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings: items, category }: Props) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlashList<any>>(null);

  useEffect(() => {
    console.log("Reload listings: ", items.length);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<Listing> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.listing}>
          <Image source={{ uri: item.medium_url }} style={styles.image} />
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <FlashList
        renderItem={renderRow}
        data={loading ? [] : items}
        estimatedItemSize={16}
        ref={listRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    padding: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
});

export default Listings;

import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Explore = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Bookings</Link>
      <Link href={"/listing/42069"}>Listing details</Link>
    </View>
  );
};

export default Explore;

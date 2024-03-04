import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import Animated, {
  SlideInDown,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";
import { defaultStyles } from "@/constants/Styles";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { places } from "@/assets/data/places";

// @ts-ignore
import DatePicker from "react-native-modern-datepicker";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const Booking = () => {
  const router = useRouter();
  const [openCard, setOpenCard] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(0);
  const today = new Date().toISOString().substring(0, 10);

  const onClearAll = () => {
    setSelectedPlace(0);
    setOpenCard(0);
  };

  return (
    <BlurView intensity={70} style={styles.container} tint="light">
      {/* Where */}
      <View style={styles.card}>
        {openCard != 0 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(0)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Where</Text>
            <Text style={styles.previewdDate}>I'm flexible</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard === 0 && (
          <>
            <Animated.Text entering={FadeIn} style={styles.cardHeader}>
              Where to?
            </Animated.Text>
            <Animated.View style={styles.cardBody}>
              <View style={styles.searchSection}>
                <Ionicons style={styles.searchIcon} name="search" size={20} />
                <TextInput
                  style={styles.inputField}
                  placeholder="Search destination"
                  placeholderTextColor={Colors.light.grey}
                />
              </View>
            </Animated.View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 25,
                paddingLeft: 20,
                marginBottom: 30,
              }}
            >
              {places.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedPlace(index)}
                >
                  <Image
                    source={item.img}
                    style={
                      selectedPlace === index
                        ? styles.placeSelected
                        : styles.place
                    }
                  />
                  <Text
                    style={[
                      { paddingTop: 6 },
                      selectedPlace === index
                        ? { fontFamily: "mon-sb" }
                        : { fontFamily: "mon" },
                    ]}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}
      </View>

      {/* When */}
      <View style={styles.card}>
        {openCard != 1 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(1)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>When</Text>
            <Text style={styles.previewdDate}>Any week</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard === 1 && (
          <>
            <Animated.Text entering={FadeIn} style={styles.cardHeader}>
              When's your trip?
            </Animated.Text>
            <Animated.View style={styles.cardBody}>
              <DatePicker
                current={today}
                selected={today}
                mode={"calendar"}
                options={{
                  defaultFont: "mon",
                  headerFont: "mon-sb",
                  borderColor: "transparent",
                  mainColor: Colors.light.primary,
                }}
              />
            </Animated.View>
          </>
        )}
      </View>

      {/* Who */}
      <View style={styles.card}>
        {openCard != 2 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(2)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Who</Text>
            <Text style={styles.previewdDate}>Add guests</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard === 2 && (
          <Animated.View>
            <Animated.Text entering={FadeIn} style={styles.cardHeader}>
              Who's coming?
            </Animated.Text>
          </Animated.View>
        )}
      </View>

      {/* Footer */}
      <Animated.View
        style={defaultStyles.footer}
        entering={SlideInDown.delay(200)}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={onClearAll}
            style={{ justifyContent: "center" }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "mon-sb",
                textDecorationLine: "underline",
              }}
            >
              Clear all
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.back()}
            style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 50 }]}
          >
            <Ionicons
              name="search-outline"
              size={24}
              color={"#fff"}
              style={defaultStyles.btnIcon}
            />
            <Text style={defaultStyles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    margin: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    gap: 20,
  },
  cardHeader: {
    fontFamily: "mon-b",
    fontSize: 24,
    padding: 20,
  },
  cardBody: {
    paddingHorizontal: 20,
    // paddingBottom: 20,
  },
  cardPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  searchSection: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 8,
    marginBottom: 4,
  },
  searchIcon: {
    padding: 10,
  },
  inputField: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  placesContainer: {
    flexDirection: "row",
    gap: 25,
  },
  place: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  placeSelected: {
    borderColor: Colors.light.grey,
    borderWidth: 2,
    borderRadius: 10,
    width: 120,
    height: 120,
  },
  previewText: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.light.grey,
  },
  previewdDate: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.light.dark,
  },

  guestItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  itemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.light.grey,
  },
});

export default Booking;

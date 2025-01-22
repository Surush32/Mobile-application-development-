import Reactfor from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function app() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.timeText}>5:26 </Text>
        <View style={styles.icons}>
          <Icon name="signal" size={23} color="black" />
          <Icon name="wifi" size={23} color="black" />
          <Icon name="battery-full" size={23} color="black" />
        </View>
      </View>

      <View style={styles.header}>
        <Icon name="angle-left" size={23} color="black" />
        <Text style={styles.headerText}>OOTD_EVERYDAY</Text>
      </View>
      <Text style={styles.subHeaderText}>Post</Text>

      <View style={styles.profileContainer}>
        <Image
          source={require('./assets/Screenshot 2025-01-21 214303.png' )}
          style={styles.profileImage}
        />

        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>ootd_everyday</Text>
          <Text style={styles.profileSubText}>via frenchia_fry39</Text>
        </View>

        <Icon
          name="ellipsis-h"
          size={22}
          color="black"
          style={styles.ellipsisIcon}
        />
      </View>
      <Image 
        source={require('./assets/Screenshot 2025-01-21 214303.png')}
        style={styles.postImage}
        resizeMode="cover"
        />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },

  timeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  icons: {
    flexDirection: "row",
  },

  icon: {
    marginLeft: 10,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 10,
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    textAlign: "center",
    flex: 1,
    color: "gray",
  },

  subHeaderText: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },

  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 20,
  },

  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 25,
  },

  profileTextContainer: {
    marginLeft: 10,
    flex: 1,
  },

  profileName: {
   fontSize: 16,
   fontWeight: "bold",
  },

  
  profileSubText:
{
  fontSize: 15,
  color: "gray",
},
   ellipsisIcon: {
    marginLeft: 'auto',
  },

  postImage: {
    width: "100%",
    height: "50%",
    marginTop: 22,
  },
});

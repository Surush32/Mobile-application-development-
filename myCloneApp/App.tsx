import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";

export default function App() {
  
  const showAlert = () => {
    Alert.alert("alert", "Alert button pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <Text style={styles.PhoneTime}>5:26 </Text>
        <View style={styles.icons}>
          <Icon name="signal" size={18} color="black" />
          <Icon name="wifi" size={18} color="black" />
          <Icon name="battery-full" size={18} color="black" />
        </View>
      </View>

      <View style={styles.Tittle}>
        <Icon name="angle-left" size={23} color="black" />
        <Text style={styles.headerText}>OOTD_EVERYDAY</Text>
      </View>
      <Text style={styles.subHeaderText}>Posts</Text>

      <View style={styles.horizontalLine2}></View>

      <View style={styles.profileContainer}>
        <Image
          source={require("./assets/Screenshot 2025-01-21 214303.png")}
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
        source={require("./assets/Screenshot 2025-01-21 214303.png")}
        style={styles.postImage}
        resizeMode="cover"
      />

      <View style={styles.actionIcons}>
        <View style={styles.leftIcons}>
          <Icon name="heart-o" size={23} color="black" />
          <Icon
            name="comment-o"
            size={23}
            color="black"
            style={{ marginLeft: 15 }}
          />
          <Icon
            name="paper-plane-o"
            size={23}
            color="black"
            style={{ marginLeft: 15 }}
          />
        </View>
        <Icon
          name="bookmark-o"
          size={23}
          color="black"
          style={styles.bookmarkIcon}
        />
      </View>

      <View style={styles.reactionsContainer}>
        <View style={styles.reactions}>
          <Image
            source={require("./assets/Screenshot 2025-01-21 214303.png")}
            style={styles.reactionImage}
          />
          <Image
            source={require("./assets/Screenshot 2025-01-21 214303.png")}
            style={styles.reactionImage}
          />
          <Image
            source={require("./assets/Screenshot 2025-01-21 214303.png")}
            style={styles.reactionImage}
          />
          <Text style={styles.reactionText}>
            Liked by{" "}
            <Text style={{ fontWeight: "bold" }}>paisley.print.48</Text> and{" "}
            <Text style={{ fontWeight: "bold" }}>7 others</Text>
          </Text>
        </View>
        <Text style={styles.commentText}>
          <Text style={styles.commentAuthor}>frenchie_fry39 </Text>
          Fresh shot on a sunny day!{" "}
          <Icon name="sun-o" size={14} color="yellow" />
        </Text>
        <Text style={styles.viewAllCommentsText}>View all 12 comments</Text>
        <Text style={styles.commentText}>
          <Text style={styles.commentAuthor}>lil_wyatt838 </Text>
          Awesome tones
        </Text>
        <Text style={styles.commentText}>
          <Text style={styles.commentAuthor}>pia.in.a.pod </Text>
          Gorg. Love it! <Icon name="heart" size={14} color="red" />
        </Text>
      </View>

      <View style={styles.timeAndAlertContainer}>
          <Text style={styles.timeAgoText}>1 day ago</Text>
          <TouchableOpacity style={styles.alertbutton} onPress={showAlert}>
            <Text style={styles.alerttext}>Alert</Text>
          </TouchableOpacity>
        </View>

      <View style={styles.navBar}>
        <Icon name="home" size={30} color="black" />
        <Icon name="search" size={30} color="black" />
        <Icon name="play-circle-o" size={30} color="black" />
        <Icon name="shopping-bag" size={30} color="black" />
        <Icon name="user-o" size={30} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 60,
  },
  topPart: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  PhoneTime: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 3,
    marginLeft: 18,
  },
  icons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 10,
  },
  Tittle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 10,
    textAlign: "center",
    flex: 1,
    color: "gray",
  },
  subHeaderText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    marginTop: 1,
    fontWeight: "bold",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 5,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 40,
  },
  profileTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profileSubText: {
    fontSize: 15,
    color: "gray",
  },
  ellipsisIcon: {
    marginLeft: "auto",
  },
  postImage: {
    width: "100%",
    height: "50%",
    marginTop: 8,
  },
  actionIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  leftIcons: {
    flexDirection: "row",
  },
  bookmarkIcon: {
    marginLeft: "auto",
  },
  reactionsContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  reactions: {
    flexDirection: "row",
    alignItems: "center",
  },
  reactionImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: -5,
  },
  reactionText: {
    marginLeft: 16,
    fontSize: 13,
  },
  commentText: {
    marginTop: 7,
    fontSize: 15,
  },
  commentAuthor: {
    fontWeight: "bold",
  },
  viewAllCommentsText: {
    marginTop: 6,
    fontSize: 15,
    color: "gray",
  },
  timeAgoText: {
    marginTop: 5,
    fontSize: 10,
    color: "gray",
  },

  horizontalLine2: {
    borderColor: "#778899",
    borderBottomWidth: 0.5,
    marginVertical: 5,
  },

  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 9,
    borderColor: "#ddd",
    borderTopWidth: 2,
    position: "absolute",
    bottom: 1,
    width: "100%",
    backgroundColor: "#fff",
  },

  timeAndAlertContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 5,
  },
  alertbutton: {
    backgroundColor: "#007BFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  
  alerttext: {
    color: "#fff",
    fontSize: 17,
  },

});

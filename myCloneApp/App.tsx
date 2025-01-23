import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <Text style={styles.PhoneTime}>5:26 </Text>
        <View style={styles.icons}>
          <Icon name="signal" size={23} color="black" />
          <Icon name="wifi" size={23} color="black" />
          <Icon name="battery-full" size={23} color="black" />
        </View>
      </View>

      <View style={styles.Tittle}>
        <Icon name="angle-left" size={23} color="black" />
        <Text style={styles.headerText}>OOTD_EVERYDAY</Text>
      </View>
      <Text style={styles.subHeaderText}>Post</Text>

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
            Liked by paisley, print.48 and 7 others
          </Text>
        </View>
        <Text style={styles.commentText}>
          <Text style={styles.commentAuthor}>frenchie_fry39 </Text>
          Fresh shot on a sunny day! <Icon name="sun-o" size={14} color="yellow" />
        </Text>
        <Text style={styles.viewAllCommentsText}>View all 12 comments</Text>
        <Text style={styles.commentText}>
          <Text style={styles.commentAuthor}>lil_wyatt838 </Text>
          Awsoam tones
        </Text>
        <Text style={styles.commentText}>
          <Text style={styles.commentAuthor}>pai.in.a.pod </Text>
          Gorg. love it! <Icon name="heart" size={14} color="red" />
        </Text>
        <Text style={styles.timeAgoText}>1 day ago</Text>
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
    marginTop: 10,
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
    marginTop: 22,
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

  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 7,
    borderTopWidth: 0,
    borderColor: "#ddd",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
  },
});

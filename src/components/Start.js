/**
 * Tran Hoang Luan
 * 
 */

import React, {Component} from "react";
import {Platform, StyleSheet, Text, View,Image} from "react-native";



export default class Start extends Component {
    render() {
        return (
          <View style={styles.containerStyle}>
            <Image
              style={styles.imageStyle}
              source={{
                uri:
                  "http://icons.iconarchive.com/icons/google/noto-emoji-travel-places/512/42496-school-icon.png"
              }}
            />
            <Text style={styles.textStyle}>My Kindergarten</Text>
            
          </View>
        );
      }
    }
    const styles = StyleSheet.create({
      containerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0b1a33"
      },
      textStyle: {
        color: "#fff",
        fontSize: 25,
        textAlign: "center",
        justifyContent: "center",
        margin: 40
      },
      imageStyle: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
      }
    });
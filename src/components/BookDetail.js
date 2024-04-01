import React from "react";
import { Image, Linking } from "react-native";
import { Box, VStack, Text, Pressable } from "@gluestack-ui/themed";

const newestBook = ({ album, navigation }) => {

  return (
    <VStack style={{ flexDirection: 'column', backgroundColor: "#fff" }}>
      <Box p={10} mt={5} style={{}}>
        <Pressable
          onPress={() => navigation.navigate('Detail', album)}
        >
          <Image height={200} width={140}
            style={{}}
            source={{
              uri: album.image
            }}
          />
        </Pressable>
      </Box>
      <VStack pl={12} style={{
      }}>
        <Text style={{
          fontSize: 16,
          color: "#131313",
          fontWeight: '500',
        }}>{album.title}</Text>
        <Text mt={5} style={{
          fontSize: 12,
          fontWeight: '500',
          color: "#666666",
        }}>{album.artist}</Text>
      </VStack>
    </VStack>

  )
};

export default newestBook;
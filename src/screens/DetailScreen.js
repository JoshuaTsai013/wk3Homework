import React from 'react';
import { Linking,Image } from 'react-native';
import { Center, ScrollView, Box, Text, Heading,Button, ButtonText, Pressable } from "@gluestack-ui/themed";

const DetailScreen = ({ route }) => {
    const { title,
        artist,
        star,
        url,
        image,
        description
    } = route.params;
    const buttontitle = `Buy Now for $${star}`
    return (
        <Center bgColor="white" height="100%">
            <ScrollView style={{ backgroundColor: "#fff" ,width:"100%",height:"100%"}}>
                <Center  style={{}}>
                    <Box mt="$5" style={{}}>
                        <Image
                            style={{
                                height: 300,
                                width: 210
                            }}
                            source={{
                                uri: image
                            }}
                        />
                    </Box>
                    <Center mt="$5" style={{}}>
                        <Text style={{
                            color: '#131313',
                            textAlign: 'center',
                            fontSize: 24,
                            fontWeight: '500',
                            lineHeight: 28
                        }} >{title}</Text>
                        <Text style={{
                            color: '#666666',
                            textAlign: 'center',
                            fontSize: 14,
                            fontWeight: '400',
                            lineHeight: 16,
                            top: 10
                        }} >{artist}</Text>
                        <Text style={{ top: 18, }} >{star}</Text>
                        <Text style={{
                            color: '#131313',
                            textAlign: 'center',
                            fontSize: 14,
                            fontWeight: '400',
                            lineHeight: 24,
                            top: 35,
                        }}>{description}</Text>
                    </Center>
                    <Pressable 
                        style={{
                            justifyContent:"center",
                            width: 190,
                            height: 36,
                            borderRadius: 4,
                            backgroundColor: "#6200EE",
                            marginTop:60
                        }}
                        onPress={() => Linking.openURL(url)}
                    >
                        <Text style={{
                            color: "#fff",
                            textAlign: 'center',
                            fontSize: 14,
                            fontWeight: '700',
                            lineHeight: 16,
                            letterSpacing: 1.2
                        }}>{buttontitle}</Text>
                    </Pressable>

                </Center>
            </ScrollView>
        </Center>
    );
}
export default DetailScreen;
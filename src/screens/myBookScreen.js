import React from 'react';
import { View } from 'react-native';
import { Text, Center } from "@gluestack-ui/themed";

const MyBookScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Center
                shadow={2} width="90%"
                mt="$2" px="$2" py="$4"
                bg="white" borderRadius={3}
                alignSelf="center">
                <Text fontSize={30}>
                    This is MyBookScreen
                </Text>
            </Center>
        </View>
    );
}

export default MyBookScreen;
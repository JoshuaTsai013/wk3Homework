import React from 'react';
import { View } from 'react-native';
import { Text, Center } from "@gluestack-ui/themed";

const AccountScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Center
                shadow={2} width="90%"
                mt="$2" px="$2" py="$4"
                bg="white" borderRadius={3}
                alignSelf="center">
                <Text fontSize={30}>
                    This is AccountScreen
                </Text>
            </Center>
        </View>
    );
}

export default AccountScreen;
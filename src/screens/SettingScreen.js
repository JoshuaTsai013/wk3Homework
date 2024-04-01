import React from 'react';
import { Center, Text } from '@gluestack-ui/themed';

const SettingScreen = () => {
   return (
      <Center
         shadow={2} width="90%"
         mt="$2" px="$2" py="$4"
         bg="white" borderRadius={3}
         alignSelf="center"
      >
         <Text fontSize={30}>
            Settings
         </Text>
      </Center>
   );
};

export default SettingScreen;

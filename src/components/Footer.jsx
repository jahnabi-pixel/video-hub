import React from 'react';
import {Box,Button,Heading,HStack,VStack,Stack,Text,Input} from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'white'} p ="16" minH={"40"}>
      <Stack direction ={['column,row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'}     textAlign={['center', 'left']}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack> 
          </VStack>

          <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights received</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://www.linkedin.com/in/jahnabi-priyam-das-8aa088253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" >
            <Text fontSize='xs'> Linkedin</Text>
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href=" https://www.instagram.com/jahnabi_priyam?igsh=YjI2ZjNpYzl6YzN1">
            <Text fontSize='xs'>  Instagram</Text>
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://github.com/jahnabi-pixel">
            <Text fontSize='xs'>  Github</Text>
            </a>
          </Button>
        </VStack>
      </Stack>
      
    </Box>
  );
}

export default Footer;

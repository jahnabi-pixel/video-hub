import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
             Welcome to Video-Hub, your one-stop destination for high-quality videos and entertainment. Whether you're a gaming enthusiast, a movie buff, or just looking for some free content, we have something for everyone.
 Explore our diverse range of services, from gaming on consoles to discovering the latest trends in night life. Our platform is designed to provide a seamless experience, ensuring you stay entertained and informed.
 At Video-Hub, we believe in the power of community. Join us in shaping the future of digital content by uploading your own videos and sharing your unique perspective with the world.
 Dive into our extensive collection of videos or discover exclusive free content curated just for you. We're not just a platform; we're a community that celebrates creativity and individuality.

  Video-Hub - where the future of entertainment meets your screen. Join us today and be part of the next generation of digital content creators and enthusiasts.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};


const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={800}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
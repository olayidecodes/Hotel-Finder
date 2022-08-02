import Link from "next/link"
import Image from "next/image"
import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Banner = ({purpose}) => (
  <Flex flexWrap="wrap"
   justifyContent="center"
    alignItems="center"
    height="600"
    backgroundImage="url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')"
    backgroundPosition="center"
    backgroundSize="cover"
    backgroundRepeat="no-repeat">
      <Box textAlign='center' padding='2rem'>
        <h1>FIND YOUR LUXURY HOME</h1>
        <p>With over 200 curated list of hotels in New york, you can get the best deals at an affordable price</p>
        <Link href='/'>
          <Button backgroundColor='palegreen' padding='5px 10px' border='none' borderRadius='3px' cursor='pointer'>FIND HOTELS</Button>
        </Link>
        </Box>
  </Flex>
)

export default function Home() {
  return (
    <div>
      <Banner/>
    </div>
  )
}

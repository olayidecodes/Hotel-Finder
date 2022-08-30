import Link from "next/link"
import { Flex, Box, Text, Button } from '@chakra-ui/react'

import {baseUrl, fetchApi} from '../utils/fetchApi'
import Hotel from "../components/Hotel"

const Banner = ({purpose}) => (
  <Flex flexWrap="wrap"
   justifyContent="center"
    alignItems="center"
    height="90vh"
    backgroundImage="url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')"
    backgroundPosition="center"
    backgroundSize="cover"
    backgroundRepeat="no-repeat">
      <Box textAlign='center' display='flex' flexDirection='column' alignItems='center' justifyContent='center' padding='2rem' backgroundColor='RGBA(0, 0, 0, 0.4)' width='100%' height='100%' color='#FFFFFF'>
        <Text fontSize='4xl'>FIND YOUR LUXURY HOME</Text>
        <Text>With over 200 curated list of hotels in New york, you can get the best deals at an affordable price</Text>
        <Link href='#hotels'>
          <Button  padding='0px 20px' border='none' borderRadius='2px' cursor='pointer' color='black' backgroundColor='blue.300' marginTop='.6rem'>FIND HOTELS</Button>
        </Link>
      </Box>
  </Flex>
)

export default function Home({hotelList}) {
  return (
    <div>
      <Banner/>
      <Flex flexWrap='wrap' justifyContent='center' marginTop='3rem' id="hotels">
        {hotelList.map((hotel) => <Hotel hotel={hotel} key={hotel.id}/>)}
      </Flex>
    </div>
  )
}


export const getStaticProps = async() => {
  const hotels = await fetchApi(`${baseUrl}/properties/list?destinationId=1781708&pageSize=6`)

  return {
    props: {
      hotelList: hotels?.data.body.searchResults.results
    }
  }
}

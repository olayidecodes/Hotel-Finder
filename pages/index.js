import Link from "next/link"
import Image from "next/image"
import { Flex, Box, Text, Button } from '@chakra-ui/react'

import {baseUrl, fetchApi} from '../utils/fetchApi'
import Hotel from "../components/Hotel"

const Banner = ({purpose}) => (
  <Flex flexWrap="wrap"
   justifyContent="center"
    alignItems="center"
    height="100vh"
    backgroundImage="url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')"
    backgroundPosition="center"
    backgroundSize="cover"
    backgroundRepeat="no-repeat">
      <Box textAlign='center' display='flex' flexDirection='column' alignItems='center' justifyContent='center' padding='2rem' backgroundColor='RGBA(0, 0, 0, 0.4)' width='100%' height='100%' color='#FFFFFF'>
        <h1>FIND YOUR LUXURY HOME</h1>
        <p>With over 200 curated list of hotels in New york, you can get the best deals at an affordable price</p>
        <Link href='/'>
          <Button  padding='5px 10px' border='none' borderRadius='3px' cursor='pointer'>FIND HOTELS</Button>
        </Link>
      </Box>
  </Flex>
)

export default function Home({hotelList}) {
  console.log(hotelList)
  return (
    <div>
      <Banner/>
      <Flex flexWrap='wrap'>
        {/* {hotelList.map((hotel) => hotel.name)} */}
        {hotelList.map((hotel) => <Hotel hotel={hotel} key={hotel.id}/>)}
      </Flex>
    </div>
  )
}


export const getStaticProps = async() => {
  const hotels = await fetchApi(`${baseUrl}/properties/list?destinationId=1781708&pageSize=25`)

  return {
    props: {
      hotelList: hotels?.data.body.searchResults.results
    }
  }
}

// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://hotels4.p.rapidapi.com/locations/search',
//   params: {query: 'lagos',},
//   headers: {
//     'X-RapidAPI-Key': '1388e706d4mshf50939857a1f904p1fd4c8jsn6b6893f19c52',
//     'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://hotels4.p.rapidapi.com/properties/list',
//   params: {
//     destinationId: '1781708',
//     pageNumber: '1',
//     pageSize: '25',
//     adults1: '1',
//     sortOrder: 'PRICE',
//     locale: 'en_US',
//     currency: 'USD'
//   },
//   headers: {
//     'X-RapidAPI-Key': '1388e706d4mshf50939857a1f904p1fd4c8jsn6b6893f19c52',
//     'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
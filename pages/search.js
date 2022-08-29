import { useState } from "react";
import {useRouter} from 'next/router'
import Image from "next/image";
import {Flex, Box, Text, Icon} from '@chakra-ui/react'
import {BsFilter} from 'react-icons/bs'
import SearchFilters from "../components/SearchFilters";
import Hotel from '../components/Hotel'
import {baseUrl, fetchApi} from '../utils/fetchApi'

const Search = ({hotelList}) => {
    const [searchFilters, setSearchFilters] = useState(false)
    const router = useRouter()

    return (
        <Box>
            <Flex cursor='pointer' bg='gray.100' borderBottom='1px' borderColor='gray.200'
            p='2' fontWeight='bold' fontSize='large' justifyContent='center' alignItems='center'
            onClick={() => setSearchFilters(!searchFilters)}>
                <Text>Search Hotel by Filters</Text>
                <Icon paddingLeft='2' w='7' as={BsFilter}></Icon>
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSize='2xl' p='4' fontWeight='bold'>
                Hotels {router.query.purpose}
            </Text>
            <Flex flexWrap='wrap'>
            {hotelList.map((hotel) => <Hotel hotel={hotel} key={hotel.id}/>)}
            </Flex>
             {hotelList.length === 0 && (
                <h1>No results found</h1> 
             )}
        </Box>
    )
}

export default Search


export const getStaticProps = async() => {
    const hotels = await fetchApi(`${baseUrl}/properties/list?destinationId=1781708&pageSize=6`)
  
    return {
      props: {
        hotelList: hotels?.data.body.searchResults.results
      }
    }
  }
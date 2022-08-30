import { useState } from "react";
import {useRouter} from 'next/router'
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
                {router.query.purpose}
            </Text>
            <Flex flexWrap='wrap' justifyContent='center' alignItems='center'>
              {hotelList.map((hotel) => <Hotel hotel={hotel} key={hotel.id}/>)}
            </Flex>
             {hotelList.length === 0 && (
                <h1>No results found</h1> 
             )}
        </Box>
    )
}

export default Search


export async function getServerSideProps({ query }) {
    const destinationId = query.destinationId || '1781708';
    const pageNumber = query.pageNumber || '1'
    const pageSize = query.pageSize || '2'
    const adults1 = query.adults1 || '1'
    const priceMin = query.priceMin || '0'
    const priceMax = query.priceMax || '500'

    const hotels = await fetchApi(`${baseUrl}/properties/list?destinationId=${destinationId}&pageNumber=${pageNumber}&pageSize=${pageSize}
    &adults1=${adults1}&priceMin=${priceMin}&priceMax=${priceMax}`)

    return {
      props: {
        hotelList: hotels?.data.body.searchResults.results
      }
    }
  }
import { Box, Flex, Spacer, Text, Avatar } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FaBed } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import ImageScrollbar from '../../components/ImageScrollbar'

import { baseUrl, fetchApi  } from '../../utils/fetchApi'

const HotelDetails = ({hotelDetails}) => {
    console.log(hotelDetails)

    return (
    <Box maxWidth='1000px' margin='auto' p='4'>
        {/* {photos && <ImageScrollbar data={photos} />} */}
    </Box>
    )
}

export async function getServerSidePropes({params : { id }}) {
    const hotel = fetchApi(`${baseUrl}/properties/get-details?id=${id}`)
    
    return {
        props: {
            hotelDetails: hotel?.data.body
        }
    }
}

export default HotelDetails 
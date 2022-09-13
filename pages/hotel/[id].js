import { Box, Flex, Spacer, Text, Avatar } from '@chakra-ui/react'
import { FaBed } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { GoVerified } from 'react-icons/go'
import ImageScrollbar from '../../components/ImageScrollbar'

import { baseUrl, fetchApi  } from '../../utils/fetchApi'
import Image from 'next/image'

const HotelDetails = ({hotelDetails: {data: {body: 
    {overview: {overviewSections},
    propertyDescription: {address: {fullAddress}, name, starRating, featuredPrice: {currentPrice: {formatted}, priceInfo}, mapWidget: {staticMapUrl}, roomTypeNames, tagline},
    amenities,
    hotelWelcomeRewards: {applies}}}},
    hotelPics: {hotelImages}}) => {

    return (
    <Box maxWidth='1000px' margin='auto' p='4'>
        {hotelImages && <ImageScrollbar data={hotelImages} />}
        <Box margin='2rem'>
            <Box>
                <Text fontSize='1.3rem' fontFamily='cursive' fontWeight='bold' marginBottom='.3rem'>{name}</Text>
                <Text>ADDRESS: {fullAddress}</Text>
                <Box>STAR RATING: {Array(Math.round(starRating)).fill().map((_, i) => ( '⭐' ))}</Box>
                <Text>Average price: {formatted} per room</Text>
            </Box>
            <Box marginTop='1rem' marginBottom='1rem'>
                <Text fontStyle='italic' fontWeight='semibold' color='gray.200' p='2' bg='gray.700' width='max-content' borderRadius='6'>Overview</Text>
                {overviewSections.map((item) => 
                <Flex gap='.5rem' flexDirection='column'>
                    <Text fontSize='.9rem' fontWeight='semibold' marginTop='.8rem'>{item.type.replaceAll('_', ' ')}:</Text> 
                    <Flex flexDirection='column' fontSize='.9rem'>{item.content.map((text) => <Text>{text}</Text>)}</Flex>
                </Flex>
                )}
            </Box>
            {staticMapUrl && <Image src={staticMapUrl} alt='map' width={600} height={400} quality={100}/>}
            <Box marginTop='1rem' marginBottom='1rem'>
                <Text fontStyle='italic' fontWeight='semibold' color='gray.200' p='2' bg='gray.700' width='max-content' borderRadius='6'>Amenities</Text>
                {amenities.map((item) => 
                <Flex gap='.5rem' flexDirection='column'>
                    <Text fontSize='.9rem' fontWeight='semibold' marginTop='.8rem'>{item.heading}:</Text> 
                    <Flex flexWrap='wrap' fontSize='.9rem'>{item.listItems.map((box) => 
                        <Flex flexWrap='wrap'>{box.listItems.map((text) => <Text fontWeight='semibold' color='blue.400' p='2' bg='gray.200' m='1' borderRadius='5'>{text}</Text>)}</Flex>)}
                    </Flex>
                </Flex>
                )}
            </Box>
            {applies && <Flex alignItems='center' gap='.5rem' marginTop='1rem'><GoVerified color='green' fontSize='1.5rem'/> <Text>Offers Rewards</Text></Flex>}
        </Box>
    </Box>
    )
}


export async function getServerSideProps({params : { id }}) {
    const hotel = await fetchApi(`${baseUrl}/properties/get-details?id=${id}`)
    const pic = await fetchApi(`${baseUrl}/properties/get-hotel-photos?id=${id}`)
    

    return {
        props: {
            hotelDetails: hotel,
            hotelPics: pic
        }
    }
}


export default HotelDetails 
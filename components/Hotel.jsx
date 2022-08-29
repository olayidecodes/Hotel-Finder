import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

import DefaultImage from '../assets/images/hotel_pic.jpg'

const Hotel = ({ hotel: {name, address: {streetAddress, locality}, optimizedThumbUrls: {srpDesktop}, starRating, ratePlan: {price: {exactCurrent}}, id}}) => {
    
    return(
    <Link href={`/hotel/${id}`} passHref>
        <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer' marginBottom='2rem' >
            <Box>
                <Image src={srpDesktop ? srpDesktop : DefaultImage} width={400} height={260} alt="hotel"/>
            </Box>
            <Box>
                
                <Flex flexDirection='column' padding='0rem'>
                    <Box>{Array(Math.round(starRating)).fill().map((_, i) => ( '⭐' ))}</Box>
                    <Text fontWeight='bold' fontSize='1.1rem' marginBlockStart='0' marginBlockEnd='0' paddingTop='.5rem'>{name}</Text>
                    <Flex gap='1rem' paddingTop='.2rem'>
                        <FaBed fontSize='1.2rem'/>
                        <Text fontSize='.9rem' marginBlockStart='0' marginBlockEnd='0'>Starts at ${exactCurrent} per night</Text>
                    </Flex>
                    <Flex  gap='1rem' paddingTop='.2rem'>
                        <IoLocationSharp fontSize='1.2rem'/>
                        <Text fontSize='.9rem' marginBlockStart='0' marginBlockEnd='0'>{streetAddress}, {locality}</Text>
                    </Flex>
                </Flex>
                
            </Box>
        </Flex>
    </Link>
    
  )
}

export default Hotel

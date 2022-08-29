import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from "millify";

import DefaultImage from '../assets/images/hotel_pic.jpg'

const Hotel = ({ hotel: {name, address: {streetAddress, locality}, optimizedThumbUrls: {srpDesktop}, starRating, id}}) => {
  return(
    <Link href={`/hotel/${id}`} passHref>
        <Flex>
            <Box>
                <Image src={srpDesktop ? srpDesktop : DefaultImage} width={400} height={260} alt="hotel"/>
            </Box>
        </Flex>
    </Link>
    
  )
}

export default Hotel

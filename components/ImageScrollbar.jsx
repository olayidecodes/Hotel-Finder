import { useContext } from "react";
import Image from 'next/image'
import { Box, Icon, Flex} from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
    const {scrollPrev} = useContext(VisibilityContext)

    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon 
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                fontSize='2xl'
                cursor='pointer'
            />
        </Flex>
    )
}

const RightArrow = () => {
    const {scrollNext} = useContext(VisibilityContext)

    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon 
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                fontSize='2xl'
                cursor='pointer'
            />
        </Flex>
    )
}

const ImageScrollbar = ({data}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}>
        {data.map((item) => (
            
            <Box key={item.imageId} width='910px' overflow='hidden' p='1'>
                <Image alt="property" quality={100}
                 src={item.baseUrl.replace("{size}", "z")} width={1000} height={500} sizes="(max-width: 500px) 100px, (max-width): 1023px 400px, 1000px"/>
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default ImageScrollbar

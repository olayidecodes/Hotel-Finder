import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import { FcMenu, FcHome } from 'react-icons/fc'
import {BsSearch } from 'react-icons/bs'
import { FaHotel } from 'react-icons/fa'

const Navbar = () => (
    <Flex p='2' borderBottom='1px' borderColor='gray.100'>
        <Box fontSize='3xl' color='blue.400' fontWeight='bold' paddingLeft='3'>
            <Link href='/'>Agency</Link>
        </Box>
        <Spacer/>
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant='outlined' color='red.400'/>
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                        <MenuItem icon={<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-lease' passHref>
                        <MenuItem icon={<FaHotel />}>Hotels</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
)

export default Navbar;
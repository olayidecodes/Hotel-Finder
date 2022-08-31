import { useEffect, useState } from "react";
import {Flex, Select, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react'
import { useRouter } from "next/router";
import {MdCancel } from 'react-icons/md'
import Image from "next/image";


const SearchFilters = () => {
  const [filters, setFilters] = useState({})
  return (
    <Flex bg='gray.100' justifyContent='center' flexWrap='wrap'>
      Hey
    </Flex>
  )
}

export default SearchFilters

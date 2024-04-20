import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
      <VStack spacing={4}>
        <Heading size={'md'}>
          {title} ({year})
        </Heading>
        <Text>{author}</Text>
        <Image src={image} alt={title} w="10em" h="10em"/>
        <Text>
          <span>Publisher: </span>
          {publisher}
        </Text>
      </VStack>
    </Link>
  )
}

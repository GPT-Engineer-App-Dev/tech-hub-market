import { Box, Container, VStack, Heading, Text, Image, SimpleGrid, Input } from "@chakra-ui/react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with high-end features",
    price: "$699",
    image: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "Powerful laptop for professionals",
    price: "$999",
    image: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$199",
    image: "/images/headphones.jpg",
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Feature-packed smartwatch with fitness tracking",
    price: "$299",
    image: "/images/smartwatch.jpg",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Electronics Store</Heading>
        <Text fontSize="xl">Find the latest and greatest in electronics</Text>
        <Input
          placeholder="Search for products"
          value={searchQuery}
          onChange={handleSearchChange}
          mb={4}
        />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
              <Image src={product.image} alt={product.name} mb={4} />
              <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
              <Text mb={2}>{product.description}</Text>
              <Text fontWeight="bold">{product.price}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
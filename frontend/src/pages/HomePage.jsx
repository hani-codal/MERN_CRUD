import { Container, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import { useProductStore } from "../store/products";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products ", products);

  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack spacing={8}>
        {products.length === 0 && (
          <>
            <Text fontSize={"xl"} color={"grey.500"}>
              No Product Found <Link to={"/create"}>Create a product</Link>
            </Text>
            <Text
              fontSize={"30"}
              fontWeight={"bold"}
              bgClip={"text"}
              textAlign={"center"}
            >
              Current Products
            </Text>
          </>
        )}
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          w={"full"}
          spaceX={10}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default HomePage;

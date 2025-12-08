import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useProductStore } from "../store/products";
import { Toaster, toaster } from "./ui/toaster";

const ProductCard = ({ product }) => {

  const {deleteProduct} = useProductStore();

  const handleDelete = async(product) => {
    const {success,message} = await deleteProduct(product._id);
    if (!success) {
          toaster.create({
            title: "Error",
            description: message,
            closable: true,
          });
        } else {
          toaster.create({
            title: "Success",
            description: message,
            closable: true,
          });
        }
  }

  return (
    <Box shadow={"lg"} rounded={"lg"} overflow={"hidden"}>
      <Toaster />
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={"full"}
        objectFit={"cover"}
      />
      <Box p={4}>
        <Heading>{product.name}</Heading>
        <Text>{product.price}</Text>
        <HStack>
            <IoMdAddCircle />
            <MdDelete onClick={()=>handleDelete(product)} />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;

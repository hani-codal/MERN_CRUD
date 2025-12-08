import { Box, Heading, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useProductStore } from "../store/products";
import { Toaster, toaster } from "./ui/toaster";
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"
import {  useState } from "react";

const ProductCard = ({ product }) => {
 
  const { deleteProduct, updateProduct } = useProductStore();
  const [ updatedProduct, setUpdatedProduct] = useState(product);
 console.log("product " , product, updatedProduct)
  const handleDelete = async (product) => {
    const { success, message } = await deleteProduct(product._id);
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
  };

  const handleUpdate = async (product) => {
   const {success, message} =  await updateProduct(product._id, product);
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
  };

  return (
    <Box shadow={"lg"} rounded={"lg"} overflow={"hidden"}>
      <Dialog.Root size={{ mdDown: "full", md: "lg" }}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Update Details</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <VStack spaceY={5}>
                <Input
                          name="Name"
                          placeholder="Enter Product Name"
                          value={updatedProduct.name}
                          onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                        />
                        <Input
                          type="number"
                          name="Price"
                          placeholder="Enter Product Price"
                          value={updatedProduct.price}
                          onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                        />
                        <Input
                          type="text"
                          name="Image"
                          placeholder="Enter Product Image"
                          value={updatedProduct.image}
                          onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                        />
                        </VStack>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                <Button onClick={() => handleUpdate(updatedProduct)} >Save</Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
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
          <Dialog.Trigger asChild>
            <Button variant="outline" size="sm">
              <IoMdAddCircle />
            </Button>
          </Dialog.Trigger>
          <MdDelete onClick={() => handleDelete(product)} />
        </HStack>
      </Box>
      </Dialog.Root>

    </Box>
  );
};

export default ProductCard;

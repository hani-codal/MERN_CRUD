import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/products";
import { Toaster, toaster } from "../components/ui/toaster";

const CreatePage = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();

  const handleSubmit = async () => {
    const { success, message } = await createProduct({ ...product });
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
    setProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container>
      <Toaster />
      <Heading>Create New Product</Heading>
      <VStack>
        <Input
          name="Name"
          placeholder="Enter Product Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <Input
          type="number"
          name="Price"
          placeholder="Enter Product Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <Input
          type="text"
          name="Image"
          placeholder="Enter Product Image"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <Button onClick={handleSubmit}>Add Product</Button>
      </VStack>
    </Container>
  );
};

export default CreatePage;

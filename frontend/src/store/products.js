import { create } from "zustand";

export const useProductStore = create((set)=>({
    products:[],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct)=>{
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {success:false, message:"Invalid product data"}
        }
        const res = await fetch("/api/products", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newProduct)
        });
        const data = await res.json();
        set((state)=>({products:[...state.products, data.data]}))
        console.log("res ", res);
        return {success:true, message:"Product added successfully"}
    },
    fetchProducts: async() =>{
        const res = await fetch("/api/products");
        const data = await res.json();
        set({products:data.data})
    },
    deleteProduct: async(pid)=>{
        const res = await fetch(`/api/products/${pid}`,
            {
                method:'DELETE'
            }
        );
        const data = await res.json();
        set((state)=> ({products: state.products.filter(p=> p.id !== data.id)})); //to immediatly update the array without doing a page refresh
    },
}))
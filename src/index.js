import React,{useState, useEffect} from "react";
import {Card, CardContent} form 
"@/components/ui/card"; import { Button } from
"@/components/ui/button"; import { Input } from
"@/components/ui/input"; import { BrowserRouter as Router,Routes, Route, Link, useNavigate } from
"react-router-dom";

const products = [ { id: 1, name: "iPhone 13 Pro", condition: "Like New", price: 699,
     image: "https://via.placeholder.com/200x150?text=iPhone+13+Pro", },
     { id: 2, name: "MacBook Air M1", condition: "Good", price: 899,
         image: "https://via.placeholder.com/200x150?text=MacBook+Air+M1", },
      { id: 3, name: "Canon EOS Rebel T7", condition: "Fair", price: 299,
         image: "https://via.placeholder.com/200x150?text=Canon+T7", }, ];

function HomePage({ addToCart }) { const [search, setSearch] = useState("");

const filteredProducts = 
products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()) );

return ( <div className="p-4 max-w-4xl mx-auto"> <h1 className="text-3xl font-bold mb-4">
Used Electronics Store</h1> <Input placeholder="Search products..." 
className="mb-6" value={search} 
onChange={(e) => setSearch(e.target.value)} /> 
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> 
{filteredProducts.map((product) => ( <Card key={product.id} className="rounded-2xl shadow"> 
<img src={product.image} alt={product.name} className="rounded-t-2xl" /> 
<CardContent className="p-4"> 
<h2 className="text-xl font-semibold mb-1">{product.name}</h2> 
<p className="text-sm text-gray-500 mb-2">Condition: {product.condition}</p> 
<p className="text-lg font-bold mb-4">${product.price}</p> 
<Button onClick={() => addToCart(product)}>Add to Cart</Button> 
</CardContent> </Card> ))} </div> </div> ); }

function CartPage({ cart }) { const total = cart.reduce((sum, item) => sum + item.price, 0);




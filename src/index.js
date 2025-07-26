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





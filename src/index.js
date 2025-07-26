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

return ( <div className="p-4 max-w-2xl mx-auto">
<h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
{cart.length === 0 ? ( <p>Your cart is empty.</p> ) : 
( <div> {cart.map((item, idx) => ( <Card key={idx} className="mb-4">
<CardContent className="p-4">
<div className="flex justify-between"> 
<span>{item.name}</span> <span>${item.price}</span> 
</div> </CardContent> </Card> ))} <div className="text-xl font-bold">Total: ${total}</div>
</div> )} </div> ); }

function LoginPage({ onLogin })
{ const [username, setUsername] = useState(""); const navigate = useNavigate(); const handleLogin = async () => { if (username.trim()) 
{ // Simulated backend login const response = await fetch("/api/login",
//  { method: "POST", headers: { "Content-Type": "application/json" }, 
// body: JSON.stringify({ username }), }); if (response.ok)
//  { onLogin(username); navigate("/"); } } };

return ( <div className="p-4 max-w-sm mx-auto"> 
<h1 className="text-2xl font-bold mb-4">Login</h1>
<Input placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} 
className="mb-4" /> 
<Button onClick={handleLogin}>Login</Button> </div> ); }

function SignupPage({ onLogin })
{ const [username, setUsername] = useState("");
const navigate = useNavigate(); const handleSignup = 
async () => { if (username.trim()) 
{ // Simulated backend signup const response = await fetch("/api/signup",
//  { method: "POST", headers: { "Content-Type": "application/json" }, 
// body: JSON.stringify({ username }), }); if (response.ok)
//  { onLogin(username); navigate("/"); } } };

return ( <div className="p-4 max-w-sm mx-auto">
<h1 className="text-2xl font-bold mb-4">Sign Up</h1>
<Input placeholder="Choose a username" value={username} onChange={(e) => setUsername(e.target.value)} className="mb-4" />
<Button onClick={handleSignup}>Sign Up</Button> </div> ); }

function App() { const [cart, setCart] = useState(() => { const saved = localStorage.getItem("cart"); 
return saved ? JSON.parse(saved) : []; }); 
const [user, setUser] = useState(() => { return localStorage.getItem("user") || null; });

useEffect(() => { localStorage.setItem("cart", JSON.stringify(cart)); }, [cart]);

useEffect(() => { if (user) localStorage.setItem("user", user); }, [user]);

const addToCart = (product) => setCart([...cart, product]); const handleLogin = (username) => setUser(username);

return ( <Router> <nav className="bg-gray-100 p-4 flex justify-between"> <div className="space-x-4"> <Link to="/" className="font-bold">Home</Link> <Link to="/cart">Cart ({cart.length})</Link> </div> <div> {user ? <span>Welcome, {user}</span> : ( <> <Link to="/login" className="mr-2">Login</Link> <Link to="/signup">Sign Up</Link> </> )} </div> </nav> <Routes> <Route path="/" element={<HomePage addToCart={addToCart} />} /> <Route path="/cart" element={<CartPage cart={cart} />} /> <Route path="/login" element={<LoginPage onLogin={handleLogin} />} /> <Route path="/signup" element={<SignupPage onLogin={handleLogin} />} /> </Routes> </Router> ); }

export default App;







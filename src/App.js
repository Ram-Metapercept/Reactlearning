import React from 'react';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Blog from './component/Blog';
import Feature from './component/Feature';
import Pricing from './component/Pricing';
import Contact from './component/Contact';
import Service from './component/Service';
import About from './component/About';
import NotFound from './component/NotFound';

export default function App() {
  return (
   <>
< Header/>
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/feature" element={<Feature/>}/>
<Route path="/service" element={<Service/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/pricing" element={<Pricing/>}/>
<Route path="/blog" element={<Blog/>}/>
<Route path="/contact" element={<Contact/>}/>
   </Routes>
   
   
   
   </BrowserRouter>

   </>
  );
}

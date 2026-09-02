import React from 'react'
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";

const App = () => {
    return (
        <div className='min-h-screen bg-black'>
            <Navbar/>

            <main>
                <Hero/>
                <About/>
            </main>
        </div>
    );
}

export default App
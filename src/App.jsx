import {useState} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Extension from './components/Extension';
import Footer from './components/Footer';

export default function App(){
 const [dark,setDark]=useState(false);
 return <div className={dark?'app dark':'app'}>
 <Navbar toggle={()=>setDark(!dark)}/>
 <Hero/>
 <Features/>
 <Extension/>
 <section className="section card">
 <h2>Why Choose EchoGPT?</h2>
 <p>✓ Multiple AI models</p>
 <p>✓ Smart productivity workflow</p>
 <p>✓ Browser AI assistant</p>
 </section>
 <section className="section card">
 <h2>FAQ</h2>
 <p><b>What is EchoGPT?</b></p>
 <p>A unified AI assistant platform.</p>
 </section>
 <Footer/>
 </div>
}

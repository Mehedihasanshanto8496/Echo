import {motion} from 'framer-motion';
export default function Hero(){
return <section className="hero">
<motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
<h1>Your All-In-One AI Assistant</h1>
<p>Chat with GPT-4, Claude and Gemini from one modern platform.</p>
<button>Start Chatting</button>
</motion.div>
<div className="card dashboard">
<h3>EchoGPT Dashboard</h3>
<p>GPT-4 ▼</p>
<div className="chat">Hello! How can I help you?</div>
<input placeholder="Ask AI anything"/>
</div>
</section>
}
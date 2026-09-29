export default function Features(){
let a=['AI Models','Prompt Library','Fast Response','Chrome Assistant'];
return <section className="section"><h2>Features</h2><div className="grid">
{a.map(x=><div className="card"><h3>{x}</h3><p>Powerful AI productivity feature.</p></div>)}
</div></section>
}
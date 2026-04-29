const projects=[
"Industrial IoT Platform",
"DynamoDB Optimizer",
"Predictive Maintenance"
]

export default function Projects(){
return(
<section id='projects' className='p-16'>
<h2 className='text-5xl mb-10'>Projects</h2>

<div className='grid md:grid-cols-3 gap-8'>
{projects.map(p=>(
<div
key={p}
className='bg-zinc-900 p-8 rounded-[30px] hover:-translate-y-2 transition'
>
<div className='h-40 bg-zinc-800 rounded-3xl mb-6'/>
<h3 className='text-2xl font-bold'>
{p}
</h3>
</div>
))}
</div>
</section>
)
}
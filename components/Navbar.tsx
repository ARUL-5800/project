export default function Navbar(){
return(
<nav className='fixed top-0 w-full p-6 flex justify-between bg-black/70 backdrop-blur z-50'>
<h2 className='text-2xl font-bold'>ARUL</h2>
<div className='space-x-6'>
<a href='#projects'>Projects</a>
<a href='#contact'>Contact</a>
</div>
</nav>
)
}
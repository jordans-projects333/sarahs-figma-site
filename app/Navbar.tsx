import { Nanum_Myeongjo } from 'next/font/google'

const inter = Nanum_Myeongjo({
    subsets: ['latin'],
    weight: '400'
})

const Navbar = () => {
  return (
    <header className='h-[100svh] w-[35%] md:w-[20%] bg-[#F1E3B1] flex flex-col items-center'>
        <h1 className={`${inter.className} text-3xl md:text-5xl mt-2 border-b-2 mx-2 border-black`}>Ceramics<pre className={`${inter.className}`}>&Co</pre></h1>
        <nav className={`${inter.className} w-full`}>
            <ul className='flex flex-col gap-8 mt-8 w-full pl-2 md:pl-8 text-xl md:text-3xl'>
                <li>Mugs</li>
                <li>Bowls</li>
                <li>Vases</li>
                <li>Plant pots</li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
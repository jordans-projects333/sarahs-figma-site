import Image1 from '@/images/sez1.jpg'
import Image2 from '@/images/sez2.jpg'
import Image3 from '@/images/sez3.jpg'
import Image4 from '@/images/sezz4.jpg'
import Image5 from '@/images/sez5.webp'
import Image6 from '@/images/sez6.webp'
import Image from 'next/image'
import { Nanum_Myeongjo } from 'next/font/google'

const inter = Nanum_Myeongjo({
    subsets: ['latin'],
    weight: '400'
})

export default function Home() {
  return (
    <main className={`${inter.className} w-[65%] md:w-[80%] h-[100svh] flex`}>
      <div className="flex-1 flex flex-col">
        <div className="flex-[4] relative">
            <h2 className={`${inter.className} top-0 right-0 absolute m-4 text-2xl text-white z-20`}>Daisy <pre className={`${inter.className}`}>Mug</pre><pre className={`${inter.className}`}>£14.99</pre></h2>
            <Image alt='ceramic' src={Image3} fill className='object-cover -z-10'/>
        </div>
        <div className="flex-[6] relative">
            <Image alt='ceramic' src={Image4} fill className='object-cover'/>
        </div>
      </div>
      <div className="flex-1 md:flex flex-col hidden">
        <div className="flex-[6] relative">
            <Image alt='ceramic' src={Image1} fill className='object-cover'/>
        </div>
        <div className="flex-[4] relative">
          <h2 className={`${inter.className} top-0 left-0 absolute m-4 text-2xl text-black z-20`}>Plant Pot <pre className={`${inter.className}`}>Faces</pre><pre className={`${inter.className}`}>£16.99</pre></h2>
          <Image alt='ceramic' src={Image2} fill className='object-cover'/>
        </div>
      </div>
      <div className="flex-1 md:flex flex-col hidden">
        <div className="flex-[4] relative">
            <Image alt='ceramic' src={Image6} fill className='object-cover'/>
        </div>
        <div className="flex-[6] relative">
            <h2 className={`${inter.className} top-0 left-0 absolute m-4 text-2xl text-white z-20`}>Daisy <pre className={`${inter.className}`}>Bowl</pre><pre className={`${inter.className}`}>£11.99</pre></h2>
            <Image alt='ceramic' src={Image5} fill className='object-cover'/>
        </div>
      </div>
    </main>
  )
}

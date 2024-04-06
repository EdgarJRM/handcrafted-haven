import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import ScrollableDiv from './components/ScrollableDiv';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <Image src="/images/logo01.png" alt="Logo" width={275} height={100}/>
        <Link
            href="/contact"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>CONTACTS</span>
          </Link>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
          </Link>
        </div>
        <h1><strong>PRODUCTS</strong></h1>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 scroll-container overflow-y-scroll">
          {/* Add Hero Images Here */}
          <Image
            src="/images/assets/seller1/seller1-product1.jpg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/images/assets/seller1/seller1-product2.jpg1"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
           />
        <img src="images\logo01.png" alt="Logo" width={300}/>
        </div>
      </div>
      
      <div>
      <h1><strong>SELLERS</strong></h1>
      <ScrollableDiv>
        {/* Aquí van los elementos que quieres dentro del div desplazable */}
        <div className="w-64 h-64 bg-gray-300">Elemento 1</div>
        <div className="w-64 h-64 bg-gray-300">Elemento 2</div>
        <div className="w-64 h-64 bg-gray-300">Elemento 3</div>
        {/* Agrega más elementos según sea necesario */}
        <Image src="/images/logo01.png" alt="Logo" width={275} height={100}/>
        <Image src="/images/logo01.png" alt="Logo" width={275} height={100}/>
        <Image src="/images/logo01.png" alt="Logo" width={275} height={100}/>
        <Image src="/images/logo01.png" alt="Logo" width={275} height={100}/>
        <Image src="/images/logo01.png" alt="Logo" width={275} height={100}/>
        <Image src="/images/logo01.png" alt="Logo" width={275} height={100}/>
      </ScrollableDiv>
     </div>

      <div  />;
    </main>
  );
}

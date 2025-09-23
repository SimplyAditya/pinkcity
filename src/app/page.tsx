import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-[#D9677E]">
      <div className='flex flex-col flex-grow justify-center'>
        <div className="w-full h-72 flex justify-center relative">
          <Image src="/images/logo.png" alt='Lgo' fill style={{ objectFit: "contain" }} />
        </div>
        <h1 className="text-4xl lg:text-8xl font-bold text-white text-center">PinkCity MouthFresheners</h1>
        <div className="w-full h-1/12"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
          <span className="block">From the heart of Jaipur,</span>
          <span className="block">we are coming soon!</span>
        </h2>
        <div className="w-full flex items-center justify-center my-10">
          <a href='/brochure.pdf' download={true} className="bg-white text-[#D9677E] px-8 md:px-4 py-4 rounded-4xl text-2xl md:text-3xl font-extrabold md:w-1/2 cursor-pointer text-center">
            Download Brochure
          </a>
        </div>
      </div>
      <footer className="bottom-0 w-full py-4 text-lg flex justify-center">
        <p className="text-white md:flex text-center">
          <p>
            © {new Date().getFullYear()} PinkCity MouthFresheners.
          </p>
          <p>

            All rights reserved.</p>
        </p>
      </footer>
    </div>
  );
}

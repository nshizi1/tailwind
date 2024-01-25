import herImage from '../images/heroImage.png';
function Home() {
  return (
    <main>
      <section className='mt-16 relative w-full h-screen' id="hero">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-10 -translate-y-1/2 gap-4 flex flex-col items-center ">
          <h1 className=' text-white text-5xl font-bold text-center '>Trave Tech, Enlarging your business through technologies</h1>
          <a href="#"><button className='bg-pink-600 px-8 py-3 rounded-md text-pink-100 font-bold hover:bg-pink-700 transition ease-in-out'>Start Now</button></a>
        </div>
        <img className=' w-full h-full object-cover brightness-50 ' src={herImage} alt="Hero Image" />
      </section>
      <section id="services">
        <div className="py-4 flex justify-center">
          <h1 className='font-bold text-4xl text-gray-700'>Our Services</h1>
        </div>
        <div className='mx-16 max-md:mx-4 max-lg:mx-8 mb-10 grid  grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 gap-4 '>
          <div className="p-4 rounded-md flex items-center flex-col shadow-lg  transition ease-in-out duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100 ">
            <p className='text-xl font-bold text-pink-400'>Graphic design</p>
            <p className='text-center mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit explicabo deleniti minus. Animi iste eius distinctio.</p>
            <a href="#"><button className='bg-blue-600 px-6 py-2 mt-1 text-white rounded-md hover:bg-blue-800 transition ease-in-out'>Learn More</button></a>
          </div>
          <div className="p-4 rounded-md flex items-center flex-col shadow-lg  transition ease-in-out duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100 ">
            <p className='text-xl font-bold text-pink-400'>UI/UX DEsign</p>
            <p className='text-center mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit explicabo deleniti minus. Animi iste eius distinctio.</p>
            <a href="#"><button className='bg-blue-600 px-6 py-2 mt-1 text-white rounded-md hover:bg-blue-800 transition ease-in-out'>Learn More</button></a>
          </div>
          <div className="p-4 rounded-md flex items-center flex-col shadow-lg  transition ease-in-out duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100 ">
            <p className='text-xl font-bold text-pink-400'>Web Development</p>
            <p className='text-center mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit explicabo deleniti minus. Animi iste eius distinctio.</p>
            <a href="#"><button className='bg-blue-600 px-6 py-2 mt-1 text-white rounded-md hover:bg-blue-800 transition ease-in-out'>Learn More</button></a>
          </div>
          <div className="p-4 rounded-md flex items-center flex-col shadow-lg  transition ease-in-out duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100 ">
            <p className='text-xl font-bold text-pink-400'>Web Maintenance</p>
            <p className='text-center mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit explicabo deleniti minus. Animi iste eius distinctio.</p>
            <a href="#"><button className='bg-blue-600 px-6 py-2 mt-1 text-white rounded-md hover:bg-blue-800 transition ease-in-out'>Learn More</button></a>
          </div>
          <div className="p-4 rounded-md flex items-center flex-col shadow-lg  transition ease-in-out duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100 ">
            <p className='text-xl font-bold text-pink-400'>Web Hosting</p>
            <p className='text-center mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit explicabo deleniti minus. Animi iste eius distinctio.</p>
            <a href="#"><button className='bg-blue-600 px-6 py-2 mt-1 text-white rounded-md hover:bg-blue-800 transition ease-in-out'>Learn More</button></a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

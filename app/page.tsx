
import Spline from '@splinetool/react-spline/next';
export default function Home() {
  return (
   <div className="mx-auto h-screen grid grid-cols-1 md: grid grid-cols-2 container bg-blue-200 ">
    <div className='bg-black/90 text-white h-full w-full flex flex-col justify-center items-center p-10 text-center'> 
      <h1 className="text-2xl font-semibold">WELCOME !<br></br> I am your assistant to guide and help you !</h1>
      <p className="mt-8 text-xl">Ask your queries here</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-7">Ask</button>
    </div>
    <div className="bg-black ">
      <Spline
          scene="https://prod.spline.design/ZPNBayw7KqfZxfg0/scene.splinecode"
          className="w-full h-full "
        />
    </div>
         
   </div>
  );
}
    


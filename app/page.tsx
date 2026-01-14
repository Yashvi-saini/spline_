
import Spline from '@splinetool/react-spline/next';
export default function Home() {
  return (
    <div className="mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 bg-blue-200">
      {/* Left container */}
      <div className="bg-black overflow-hidden">
        <Spline
          scene="https://prod.spline.design/ZPNBayw7KqfZxfg0/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Right container */}
      <div className="bg-black/90 text-white h-full w-full flex flex-col justify-center items-center md:items-start p-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          WELCOME!
          <br />
          I am your assistant to guide and help you!
        </h1>
        <p className="mt-6 text-lg opacity-90">Ask your doubts here</p>

        <button className="mt-7 inline-flex items-center gap-2 rounded-md bg-blue-500 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-600 active:scale-[0.98]">
          Ask
        </button>

        <ul className="mt-10 w-full max-w-md space-y-2 text-base font-normal">
          <li className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition">How to get started?</li>
          <li className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition">Need help</li>
          <li className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition">Debug the code</li>
          <li className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition">Translate in different language</li>
        </ul>
      </div>
    </div>
  );
}
    


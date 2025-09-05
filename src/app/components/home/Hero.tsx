import banner from "../../../../public/images/img1.webp";

export default function Hero() {
  return (
    <>
      <div className="h-[88%] rounded-2xl bg-[url('/images/img1.webp')] bg-cover bg-center lg:mt-[-60px]">
        <div className="bg-black/50 h-[100%] rounded-2xl content-center pl-6">
          <div className="">
            <h1 className="sm:flex items-center pl-0 pr-14 text-[9vw] leading-10 text-white md:leading-18 lg:leading-15 lg:text-6xl lg:w-[50%]">Your Trusted Cosulting Partner </h1>
          </div>
          {/* <div className="space-x-2">
            <button className="bg-green-300 sm:bg-red-500">Get for free</button>
            <button className="bg-red-300">Get for free</button>
          </div> */}
        </div>
      </div>
    </>
  );
}
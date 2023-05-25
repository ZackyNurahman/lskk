import wave from './wave.svg'

const Hero3 = () => {
    return ( 
        <div className="bg-gradient-to-r from-[#274685] to-[#3db3c5] h-screen bg-no-repeat bg-cover relative" >
              <img src={wave} alt="" className='absolute z-[10] w-screen bottom-[-2rem]'/>
        <div className=" py-60 px-48 font text-4xl text-white font-bold  font-sans flex">
            <div className=" animate__animated animate__fadeInUp text-5xl">
            <h1>Tekido</h1>
            </div>
        </div>
        </div>
     );
}
 
export default Hero3;
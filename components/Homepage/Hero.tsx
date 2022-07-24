import Image from "next/future/image";

const Hero = () => {
  return (
    <main className="min-h-screen">
      <header className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto mt-3">
        <div className="w-full px-6 flex flex-col justify-center h-[50vh] items-start">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-600">
            Find A Doctor <br /> Near You
          </h1>
          <p className="text-sm md:text-md lg:text-xl pr-3 text-gray-500 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            quisquam in asperiores vitae eligendi rerum?
          </p>

          <button className="rounded-md bg-sky-600 text-white text-lg md:text-xl uppercase px-8 py-2 mt-3 font-medium">
            Make An Appintnment
          </button>
        </div>
        <div className="hidden md:inline-block w-full">
          <Image
            src="/images/doctor.jpg"
            alt="doctor"
            height={4480}
            width={6720}
            className="w-full object-cover rounded-lg"
          />
        </div>
      </header>
    </main>
  );
};
export default Hero;

import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { heroImage } from "../../Constants/image";

const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
];

const Hero = () => {
  return (
    <section className="w-full overflow-hidden bg-linear-to-br from-white via-slate-50 to-blue-50 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        {/* FIX: use flex instead of grid so order works */}
        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* Text Section */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1 w-full">

            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-xs sm:text-sm font-medium text-primary">
              Trusted Home Appliance Service
            </div>

            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              We Repair. <br />
              We Maintain. <span className="text-primary">You Relax.</span>
            </h1>

            <p className="mx-auto max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0">
              Professional repair and maintenance services for all your home
              appliances. Quick, reliable, and affordable solutions delivered
              right to your doorstep.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-sm sm:w-auto sm:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 cursor-pointer">
                <FaCalendarAlt />
                Book a Service
              </button>

              <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-6 py-4 text-sm sm:w-auto sm:text-base font-semibold text-gray-700 transition-all duration-300 hover:border-primary hover:text-primary cursor-pointer">
                Learn More
                <FaArrowRight />
              </button>
            </div>

            {/* Customer Section */}
            <div className="flex flex-col items-center gap-6 pt-4 sm:flex-row sm:justify-center lg:justify-start">

              <div className="flex -space-x-4 sm:-space-x-5">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="user"
                    className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-md sm:h-14 sm:w-14"
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 text-center sm:gap-8">
                <div>
                  <h3 className="text-lg font-bold text-primary sm:text-2xl">10K+</h3>
                  <p className="text-xs text-gray-600 sm:text-sm">Happy Customers</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary sm:text-2xl">24/7</h3>
                  <p className="text-xs text-gray-600 sm:text-sm">Support</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary sm:text-2xl">99%</h3>
                  <p className="text-xs text-gray-600 sm:text-sm">Success Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 w-full">

            <div className="absolute h-52 w-52 rounded-full bg-primary/20 blur-3xl sm:h-72 sm:w-72"></div>

            <img
              src={heroImage}
              alt="Home Appliance Repair"
              className="relative z-10 w-full max-w-sm rounded-2xl object-cover shadow-2xl sm:max-w-md lg:max-w-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
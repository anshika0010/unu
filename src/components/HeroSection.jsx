import Image from "../assets/Productimage.png";
export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-[#eeeae4]">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={Image}
                alt="Hero Image"
                className="w-full  rounded-xl h-[600px]  object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Know Your
                <span className="block text-transparent bg-clip-text bg-blue-400">
                  Skin Better
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Take our skincare quiz to uncover the ideal products for your
                skin type, or explore our handpicked collection of premium
                skincare essentials.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                size="lg"
                className="bg-blue-300 rounded-xl hover:bg-yellow-100 text-black px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Quiz
              </button>
              <button
                variant="outline"
                size="lg"
                className="border-2 border-blue-300 rounded-xl text-black hover:bg-yellow-200 hover:text-black px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                Shop Now
              </button>
            </div>

            {/* Optional stats or features */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

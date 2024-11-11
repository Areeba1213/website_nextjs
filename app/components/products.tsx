import Image from "next/image";

function Products() {
  return (
    <div className="w-full h-auto flex justify-center items-center mt-10 px-4">
      <div className="w-full md:w-[80%] h-full">
        {/* Top Section */}
        <div>
          <span className="border-l-8 border-red-300 text-red-500 mb-5 font-bold">This Month</span>
          <div className="flex justify-between">
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Best Selling Outfits</h2>
            <button className="py-2 px-5 bg-red-500 rounded-md text-white">View All</button>
          </div>
        </div>

        {/* Product Container */}
        <div className="flex flex-wrap justify-between gap-4 mt-7">
          {/* Product 1 */}
          <div className="w-full sm:w-[48%] md:w-[23%] bg-white flex flex-col items-center p-3 rounded-md shadow-md">
            <div className="w-full h-[200px] bg-gray-100 flex justify-center items-center">
              <Image src={"/images/p5.jpg"} width={150} height={150} alt="product-image" />
            </div>
            <div className="flex flex-col items-center mt-4">
              <span className="font-bold text-lg">2 Piece Stich Suit</span>
              <span className="font-bold text-lg">2000 PKR</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-full sm:w-[48%] md:w-[23%] bg-white flex flex-col items-center p-3 rounded-md shadow-md">
            <div className="w-full h-[200px] bg-gray-100 flex justify-center items-center">
              <Image src={"/images/p4.jpg"} width={150} height={150} alt="product-image" />
            </div>
            <div className="flex flex-col items-center mt-4">
              <span className="font-bold text-lg">2 Piece Stich Suit</span>
              <span className="font-bold text-lg">2000 PKR</span>
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-full sm:w-[48%] md:w-[23%] bg-white flex flex-col items-center p-3 rounded-md shadow-md">
            <div className="w-full h-[200px] bg-gray-100 flex justify-center items-center">
              <Image src={"/images/p3.jpg"} width={150} height={150} alt="product-image" />
            </div>
            <div className="flex flex-col items-center mt-4">
              <span className="font-bold text-lg">2 Piece Stich Suit</span>
              <span className="font-bold text-lg">2000 PKR</span>
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-full sm:w-[48%] md:w-[23%] bg-white flex flex-col items-center p-3 rounded-md shadow-md">
            <div className="w-full h-[200px] bg-gray-100 flex justify-center items-center">
              <Image src={"/images/p2.jpg"} width={150} height={150} alt="product-image" />
            </div>
            <div className="flex flex-col items-center mt-4">
              <span className="font-bold text-lg">2 Piece Stich Suit</span>
              <span className="font-bold text-lg">2000 PKR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

    import React, { useState } from "react";
    import { FaStar } from "react-icons/fa6";
    import ProductDetailReviewForm from "./ProductDetailReviewForm";

    const ProductDetailInfo = () => {
    const [tabChange, setTabChange] = useState(2);
    return (
        <>
        <div className="font-roboto border-b-2 border-gray-300 pt-16 font-medium text-xl pb-1 mx-36 relative">
            <div className=" flex flex-row justify-evenly items-center  pb-4">
            <h1
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => setTabChange(1)}
            >
                Information
            </h1>
            <h1
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => setTabChange(2)}
            >
                Description
            </h1>
            <h1
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => setTabChange(3)}
            >
                Reviews
            </h1>
            </div>
        </div>
        <div className="container mx-auto pt-8">
            {/* Tab 1: Weight, Dimensions, Materials */}
            {tabChange === 1 && (
            <div className="flex flex-col md:flex-row justify-center items-start mx-auto text-xl text-gray-500 space-y-5 md:space-y-0 md:ml-[22%]">
                {/* Left Column (Labels) */}
                <div className="space-y-5">
                <p className="font-medium">Weight</p>
                <p className="font-medium">Dimensions</p>
                <p className="font-medium">Materials</p>
                <p className="font-medium">Other Info</p>
                </div>

                {/* Right Column (Values) */}
                <div className="space-y-5 pl-8 md:pl-16">
                <p>400 g</p>
                <p>10 x 10 x 15 cm</p>
                <p>60% cotton, 40% polyester</p>
                <p className="w-96">
                    American heirloom jean shorts pug seitan letterpress Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Nesciunt maiores
                    ea, ut quidem dolore unde dignissimos saepe autem earum a, qui
                    iure pariatur velit laborum atque cum rem dicta incidunt.
                </p>
                </div>
            </div>
            )}

            {/* Tab 2: Lorem Ipsum Text */}
            {tabChange === 2 && (
            <div className="leading-relaxed pl-6 text-center">
                <p className="text-center text-xl w-[500px] text-gray-500 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eius tempor incidid ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip efgx ea co consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occae cupidatat non proident, sunt
                in culpa qui
                </p>
            </div>
            )}

            {/* Tab 3: Review Section */}
            {tabChange === 3 && (
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center space-y-8">
                {/* Review Section */}
                <div className="grid grid-cols-2 space-x-4">

                <div className="flex flex-col md:flex-row justify-evenly items-center space-x-4 my-4 bg-gray-100 p-4 rounded-lg">
                    <div>
                    <img
                        src="/pfp-1.jpg"
                        alt="Profile"
                        className="inline-block w-20 h-20 -mt-10 rounded-full ring-2 ring-white object-cover"
                    />
                    </div>
                    <div>
                    <div className="flex flex-row justify-start items-center space-x-1">
                        <h1 className="font-medium text-lg pr-3">
                        Luffy D. Monkey
                        </h1>
                        {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className="text-yellow-500"
                            size={16}
                        />
                        ))}
                        <button
                        type="button"
                        className="pl-24 text-lg font-normal text-gray-600 hover:text-blue-600"
                        >
                        Reply
                        </button>
                    </div>
                    <p className="w-[400px] leading-relaxed text-start text-sm pt-2 text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                        totam placeat doloribus quos iusto optio reprehenderit,
                        corporis minima quasi aliquid itaque repellat expedita
                        pariatur in error numquam fugiat ea voluptates. lorem30
                    </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-evenly items-center space-x-4 my-4 bg-gray-100 p-4 rounded-lg">
                    <div>
                    <img
                        src="/pfp-1.jpg"
                        alt="Profile"
                        className="inline-block w-20 h-20 -mt-10 rounded-full ring-2 ring-white object-cover"
                    />
                    </div>
                    <div>
                    <div className="flex flex-row justify-start items-center space-x-1">
                        <h1 className="font-medium text-lg pr-3">
                        Luffy D. Monkey
                        </h1>
                        {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className="text-yellow-500"
                            size={16}
                        />
                        ))}
                        <button
                        type="button"
                        className="pl-24 text-lg font-normal text-gray-600 hover:text-blue-600"
                        >
                        Reply
                        </button>
                    </div>
                    <p className="w-[400px] leading-relaxed text-start text-sm pt-2 text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                        totam placeat doloribus quos iusto optio reprehenderit,
                        corporis minima quasi aliquid itaque repellat expedita
                        pariatur in error numquam fugiat ea voluptates. lorem30
                    </p>
                    </div>
                </div>
                </div>

                {/* Add a Review Section */}
                <div className="mb-5 w-full max-w-xl">
                    <h1 className="font-semibold text-lg text-center">
                    Add a Review
                    </h1>
                    <h5 className="text-sm text-gray-600 text-center mb-4">
                    Your Rating: ⭐⭐⭐⭐⭐
                    </h5>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6">
                    <div className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4">
                        <input
                        type="text"
                        placeholder="Name"
                        className="p-2 w-full"
                        />
                    </div>
                    <div className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4">
                        <input
                        type="text"
                        placeholder="Email"
                        className="p-2 w-full"
                        />
                    </div>
                    </div>

                    <textarea
                    name="Message"
                    placeholder="Write your review..."
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
                    ></textarea>
                </div>
                <button className="bg-black border-2 border-black text-white px-8 py-2 rounded-xl 
                hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-lg">Submit</button>
                </div>
            </div>
            )}
        </div>
        </>
    );
    };

    export default ProductDetailInfo;

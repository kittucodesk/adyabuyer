import React from "react";
import ProductCard from './ProductCard';
import FeatureGrid from "./FeaturesGrid";
import TextGrid from "./TextGrid";
import ComparisonGrid from "./ComparisonCard";

const products = [
    {
        id: 1,
        name: "WINGS Nuvobook V1 Aluminium Alloy Metal Body Intel Intel Core i5 11th Gen 1155G7 - (8 GB/512 GB SSD/Windows 11 Home) WL-Nuvobook V1-RED Thin and Light Laptop  (15.6 Inch, Red, 1.60 Kg)",

        price: "₹50,000/-",
        features: ["Feature in one line"],
        additionalInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nibh.",
    },
    {
        id: 1,
        name: "WINGS Nuvobook V1 Aluminium Alloy Metal Body Intel Intel Core i5 11th Gen 1155G7 - (8 GB/512 GB SSD/Windows 11 Home) WL-Nuvobook V1-RED Thin and Light Laptop  (15.6 Inch, Red, 1.60 Kg)",

        price: "₹50,000/-",
        features: ["Feature in one line"],
        additionalInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nibh.",
    },
    {
        id: 1,
        name: "WINGS Nuvobook V1 Aluminium Alloy Metal Body Intel Intel Core i5 11th Gen 1155G7 - (8 GB/512 GB SSD/Windows 11 Home) WL-Nuvobook V1-RED Thin and Light Laptop  (15.6 Inch, Red, 1.60 Kg)",

        price: "₹50,000/-",
        features: ["Feature in one line"],
        additionalInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nibh.",
    },
    {
        id: 1,
        name: "WINGS Nuvobook V1 Aluminium Alloy Metal Body Intel Intel Core i5 11th Gen 1155G7 - (8 GB/512 GB SSD/Windows 11 Home) WL-Nuvobook V1-RED Thin and Light Laptop  (15.6 Inch, Red, 1.60 Kg)",

        price: "₹50,000/-",
        features: ["Feature in one line"],
        additionalInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nibh.",

    },

];

const CompareScreen = () => {

    return (
        <>
            <div id="CompareScreen" >
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: 268 }}>
                        <div className="h-full flex flex-col justify-between items-center gap-y-20">
                            <div className="h-full flex flex-col justify-between">
                                <h1 className="text-4xl font-light italic text-[#362D86]  text-center">
                                    Compare
                                    <br />
                                    <span className="font-bold">Products</span>
                                </h1>
                                <div className="flex items-center ">
                                    <label className="bg-[#362D86] text-white rounded-l px-4 py-2 flex justify-center items-center">Full</label>
                                    <label className="bg-white text-black px-4 py-2 flex justify-center items-center">OR</label>
                                    <label className="bg-[#A4BCE0] text-[#362D86] rounded-r px-4 py-2 flex justify-center items-center">Difference</label>
                                </div>
                            </div>

                            <div className=" w-full text-center">
                                <p className="text-xl font-bold text-[#362D86]">Pricing</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex gap-x-0 gap-y-10 grid grid-cols-custom-layout">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
                <h2 style={{  width: 240 ,fontWeight: "600" }} className=" flex justify-center text-20 text-[#362D86] mt-10">Features</h2>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: 248 }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",}}>
                            <div >
                                <p style={{ fontWeight: "400" }} className="text-16 mt-8 text-[#6B7280] mb-4 ">Feature 1</p>
                                <p style={{ fontWeight: "400" }} className="text-16 text-[#6B7280] mb-4 ">Feature 2</p>
                                <p style={{ fontWeight: "400" }} className="text-16 text-[#6B7280] mb-4 ">Feature 3</p>
                                <p style={{ fontWeight: "400" }} className="text-16 text-[#6B7280] mb-4 ">Feature 4</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 40, width: 990 }} >
                        <FeatureGrid />
                    </div>
                </div>

                <h2 style={{  width: 240 ,fontWeight: "600" }} className=" flex justify-center text-20 text-[#362D86] mt-10">Description</h2>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: 648 }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <div >
                                <p style={{ fontWeight: "400" }} className="text-16 mt-8  text-[#6B7280] mb-4">Relative Features</p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div style={{ marginTop: 40,}}>
                            <TextGrid />
                        </div>
                    </div>
                </div >
                <div>
                    <ComparisonGrid />
                </div>

            </div>
        </>
    )
}

export default CompareScreen
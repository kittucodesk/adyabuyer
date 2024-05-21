import React from "react";
import ProductCard from './Productcard';
import FeatureGrid from "./FeaturesGrid";
import TextGrid from "./textgrid";
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
            <div id="CompareScreen" style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: 268 }}>
                    <div style={{ height: "100%", position: "relative", display: "flex", justifyContent: 'center' }}>
                        <h1 style={{ position: "relative", top: 0, fontWeight: "400", }} className=" font-italic text-32 text-[#362D86] mb-4">Compare
                            <br /> <span style={{ fontWeight: "800" }} className="text-32 text-[#362D86] mb-4" >Products</span>
                        </h1>
                        <div className=" flex items-center ">
                            <label style={{ borderRadius: 4, display: "flex", justifyContent: "center", alignContent: "center", padding: 9 }} className=" text-[#fff] bg-[#362D86] ">Full</label>
                            <label style={{ borderRadius: 74, display: "flex", justifyContent: "center", alignContent: "center", padding: 9 }} className="text-[#000] bg-[#FFFFFF] ">OR</label>
                            <label style={{ borderRadius: 4, display: "flex", justifyContent: "center", alignContent: "center", padding: 9 }} className=" text-[##362D86] bg-[#A4BCE0] ">Difference</label>
                        </div>
                        <div className=" absolute flex items-center bottom-0 ">
                            <p style={{ fontWeight: "700" }} className="text-20 text-[#362D86] mb-4">Pricing</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                        <div style={{ fontWeight: "600" }} className="text-20 text-[#362D86] mb-4">Features
                            <p style={{ fontWeight: "400" }} className="text-16 mt-8 text-[#6B7280] mb-4">Feature 1</p>
                            <p style={{ fontWeight: "400" }} className="text-16 text-[#6B7280] mb-4">Feature 2</p>
                            <p style={{ fontWeight: "400" }} className="text-16 text-[#6B7280] mb-4">Feature 3</p>
                            <p style={{ fontWeight: "400" }} className="text-16 text-[#6B7280] mb-4">Feature 4</p>
                            <p style={{ fontWeight: "400" }} className="text-16 text-[#6B7280] mb-4">Feature 5</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                        <div style={{ fontWeight: "600" }} className="text-20 text-[#362D86] mb-4">Description
                            <p style={{ fontWeight: "400" }} className="text-16 mt-8  text-[#6B7280] mb-4">Relative Features</p>
                        </div>
                    </div>
                </div>
                <div >
                    <div className=" flex grid grid-cols-custom-layout">                 
                     {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                    ))}
                    </div>


                    <div style={{marginTop: 40}} >
                        <FeatureGrid />
                    </div>
                    <div  style={{marginTop: 40}}> <TextGrid /></div>

                </div>
                <div >
                </div>
            </div>
            {/* <div><ComparisonGrid /></div> */}
        </>
    )
}

export default CompareScreen
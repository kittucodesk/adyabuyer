import React from "react";
import ProductCard from './Productcard';


const products = [
    {
        id: 1,
        name: "WINGS Nuvobook V1 Aluminium Alloy Metal Body Intel Intel Core i5 11th Gen 1155G7 - (8 GB/512 GB SSD/Windows 11 Home) WL-Nuvobook V1-RED Thin and Light Laptop  (15.6 Inch, Red, 1.60 Kg)",

        price: "₹50,000/-",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        additionalInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nibh.",
    },
    // Add more products as needed
    {
        id: 1,
        name: "WINGS Nuvobook V1 Aluminium Alloy Metal Body Intel Intel Core i5 11th Gen 1155G7 - (8 GB/512 GB SSD/Windows 11 Home) WL-Nuvobook V1-RED Thin and Light Laptop  (15.6 Inch, Red, 1.60 Kg)",

        price: "₹50,000/-",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        additionalInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nibh.",
    },
    {
        id: 1,
        name: "WINGS Nuvobook V1 Aluminium Alloy Metal Body Intel Intel Core i5 11th Gen 1155G7 - (8 GB/512 GB SSD/Windows 11 Home) WL-Nuvobook V1-RED Thin and Light Laptop  (15.6 Inch, Red, 1.60 Kg)",

        price: "₹50,000/-",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        additionalInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nibh.",
    },
    {
        id: 1,
        name: "WINGS Nuvobook V1 Aluminium Alloy Metal Body Intel Intel Core i5 11th Gen 1155G7 - (8 GB/512 GB SSD/Windows 11 Home) WL-Nuvobook V1-RED Thin and Light Laptop  (15.6 Inch, Red, 1.60 Kg)",

        price: "₹50,000/-",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        additionalInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nibh.",
    },

];

const CompareScreen = () => {

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 268 }}>
                <div style={{display:"flex"}}>
                    <h1 style={{ fontWeight: "400", }} className=" font-italic text-32 text-[#362D86] mb-4">Compare
                        <br /> <span style={{ fontWeight: "800" }} className="text-32 text-[#362D86] mb-4" >Products</span>
                    </h1>

                    <div className="flex items-center">
                        <label style={{ borderRadius: 4, display: "flex", justifyContent: "center", alignContent: "center" }} className=" text-[#fff] bg-[#362D86] h-7">Full</label>
                        <label style={{ borderRadius: 74, display: "flex", justifyContent: "center", alignContent: "center" }} className="text-[#000] bg-[#FFFFFF] h-7">OR</label>
                        <label style={{ borderRadius: 4, display: "flex", justifyContent: "center", alignContent: "center" }} className=" text-[##362D86] bg-[#A4BCE0]  h-7">Difference</label>
                    </div>
                </div>

                <div>
                    <p style={{ fontWeight: "700" }} className="text-20 text-[#362D86] mb-4">Pricing</p>
                    <div style={{ fontWeight: "600" }} className="text-20 text-[#362D86] mb-4">Features
                        <p style={{ fontWeight: "400" }} className="text-16 text-[#6B7280] mb-4">Feature 1</p>
                        <p style={{ fontWeight: "400" }} className="text-16 text-[#6B7280] mb-4">Feature 2</p>
                        <p style={{ fontWeight: "400" }} className="text-16 text-[#6B7280] mb-4">Feature 3</p>
                        <p style={{ fontWeight: "400" }} className="text-16 text-[#6B7280] mb-4">Feature 4</p>
                        <p style={{ fontWeight: "400" }} className="text-16 text-[#6B7280] mb-4">Feature 5</p>
                    </div>
                    <div style={{ fontWeight: "600" }} className="text-20 text-[#362D86] mb-4">Description
                        <p style={{ fontWeight: "400" }} className="text-16 text-[#6B7280] mb-4">Relative Features</p>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(220px, 50%), 1fr))" }}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 mt-4">
                    <table className="table-auto w-full flex-row">

                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">{products[0].price}</td>
                                <td className="border px-4 py-2">
                                    {products[0].features.map((feature, index) => (
                                        <p key={index}>{feature}</p>
                                    ))}
                                </td>
                                <td className="border px-4 py-2">{products[0].additionalInfo}</td>
                                <td className="border px-4 py-2">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add to cart</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompareScreen
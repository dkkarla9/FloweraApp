import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllProducts } from '../utlis/productsApi.js';
import { FaStar } from 'react-icons/fa';
import { RingLoader } from 'react-spinners';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';


const ProductDetail = () => {
    const { title } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            const products = await getAllProducts();
            const foundProduct = products.find(product => product.title === title);
            setProduct(foundProduct);
            setSelectedImage(foundProduct.images[0]);
        };
        fetchProduct();
    }, [title]);

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <RingLoader color="#D4AF37" size={100} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <button
                    onClick={() => navigate('/')}
                    className="text-[#CAC7BD] hover:text-[#1A1A1A] mb-6"
                >
                    ← Back to Products
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Image & Gallery Section */}
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <Zoom>
                                <img
                                    src={selectedImage}
                                    alt={product.title}
                                    className="h-120 w-full object-contain rounded-xl shadow-lg cursor-zoom-in transition-transform duration-300 hover:scale-105"
                                />
                            </Zoom>

                        </div>

                        <div className="flex gap-2 overflow-x-auto pb-2">
                            {product.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`thumb-${i}`}

                                    className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border cursor-pointer transition-transform duration-200 ${selectedImage === img
                                        ? 'ring-2 ring-[#D4AF37]'
                                        : 'hover:ring-2 hover:ring-[#B5B8B1]'
                                        } hover:scale-105`}
                                />
                            ))}
                        </div>

                        
                        {/* Reviews Section */}
                        
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6 bg-white rounded-2xl p-6 shadow-md">
                        <h1 className="text-3xl font-bold text-[#1A1A1A]">{product.title}</h1>
                        <p className="text-[#2F2F2F]">{product.description}</p>

                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-[#1A1A1A]">
                                ${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}
                            </span>
                            <span className="text-sm text-[#B5B8B1] line-through">
                                ${product.price.toFixed(2)}
                            </span>
                        </div>

                        <div className="text-sm">
                            {product.stock > 0 ? (
                                <span className="text-emerald-600">In Stock ({product.stock})</span>
                            ) : (
                                <span className="text-rose-600">Out of Stock</span>
                            )}
                        </div>

                        <div className="flex items-center gap-1 text-yellow-500">
                            {Array(Math.floor(product.rating))
                                .fill(0)
                                .map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            <span className="text-sm text-[#2F2F2F] ml-2">
                                ({product.rating.toFixed(1)})
                            </span>
                        </div>

                        {/* Add to Cart & Buy Now Buttons */}
                        <div className="flex gap-4">
                            <button className="flex-1 bg-[#1A1A1A] text-white py-2 rounded-lg hover:bg-[#2F2F2F] transition-all duration-300 hover:scale-105">
                                Add to Cart
                            </button>
                            <button className="flex-1 bg-[#CAC7BD] text-[#1A1A1A] py-2 rounded-lg hover:bg-[#B5B8B1] transition-all duration-300 hover:scale-105">
                                Buy Now
                            </button>
                        </div>

                        {/* Details Table */}
                        <div className="bg-[#F9F9F9] rounded-xl shadow-sm overflow-hidden border border-gray-200">
                            <table className="w-full text-sm">
                                <tbody>
                                    <tr className="even:bg-gray-100">
                                        <td className="px-4 py-3 font-semibold text-[#1A1A1A]">Category</td>
                                        <td className="px-4 py-3 text-[#2F2F2F]">{product.category}</td>
                                    </tr>
                                    <tr className="even:bg-gray-100">
                                        <td className="px-4 py-3 font-semibold text-[#1A1A1A]">Brand</td>
                                        <td className="px-4 py-3 text-[#2F2F2F]">{product.brand}</td>
                                    </tr>
                                    <tr className="even:bg-gray-100">
                                        <td className="px-4 py-3 font-semibold text-[#1A1A1A]">SKU</td>
                                        <td className="px-4 py-3 text-[#2F2F2F]">{product.sku}</td>
                                    </tr>
                                    <tr className="even:bg-gray-100">
                                        <td className="px-4 py-3 font-semibold text-[#1A1A1A]">Weight</td>
                                        <td className="px-4 py-3 text-[#2F2F2F]">{product.weight}g</td>
                                    </tr>
                                    <tr className="even:bg-gray-100">
                                        <td className="px-4 py-3 font-semibold text-[#1A1A1A]">Dimensions</td>
                                        <td className="px-4 py-3 text-[#2F2F2F]">
                                            {product.dimensions?.width} x {product.dimensions?.height} x {product.dimensions?.depth} cm
                                        </td>
                                    </tr>
                                    <tr className="even:bg-gray-100">
                                        <td className="px-4 py-3 font-semibold text-[#1A1A1A]">Shipping</td>
                                        <td className="px-4 py-3 text-[#2F2F2F]">{product.shippingInformation}</td>
                                    </tr>
                                    <tr className="even:bg-gray-100">
                                        <td className="px-4 py-3 font-semibold text-[#1A1A1A]">Warranty</td>
                                        <td className="px-4 py-3 text-[#2F2F2F]">{product.warrantyInformation}</td>
                                    </tr>
                                    <tr className="even:bg-gray-100">
                                        <td className="px-4 py-3 font-semibold text-[#1A1A1A]">Return Policy</td>
                                        <td className="px-4 py-3 text-[#2F2F2F]">{product.returnPolicy}</td>
                                    </tr>
                                    <tr className="even:bg-gray-100">
                                        <td className="px-4 py-3 font-semibold text-[#1A1A1A]">Min. Order</td>
                                        <td className="px-4 py-3 text-[#2F2F2F]">{product.minimumOrderQuantity}</td>
                                    </tr>
                                    <tr className="even:bg-gray-100">
                                        <td className="px-4 py-3 font-semibold text-[#1A1A1A]">Barcode</td>
                                        <td className="px-4 py-3 text-[#2F2F2F]">{product.meta?.barcode}</td>
                                    </tr>
                                    <tr className="even:bg-gray-100">
                                        <td className="px-4 py-3 font-semibold text-[#1A1A1A]">QR Code</td>
                                        <td className="px-4 py-3 text-[#2F2F2F]">
                                            {product.meta?.qrCode ? (
                                                <img src={product.meta.qrCode} alt="QR Code" className="w-16 h-16" />
                                            ) : (
                                                'N/A'
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                                            
                    </div>
                </div>

<div className="max-w-4xl mx-auto mt-12">
                            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Customer Reviews</h2>
                            {product.reviews.length > 0 ? (
                                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                                    {product.reviews.map((review, i) => (
                                        <div
                                            key={i}
                                            className="bg-white p-4 rounded-xl shadow-sm border border-gray-200"
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <h3 className="text-sm font-semibold text-[#1A1A1A]">{review.reviewerName}</h3>
                                                <div className="text-yellow-500 text-sm flex items-center">
                                                    {Array(review.rating)
                                                        .fill(0)
                                                        .map((_, i) => (
                                                            <FaStar key={i} />
                                                        ))}
                                                </div>
                                            </div>
                                            <p className="text-sm text-[#2F2F2F]">{review.comment}</p>
                                            <p className="text-xs text-[#B5B8B1] mt-1">
                                                {new Date(review.date).toLocaleDateString()}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                            ) : (
                                <p className="text-[#2F2F2F]">No reviews available.</p>
                            )}
                        </div>

            </div>
        </div>
    );
};

export default ProductDetail;

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import banner from '../assets/white.jpg'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../features/Products/productsSlice";
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const { products, isLoading, isError, error } = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    console.log(products);

    const product = products.find(product => product.unique_id === id);
    console.log(product);

    let content;

    if (isLoading) {
        content = <span className="loading loading-dots loading-xl flex-col mt-28 "></span>
    }
    if (!isLoading && isError) {
        content =
            <div className="toast toast-top toast-center">
                <div className="alert alert-info">
                    <span>{error}</span>
                </div>
            </div>

    }
    if (!isLoading && !isError && products.length === 0 && !product) {
        content = <h1 className="min-h-[calc(100vh-52px)]">No Products Found!</h1>
    }
    if (!isLoading && !isError && products.length > 0 && product) {
        const { name, image, short_desc, price, discount_date, discount_amount, category } = product;

        content =
            <div className="hero bg-center min-h-[calc(100vh-52px)] 
    " style={{
                    backgroundImage: `url(${banner})`,
                }}>
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={`https://admin.refabry.com/storage/product/${image}`}

                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">
                            {short_desc}
                        </p>
                        <div className="card-actions">
                            <div className="badge badge-outline p-4">Normal Price : {price}</div>
                            {discount_date ? <div className="badge badge-outline p-4">Discount Date : {discount_date}</div> : ''}
                            {discount_amount ? <div className="badge badge-outline p-4">
                                Discounted Price : {`${price}` - `${discount_amount}`}
                            </div> : ''}
                        </div>
                        <button className="btn btn-neutral btn-dash mt-8">{category.name}</button>

                        <div>
                            <button className="btn btn-primary mt-8">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
    }

    return (
        <div >
            <Navbar />
            <div className="min-h-[calc(100vh-52px)]">
                {content}
            </div>
            <Footer />
        </div>

    );
};

export default Details;
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import banner from '../assets/white.jpg'

const Details = () => {
    const { id } = useParams();

    const productsStorage = useLoaderData();
    const products = productsStorage.data.data;

    const product = products.find(product => product.unique_id === id);

    const { name, image, short_desc, price, discount_date, discount_amount, category} = product;

    return (
        <div  >
            <Navbar />
            <div className="hero bg-center min-h-[calc(100vh-116px)] 
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
            <Footer />
        </div>

    );
};

export default Details;
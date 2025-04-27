import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartProducts = useSelector(state => state.cart.cartProducts);
    console.log(cartProducts);
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-52px)] pt-20">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr> 
                                <th></th>
                                <th>Name</th>
                                <th>Discounted Price</th>
                                <th>Category</th>
                                <th>View Details</th>
                            </tr>
                        </thead>
                        {cartProducts.map((p,i)=> (
                            <tr key={p.unique_id}>
                                <td className="font-semibold">{i + 1}</td>
                                <th>{p.name}</th>
                                <td>{`${p.price}`- `${p.discount_amount}`} taka</td>
                                <td>{p.category.name}</td>
                                <Link to={`/${p.unique_id}`} className="btn btn-primary mt-2"> Details</Link>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
            <Footer />

        </div>
    );
};

export default Cart;
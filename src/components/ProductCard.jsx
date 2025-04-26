import { NavLink } from 'react-router-dom'
const ProductCard = ({ product }) => {
  const { name, short_desc, image, price, discount_date, discount_amount, unique_id } = product;
  return (
    <div className="card mx-auto w-96 shadow-lg">
      <figure>
        <img className="w-[500px] h-[450px]" src={`https://admin.refabry.com/storage/product/${image}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
  
        </h2>
     
        <div className="card-actions">
          <div className="badge badge-outline">Normal Price : {price}</div>
          {discount_date ? <div className="badge badge-outline">Discount Date : {discount_date}</div> : ''}
          {discount_amount ? <div className="badge badge-outline">
              Discounted Price : {`${price}`- `${discount_amount}`}
          </div> : ''}
        </div>

      </div>
      <NavLink to={`${unique_id}`} className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95 cursor-pointer">View Details</NavLink>
    </div>
  );
};

export default ProductCard;
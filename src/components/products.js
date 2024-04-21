import Link from 'next/link';

const Products = ({ product }) => {
  return (
    <Link legacyBehavior href={`/products/${product.id}`}>
      <a className="block bg-white gap-2 shadow-md mx-2 md:mx-6 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center">
        <img
          src={`/${product.image}`} 
          alt={product.name}
          className="w-full md:w-64 h-47 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2">{product.name}</h1>
        </div>
      </a>
    </Link>
  );
};

export default Products;

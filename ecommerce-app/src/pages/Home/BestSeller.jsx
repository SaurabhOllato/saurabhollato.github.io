import { Link } from "react-router-dom";
import Bracelet from "./../../assets/Bracelet.jpeg";
import Bracelet1 from "./../../assets/Bracelet1.jpeg";
import Jhumka from "./../../assets/Jhumka.jpeg";
import Kangan from "./../../assets/Kangan.jpeg";
import Ring from "./../../assets/Ring.jpeg";

const BestSellers = () => {
  const categories = [
    {
      id: 1,
      name: "18k Hoop Earrings",
      price: "$32.00",
      image: Bracelet,
    },
    {
      id: 2,
      name: "18k Ring Bracelet",
      price: "$42.00",
      image: Bracelet1,
    },
    {
      id: 3,
      name: "18k Custom Medal",
      price: "$48.00",
      image:Jhumka,
    },
    {
      id: 4,
      name: "Abstract Ring",
      price: "Rs 2100",
      image:  Ring ,
    },
  ];

  return (
    <section className=" py-16 px-4 text-center font-serif">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#5E3D29] mb-12">
        Catalog
      </h2>

      {/* Catalog Items */}
     <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
  {categories.map((item, index) => (
    <div key={index} className="flex flex-col items-start">
      {index % 2 === 0 ? (
        <>
          {/* Image on Top */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover  mb-3"
          />
          <p className="text-lg  text-[#5E3D29]">{item.name}</p>
        </>
      ) : (
        <>
          {/* Title on Top */}
          <p className="text-lg text-[#5E3D29] mb-3">{item.name}</p>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover "
          />
        </>
      )}
    </div>
  ))}
</div>


      {/* View All Link */}
      <div className="mt-10">
        <Link
          to="/collections"
          className="text-sm font-medium text-[#5E3D29] underline hover:text-[#8b5e3c] transition"
        >
          View All →
        </Link>
      </div>
    </section>
  );
};

export default BestSellers;

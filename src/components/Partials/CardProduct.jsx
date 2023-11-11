import Ellipsis from "react-lines-ellipsis";
import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="lg:w-1/3 md:w-1/3 sm:w-1/2 xs:w-full shadow-md bg-white max-w-xs border border-gray-400 rounded-lg px-2 py-4 mx-2 my-2 flex flex-col justify-between ">{children}</div>;
};

const HeaderCard = (props) => {
  const { img } = props;
  return (
    <a href="#">
      <img src={img} alt="product" className="p-4 rounded-xl h-60 w-full object-center" />
    </a>
  );
};

const BodyCard = (props) => {
  const { children, title } = props;
  return (
    <div className="px-4 pb-3 h-full">
      <a href="">
        <h4 className="font-bold text-sm mb-3">
          <Ellipsis text={title} maxLine="2" ellipsis="" trimRight basedOn="words" />
        </h4>
        <p className="text-xs font-light mb-2 text-justify ">
          <Ellipsis text={String(children)} maxLine="5" ellipsis="..." trimRight basedOn="words" />
        </p>
      </a>
    </div>
  );
};

const FooterCard = (props) => {
  const { price, id, handleAddToCart } = props;
  return (
    <div className="flex items-center justify-between px-4">
      <span className="text-sm font-semibold text-gray-800">{price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}</span>
      <Button classname="ms-1 bg-blue-700 h-6 text-sm" onClick={() => handleAddToCart(id)}>
        Cart
      </Button>
    </div>
  );
};

CardProduct.HCard = HeaderCard;
CardProduct.BCard = BodyCard;
CardProduct.FCard = FooterCard;

export default CardProduct;

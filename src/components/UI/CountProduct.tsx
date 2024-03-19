import css from "./CountProduct.module.css";
import OrderProductsStore from "../store/OrderProductsStore";
import { observer } from "mobx-react-lite";
interface CountProductProps {
  productId: number;
  productCount: number;
}
const CountProduct: React.FC<CountProductProps> = observer(
  ({ productId, productCount }) => {
    const increaseProductCount = (id: number) => {
      OrderProductsStore.increaseOrderProductCount(id);
      console.log(OrderProductsStore.products);
    };
    const decreaseProductCount = (id: number) => {
      OrderProductsStore.decreaseOrderProductCount(id);
    };

    return (
      <div className={css.count__container}>
        <button
          onClick={() => decreaseProductCount(productId)}
          disabled={productCount === 1}
        >
          <svg
            width="12.000000"
            height="2.000000"
            viewBox="0 0 12 2"
            fill="none"
          >
            <path
              id="Vector"
              d="M0 0L12 0L12 2L0 2L0 0Z"
              fill="#404E3E"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
        </button>
        <p className={css.count__product}>{productCount}</p>
        <button
          onClick={() => increaseProductCount(productId)}
          disabled={productCount === 10}
        >
          <svg
            width="14.000000"
            height="14.000000"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              id="Vector"
              d="M14 8L8 8L8 14L6 14L6 8L0 8L0 6L6 6L6 0L8 0L8 6L14 6L14 8Z"
              fill="#404E3E"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
        </button>
      </div>
    );
  }
);
export default CountProduct;

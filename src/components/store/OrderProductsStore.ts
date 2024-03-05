import axios, { AxiosResponse } from "axios";
import BaseStore from "./BaseStore";
import { observable, action, makeObservable, runInAction } from "mobx";
interface Product {
  id: string;
  imgPath: string[];
  name: string;
  description: string;
  price: number;
  category: string;
  size: string[] | string;
  fabric: string;
  color: string;
  collection?: string;
}
/**
 * Класс для управления состоянием товаров.
 */
class OrderProductsStore extends BaseStore {
  /**
   * Массив товаров
   */
  @observable
  products: Product[] = [];

  constructor() {
    super();
    makeObservable(this);
  }
  /**
   * Функция для получения товаров с сервера
   */
  @action
  getOrderProducts = async (): Promise<void> => {
    try {
      const response: AxiosResponse<Product[]> = await axios.get<Product[]>(
        "http://localhost:3000/orders"
      );
      const data: Product[] = response.data;
      runInAction(() => {
        this.products = data;
      });
    } catch (error) {
      console.error("Error", error);
    }

    // [MobX] Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed.
  };
  /**
   * Метод для добавления нового продукта в массив товаров и отправки на сервер
   * @param {Product} newProduct - Данные нового продукта.
   */
  @action
  addOrderProduct = (newProduct: Product): void => {
    const api = axios.create({
      baseURL: "http://localhost:3000",
      headers: {
        "Content-Type": "application/json",
      },
    });
    api
      .post("/orders", newProduct)
      .then((response) => {
        // if (response.status !== 200) {
        //   throw new Error(`HTTP error!Status: ${response.status}`);
        // }
        runInAction(() => {
          this.products.push(newProduct);
        });
      })
      .catch((error) => {
        console.error("Произошла ошибка при создании данных", error);
      });
  };
  @action
  deleteOrderProduct = (deleteProductId: string) => {
    axios
      .delete(`http://localhost:3000/orders/${deleteProductId}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("Delete sucessful");
        }
        runInAction(() => {
         this.products= this.products.filter((order) => order.id !== deleteProductId);
        });
      })
      .catch((error) => {
        console.error("Error delete", error);
      });
  };
}
export default new OrderProductsStore();

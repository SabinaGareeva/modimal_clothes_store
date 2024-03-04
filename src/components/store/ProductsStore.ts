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
  size: string[];
  fabric: string;
  color: string;
  collection?: string;
}
/**
 * Класс для управления состоянием товаров.
 */
class ProductsStore extends BaseStore {
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
  getOrderProduct = async (): Promise<void> => {
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
  addProduct = (newProduct: Product): void => {
    const api = axios.create({
      baseURL: "http://localhost:3000",
      headers: {
        "Content-Type": "application/json",
      },
    });
    api
      .post("/orders", { data: this.products })
      .then((response) => {
        console.log("Данные успешно созданы");
      })
      .catch((error) => {
        console.error("Произошла ошибка при создании данных", error);
      });
  };
}
export default new ProductsStore();

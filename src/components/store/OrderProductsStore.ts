import axios, { AxiosResponse } from "axios";
import BaseStore from "./BaseStore";
import { observable, action, makeObservable, runInAction } from "mobx";
import { OrderProduct } from "@/types/types";

/**
 * Класс для управления состоянием товаров.
 */
class OrderProductsStore extends BaseStore {
  /**
   * Массив товаров
   */
  @observable
  products: OrderProduct[] = [];

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
      const response: AxiosResponse<OrderProduct[]> = await axios.get<
        OrderProduct[]
      >("http://localhost:3000/orders");
      const data: OrderProduct[] = response.data;
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
  addOrderProduct = (newProduct: OrderProduct): void => {
    const api = axios.create({
      baseURL: "http://localhost:3000",
      headers: {
        "Content-Type": "application/json",
      },
    });
    api
      .post("/orders", newProduct)
      .then((response) => {

        if (response.status === 201) { // Проверка успешного ответа
          const addedProduct: OrderProduct = response.data; // Получение добавленного продукта с сервера
          runInAction(() => {
            // Добавление нового продукта в хранилище
            this.products.push(addedProduct);
          }) } else {
            console.error("Произошла ошибка при создании данных. HTTP status:", response.status);
          }
    
        // runInAction(() => {
        //   this.products.push(newProduct);
        // });
      })
      .catch((error) => {
        console.error("Произошла ошибка при создании данных", error);
      });
  };
  // Метод для удаления товара
  @action
  deleteOrderProduct = (deleteProductId: string) => {
    axios
      .delete(`http://localhost:3000/orders/${deleteProductId}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("Delete sucessful");
        }
        runInAction(() => {
          this.products = this.products.filter(
            (order) => order.id !== deleteProductId
          );
        });
      })
      .catch((error) => {
        console.error("Error delete", error);
      });
  };
  // метод для увеличения count каждого продукта
  @action
  increaseOrderProductCount = async (updateProductId: string) => {
    try {
      const productToUpdate = this.products.find(
        (product) => product.id === updateProductId
      );
      if (productToUpdate) {
        productToUpdate.count += 1;
        const response = await axios.put(
          `http://localhost:3000/orders/${updateProductId}`,
           productToUpdate 
        );
       
      }
    } catch (error) {
      console.error("Error updating product count:", error);
    }
  };
   // метод для уменьшения count каждого продукта
  @action
  decreaseOrderProductCount = async(updateProductId: string) => {
    try {
      const productToUpdate = this.products.find(
        (product) => product.id === updateProductId
      );
      if (productToUpdate) {
        productToUpdate.count -= 1;
        const response = await axios.put(
          `http://localhost:3000/orders/${updateProductId}`,
           productToUpdate 
        );
       
      }
    } catch (error) {
      console.error("Error updating product count:", error);
    }
  };
}
export default new OrderProductsStore();

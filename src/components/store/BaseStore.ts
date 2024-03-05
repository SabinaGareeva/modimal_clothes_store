import { observable, action } from "mobx";
/**
 * Базовый класс с состоянием.
 * @class
 */
class BaseStore {
  @observable isLoading: boolean = false;
  /**
   * Метод для установки сообщения об ошибке.
   * @action
   * @param {string} errorMessage - Сообщение об ошибке.
   */
  @action
  setError = (errorMessage: string): void => {
    console.log(errorMessage);
  };
  /**
   * Метод для сброса состояния загрузки.
   * @action
   */
  @action
  resetState = (): void => {
    this.isLoading = false;
  };
}
export default BaseStore
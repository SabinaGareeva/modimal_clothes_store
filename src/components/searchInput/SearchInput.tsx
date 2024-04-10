import React, { useRef, ChangeEventHandler } from "react";
import css from "./SearchInput.module.scss";
interface SearchInputProps {
  setSearchName: (values: string) => void;
}
const SearchInput: React.FC<SearchInputProps> = ({ setSearchName }) => {
  const handleSearchName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchName(event.target.value);
  };
  const inputSearchRef = useRef<HTMLInputElement | null>(null);
  // очистка input при нажатии на крестик
  const clearSearchInput = () => {
    if (inputSearchRef.current) {
      setSearchName("");
      inputSearchRef.current.value = "";
    }
  };
  return (
    <div className="container">
      <div className={css.search}>
        <input
          className={css.search__input}
          type="text"
          placeholder="Enter product name"
          name="name"
          onChange={handleSearchName}
          ref={inputSearchRef}
        />
        <svg
          width="24.000000"
          height="24.000000"
          viewBox="0 0 24 24"
          fill="none"
          className={css.search__icon}
        >
          <path
            id="search"
            d="M10.6687 0C4.77655 0 0 4.77734 0 10.668C0 16.5625 4.77655 21.3359 10.6687 21.3359C13.1626 21.3359 15.4566 20.4805 17.2731 19.0469L21.8573 23.6328C22.3475 24.1211 23.1422 24.1211 23.6324 23.6328C24.1225 23.1406 24.1225 22.3477 23.6324 21.8555L19.0482 17.2734C20.4818 15.457 21.3375 13.1641 21.3375 10.668C21.3375 4.77734 16.5609 0 10.6687 0ZM2.51028 10.668C2.51028 6.16406 6.16295 2.51172 10.6687 2.51172C15.1745 2.51172 18.8272 6.16406 18.8272 10.668C18.8272 15.1758 15.1745 18.8281 10.6687 18.8281C6.16295 18.8281 2.51028 15.1758 2.51028 10.668Z"
            fill="#ADADAD"
          />
        </svg>
        <button className={css.search__button} onClick={clearSearchInput}>
          <svg
            width="18.000000"
            height="18.000000"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              id="Union"
              d="M12 14.3047L21.2181 23.5234C21.8545 24.1602 22.8864 24.1602 23.5227 23.5234C24.1591 22.8867 24.1591 21.8555 23.5227 21.2188L14.3046 12L23.5227 2.78125C24.1591 2.14453 24.1591 1.11328 23.5227 0.476562C22.8864 -0.160156 21.8545 -0.160156 21.2181 0.476562L12 9.69531L2.78186 0.476562C2.14551 -0.160156 1.11365 -0.160156 0.477295 0.476562C-0.159058 1.11328 -0.159058 2.14453 0.477295 2.78125L9.69543 12L0.477295 21.2188C-0.159058 21.8555 -0.159058 22.8867 0.477295 23.5234C1.11365 24.1602 2.14551 24.1602 2.78186 23.5234L12 14.3047Z"
              fill="#ADADAD"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default SearchInput;

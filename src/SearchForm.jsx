import { useState } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const { setSearchValue } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    setSearchValue(input);
    setInput("");
  };

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          name="search"
          placeholder="cat"
          className="form-input search-input"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};
export default SearchForm;

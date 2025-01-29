import { useState } from "react";

export interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim() !== "") {
      onSearch(search);
    }
  };

  return (
    <section className="home-search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          id="site-search"
          name="search"
          placeholder="Cherchez votre recette"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
    </section>
  );
};

export default SearchBar;

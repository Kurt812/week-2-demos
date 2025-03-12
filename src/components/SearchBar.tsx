interface SearchBarProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar(props: SearchBarProps) {
  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    props.setSearchInput(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <form action="" onChange={handleChange}>
        <input type="text" name="product-search" />
        <label htmlFor="product-search"></label>
      </form>
    </>
  );
}

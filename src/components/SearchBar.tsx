interface SearchBarProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar(props: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchInput(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <form action="">
        <input type="text" name="product-search" onChange={handleChange} />
        <label htmlFor="product-search"></label>
      </form>
    </>
  );
}

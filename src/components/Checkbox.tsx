interface CheckboxProps {
  inStockInput: boolean;
  setInStockInput: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Checkbox(props: CheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setInStockInput(event.target.checked);
    console.log(event.target.checked);
  };
  return (
    <>
      <form action="">
        <input type="checkbox" name="in-stock" onChange={handleChange} />
      </form>
    </>
  );
}

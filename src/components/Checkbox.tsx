interface CheckboxProps {
  inStockInput: boolean;
  setInStockInput: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Checkbox(props: CheckboxProps) {
  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    props.setInStockInput(event.target.checked);
    console.log(event.target.checked);
  };
  return (
    <>
      <form action="" onChange={handleChange}>
        <input type="checkbox" name="in-stock" />
      </form>
    </>
  );
}

import CharacterLimit from "./components/CharacterLimit";

function App() {
  console.log("rendering App...");
  return (
    <div>
      <CharacterLimit characterLimit={300} />
    </div>
  );
}

export default App;

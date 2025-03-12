import TextArea from "./TextArea";
import { ChangeEvent, useState } from "react";

interface CharacterLimitProps {
  characterLimit: number;
}

export default function CharacterLimit({
  characterLimit,
}: CharacterLimitProps) {
  const [userInput, setUserInput] = useState("");

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setUserInput(event.target.value);
  }

  console.log("rendering CharacterLimit...");
  return (
    <div>
      <h1>Can you provide more detail?</h1>
      <p className="instruction">
        Do not include personal or financial information like your National
        Insurance number or credit card details
      </p>
      <TextArea
        userInput={userInput}
        characterLimit={characterLimit}
        handleChange={handleChange}
      />
      <p className="char-counter">
        You have {characterLimit - userInput.length} characters remaining
      </p>
    </div>
  );
}

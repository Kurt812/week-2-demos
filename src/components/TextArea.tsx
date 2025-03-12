import { ChangeEvent } from "react";

interface TextAreaProps {
  characterLimit: number;
  userInput: string;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({
  characterLimit,
  userInput,
  handleChange,
}: TextAreaProps) {
  console.log("rendering TextArea...");

  return (
    <>
      <textarea
        onChange={handleChange}
        id="user-details"
        maxLength={characterLimit}
        name="user-details"
        title="user-details"
        value={userInput}
      ></textarea>
      <label htmlFor="user-details"></label>
    </>
  );
}

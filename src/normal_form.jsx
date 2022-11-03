import { useState } from "react";

export default function NormalForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Run Validations Manually, maintain & show errors on UI, if all good make API call."
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button type="submit">
        <span>Submit</span>
      </button>
    </form>
  );
}

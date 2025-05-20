import React, { useState } from "react";

const formStyles = {
  inputStyle: "border-2 rounded-md",
  labelStyles: "",
};

function NormalForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(username);
  function onFinish(e) {
    e.preventDefault();
    console.log(username, password, confirmPassword);
  }
  return (
    <div className="flex justify-center items-center flex-col my-10">
      Regular
      <form onSubmit={onFinish} className="flex flex-col gap-4">
        <label className="" htmlFor="username">
          Username{" "}
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={formStyles.inputStyle}
          name="username"
          type="text"
        />

        <label htmlFor="password">Password </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={formStyles.inputStyle}
          name="password"
          type="password"
        />

        <label htmlFor="confirmPassword">Confirm Password </label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={formStyles.inputStyle}
          name="confirmPassword"
          type="password"
        />
        <button className={formStyles.inputStyle} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NormalForm;

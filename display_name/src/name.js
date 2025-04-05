import React, { useState } from "react";

const Name = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.trim() !== "" && lastName.trim() !== "") {
      setFullName(`${firstName} ${lastName}`);
    } else {
      setFullName("");
    }
  };

  return (
    <>
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {fullName && <p>Full Name: {fullName}</p>}
    </>
  );
};

export default Name;

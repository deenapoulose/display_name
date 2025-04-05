import React, { useState } from "react";

const Name = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const[fullName,setFullName]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setFullName(`${firstName} ${lastName}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
        <label>First Name</label>
        <input required onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
        <label>Last Name</label>
        <input required onChange={(e) => setLastName(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>

      {fullName && <p>Full Name: {fullName}</p>}
    </>
  );
};

export default Name;

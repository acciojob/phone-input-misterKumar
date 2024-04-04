import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [inp, setInp] = useState("");

  function handleChange(event) {
    let inputValue = event.target.value;
    // Remove non-numeric characters from input
    const numericValue = inputValue.replace(/\D/g, "");
    // Check if the input is empty or contains only numbers
    if (numericValue.length <= 10) {
      // Format the phone number
      let formattedNumber = "";
      if (numericValue.length > 0) {
        formattedNumber = "(" + numericValue.substring(0, 3);
      }
      if (numericValue.length > 3) {
        formattedNumber += ") " + numericValue.substring(3, 6);
      }
      if (numericValue.length > 6) {
        formattedNumber += "-" + numericValue.substring(6, 10);
      }
      // Set the formatted value to the state
      setInp(formattedNumber);
    }
  }

  function handleClick() {
    // Check if the input contains a complete phone number
    if (inp === "(___) ___-____") {
      // If it's the placeholder, do nothing
      return;
    }
    // Clear the input
    setInp("");
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <input
        type="text"
        placeholder="(555) 555-5555"
        onChange={handleChange}
        value={inp}
      />
      <button onClick={handleClick} disabled={inp === "(___) ___-____"}>
        Submit
      </button>
    </div>
  );
};

export default App;

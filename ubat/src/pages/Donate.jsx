import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is loaded
import "../assets/style.css"; // Import custom styles

const Donate = () => {
  useEffect(() => {
      document.title = "Donate|Uthman Ibn Affan Library";
    }, []);
  // State for form inputs
  const [amount, setAmount] = useState(4000);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currency, setCurrency] = useState("INR");

  // Function to set amount when clicking a button
  const handleAmountClick = (selectedAmount) => {
    setAmount(selectedAmount);
  };

  // Function to handle donation submission
  const handleDonate = () => {
    if (!amount || !firstName || !lastName || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("Your Donation is Successful");

    // Clear form fields after donation
    setAmount("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCurrency("INR");
  };

  return (
    <div className="donation-box container mt-4 mb-4">
      <h2>Donate</h2>

      {/* Amount Buttons */}
      <div className="amount-buttons">
        {[4000, 2000, 1000, 600, 500, 450].map((amt) => (
          <button key={amt} className="amount-btn" onClick={() => handleAmountClick(amt)}>
            {amt}
          </button>
        ))}
      </div>

      {/* Amount Input */}
      <div className="amount-input">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter the amount"
        />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="INR">INR</option>
          <option value="USD">$</option>
        </select>
      </div>

      {/* Enter Your Details Form */}
      <div className="details-container">
        <h3>Enter your details</h3>
        <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />

        <div className="phone-section">
          <select>
            <option>🇮🇳 India</option>
            <option>🇺🇸 USA</option>
            <option>🇬🇧 UK</option>
          </select>
          <input type="number" placeholder="Phone (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <button className="donate-button mt-2" onClick={handleDonate}>
          Donate Monthly
        </button>
      </div>
    </div>
  );
};

export default Donate;

import React, { useEffect, useState } from "react";

const NotificationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    supervisorsId: "",
    preferredContact: null,
  });

  // const GetSupervisors = () => {
  const [supervisors, setSupervisors] = useState([]);

  useEffect(() => {
    console.log("useEffect Triggered");
    fetch("http://localhost:3000/api/supervisors")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ooops something went wrong, please try again.");
        }
        console.log(response);

        return response.json();
      })
      .then((data) => setSupervisors(data))
      .catch((error) => console.error("Error fetching supervisors:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data before submission:", formData);

    fetch("http://localhost:3000/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
        }
      })
      .catch((error) => {
        console.log("Error submitting data: ", error);
      });
  };


  const handlePhoneInputChange = (e) => {
    let input = e.target.value.replace(/\D/g, ''); // Remove non-digits
    // Limit the input to 10 digits
    input = input.substring(0, 10);
  
    if (input.length <= 3) {
      // If input length is 3 or less, just return the input
      input = input;
    } else if (input.length <= 6) {
      // If input length is between 4 and 6, add the first hyphen
      input = input.substring(0, 3) + '-' + input.substring(3);
    } else {
      // If input length is more than 6, add both hyphens
      input = input.substring(0, 3) + '-' + input.substring(3, 6) + '-' + input.substring(6);
    }
  
    setFormData({ ...formData, phoneNumber: input });
  };

  return (
    <div className="notification-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Contact Update Form</h2>
        <p>
          Please enter your first and last name as well as a preferred contact
          method. The supervisor you select will be updated with your updated
          contact information upon submission of this form!
        </p>

        <div className="inputFields">
          <span className="nameContainer">
            <label>First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
            />
          </span>
          <span className="nameContainer">
            <label>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
            />
          </span>

          <div className="prefContainer">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="JohnDoe@gmail.com"
            />
            <label className="togglePrefButton">
              <input
                type="checkbox"
                name="preferredContact"
                value="email"
                checked={formData.preferredContact === "email"}
                onChange={handleChange}
              />
              Preferred
            </label>
          </div>

          <div className="prefContainer">
            <label>Phone Number</label>
            <input
              type="tel"
              pattern="^\d{3}-\d{3}-\d{4}$"
              title="Phone number should be in the format: 123-456-7890"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handlePhoneInputChange}
              placeholder="123-456-7890"
            />
            <label className="togglePrefButton">
              <input
                type="checkbox"
                name="preferredContact"
                value="phoneNumber"
                checked={formData.preferredContact === "phoneNumber"}
                onChange={handleChange}
              />
              Preferred
            </label>
          </div>
        </div>

        <label htmlFor="supervisors">{/* Supervisor */}</label>
        <select
          name="supervisorsId"
          value={formData.supervisorsId}
          onChange={handleChange}
        >
          <option value="" disabled>
            {" "}
            Select a Supervisor
          </option>
          {supervisors.map((supervisors, index) => (
            <option key={index} value={supervisors}>
              {supervisors}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NotificationForm;

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
    console.log("useEffect Triggered")
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

    //checking for phoneNumber=10 digits //side note this is redundant. Keeping for now but I have this format check also built into the controller on server side
    const phoneNumberRegex = /^\d{10}$/;
    if (formData.phoneNumber && !phoneNumberRegex.test(formData.phoneNumber)) {
      alert("Please enter a valid 10 digit phone number");
      return;
    }

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

  //Submit logic here
  // console.log(formData);

  //clear form or display success msg

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
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="777-777-7777"
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

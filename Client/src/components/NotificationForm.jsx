import React, { useState } from "react";

const NotificationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    supervisorId: "",
    preferredContact: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //checking for phone=10 digits
    const phoneRegex = /^\d{10}$/;

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10 digit phone number");
      return;
    }

    //Submit logic here
    console.log(formData);

    //clear form or display success msg
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
            <label htmlFor="firstName">First Name</label>
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
            <label htmlFor="lastName">Last Name</label>
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
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="777-777-7777"
            />
            <label className="togglePrefButton">
              <input
                type="checkbox"
                name="preferredContact"
                value="phone"
                checked={formData.preferredContact === "phone"}
                onChange={handleChange}
              />
              Preferred
            </label>
          </div>
        </div>

        <label htmlFor="supervisor">{/* Supervisor */}</label>
        <select
          name="supervisorId"
          value={formData.supervisorId}
          onChange={handleChange}
        >
          <option value="" disabled>
            {" "}
            Select a Supervisor
          </option>
          {/* need to build in API `GET` data here to populate supervisors */}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NotificationForm;

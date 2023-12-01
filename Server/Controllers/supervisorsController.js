import fetch from "node-fetch";

export const getSupervisors = async (req, res) => {
  fetch("https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers") //GET all managers endpoint
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`); //Error handling for bad responses from fetch call
      } else {
        return res.json(); //if good return response as JSON
      }
    })
    .then((data) => {
      const supervisors = data //takes response data and sets to new var
        .filter((sup) => isNaN(sup.jurisdiction)) //filters out numerical jurisdictions
        .map((sup) => `${sup.jurisdiction} - ${sup.lastName}, ${sup.firstName}`) //maps data extrapolating specific key:values
        .sort(); //sorts alphabetically

      res.json(supervisors);
      console.log("Transfer Successful!");
    })
    .catch((error) => {
      console.error("Error fetching supervisors:", error);
      res.status(500).json({ message: "Error fetching supervisors", error });
    });
};



//function to POST user data.
export const submitNotification = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, supervisorsId } = req.body;

  const nameRegex = /^[A-Za-z]+$/; //Expression to check if value is a letter(regardless of case)
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; //validates email format
  const phoneRegex =
    /^\+?(\d{1,3})?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?$/; //validates phone format

  if (!firstName || !nameRegex.test(firstName)) {
    return res.status(400).json({
      message:
        "Please enter your first name and resubmit. The name must contain only letters between A-Z.",
    });
  }
  if (!lastName || !nameRegex.test(lastName)) {
    return res.status(400).json({
      message:
        "Please enter your last name and resubmit. The name can only contain letters between A-Z.",
    });
  }
  if (!supervisorsId) {
    return res
      .status(400)
      .json({ message: "Please select a supervisor and resubmit." });
  }
  if (email && !emailRegex.test(email)) {
    return res
      .status(400)
      .json({ message: "Please add a valid email address and resubmit." });
  }
  if (phoneNumber && !phoneRegex.test(phoneNumber)) {
    return res
      .status(400)
      .json({ message: "Please enter a valid phone number and resubmit." });
  }

  console.log("Submission:", {
    firstName,
    lastName,
    email,
    phoneNumber,
    supervisorsId,
  });

  res.json({ message: "Submission received successfully" });
};

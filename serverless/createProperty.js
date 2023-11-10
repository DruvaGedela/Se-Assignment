const resource_url =
  "https://vkkm38khe4.execute-api.us-east-1.amazonaws.com/dev/property";

const form = document.getElementById("create-property-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  // Print the form values to the console
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  // Convert the FormData instance to a plain object
  const plainFormData = Object.fromEntries(formData.entries());

  // Create a FetchOptions object with the necessary settings
  const fetchOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plainFormData),
  };

  // Send the POST request to the API
  const response = await fetch(resource_url, fetchOptions);

  // Check the response status code
  if (response.status === 201) {
    // Property created successfully

    // Clear the form
    form.reset();

    // Display a success message to the user
    alert("Property created successfully!");
  } else {
    // There was an error creating the property

    // Display an error message to the user
    alert("Error creating property: " + response.statusText);
  }
});

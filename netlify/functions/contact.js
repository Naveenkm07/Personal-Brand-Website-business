export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
        Allow: "POST",
      },
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  let payload;
  try {
    payload = event.body ? JSON.parse(event.body) : {};
  } catch {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Invalid JSON payload" }),
    };
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  const errors = {};

  if (!name) {
    errors.name = "Name is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Email is invalid";
  }

  if (!message) {
    errors.message = "Message is required";
  }

  if (Object.keys(errors).length > 0) {
    return {
      statusCode: 422,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Validation failed", errors }),
    };
  }

  const submission = {
    name,
    email,
    message,
    receivedAt: new Date().toISOString(),
    businessUrl: process.env.BUSINESS_URL || "",
    contactEmail: process.env.CONTACT_EMAIL || "",
  };

  console.log("[contact] submission", submission);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "Thanks! Your message has been received." }),
  };
}

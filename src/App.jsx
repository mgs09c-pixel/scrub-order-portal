async function submit(e) {
  e.preventDefault();

  const payload = {
    employeeName: form.employeeName,
    email: form.email,
    phone: form.phone,
    department: form.department,
    items: orderText,
  };

  try {
    const response = await fetch("https://formspree.io/f/xlgzepzd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    setSubmitted(true);
    setCart([]);
  } catch (error) {
    alert("Something went wrong submitting the order. Please try again.");
  }
}

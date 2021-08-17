const API_URL = process.env.API_URL ?? "http://0.0.0.0:8000"

console.log("api url: ", API_URL)

export async function postJobApplication({Name, Questions}) {
    let data, error;

    try {
      const response = await fetch(`${API_URL}/api/applications`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Name,
            Questions,
          }),
      });

    data = await response.json();

    if (!response.ok) {
      error = data.error;
      data = null;
    }
  } catch (err) {
    error = err;
    data = null;
  }

  return { data, error };
}

export async function getJobApplications() {
  let data, error;

  try {
    const response = await fetch(`${API_URL}/api/applications`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
    });

  data = await response.json();

  if (!response.ok) {
    error = data.error;
    data = null;
  }
} catch (err) {
  error = err;
  data = null;
}

return { data, error };
}
const API_URL = process.env.REACT_APP_API_URL ?? ""

export async function postJobApplication({name, questions}) {
    let data, error;

    try {
      const response = await fetch(`${API_URL}/api/applications`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            questions,
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
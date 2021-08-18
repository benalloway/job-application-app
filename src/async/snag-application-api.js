const API_URL = process.env.REACT_APP_API_URL ?? ""

export async function postJobApplication({job_listing_id, name, email, questions}) {
    let data, error;

    try {
      const response = await fetch(`${API_URL}/api/applications`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            job_listing_id,
            name,
            email,
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

export async function getRejectedJobApplications() {
  let data, error;

  try {
    const response = await fetch(`${API_URL}/api/rejected-applications`, {
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
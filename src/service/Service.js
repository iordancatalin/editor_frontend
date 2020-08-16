export const API_HOST = 'http://localhost';
export const API_URL = `${API_HOST}:8082`;

export const runCode = async (requestBody) => {
  const url = `${API_URL}/api/v1/run-java`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const body = await response.json();

  return { status: response.status, body };
};

export const fetchAvailableJavaVersions = async () =>
  fetch(`${API_URL}/api/v1/java-versions`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

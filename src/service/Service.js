export const runCode = async (requestBody) => {
  const url = 'http://localhost:8082/api/v1/run-java';

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
  fetch('http://localhost:8082/api/v1/java-versions', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

/* const getJSON = <T>(config: { url: string, headers?: { [key: string]: string } }): Promise<T> => {
  const fetchConfig = {
    method: 'GET',
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...config.headers
  }

  return fetch(config.url, fetchConfig).then<T>(response => response.json())
}
 */

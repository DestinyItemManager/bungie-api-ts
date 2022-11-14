export function get(http, url, params) {
  return http(params ? {
    method: 'GET',
    url,
    params
  } : {
    method: 'GET',
    url
  });
}
export function post(http, url, body) {
  return http(body ? {
    method: 'POST',
    url,
    body
  } : {
    method: 'POST',
    url
  });
}
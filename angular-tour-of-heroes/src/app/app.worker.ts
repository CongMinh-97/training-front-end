/// <reference lib="webworker" />
// de nhan tin nhan 
addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});

function generatedToken(){
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchPromise = fetch('https://script.google.com/macros/s/AKfycbzlI6pLC0yP8XSNKGb-vMPOo90h4x3qOEQwEITd-ZNzRm35YJt_LQvKdPCwLviM-cpi4Q/exec?action=generateToken', {
    method: 'GET',
    signal,
    })
    .then(response => {
        if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        if (error.name === 'AbortError') {
        console.log('Fetch was aborted');
        } else {
        console.error('There was a problem with the fetch operation:', error);
        }
    });
    setTimeout(() => {
    controller.abort();
    getME();
    }, 10000); // Cancel the fetch after 10 seconds

}

function getME(){
    fetch('https://script.google.com/macros/s/AKfycbzlI6pLC0yP8XSNKGb-vMPOo90h4x3qOEQwEITd-ZNzRm35YJt_LQvKdPCwLviM-cpi4Q/exec?action=getToken', {
  method: 'GET',
  redirect: 'follow', // This is the default, but you can explicitly set it
    })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
    })
  .then(data => {
    console.log(data);
    })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    });

}
generatedToken();

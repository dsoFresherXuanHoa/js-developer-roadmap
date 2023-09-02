const username = "dsoFresherXuanHoa";

document.cookie = `username=${username}; expires=${new Date(
  Date.now() + 6000
).toUTCString()}`;

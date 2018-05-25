// Dynamically import the script URL sent by postMessage().
self.addEventListener('message', msg_event => {
  import(msg_event.data).catch(e => postMessage(e.name));
});

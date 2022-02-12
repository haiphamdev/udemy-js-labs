function log() {
  console.log('tada');
}

function debounce(callback, await) {
  let timeoutId;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callback, await);
  };
}

const debounceLog = debounce(log, 500);
debounceLog();
debounceLog();
debounceLog();

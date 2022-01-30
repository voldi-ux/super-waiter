/** @format */

function formatTime(timeMs) {
  let currentMsTime = Date.now();

  const currentH = Math.floor(currentMsTime / (60 * 60 * 1000)); //get time in hours, min*sec*ms
  const currentM = Math.floor(currentMsTime / (60 * 1000)); //get time in mins
  const currentS = Math.floor(currentMsTime / 1000); //get time in seconds

  const timeH = Math.floor(timeMs / (60 * 60 * 1000)); //get time in hours, min*sec*ms
  const timeM = Math.floor(timeMs / (60 * 1000)); //get time in mins
  const timeS = Math.floor(timeMs / 1000); //get time in seconds

  const diffS = currentS - timeS;
  const diffM = currentM - timeM;
  const diffH = currentH - timeH;

  if (diffS <= 60) {
    return `${diffS} ${diffS === 1 ? 'second' : 'seconds'} ago`;
  } else if (diffM <= 60) {
    return `${diffM} ${diffM === 1 ? 'minute' : 'minutes'} ago`;
  } else if (diffH <= 24) {
    return `${diffH} ${diffH === 1 ? 'hour' : 'hours'} ago`;
  } else if (diffH > 24 && diffH <= 48) {
    return 'yesterday';
  } else {
    return new Date(timeMs).toDateString();
  }
}

export function getFormatedTime(time, setTime, interval=1000*60) {
  if (typeof time !== 'number') {
    throw Error('enter a valid time in milliseconds');
  }

  //if the user only passed in the time in ms, then return the formated time.
  if (
    time &&
    (!setTime ||
      typeof interval !== 'number' ||
      typeof setTime !== 'function')
  ) {
    return formatTime(time);
  }
  
}

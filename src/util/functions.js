// create User friendly error message
export const cleanUpErrorMsg = (text) => {
    let startIndex = text.indexOf("/") + 1;
    let lastIndex = text.indexOf(")");
    let msg = text.slice(startIndex, lastIndex);
    return msg.replace(/-/g, " ");
  };

// Current time of day
export const getCurrentTimeOfDay = () => {

  let greeting;
  let time = new Date().getUTCHours();

  if(time >= 0 && time < 12) {
    greeting = "Good Morning";
  }
  else if(time >= 12 && time < 18) {
    greeting = "Good Afternoon";
  }
  else{
    greeting = "Good Evening";
  }  

  return greeting;
};
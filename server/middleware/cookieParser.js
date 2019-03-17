const parseCookies = (req, res, next) => {
  //  write a middleware function that will access the cookies on an incoming request, parse them into an object, and assign this object to a cookies property on the request.
  var object = {};

  var cookieString = req.headers.cookie;
  if (!cookieString) {
    req.cookies = object;
    next();
  } else {
    cookiesArray = cookieString.split('; ');

    for (let i = 0; i < cookiesArray.length; i++) {
      var keyValuePair = cookiesArray[i].split('=');
      object[keyValuePair[0]] = keyValuePair[1];
    }

    req.cookies = object;

    next();
  }


};

module.exports = parseCookies;
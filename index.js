function isAnOpenGraphRobot(userAgent) {
  const botRegEx = new RegExp(
    /(facebookexternalhit)|(Twitterbot)|(Pinterest)|(LinkedInBot)|(Slack)|(Slackbot-LinkExpanding)/gi
  );
  return botRegEx.test(userAgent);
}

function determineOpenGraphRobotType(userAgent) {
  if (/(facebookexternalhit)/gi.test(userAgent)) {
    return "facebook";
  } else if (/(Twitterbot)/gi.test(userAgent)) {
    return "twitter";
  } else if (/(Pinterest)/gi.test(userAgent)) {
    return "pinterest";
  } else if (/(LinkedInBot)/gi.test(userAgent)) {
    return "linkedin";
  } else if (/(Slack)|(Slackbot-LinkExpanding)/gi.test(userAgent)) {
    return "slack";
  } else {
    return "Could not determine robot type";
  }
}

function detectOpenGraphRobotMiddleWare(req, res, next) {
  const userAgent = req.headers["user-agent"];
  if (isAnOpenGraphRobot(userAgent)) {
    req.isOpenGraphRobot = true;
    req.openGraphRobotType = determineOpenGraphRobotType(userAgent);
    next();
  } else {
    next();
  }
}

module.exports = detectOpenGraphRobotMiddleWare;

function isAnOpenGraphRobot(req) {
  const userAgent = req.headers["user-agent"];
  const botRegEx = new RegExp(
    /(facebookexternalhit)|(Twitterbot)|(Pinterest)|(LinkedInBot)|(Slack)|(Slackbot-LinkExpanding)/gi
  );
  return botRegEx.test(userAgent);
}

function determineOpenGraphRobotType(req) {
  const userAgent = req.headers["user-agent"];
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
    return "Not able to determine type";
  }
}

function detectOpenGraphRobotMiddleWare(req, res, next) {
  if (isAnOpenGraphRobot(req)) {
    req.isAnOpenGraphRobot = true;
    req.openGraphRobotType = determineOpenGraphRobotType(req);
    next();
    return;
  } else {
    next();
    return;
  }
}

module.exports = { isAnOpenGraphRobot, detectOpenGraphRobotMiddleWare };

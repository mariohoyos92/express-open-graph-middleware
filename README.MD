# express-open-graph-middleware

Simple express middleware for detecting requests made by robots that consume open graph tags (Facebook, Twitter, LinkedIn, Pinterest, Slack)

## The problem

Websites like Facebook and Twitter use robots that consume Open Graph meta tags in order to render previews of the content on your application. We often want to know if our Express application is getting a request from one of these robots so that we can serve them specifically tailored content.

## This solution

This simple middleware will set a flag to let you know that it is a robot sending the request as well as telling you which website/application is sending the request.

## Robots Currently Detected

- Facebook
- Linkedin
- Twitter
- Pinterest
- Slack

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `Dependencies`:

```
npm install --save express-open-graph-middleware
```

## Usage

If a robot is detected two properties will be added to the request object. The 'isOpenGraphRobot' property is a boolean specifying whether the request is coming from a robot. If the request is from a robot, the 'openGraphRobotType' property will specify which robot, currently either 'facebook', 'twitter', 'linkedin', 'pinterest', or 'slack'.

```js
var express = require("express");
var openGraphRobotDetector = require("express-open-graph-middleware");
var app = express();

app.use(openGraphRobotDetector);

app.get("/", function(req, res) {
  // If a robot is detected, the request object will have the following property
  req.isOpenGraphRobot;
  // The robot type will be specified by the company name -- current possible values:  'facebook', 'twitter', 'pinterest', 'linkedin', 'slack'
  req.openGraphRobotType;
});

app.listen(3000);
```

## Roadmap

In the future, I'm looking to make this a full-fledged solution whereby you can respond to the robots with specific open-graph meta tags that are configurable and that come with sensible defaults. Any ideas with regards to the best approach are welcome!


### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

## LICENSE

MIT

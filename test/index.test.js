process.env.NODE_ENV = "test";

const server = require("./testServer");
const request = require("supertest")(server);

function makeRequestWithSpoofedUserAgent(userAgent) {
  return request.get("/").set("User-Agent", userAgent);
}

it("Should detect facebook open graph robot", async done => {
  const {
    body: { isOpenGraphRobot, openGraphRobotType }
  } = await makeRequestWithSpoofedUserAgent("facebookexternalhit");
  expect(isOpenGraphRobot).toBe(true);
  expect(openGraphRobotType).toBe("facebook");
  done();
});
it("Should detect twitter open graph robot", async done => {
  const {
    body: { isOpenGraphRobot, openGraphRobotType }
  } = await makeRequestWithSpoofedUserAgent("Twitterbot");
  expect(isOpenGraphRobot).toBe(true);
  expect(openGraphRobotType).toBe("twitter");
  done();
});
it("Should detect Pinterest open graph robot", async done => {
  const {
    body: { isOpenGraphRobot, openGraphRobotType }
  } = await makeRequestWithSpoofedUserAgent("Pinterest");
  expect(isOpenGraphRobot).toBe(true);
  expect(openGraphRobotType).toBe("pinterest");
  done();
});
it("Should detect LinkedInBot open graph robot", async done => {
  const {
    body: { isOpenGraphRobot, openGraphRobotType }
  } = await makeRequestWithSpoofedUserAgent("LinkedInBot");
  expect(isOpenGraphRobot).toBe(true);
  expect(openGraphRobotType).toBe("linkedin");
  done();
});
it("Should detect Slack open graph robot", async done => {
  const {
    body: { isOpenGraphRobot, openGraphRobotType }
  } = await makeRequestWithSpoofedUserAgent("Slack");
  expect(isOpenGraphRobot).toBe(true);
  expect(openGraphRobotType).toBe("slack");
  done();
});
it("Should detect Slack-LinkExpanding open graph robot", async done => {
  const {
    body: { isOpenGraphRobot, openGraphRobotType }
  } = await makeRequestWithSpoofedUserAgent("Slack-LinkExpanding");
  expect(isOpenGraphRobot).toBe(true);
  expect(openGraphRobotType).toBe("slack");
  done();
});
it("Should forward request unmodified if not an open graph robot", async done => {
  const {
    body: { isOpenGraphRobot, openGraphRobotType }
  } = await makeRequestWithSpoofedUserAgent("Clearly not an open graph robot");
  expect(isOpenGraphRobot).toBe(false);
  expect(openGraphRobotType).toBeUndefined();
  done();
});

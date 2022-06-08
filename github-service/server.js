const { request } = require("http");
const { type } = require("os");

var express = require("express"),
  cors = require("cors"),
  app = express(),
  bodyParser = require("body-parser"),
  yaml = require("js-yaml"),
  fs = require("fs"),
  axios = require("axios");

let config = {};
try {
  config = yaml.load(fs.readFileSync("app.yaml", "utf8"));
} catch (e) {
  console.log(e);
}

const PORT = process.env.PORT || config.port || 3000;
const GITHUB_ACCESS_TOKEN =
  process.env.MY_GITHUB_TOKEN || config.githubAccessToken;

const REQ_HEADERS = {
  Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
  "Content-Type": "application/json",
  Accept: "application/vnd.github.mercy-preview+json",
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/repos", (req, res) => {
  axios({
    method: "get",
    url: `https://api.github.com/users/${getUsername(req)}/repos`,
    headers: REQ_HEADERS,
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/branches", (req, res) => {
  axios({
    method: "get",
    url: `https://api.github.com/repos/${getUsername(req)}/${
      req.query.repo
    }/branches`,
    headers: REQ_HEADERS,
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = app.listen(PORT, () => {
  console.log("Server running on port %d", PORT);
});

function getUsername(req) {
  if (req.query.username != null) {
    return req.query.username;
  }

  return config.githubUsername;
}

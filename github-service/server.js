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
  config.githubAccessToken || process.env.MY_GITHUB_TOKEN;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/user", (req, res) => {
  axios({
    method: "get",
    url: `https://api.github.com/users/${getUsername(req)}`,
    headers: generateHeaders(req),
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/repos", (req, res) => {
  axios({
    method: "get",
    url: `https://api.github.com/users/${getUsername(req)}/repos`,
    headers: generateHeaders(req),
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
    headers: generateHeaders(req),
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/gists", (req, res) => {
  axios({
    method: "get",
    url: `https://api.github.com/users/${getUsername(req)}/gists`,
    headers: generateHeaders(req),
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
  if (isNotEmpty(req.query.username)) {
    return req.query.username;
  }

  return config.githubUsername;
}

function generateHeaders(req) {
  var token = getToken(req);

  if (isNotEmpty(token)) {
    var bearer = "Bearer " + token;

    return {
      Authorization: bearer,
      "Content-Type": "application/json",
      Accept: "application/vnd.github.mercy-preview+json",
    };
  } else {
    return {
      "Content-Type": "application/json",
      Accept: "application/vnd.github.mercy-preview+json",
    };
  }
}

function getToken(req) {
  var username = getUsername(req);

  if (username === config.githubUsername) {
    return GITHUB_ACCESS_TOKEN;
  }

  return null;
}

function isNotEmpty(value) {
  return value && value.length > 0;
}

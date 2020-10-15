const express = require("express");
const app = express();

const port = 3000;

const navItems = [
  {
    path: "/home",
    title: "home",
  },
  {
    path: "/explore",
    title: "explore",
  },
  {
    path: "/messages",
    title: "messages",
  },
];

const renderNavBar = (path, navItems) => {
  let navBar = `<ul>`;

  navItems.forEach((navItem) => {
    if (navItem.path === path) {
      navBar += `<li><i>${navItem.title}</i></li>`;
    } else {
      navBar += `<li><a href="${navItem.path}">${navItem.title}</a></li>`;
    }
  });

  navBar += `</ul>`;

  return navBar;
};

const renderPage = (path, content, _navItems = navItems) => {
  const navBar = renderNavBar(path, _navItems);
  const pageContent = `<h3>${content}</h3>`;

  return `${navBar}${pageContent}`;
};

// Home
app.get("/home", (req, res) => {
  res.send(renderPage("/home", "Home page"));
});

// Explore
app.get("/explore", (req, res) => {
  res.send(renderPage("/explore", "Explore page"));
});

// Messages
app.get("/messages", (req, res) => {
  const commonContent = renderPage("/messages", "Messages page");

  const messages = [
    {
      path: "/messages/cdd03992-6d49-51f6-a621-ca3204e62944",
      title: "message 1",
    },
    {
      path: "/messages/5f3d5e98-4f44-5150-99a6-8a18a7e12eb8",
      title: "message 2",
    },
  ];

  const messageList = renderNavBar(req.path, messages);

  res.send(`${commonContent}${messageList}`);
});

app.get("/messages/:messageId", (req, res) => {
  // navBar
  // message list
  const commonContent = renderPage("/messages", "Messages page");

  const messages = [
    {
      path: "/messages/cdd03992-6d49-51f6-a621-ca3204e62944",
      title: "message 1",
    },
    {
      path: "/messages/5f3d5e98-4f44-5150-99a6-8a18a7e12eb8",
      title: "message 2",
    },
  ];

  const messagePage = renderPage(req.path, req.params.messageId, messages);

  res.send(`${commonContent}${messagePage}`);
});

// route

app.get("/about", (req, res) => {
  res.send(
    `<title>Hello</title><h1>Hello About!</h1><script>alert("hello")</script>`
  );
});

app.get("/messages/:messageId", (req, res) => {
  res.send({
    path: req.originalUrl,
    params: req.params,
    // body: req.body,
    query: req.query,
    cookies: req.cookies,
    headers: req.headers,
  });

  // res.send(("b" + "a" + +"a" + "a").toLowerCase());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

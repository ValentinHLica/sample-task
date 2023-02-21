# ✨💻 Sample Task 💻✨

## 🏃 Setup

1. Run the following command to start local server

```ssh
npm i && npm start
```

2. View on [localhost:3000](http://localhost:3000/)

## 🪣 Requirements

Generic Site Crawler

Please develop a generic site crawler library that provides basic services to traverse a complete site tree.
Given a start link it visits each page of the site, i.e. all pages that are reachable via one or more hops from the start page within the same domain.
The consumer of the library should be able to execute a custom action on each of the pages found.

Deliverables:

1. Develop a basic crawler component as described above
2. A sample console application that uses the crawler component to save all site pages for a given url as static files to the file system.

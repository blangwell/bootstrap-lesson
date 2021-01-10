# Bootstrap Basics

## Setup
- Fork and clone this repo to your machine
- `cd` into the directory 
- Use `npm i` to install package dependencies
- Confirm that dependencies were installed successfully by starting the server with `npm start`

## Instructions
Go to the [Bootrap website](https://getbootstrap.com/) and click on Get Started

![Bootstrap Landing](./public/assets/bootstrapLanding.png)

---

Copy the CSS `<link>` and paste it into the head of `/views/layout.ejs` then copy the JS Bundle `<script>` and paste at the end of the body of `/views/layout.ejs`

![Bootstrap CDN](./public/assets/bootstrapCDN.png)

### Wait... Why? 

We are utilizing the Bootstrap CDN. Okay, well, what's that? Here's a definition from cloudflare.com: 
```
A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.

A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos.
```
Basically, there is a great deal of code that makes Bootstrap work. Instead of importing and storing all of this code in our own project directory, we instead utilize Bootstrap's CDN to serve Bootstrap's source code to us as needed.
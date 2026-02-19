---
title: "Introductory Blog Post"
date: "2025-10-1"
readTime: "3 min read"
description: "Welcome to my Blog! This is a place where I will be publishing my personal thoughts and documenting my journey as I learn more about technology."
---


## React

This site is my second project built with React, but it’s my first time serving as the polishing developer. My initial exposure to React was during a hackathon, so coming back to it with more time and intention was a completely different experience.

One thing I’ll call out immediately: React + Vite is an incredibly smooth pairing. Setup is almost effortless. I’ve built sites using HTML, CSS, JavaScript, Node.js, and Express.js before, but React pushed me to think in components and design the UI in a more structured way. The reusability is where it really shines.

## Deployment (NGINX, Certbot, DNS)

To get this site online, I used NGINX, which was refreshingly straightforward. After a quick config tweak, everything ran smoothly. I used Certbot to handle HTTPS elegantly. I’ll report back once I’m running multiple sites and subdomains, because I’m sure my .conf files will start to get pretty ambitious.

I bought my domain through Cloudflare. I considered going with a free subdomain route, but ultimately decided to spend the money. I’ve noticed that making a small upfront investment tends to raise my own expectations, and keep me motivated.

Cloudflare’s UI wasn’t the most intuitive at first (to be fair, it was my first time using it). The trickiest part of the whole process was writing and scheduling a bash script to run DDNS from my Raspberry Pi. Some of that was my own confidence using bash across machines, and some of it was just learning cron the hard way. The final solution ended up being pretty clean.

## Tooling

Finally, I used VS Code alongside Git and Github for development. For web work, it’s still my favorite editor. And honestly, "npm run dev" was a lifesaver for quickly iterating on layout and styling.

## Credit

Huge thanks to Christian Walker for collaborating and helping build the site.
LinkedIn: christian--walker (linkedin.com/in/christian--walker)
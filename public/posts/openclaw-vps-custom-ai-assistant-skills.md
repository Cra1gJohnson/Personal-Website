---
title: "Setting Up OpenClaw on a VPS and Building Custom AI Assistant Skills"
date: "2026-02-15"
readTime: "7 min read"
description: "How I deployed OpenClaw on a VPS and addressed security concerns. Part 1"
---

## Why run OpenClaw on a VPS
Running OpenClaw on a VPS gives me a stable, always-on environment for experimentation. It also gives me full control over networking, environment variables, and service startup.

For assistant development, that control matters:
- I can keep the server up continuously.
- API keys can stay server-side.
- I can add and test skills in a repeatable setup.

## Baseline VPS setup
My first pass was intentionally simple:
- Provision a Linux VPS.
- Create a non-root deploy user.
- Configure SSH keys and disable password login.
- Set up a firewall for only required ports.

Once that foundation is set, OpenClaw deployment becomes mostly configuration and environment management.

## Deploying OpenClaw
I deployed OpenClaw as a service without environment variables first. And I began testing with OAuth Claude and OpenAI accounts to remove financial burdens. I connected to a channel using telegram and then began experimenting with the assistant's internal cron scheduling. 


## API-driven custom skills
My brother and I have been brainstorming different skills we want to build into it, and I have been researching the appropriate API's to feed it. I think with the correct information, and possibly a "beautiful soup" scraper or two, it could be very productive at data collection. 


## My intention for security improvements
I want to move the whole setup into docker compose, and ensure repeatability with an environment variable file that stores API tokens. I'll also write some skill.md files. I want to add the following 
for usage tracking and control. 
- Add request timeouts for every external API call.
- Add retry logic for transient upstream failures.
- Enforce rate limits per endpoint.
- Log skill calls with request IDs for tracing.
- Add an auth gate for sensitive tools.

## Final thoughts
OpenClaw on a VPS is a strong base for building useful AI assistants with custom skills. The key is disciplined use and custom skills that can provide real utility. 

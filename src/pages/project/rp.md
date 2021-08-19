---
layout: ../../layouts/project.astro
title: Resource Planning
client:
  - Pepper Construction Company
img: /assets/rp-thumb.png
images:
  - https://images.unsplash.com/photo-1597421496967-de75b7be7048?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
  - https://images.unsplash.com/photo-1465990138262-b7c355d1ef90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
  - https://images.unsplash.com/photo-1628020681459-36f808315107?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
description: Web application to assist operations leaders allocate human resources to projects.
published_on: 2021-08-15 00:00:00
tags:
  - html
  - css
  - js
  - c#
  - sql
---

### Purpose

For a construction project to be successful, it is crucial to assign the correct people to run it. We saw an opportunity to assist business unit leaders in allocating human resources to construction projects by replacing a largely manual, excel-driven process with a web application driven by historical data. The web application would provide a clearer picture of the gaps in project-personnel requirements.

### Method

We built the resource planning web application with ASP.NET Core. The resource planning app presents the user with an interactive table that illustrates project requirements at different levels: from the employee to the department level. The table’s data is pulled directly from Pepper’s Oracle database.

### Results

The resource planning tool is still in development, and a select group of end-users is testing a release candidate. We are collecting user feedback, which we’ll analyze for implications of design changes in later releases.

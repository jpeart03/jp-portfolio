---
layout: ../../layouts/project.astro
title: Resource Planning
client:
    - Pepper Construction Company
img: /assets/rp-thumb.png
images:
    - https://firebasestorage.googleapis.com/v0/b/jp-portfolio-2807c.appspot.com/o/RP_Grid.png?alt=media&token=c563f4ed-b746-424c-994b-a97263ffc3fa
description: Web application to assist operations leaders allocate human resources to projects.
published_on: 2021-08-15 00:00:00
tags:
    - html
    - css
    - js
    - c#
    - sql
sequence: 3
---

### Purpose

For a construction project to be successful, it is crucial to assign the correct people to run it. We saw an opportunity to assist business unit leaders in allocating human resources to construction projects by replacing a largely manual, excel-driven process with a web application driven by historical data. The web application would provide a clearer picture of the gaps in project-personnel requirements.

### Method

We built the resource planning web application with ASP.NET Core. The resource planning app presents the user with an interactive table that illustrates project requirements at different levels: from the employee to the department level. The table’s data is pulled directly from Pepper’s Oracle database.

### Results

The resource planning tool is still in development, and a select group of end-users is testing a release candidate. We are collecting user feedback, which we’ll analyze for implications of design changes in later releases.

---
layout: ../../layouts/project.astro
title: Extra Work Orders
client:
    - Pepper Construction Company
img: /assets/ewo-thumb.png
images:
    - https://firebasestorage.googleapis.com/v0/b/jp-portfolio-2807c.appspot.com/o/EWO_jobs.png?alt=media&token=e172b063-650c-4f1a-a374-0b43281ce6fa
    - https://firebasestorage.googleapis.com/v0/b/jp-portfolio-2807c.appspot.com/o/EWO_tickets.png?alt=media&token=74842959-5d3f-4cba-a266-a07b94efebef
    - https://firebasestorage.googleapis.com/v0/b/jp-portfolio-2807c.appspot.com/o/EWO_pdfexport.png?alt=media&token=dac16099-fa36-4c2d-92a3-9ce93f6b401c
description: Web application to create and process extra work orders on construction job sites.
published_on: 2019-06-01 00:00:00
tags:
    - html
    - scss
    - js
    - c#
    - sql
sequence: 1
---

### Purpose

Construction companies submit “extra work orders” to account for unplanned or extra work they do on a job site. These work orders were traditionally completed by hand and physically delivered to an approving authority. At Pepper, we determined that it was necessary to automate the extra work order process to expedite time to approval and tighten accountability of submitted work orders.

### Method

I interviewed six members of Pepper Construction’s Self Perform Group to identify requirements for the technology solution. I then built initial mockups using Adobe XD to share with end users, gather their feedback, and iterate the design. Finally, I created the web application with the following technologies:

-   Frontend: [ASP.NET Core Blazor](https://docs.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-5.0)
-   Backend: [ASP.NET Core Web API](https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-5.0), [SQL Server Database](https://www.microsoft.com/en-us/sql-server/sql-server-2019)

Blazor allowed me to create reusable web components, as I’d make with React or Angular, but written primarily in C# instead of JavaScript. I wanted to create a more seamless experience for the application’s users and write more manageable code but stay within the ASP.NET Core ecosystem.

### Results

In its first year of use, the extra work order application has processed more than 37,000 hours of work on Pepper’s job sites, accounting for more than $1.1M dollars of labor cost. The web application significantly reduces the time to approve each work order and nullifies the chance of an individual losing a work order.

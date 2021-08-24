---
layout: ../../layouts/project.astro
title: Invoice Automation
client:
    - Pepper Construction - Corporate Accounting
    - 365 Equipment and Supply
img: /assets/invoice-thumb.png
images:
    - https://firebasestorage.googleapis.com/v0/b/jp-portfolio-2807c.appspot.com/o/365Invoices_login.png?alt=media&token=feff2177-bb9b-4f94-a568-736b21aa09dc
    - https://firebasestorage.googleapis.com/v0/b/jp-portfolio-2807c.appspot.com/o/365Invoices_grid.png?alt=media&token=f5509bfc-61dc-4dee-9727-139756a31b4d
    - https://firebasestorage.googleapis.com/v0/b/jp-portfolio-2807c.appspot.com/o/365Invoices_void.png?alt=media&token=5fa1c37f-7920-40f1-a643-117ec1ba355c
description: System that combines web and console applications to automate invoice processing.
published_on: 2021-07-19 00:00:00
tags:
    - html
    - css
    - js
    - c#
    - sql
sequence: 5
---

### Purpose

Pepper Construction’s accounting team devoted an excessive amount of time processing invoices from their subsidiary equipment rental company, 365 Equipment and Supply (365). They asked if I could design and build a solution to automate the receipt and processing 365’s rental invoices. This system would save Pepper’s accounting team time and eliminate opportunities for human error.

### Method

I first interviewed employees at Pepper and 365 who worked in the accounting department. My interviews helped me identify the new system’s requirements and hurdles I was likely to face during development. To automate the existing invoice process, we designed a system with three main parts:

-   Console Application: An [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-5.0) console application to get 365’s invoices, validate them, and stage them to be processed by the web application.
-   Web application: An [ASP.NET Core Blazor](https://docs.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-5.0) web application where users can review each invoice quickly, and batch processes them.
-   Database: [Oracle Database](https://www.oracle.com/database/) integrated into Pepper’s existing accounting system.

### Results

In its first three weeks, the invoice automation system has processed more than 670 invoices with a cumulative dollar value of $270,000. Additionally, the system has cut Pepper’s accounting team’s time processing 365 invoices in half.

---
layout: ../../layouts/project.astro
title: ACE Scholarship
client:
  - ACE Mentor Program Chicago
img: /assets/ace-thumb.png
images:
  - https://images.unsplash.com/photo-1597421496967-de75b7be7048?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
description: A scholarship application website for students pursuing degrees in architecture, construction, or engineering.
published_on: 2020-01-01 00:00:00
tags:
  - scss
  - js
  - firestore
---

### Purpose

In 2018 I volunteered to create a scholarship application website for the ACE Mentor Program Chicago. I built the original website with Microsoft’s ASP.NET Core MVC web framework; the site was functional but presented many opportunities to improve the user’s experience. I decided to overhaul the website’s design and focus on helping users complete their scholarship applications more quickly and confidently.

### Method

I met with the ACE Mentor Program Chicago’s board to identify ways to improve the previous year’s website. The board members confirmed my assumptions that the most significant opportunities were improving system status visibility and help and documentation. To improve these usability heuristics, I rebuilt the website with the following technologies:

- Frontend: [React](https://reactjs.org/)
- Backend: [Firebase](https://firebase.google.com/)

The site needed to display the user’s progress and validity of their inputs in real-time, so I used React and Firebase to auto-save the user’s application inputs and provide help and feedback to users as they worked through their scholarship application. These technologies also offered secondary benefits of reusable components and less backend code.

### Results

Unfortunately for me, the ACE Mentor Program published a new WordPress site to their acementorchicago.org domain and created a built-in form to replace my scholarship site. The integrated form is a win for the applying students; the scholarship application is now part of the site they already know and use. I’ll chalk this project up as a chance to use new technologies and keep my skills sharp.

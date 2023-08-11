import React from "react";

export default function About() {
  return (
    <div>
      <h1>About TextUtils</h1>
      <h2>Technology used</h2>
      <ul>
        <li style={{ fontSize: "24px" }}>React.js</li>
        <p style={{ fontSize: "18px" }}>
          ReactJS is a JavaScript library for building user interfaces. It is
          open-source, component-based and declarative. It was developed by
          Facebook and is used in many popular apps such as WhatsApp, Instagram
          and Netflix. ReactJS makes it easy to create, maintain and delete UI
          components with JSX syntax and state management. JSX is a JavaScript
          extension that allows writing HTML-like markup inside JavaScript code.
          State management is a way of handling data changes and updates in the
          UI. ReactJS also supports hooks, which are functions that let you use
          state and other features without writing a class component.
        </p>
        <li style={{ fontSize: "24px" }}>Bootstrap Framework</li>
        <p style={{ fontSize: "18px" }}>
          Bootstrap is an open-source front-end framework for web development.
          It provides a collection of HTML, CSS, and JavaScript components and
          tools that enable developers to build responsive, mobile-first
          websites with ease. Bootstrap includes design templates for
          typography, forms, buttons, tables, navigation, modals, image
          carousels and many other elements, as well as optional JavaScript
          plugins. Bootstrap is the most popular framework of its kind and has a
          large community of users and contributors. Bootstrap also offers
          premium themes and templates from the official Bootstrap Themes
          marketplace.
        </p>
        <li style={{ fontSize: "24px" }}>HTML 5</li>
        <p style={{ fontSize: "18px" }}>
          HTML 5 is the latest version of HTML, a markup language for web
          content. It improves the markup for documents and introduces APIs and
          DOM for complex web applications.
        </p>
      </ul>
    </div>
  );
}

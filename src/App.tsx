/*
  src/App.tsx

  Purpose:
  - This is the main React component file for the site. It defines a small set of presentational
    components (Button, Header, Footer) and a root App component that composes them.

  Teaching notes (how to read and change this file):
  - React components are functions that return JSX (looks like HTML but is JavaScript).
  - To make components interactive, add React state (useState) and event handlers (onClick, onChange).
  - Props are how components receive values from their parent. For example Button receives `button_name`.
  - You can split larger components into separate files under `src/` (e.g. src/components/Button.tsx)
    and import them here to keep the code organized.

  How to apply forward (exercises):
  1) Add a click handler to Button that prints the name to the console.
  2) Convert Header to map over an array of link objects instead of hardcoding <Button/> instances.
  3) Introduce TypeScript types for props and component return types.

  Error modes and safety:
  - If you try to use a browser-only API during server-side rendering, guard it with a check for
    `typeof window !== 'undefined'`.
  - Keep JSX well-formed (one parent element or fragment per return).
*/

import "./App.css";
import ianPhoto from "./assets/ianphoto.png";
import type { ReactElement } from "react";

// Small presentational Button component
// - Props: { button_name }
// - How to change: accept an onClick prop or style props to make it interactive or themed.
function Button({ button_name }: { button_name: string }) {
  // If you want this button to do something, add an onClick prop and call a handler
  function handleClick() {
    alert("You clicked on a button!");
  }

  return <button onClick={handleClick}>{button_name}</button>;
}

// Header composed from Button components
// - Replace the hardcoded strings with an array + map to make this data-driven
function Header() {
  return (
    <div>
      <Button button_name="mech" />
      <Button button_name="home" />
      <Button button_name="software" />
    </div>
  );
}

function SocialLinkButton({
  button_name,
  url,
}: {
  button_name: string;
  url: string;
}) {
  function handleClick() {
    alert("leading you to social media!");
  }

  return (
    <a href={url}>
      <button onClick={handleClick}>{button_name}</button>
    </a>
  );
}

// Footer showing simple contact buttons and a copyright
// - How to improve: make the social buttons links (<a href="..."><button/></a>) or extract to a SocialLinks component
function Footer() {
  return (
    <div>
      <p>2025 Ian Xiong</p>
      <a href="https://www.linkedin.com/in/ian-xiong/">Linkedin!</a>
      <SocialLinkButton
        button_name="github"
        url="https://github.com/xiongian"
      />
      <SocialLinkButton
        button_name="linkedin"
        url="https://www.linkedin.com/in/ian-xiong/"
      />
      <SocialLinkButton button_name="Twitter" url="https://x.com/ianxiong_" />
    </div>
  );
}

// Root App component
// - This composes Header, Footer and the main content.
// - Note: avoid using a <body> tag inside components. The real <body> is in index.html. Use divs or semantic elements instead.
function App(): ReactElement {
  return (
    <>
      {/* Site header */}
      <div>
        <Header />
      </div>

      {/*
        IMPORTANT: Don't put a <body> element here. The <body> must remain in index.html.
        Keep your app's content inside divs, sections, header, main, footer, etc.
      */}

      <main>
        {/* Main site content goes here. Replace this with routes or sections as the site grows. */}

        <div className="container">
          <div className="left-box">
            <h2>hey, i'm</h2>
            <h1>Ian Xiong!</h1>

            <img src={ianPhoto} alt="Ian Xiong" />
            <p>trying le cloche penché in québec city!</p>
          </div>
          <div>
            <p>I study systems design engineering at UW.</p>
          </div>
        </div>

        <p>lyircal flow i spit bars poetry flow</p>
        <section>
          <h2>section </h2>
        </section>
      </main>

      {/* Footer */}
      <div>
        <h2>gurt</h2>
      </div>

      <div>
        <h2>gurt</h2>
      </div>

      <div>
        <h2>gurt</h2>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

import * as React from "react";
import Header from '../components/header';

// markup
const IndexPage = () => {
  return (
    <main>
      <Header></Header>
      <title>Home</title>
      <h1>
        Hi
        <br />
        <span>— I'm Katrina! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      
    </main>
  )
}

export default IndexPage;

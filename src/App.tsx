import React from "react";
import AppGrid from "./components/Grid";
import { numbersArray } from "./components/helper";
import usePageTitle from "./hooks/usePageTitle";
import { appHeaderText } from './lib/helper';
import { AppHeader } from './styles/styledComponents';
import "./styles/styles.css";
import "semantic-ui-css/semantic.min.css";

function App(): React.ReactElement<HTMLDivElement> {
  usePageTitle(appHeaderText);
  return (
    <main>
      <header>
        <AppHeader>{appHeaderText}</AppHeader>
      </header>
      <AppGrid items={numbersArray} />
    </main>
  );
}

export default App;
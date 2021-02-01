import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import ColorForm from "./ColorForm";
import Color from "./Color";
import Colors from "./Colors";
import { useState } from "react";
import _ from "lodash";

function App() {
  const [colorList, setColorList] = useState([
    { name: "red", value: "#ff0000" },
    { name: "green", value: "#00ff00" },
    { name: "blue", value: "#0000ff" },
  ]);

  const addColor = (color) => {
    let colorsListCopy = _.cloneDeep(colorList);
    colorsListCopy.push(color);
    setColorList(colorsListCopy);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <Colors colorList={colorList} />
        </Route>
        <Route exact path="/colors/new">
          <ColorForm addColor={addColor} />
        </Route>
        <Route exact path="/colors/:color">
          <Color colorList={colorList} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

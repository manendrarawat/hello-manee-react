/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello React</h1>
 *          <h2>Hello React</h2>
 *       </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello H1"),
    React.createElement("h2", {}, "Hello H2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

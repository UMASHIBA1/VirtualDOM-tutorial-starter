// import { h, render } from "./virtualDom";

// interface HTMLElementEvent<T extends HTMLElement> extends Event {
//   target: T;
// }

// const setState = (state: string) => {
//   const node = document.getElementById("app-container");
//   //   const createKeyList = () => {
//   //     return state.split(" ").map((value: string) => {
//   //       return h("div", { key: value }, [`key: ${value}`]);
//   //     });
//   //   };

//   if (node !== null) {
//     render(
//       node,
//       h("div", {}, [
//         h("h1", {}, [state]), //タダの文字を表したい場合はh関数のchildrenに文字のみ渡す
//         h(
//           "input",
//           {
//             type: "text",
//             value: state,
//             oninput: (e: HTMLElementEvent<HTMLInputElement>) =>
//               setState(e.target.value),
//             autofocus: true,
//           },
//           []
//         ),
//         // h("div", { id: "container" }, createKeyList()),
//       ])
//     );
//   }
// };

// setState("Hey");

const root = document.getElementById("app-container");
const run = document.createTextNode("Run!");
if (root !== null) {
  root.append(run);
}

// // blockers.js

// // 🚫 Block basic scrapers based on User-Agent
// if (
//   /wget|httrack|curl|python|libwww|scrapy|httpclient|bot|spider/i.test(
//     navigator.userAgent
//   )
// ) {
//   document.body.innerHTML = "<h1>Access denied</h1>";
// }

// // ✅ Still discourage drag & clipboard interactions
// ["dragstart", "copy", "cut", "paste"].forEach((evt) =>
//   document.addEventListener(evt, (e) => e.preventDefault())
// );

// // ✅ DevTools detection using window size difference
// let devtoolsOpen = false;
// let checkDevTools = setInterval(() => {
//   const threshold = 160;

//   const isOpen =
//     window.outerWidth - window.innerWidth > threshold ||
//     window.outerHeight - window.innerHeight > threshold;

//   if (isOpen && !devtoolsOpen) {
//     devtoolsOpen = true;

//     // Replace visible content with a custom message
//     document.body.innerHTML = `
//       <h1 style='text-align:center;margin-top:20%;font-family:sans-serif'>
//         👋 Hello World<br>
//         This site isn’t available for inspection.
//       </h1>
//     `;
//   }
// }, 500);

// // 🧱 Optional console deterrent
// setTimeout(() => {
//   console.clear();
//   console.warn("%cSTOP!", "color: red; font-size: 40px; font-weight: bold;");
//   console.warn("You can inspect — but there's nothing juicy here.");
// }, 1000);

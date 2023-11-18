import express from "express";
import path from "path";
import { fileURLToPath } from "url";
// import livereload from "livereload";
// import connectLivereload from "connect-livereload";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, "public"));
// app.use(connectLivereload());

// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "public"));
app.use(express.static(path.join(__dirname, "public")));

const projects = [
  {
    id: 1,
    name: "Endless-Horse",
    description:
      "Endless Reading: Add an endless scroll feature to a blog or news website. New articles load as users scroll down, making it feel like an infinite stream of content",
    link: "/endless-horse",
  },
  {
    id: 2,
    name: "Accordion",
    description:
      "Accordion FAQs: Create a FAQs section with collapsible answers. Users can click on questions to reveal answers, keeping things neat and tidy",
    link: "/faq",
  },
  {
    id: 3,
    name: "Dynamic Price Calculator",
    description:
      "Make a price calculator for a product or service. As users adjust options like quantity and features, the total price updates automatically",
    link: "/price-calculator",
  },
  {
    id: 4,
    name: "Drag-and-Drop Planner",
    description:
      "Make a digital planner where users can drag and drop tasks or events to rearrange them. It’s like having a digital bulletin board",
    link: "/drag-n-drop",
  },
  {
    id: 5,
    name: "Tab Widget",
    description:
      "Build a widget with tabs for different types of content—like news, reviews, and comments. Users can click tabs to switch between them",
    link: "/tab-widget",
  },
];

app.get("/", function (req, res) {
  res.render("pages/index", { projects });
});

app.get("/endless-horse", function (req, res) {
  res.render("pages/endless-horse");
});

app.get("/faq", function (req, res) {
  res.render("pages/faq");
});

app.get("/price-calculator", function (req, res) {
  res.render("pages/price-calculator");
});

app.get("/drag-n-drop", function (req, res) {
  res.render("pages/drag-n-drop");
});

app.get("/tab-widget", function (req, res) {
  res.render("pages/tab-widget");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

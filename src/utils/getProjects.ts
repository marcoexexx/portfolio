import { i18n } from "../i18n";

export type ProjectEnum = 
  | "romaji" 
  | "emiji"
  | "calculator"
  | "koreanHandbook"
  | "ticTacToe"

export type Project = {
  title: string,
  getDescription: () => string,
  link: string | undefined,
  source: string,
  technologies: Array<string>,
  image: string | undefined
}

export const projects: Map<ProjectEnum, Project> = new Map([
  ["romaji", {
    title: "Korean Romanization Converter",
    getDescription: () => i18n.t("projects.romaji"),
    source: "https://github.com/alk-neq-me/korean-romanization-converter",
    technologies: ["rust", "webassembly", "wasm", "tailwindcss", "yew"],
    image: "/projects/romaji.png",
    link: undefined
  }],
  ["emiji", {
    title: "Emoji Search",
    getDescription: () => i18n.t("projects.emoji"),
    source: "https://github.com/alk-neq-me/emoji-search",
    technologies: ["react", "typescript"],
    image: "/projects/emoji.png",
    link: undefined,
  }],
  ["calculator", {
    title: "iOS Calculator",
    getDescription: () => i18n.t("projects.calculator"),
    source: "https://github.com/alk-neq-me/ios-calculator",
    technologies: ["html", "css", "js"],
    link: undefined,
    image: "/projects/calculator.png",
  }],
  ["koreanHandbook", {
    title: "Korean-Myanmar Handbook",
    getDescription: () => i18n.t("projects.koreanMyanmarHandbook"),
    source: "https://github.com/alk-neq-me/korean-learn",
    technologies: ["react", "typescript", "expo", "react-native"],
    image: "/projects/korean-handbook.jpg",
    link: undefined,
  }],
  ["ticTacToe", {
    title: "Minimax AI Tic-Tac-Toe (Python)",
    getDescription: () => i18n.t("projects.ticTacToe"),
    source: "https://github.com/alk-neq-me/ios-calculator",
    technologies: ["python"],
    image: "/projects/tic-tac-toe.png",
    link: undefined,
  }]
])

export function getProject(project: ProjectEnum) {
  const _project = projects.get(project);
  if (!_project) throw new Error("Project not found!");
  return _project;
}

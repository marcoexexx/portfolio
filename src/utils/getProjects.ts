import { i18n } from "../i18n";

export type ProjectEnum = 
  | "romaji" 
  | "ticTacToe"
  | "movieRecommender"
  | "Fortipass"
  | "korean2romajiMobile"
  | "breadit"
  | "ecommerceDashboard"

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
    source: "https://github.com/marcoexexx/korean-romanization-converter",
    technologies: ["rust", "webassembly", "wasm", "tailwindcss", "yew"],
    image: "/projects/romaji.png",
    link: "https://romanization.deno.dev/"
  }],
  ["ticTacToe", {
    title: "Minimax AI Tic-Tac-Toe (Python)",
    getDescription: () => i18n.t("projects.ticTacToe"),
    source: "https://github.com/marcoexexx/ios-calculator",
    technologies: ["python"],
    image: "/projects/tic-tac-toe.png",
    link: undefined,
  }],
  ["korean2romajiMobile", {
    title: "Korean to romaji conveter (Android)",
    getDescription: () => i18n.t("projects.korean2romajiMobile"),
    source: "https://github.com/marcoexexx/react-native-expo-using-native-with-rust/",
    technologies: ["rust", "typescript", "react", "react-expo", "react-native"],
    image: "/projects/korean2romajiMobile.png",
    link: undefined,
  }],
  ["movieRecommender", {
    title: "Movie Recommender System Python (content based)",
    getDescription: () => i18n.t("projects.movieRecommender"),
    source: "https://github.com/marcoexexx/movie-recommender-system-python/",
    technologies: ["python", "sklearn", "streamlit", "machine-learning"],
    image: "/projects/recommender.png",
    link: undefined,
  }],
  ["Fortipass", {
    title: "FortiPass - A Rust-Based Password Manager",
    getDescription: () => i18n.t("projects.fortipass"),
    source: "https://github.com/marcoexexx/fortipass",
    technologies: ["rust"],
    image: "/projects/fortipass.png",
    link: undefined,
  }],
  ["ecommerceDashboard", {
    title: "Ecommerce Dashboard (Fullstack MERN Stack)",
    getDescription: () => i18n.t("projects.ecommerce"),
    source: "https://github.com/marcoexexx/admin-dashboard",
    technologies: ["typescript", "https", "react", "prisma", "mongodb", "jwt", "oauth", "mui", "redis", "docker"],
    image: "/projects/admin-dashboard.png",
    link: undefined,
  }],
])

export function getProject(project: ProjectEnum) {
  const _project = projects.get(project);
  if (!_project) throw new Error("Project not found!");
  return _project;
}

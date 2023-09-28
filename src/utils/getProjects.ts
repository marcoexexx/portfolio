import { i18n } from "../i18n";

export type ProjectEnum = 
  | "romaji" 
  | "ticTacToe"
  | "movieRecommender"
  | "memo"
  | "korean2romajiMobile"
  | "breadit"

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
    link: "https://romanization.deno.dev/"
  }],
  ["ticTacToe", {
    title: "Minimax AI Tic-Tac-Toe (Python)",
    getDescription: () => i18n.t("projects.ticTacToe"),
    source: "https://github.com/alk-neq-me/ios-calculator",
    technologies: ["python"],
    image: "/projects/tic-tac-toe.png",
    link: undefined,
  }],
  ["korean2romajiMobile", {
    title: "Korean to romaji conveter (Android)",
    getDescription: () => i18n.t("projects.korean2romajiMobile"),
    source: "https://github.com/alk-neq-me/react-native-expo-using-native-with-rust/",
    technologies: ["rust", "typescript", "react", "react-expo", "react-native"],
    image: "/projects/korean2romajiMobile.png",
    link: undefined,
  }],
  ["movieRecommender", {
    title: "Movie Recommender System Python (content based)",
    getDescription: () => i18n.t("projects.movieRecommender"),
    source: "https://github.com/alk-neq-me/movie-recommender-system-python/",
    technologies: ["python", "sklearn", "streamlit", "machine-learning"],
    image: "/projects/recommender.png",
    link: undefined,
  }],
  ["memo", {
    title: "Memo - 메모 Terminal-based Project",
    getDescription: () => i18n.t("projects.memo"),
    source: "https://github.com/alk-neq-me/memo",
    technologies: ["rust"],
    image: "/projects/memo.png",
    link: undefined,
  }],
  ["breadit", {
    title: "Reddit Clone (Breadit Readit Clone",
    getDescription: () => i18n.t("projects.breadit"),
    source: "https://github.com/alk-neq-me/breadit-readit-clone",
    technologies: ["typescript", "react", "prisma", "postgresql", "nextjs", "next-auth"],
    image: "/projects/bread-dev.png",
    link: undefined,
  }],
])

export function getProject(project: ProjectEnum) {
  const _project = projects.get(project);
  if (!_project) throw new Error("Project not found!");
  return _project;
}

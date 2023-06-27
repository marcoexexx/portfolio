export type ProjectEnum = 
  | "romaji" 
  | "emiji"
  | "calculator"
  | "koreanHandbook"
  | "ticTacToe"

export type Project = {
  title: string,
  description: string,
  link: string | undefined,
  source: string,
  technologies: Array<string>,
  image: string | undefined
}

export const projects: Map<ProjectEnum, Project> = new Map([
  ["romaji", {
    title: "Korean Romanization Converter",
    description: "An open-source tool to convert Korean text into Romanized form, making it easier for non-native speakers to read and pronounce Korean words.",
    source: "https://github.com/alk-neq-me/korean-romanization-converter",
    technologies: ["rust", "webassembly", "wasm", "tailwindcss", "yew"],
    image: "/public/projects/romaji.png",
    link: undefined
  }],
  ["emiji", {
    title: "Emoji Search",
    description: "Emoji Search is a convenient web application that allows users to search for emojis based on keywords. With a simple and user-friendly interface, users can easily find the perfect emoji to express their emotions or add a touch of fun to their messages. By eliminating the need for scrolling through extensive emoji lists, Emoji Search enhances efficiency and simplifies the emoji selection process. Experience a hassle-free way of finding and using emojis with Emoji Search, the go-to tool for quick and precise emoji discovery.",
    source: "https://github.com/alk-neq-me/emoji-search",
    technologies: ["react", "typescript"],
    image: "/public/projects/emoji.png",
    link: undefined,
  }],
  ["calculator", {
    title: "iOS Calculator",
    description: "GitHub Project: iOS Calculator Design (HTML/CSS/JS)",
    source: "https://github.com/alk-neq-me/ios-calculator",
    technologies: ["html", "css", "js"],
    link: undefined,
    image: "/public/projects/calculator.png",
  }],
  ["koreanHandbook", {
    title: "Korean-Myanmar Handbook",
    description: "The Korea-Myanmar Language Learning project is an ongoing mobile application development written in React Native. This project aims to create a user-friendly language learning platform for Korean and Myanmar speakers. With an intuitive interface and interactive features, the app will provide access to a wide range of language resources, including vocabulary, grammar lessons, practice exercises, and audio pronunciations. Embark on your language learning journey with this upcoming mobile app and experience an immersive and effective way to master the Korean and Myanmar languages. Stay tuned for updates and get ready to elevate your language skills.",
    source: "https://github.com/alk-neq-me/korean-learn",
    technologies: ["react", "typescript", "expo", "react-native"],
    image: "/public/projects/korean-handbook.jpg",
    link: undefined,
  }],
  ["ticTacToe", {
    title: "Minimax AI Tic-Tac-Toe (Python)",
    description: "This console-based project showcases the implementation of the minimax algorithm for an intelligent Tic-Tac-Toe AI. Engage in challenging gameplay against the AI or challenge friends in an interactive terminal interface.",
    source: "https://github.com/alk-neq-me/ios-calculator",
    technologies: ["python"],
    image: "/public/projects/tic-tac-toe.png",
    link: undefined,
  }]
])

export function getProject(project: ProjectEnum) {
  const _project = projects.get(project);
  if (!_project) throw new Error("Project not found!");
  return _project;
}

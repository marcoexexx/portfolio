const en = {
  common: {
    ok: "Ok",
    cancel: "Cancel",
    close: "Close",
    loading: "Loading...",
    error: "Error",
    retry: "Retry",
    noResults: "No Results",
    save: "Save"
  },

  navbar: {
    about: "About",
    projects: "Projects",
    contact: "Contact Me",
    viewSource: "View Source",
    source: "Source",
    personal: "Personal"
  },
  
  hero: {
    welcome: "Welcome",
    iam: "I'm an indie app developer based in Myanmar!",
    cv: "Download CV",
    contact: "Contact Me"
  },

  about: {
    content: "Hey! I'm Aung Koko Lwin. I enjoy building dynamic, creative products from start to finish. Focused on developing intuitive experiences that constantly grow and improve based on user metrics. Always shipping."
  },

  projects: {
    romaji: "An open-source tool to convert Korean text into Romanized form, making it easier for non-native speakers to read and pronounce Korean words.",
    ticTacToe: "This console-based project showcases the implementation of the minimax algorithm for an intelligent Tic-Tac-Toe AI. Engage in challenging gameplay against the AI or challenge friends in an interactive terminal interface.",
    movieRecommender: "Movie Recommender System using Python and Content-Based Method - A simple movie recommender system that suggests movies based on user preferences and movie content. Dataset sourced from TMDB.",
    memo: "This 메모 terminal-based project",
    korean2romajiMobile: "Welcome to the React Native Expo using Native with Rust project! In this repository, I explore how to integrate a Rust native module into a React Native Expo project. This allows you to harness the power and performance of Rust within your Expo-based mobile application.",
  },

  contact: {
    description: "Interested in working together or have any questions? Feel free to reach out to me!",
    sendMe: "Send me a message", 
    socialAndAddress: "Social and Address",
    submit: "submit",
    labelAddress: "Address",
    labelEmail: "Email",
    address: "Yangon, Myanmar, Mingaladon Township",
    email: "toyko2001@gmail.com",
    phone: "+959 263 446 808",
    inputs: {
      name: "Type your full name",
      email: "Email address",
      message: "Message"
    }
  },

  languages: {
    english: "English US",
    myanmar: "Myanmar",
    korea: "Korea",
    japan: "Japan",
    taiwan: "Taiwan"
  },

  footer: {
    copyRight: "© 2023 Aung koko Lwin. All Rights Reserved."
  },

  settings: {
    toggle: "Toggle #{name}"
  },
  language: "Language",
}

export default en;

export type Translations = typeof en;

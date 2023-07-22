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
    emoji: "Emoji Search is a convenient web application that allows users to search for emojis based on keywords. With a simple and user-friendly interface, users can easily find the perfect emoji to express their emotions or add a touch of fun to their messages. By eliminating the need for scrolling through extensive emoji lists, Emoji Search enhances efficiency and simplifies the emoji selection process. Experience a hassle-free way of finding and using emojis with Emoji Search, the go-to tool for quick and precise emoji discovery.",
    calculator: "GitHub Project: iOS Calculator Design (HTML/CSS/JS)",
    koreanMyanmarHandbook: "The Korea-Myanmar Language Learning project is an ongoing mobile application development written in React Native. This project aims to create a user-friendly language learning platform for Korean and Myanmar speakers. With an intuitive interface and interactive features, the app will provide access to a wide range of language resources, including vocabulary, grammar lessons, practice exercises, and audio pronunciations. Embark on your language learning journey with this upcoming mobile app and experience an immersive and effective way to master the Korean and Myanmar languages. Stay tuned for updates and get ready to elevate your language skills.",
    ticTacToe: "This console-based project showcases the implementation of the minimax algorithm for an intelligent Tic-Tac-Toe AI. Engage in challenging gameplay against the AI or challenge friends in an interactive terminal interface.",
    movieRecommender: "Movie Recommender System using Python and Content-Based Method - A simple movie recommender system that suggests movies based on user preferences and movie content. Dataset sourced from TMDB.",
    memo: "This 메모 terminal-based project"
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

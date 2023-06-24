type ProjectEnum = 
  | "romaji" 
  | "emiji"

type Project = {
  [P in ProjectEnum]: {
    title: string,
    description: string,
    link?: string,
    source?: string,
    technologies?: Array<string>
  }
}

export function getProject(): Readonly<Project> {
  return {
    romaji: {
      title: "Korean Romanization Converter",
      description: "An open-source tool to convert Korean text into Romanized form, making it easier for non-native speakers to read and pronounce Korean words.",
      source: "https://github.com/alk-neq-me/korean-romanization-converter",
      technologies: ["rust", "webassembly", "wasm", "tailwindcss", "yew"]
    },
    emiji: {
      title: "Korean Romanization Converter",
      description: "An open-source tool to convert Korean text into Romanized form, making it easier for non-native speakers to read and pronounce Korean words.",
      source: "https://github.com/alk-neq-me/korean-romanization-converter",
      technologies: ["rust", "webassembly", "wasm", "tailwindcss", "yew"]
    }
  }
}

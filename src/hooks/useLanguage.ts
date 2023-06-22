import { useEffect, useState } from "react";
import { countries } from "../components";
import { i18n } from "../i18n";

const LANGUAGE_PREFIX: "language" = "language";

function getStore<T extends any>(key: string): undefined | T {
  const raw = localStorage.getItem(key);
  if (raw) return JSON.parse(raw);
}

function setStore<T>(key: string, data: T): T {
  const raw = JSON.stringify(data);
  localStorage.setItem(key, raw);
  return data;
}

interface State {
  current: (keyof typeof countries);
  loading: boolean;
}

const initialState: State = {
  current: "en",
  loading: true
}

export function useLanguage() {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    function load() {
      let language = getStore<keyof typeof countries>(LANGUAGE_PREFIX);
      if (!language) {
        const newLanguage = setStore(LANGUAGE_PREFIX, "en");
        language = newLanguage;
        setState((prev) => ({...prev, current: newLanguage, loading: false}));
        i18n.load(newLanguage);
        return;
      }
      setState((prev) => ({...prev, current: language as (keyof typeof countries), loading: false}));
      i18n.load(language);
    }
    load();
  }, []);

  function onChangeLanguage(lang: keyof typeof countries) {
    setState((prev) => ({...prev, loading: true}));
    setStore(LANGUAGE_PREFIX, lang);
    setState((prev) => ({...prev, current: lang, loading: false}));
    i18n.load(lang);
  }

  const { current, loading } = state;
  return {  current, loading, onChangeLanguage };
}

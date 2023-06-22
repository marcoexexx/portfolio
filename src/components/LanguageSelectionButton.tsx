import { HStack, Box } from "@chakra-ui/react";
import Text from "./Text";
import { Link } from ".";
import { TxPath } from "../i18n";
import { useCallback } from "react";


export const countries = {
  en: "English",
  ja: "Japan",
  my: "Myanmar",
  ko: "Korea",
  zh: "Taiwan"
}

interface LanguageSelectionButtonProps {
  current: keyof typeof countries;
  onChange: (lang: keyof typeof countries) => void;
}

export function LanguageSelectionButton(props: LanguageSelectionButtonProps) {
  const { current, onChange } = props;

  const getTxCountryName = useCallback((country: string) => {
    return `languages.${countries[country as keyof typeof countries].toLowerCase()}`
  }, [])

  const onChangeLanguage = (country: keyof typeof countries) => () => {
    onChange(country);
  }

  return (
    <Box py={2}>
      <Text tx="language" opacity={0.7} />
      <HStack
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack>
          <Text mr={1} opacity={0.7} tx={getTxCountryName(current) as TxPath} />
          {Object.keys(countries).filter(c => c!==current).map((country: string) => (
            <Link key={country} 
              tx={getTxCountryName(country) as TxPath} 
              onClick={onChangeLanguage(country as keyof typeof countries)}
            />
          ))}
        </HStack>
      </HStack>
    </Box>
  )
}

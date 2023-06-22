import { TextProps as CkTextProps, Text as CkText } from '@chakra-ui/react';
import { I18nOptions, TxPath, i18n } from '../i18n';

interface TextProps extends CkTextProps {
  tx?: TxPath;
  txOption?: I18nOptions;
  text?: string;
}

export default function Text(props: TextProps) {
  const { tx, text, txOption, ...reset } =  props;
  const content = tx ? i18n.t(tx, txOption) : text;

  return (
    <CkText {...reset}>
      {content}
    </CkText>
  )
}

import { TextProps as CkTextProps, Text as CkText } from '@chakra-ui/react';
import { I18nOptions, TxPath, i18n } from '../i18n';

interface TextProps extends CkTextProps {
  tx?: TxPath;
  txOption?: I18nOptions;
  text?: string;
  children?: React.ReactNode;
}

export default function Text(props: TextProps) {
  const { tx, text, txOption, children, ...reset } =  props;
  const content = (tx ? i18n.t(tx, txOption) : text) || children;

  return (
    <CkText {...reset}>
      {content}
    </CkText>
  )
}

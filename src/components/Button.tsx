import { Button as CkButton, ButtonProps as CkButtnProps } from '@chakra-ui/react';
import { I18nOptions, TxPath, i18n } from '../i18n';

interface ButtonProps extends CkButtnProps {
  tx?: TxPath;
  txOption?: I18nOptions;
  text?: string;
}

export function Button(props: ButtonProps) {
  const { tx, txOption, text, ...reset } = props;
  const content = tx ? i18n.t(tx, txOption) : text;

  return (
    <CkButton {...reset}>
      {content}
    </CkButton>
  )
}

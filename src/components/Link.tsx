import { Link as CkLink, LinkProps as CkLinkProp } from '@chakra-ui/react';
import { I18nOptions, TxPath, i18n } from '../i18n';

interface LinkProps extends CkLinkProp {
  tx?: TxPath;
  txOption?: I18nOptions;
  text?: string;
  children?: React.ReactNode;
}

export function Link(props: LinkProps) {
  const { tx, txOption, text, children, ...reset } = props;
  const content = (tx ? i18n.t(tx, txOption) : text) || children;

  return (
    <CkLink {...reset}>
      {content}
    </CkLink>
  )
}

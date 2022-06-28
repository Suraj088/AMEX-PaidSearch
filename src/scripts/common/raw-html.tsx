import { h, RenderableProps, JSX } from 'preact';

interface RawHtmlProps {
  html: string;
  id?: string;
  style?: string;
  className?: string;
  tagName?: string;
}

export function RawHtml(p: RenderableProps<RawHtmlProps>): JSX.Element {
  const { html, id, className, tagName, ...props } = p;
  return h(
    `${tagName}`,
    { dangerouslySetInnerHTML: { __html: html }, id, className, ...props },
    null
  );
}

RawHtml.defaultProps = {
  tagName: 'div',
};

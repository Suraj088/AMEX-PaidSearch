import { h, RenderableProps, Fragment, JSX } from 'preact';
import cx from 'classnames';

import { CardDynamicContentNode } from './use-data-container-items';
import { RawHtml } from '../common/raw-html';

export function CardCompareContentNode(
  props: RenderableProps<{ node: CardDynamicContentNode }>
): JSX.Element | null {
  if (!props.node) {
    return null;
  }

  const kind = props.node.kind || 'p';

  if (/^heading-/.test(kind)) {
    return <CardCompareContentHeading node={props.node} />;
  } else if (kind === 'ul') {
    return <CardCompareContentList node={props.node} />;
  } else if (kind === 'p') {
    return <CardCompareContentParagraph node={props.node} />;
  } else if (kind === 'div') {
    return <CardCompareContentDiv node={props.node} />;
  } else if (kind === 'img') {
    return <CardCompareContentImg node={props.node} />;
  }

  console.error(`Found unknown content node kind: "${kind || '[EMPTY]'}"`);

  return null;
}

function CardCompareContentParagraph(props: RenderableProps<{ node: CardDynamicContentNode }>) {
  const { content, extraClasses, id } = props.node;

  const paragraphs = ([] as string[])
    .concat(content)
    .map((c) => (
      <RawHtml key={`${c}`} id={id} className={cx(extraClasses)} tagName="p" html={`${c}`} />
    ));

  return <Fragment>{paragraphs}</Fragment>;
}

function CardCompareContentList(props: RenderableProps<{ node: CardDynamicContentNode }>) {
  const { content, extraClasses, id } = props.node;

  const listItems = ([] as string[])
    .concat(content)
    .map((c) => <RawHtml key={`${c}`} className={cx(extraClasses)} tagName="li" html={`${c}`} />);

  return <ul id={id}>{listItems}</ul>;
}

function CardCompareContentHeading(props: RenderableProps<{ node: CardDynamicContentNode }>) {
  const { kind, content, extraClasses, id } = props.node;

  const headings = ([] as string[])
    .concat(content)
    .map((c) => (
      <RawHtml key={`${c}`} id={id} className={cx(kind, extraClasses)} tagName="h4" html={`${c}`} />
    ));

  return <Fragment>{headings}</Fragment>;
}

function CardCompareContentDiv(props: RenderableProps<{ node: CardDynamicContentNode }>) {
  const { content, extraClasses, id } = props.node;

  const divs = ([] as string[])
    .concat(content)
    .map((c) => (
      <RawHtml key={`${c}`} id={id} className={cx(extraClasses)} tagName="div" html={`${c}`} />
    ));

  return <Fragment>{divs}</Fragment>;
}

function CardCompareContentImg(props: RenderableProps<{ node: CardDynamicContentNode }>) {
  const { content, extraClasses, id } = props.node;

  const images = ([] as string[])
    .concat(content)
    .map((c) => <img key={`${c}`} id={id} className={cx(extraClasses)} src={`${c}`} alt="" />);

  return <Fragment>{images}</Fragment>;
}

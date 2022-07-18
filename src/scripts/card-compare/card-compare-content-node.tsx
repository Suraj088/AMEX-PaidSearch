import { h, RenderableProps, Fragment, JSX } from 'preact';
import cx from 'classnames';
import { useState,useEffect } from 'preact/hooks';
import { CardDynamicContentNode } from './use-data-container-items';
import { RawHtml } from '../common/raw-html';

export function CardCompareContentNode(
  props: RenderableProps<{ node: CardDynamicContentNode}>
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
  const[path,setPath]=useState(false)
  useEffect(() => {
    let route = window.location.href;
    if (route.slice(route.length - 9) == 'view.html') setPath(true);
  }, []);
  if(content=='<a href="#business-platinum-card-more-benefits-status-boost" rel="noopener noreferrer">View details</a>' && path){
     return <a/>
   }else{
  const paragraphs = ([] as string[])
    .concat(content)
    .map((c) => (
      <RawHtml key={`${c}`} id={id} className={cx(extraClasses)} tagName="p" html={`${c}`} />
    ));

  return <Fragment>{paragraphs}</Fragment>;
  }
}

function CardCompareContentList(props: RenderableProps<{ node: CardDynamicContentNode }>) {
  let { content, extraClasses, id } = props.node;
  const[path,setPath]=useState(false)
  useEffect(() => {
    let route = window.location.href;
    if (route.slice(route.length - 9) == 'view.html') setPath(true);
  }, []);
 if(path && content[2]=='<strong>Unlock over $1,400</strong> per year in value with your Business Platinum Card for statement credits on select purchases, including tech, recruiting, travel and more. Enrollment required. <a href="#business-platinum-card-more-benefits-status-boost" rel="noopener noreferrer">Learn more</a>.<sup>‡</sup><br />'){
 let element=content[2].replace('<a href="#business-platinum-card-more-benefits-status-boost" rel="noopener noreferrer">Learn more</a>.<sup>‡</sup><br />',"")
  content= content.slice(0,1)
   content=content.concat(element) 
}

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

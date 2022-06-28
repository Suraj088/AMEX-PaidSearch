import { h, render } from 'preact';
import { CardCompareTable } from './card-compare-table';

export function renderCardCompare(elementId: string): void {
  const renderRoot = document.getElementById(elementId);

  if (!renderRoot) {
    throw new Error(`Did not find #${elementId}`);
  }

  // Clear target element contents before render
  renderRoot.innerHTML = '';


  render(<CardCompareTable  />, renderRoot);
}

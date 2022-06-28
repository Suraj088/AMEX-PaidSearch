import { h, FunctionComponent } from 'preact';

export interface DotPaginationOption {
  id: string;
  label: string;
}

export interface DotPaginationProps {
  className?: string | undefined;
  options: DotPaginationOption[];
  selectedOptionId: string;
  onPrev?: () => void | null;
  onNext?: () => void | null;
  onOptionIdSelect?: (id: string) => void | null;
  onOptionIndexSelect?: (idx: number) => void | null;
}

export const DotPagination: FunctionComponent<DotPaginationProps> = ({
  options,
  selectedOptionId,
  onPrev,
  onNext,
  onOptionIdSelect,
  onOptionIndexSelect,
}) => {
  return (
    <div class="pagination bg-none pad-0 pad-1-b">
      <button
        class="dls-bright-blue flex flex-align-center prev"
        aria-label="previous"
        onClick={() => onPrev?.()}
      >
        <span class="glyph icon-hover dls-glyph-left"></span>
      </button>
      <div class="page-list">
        <ul class="pages position-relative margin-0" role="navigation">
          {options.map((o, idx) => {
            return (
              <li key={o.id} class="itemContainer">
                <button
                  class="item"
                  aria-pressed={o.id === selectedOptionId}
                  aria-label={o.label}
                  onClick={() => {
                    onOptionIdSelect?.(o.id);
                    onOptionIndexSelect?.(idx);
                  }}
                ></button>
              </li>
            );
          })}
        </ul>
      </div>
      <button
        class="dls-bright-blue flex flex-align-center next"
        aria-label="next"
        onClick={() => onNext?.()}
      >
        <span class="glyph icon-hover dls-glyph-right"></span>
      </button>
    </div>
  );
};

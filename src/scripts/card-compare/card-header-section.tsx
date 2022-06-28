import { h, FunctionComponent } from 'preact';
import cx from 'classnames';
import { CappedContainerFluid } from './containers';

export interface CardSectionProps {
  style?: string | undefined;
  className?: string | undefined;
  hidden?: boolean;
  sectionTitle: ReturnType<FunctionComponent>;
  sectionTitleExtraClasses?: string;
}

export const CardHeaderSection: FunctionComponent<CardSectionProps> = ({
  style,
  className,
  hidden,
  sectionTitle,
  sectionTitleExtraClasses,
  children,
}) => {
  return (
    <CappedContainerFluid className={cx(className)} style={style} hidden={hidden}>
      <div className="row">
        <div
          class={cx(
            'max-vw-width col col-xs-12 col-md-3 pad-2-lr pad-4-tb',
            sectionTitleExtraClasses
          )}
        >
          {sectionTitle}
        </div>
        <div class="col col-xs-12 col-md-9">{children}</div>
      </div>
    </CappedContainerFluid>
  );
};

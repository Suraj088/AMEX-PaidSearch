import { h, FunctionComponent } from 'preact';
import cx from 'classnames';

export const FullBleedContainerFluid: FunctionComponent<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={cx('container-fluid container-fluid-full-bleed', className)}>{children}</div>
  );
};

export const CappedContainerFluid: FunctionComponent<{
  className?: string;
  style?: string;
  hidden?: boolean;
}> = ({ children, className, style, hidden, ...props }) => {
  return (
    <div
      {...props}
      hidden={hidden}
      className={cx('container-fluid container-fluid-capped', className)}
      style={style}
    >
      {children}
    </div>
  );
};

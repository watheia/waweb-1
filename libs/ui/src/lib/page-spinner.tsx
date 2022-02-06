import classNames from 'clsx';
import styles from './page-spinner.module.css';

type SpinnerSize = 'lg' | 'xl' | 'xxl';

type SpinnerProps = {
  size?: SpinnerSize;
};

export const Spinner: React.FunctionComponent<SpinnerProps> = ({ size }) => (
  <div
    className={classNames(
      styles['gg-spinner'],
      styles[size as keyof typeof styles]
        ? styles[size as keyof typeof styles]
        : null
    )}
  ></div>
);

// export default Spinner;

export const PageSpinner: React.FunctionComponent<SpinnerProps> = ({
  size = 'xl',
}) => (
  <div className="w-screen h-screen flex justify-center place-items-center">
    <Spinner size={size} />
  </div>
);

export default PageSpinner;

import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

interface IProps {
  id?: string;
  className?: string;
  inputClassName?: string;
  type?: string;
  value: string | number;
  onChange: (e) => void;
}

export const StretchInput: React.FC<IProps> = ({
  id,
  className,
  inputClassName,
  type = 'text',
  value,
  onChange,
}) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <span>{value}</span>
      <input
        id={id}
        className={classNames(
          'tw-absolute tw-top-0 tw-left-0 tw-p-0 tw-m-0 tw-w-full',
          inputClassName,
        )}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

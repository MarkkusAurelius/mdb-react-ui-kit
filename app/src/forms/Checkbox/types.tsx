import React from 'react';

type CheckboxProps = {
  className?: string;
  wrapperTag?: React.ComponentProps<any>;
  wrapperClass?: string;
  id?: string;
  label?: string;
  labelId?: string;
  labelClass?: string;
  disabled?: boolean;
  value?: string;
  name?: string;
  inline?: boolean;
  checked?: boolean;
  btn?: boolean;
  btnColor?: string;
  [rest: string]: any;
};

export { CheckboxProps };

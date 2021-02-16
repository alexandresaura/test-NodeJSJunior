/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { Container, Content, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, type, id, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    if (type !== 'checkbox') {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      });
    } else {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        getValue: (ref: HTMLInputElement) => {
          return ref.checked;
        },
        clearValue: (ref: HTMLInputElement) => {
          ref.checked = false;
        },
      });
    }
  }, [type, fieldName, registerField]);

  return (
    <Container type={type}>
      {error && <Error title={error}>{error}</Error>}

      <Content type={type} error={error}>
        <input
          name={name}
          defaultValue={defaultValue}
          ref={inputRef}
          type={type}
          id={id}
          {...rest}
        />
        {type === 'checkbox' && <label htmlFor={id} />}
      </Content>
    </Container>
  );
};

export default Input;

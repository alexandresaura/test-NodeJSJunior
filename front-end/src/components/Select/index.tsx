import React, { SelectHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { Container, Content, Error } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
}

const Select: React.FC<SelectProps> = ({ name, id, ...rest }) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {error && <Error title={error}>{error}</Error>}

      <Content error={error}>
        <select
          name={name}
          defaultValue={defaultValue}
          ref={selectRef}
          id={id}
          {...rest}
        />
      </Content>
    </Container>
  );
};

export default Select;

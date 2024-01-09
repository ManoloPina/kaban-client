import React, { useCallback, useState } from "react";
import { ObjectSchema, ValidationError } from "yup";
import { useUtils } from "src/hooks";

type ValidationErrors<T> = {
  [K in keyof T]?: string;
};

type FieldValues<T> = {
  [K in keyof T]: string;
};

export const useForm = <K extends object>(schema: ObjectSchema<any>) => {
  const { isEmpty } = useUtils();

  const [fields, setFields] = useState<FieldValues<K>>({} as FieldValues<K>);
  const [errors, setErrors] = useState<ValidationErrors<K>>({});

  //handlers
  const handleChange = useCallback(
    (name: keyof K) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFields((prevFields) => ({ ...prevFields, [name]: value }));
    },
    []
  );

  const getValidationErrors = useCallback(
    (err: ValidationError): ValidationErrors<K> => {
      if (err.inner) {
        return err.inner.reduce(
          (acc: ValidationErrors<K>, error: ValidationError) => ({
            ...acc,
            [error.path as string]: error.message,
          }),
          {}
        );
      }
      return {};
    },
    []
  );

  const onSubmit = useCallback(
    (cb?: (form: FieldValues<K>) => void) => async (e: any) => {
      e.preventDefault();
      try {
        await schema.validate(fields, { abortEarly: false });
        if (cb) cb(fields);
      } catch (err) {
        const _errors = getValidationErrors(err as ValidationError);
        if (!isEmpty(_errors)) setErrors(_errors);
      }
    },
    [fields, isEmpty, schema, getValidationErrors]
  );

  const register = (name: keyof K) => ({
    name,
    onChange: handleChange(name),
  });

  return {
    errors,
    register,
    onSubmit,
  };
};

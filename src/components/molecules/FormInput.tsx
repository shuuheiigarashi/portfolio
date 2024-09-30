import { FormControl, FormLabel, Input, Textarea, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

type FormInputProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea";
  register: UseFormRegister<FieldValues>;
  errors: { [key: string]: { message?: string } };
};

export const FormInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormInputProps>(
  ({ id, label, type = "text", register, errors }) => (
    <FormControl isInvalid={!!errors[id]}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      {type === "textarea" ? (
        <Textarea id={id} {...register(id)} /> // textareaの場合
      ) : (
        <Input id={id} type={type} {...register(id)} /> // その他のinputの場合
      )}
      {errors[id] && <FormErrorMessage>{errors[id].message}</FormErrorMessage>}
    </FormControl>
  )
);


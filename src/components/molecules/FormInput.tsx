import { FormControl, FormLabel, Input, Textarea, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type FormInputProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea";
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  required?: boolean;
};

export const FormInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormInputProps>(
  ({ id, label, type = "text", register, errors, required = false }) => {
    const getValidationRules = () => {
      const rules: any = {};
      
      if (required) {
        rules.required = `${label}は必須項目です`;
      }
      
      if (type === "email") {
        rules.pattern = {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "有効なメールアドレスを入力してください"
        };
      }
      
      if (type === "textarea") {
        rules.minLength = {
          value: 10,
          message: "お問い合わせ内容は10文字以上で入力してください"
        };
        rules.maxLength = {
          value: 1000,
          message: "お問い合わせ内容は1000文字以内で入力してください"
        };
      }
      
      if (type === "text" && id === "name") {
        rules.minLength = {
          value: 2,
          message: "お名前は2文字以上で入力してください"
        };
        rules.maxLength = {
          value: 50,
          message: "お名前は50文字以内で入力してください"
        };
      }
      
      return rules;
    };

    return (
      <FormControl isInvalid={!!errors[id]} isRequired={required}>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        {type === "textarea" ? (
          <Textarea 
            id={id} 
            {...register(id, getValidationRules())}
            placeholder={id === "content" ? "お問い合わせ内容を詳しくお書きください..." : ""}
            rows={6}
          />
        ) : (
          <Input 
            id={id} 
            type={type} 
            {...register(id, getValidationRules())}
            placeholder={id === "name" ? "山田太郎" : id === "email" ? "example@email.com" : ""}
          />
        )}
        {errors[id] && <FormErrorMessage>{errors[id]?.message as string}</FormErrorMessage>}
      </FormControl>
    );
  }
);


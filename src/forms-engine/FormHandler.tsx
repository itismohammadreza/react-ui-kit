import { FormProvider, useForm } from "@forms-engine/api";
import { FormHandlerProps } from "@models/data.model";

export const FormHandler = <T = any>(props: FormHandlerProps<T>) => {
  const {onSubmit, children, formId, ...otherProps} = props;
  const methods = useForm(otherProps);

  return (
      <form id={formId} onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          {typeof children == "function" ? children(methods.formState) : children}
        </FormProvider>
      </form>
  );
};

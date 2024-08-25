import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// shadcn-ui
import { Form } from "../../ui/form";
import { FormFieldType } from "../../../types";
import { formSchema } from "../../../lib/validation";
import MyFormItem from "../../atoms/MyFormItem/MyFormItem";
import MyButton from "../../atoms/MyButton/MyButton";

export default function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };
  //

  return (
    <article className="bg-whitePink p-[1.5rem]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-5 h-full "
        >
          <MyFormItem
            form={form}
            fieldType={FormFieldType.INPUT}
            placeholder="Votre nom"
            name="username"
          />
          <div className="grid grid-cols-2 gap-y-[1rem] gap-x-[2rem] max-md:grid-cols-1">
            <MyFormItem
              form={form}
              fieldType={FormFieldType.INPUT}
              placeholder="Votre nom"
              name="email"
            />
            <MyFormItem
              form={form}
              fieldType={FormFieldType.INPUT}
              placeholder="Votre nom"
              name="phone"
            />
          </div>
          <MyFormItem
            form={form}
            fieldType={FormFieldType.INPUT}
            placeholder="Sujet"
            name="msgTitle"
          />
          <MyFormItem
            form={form}
            fieldType={FormFieldType.TEXTAREA}
            placeholder="message"
            name="msg"
          />
          <MyButton
            hoverEffect
            type="submit"
            className="py-2 w-[13rem] rounded-none self-center "
          >
            Envoyer le message
          </MyButton>
        </form>
      </Form>
    </article>
  );
}

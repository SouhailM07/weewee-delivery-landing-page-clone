import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// shadcn-ui
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import MyButton from "../../atoms/MyButton/MyButton";
import { footerFormSchema } from "../../../lib/validation";

export default function FooterForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof footerFormSchema>>({
    resolver: zodResolver(footerFormSchema),
    defaultValues: {
      phone: "",
    },
  });
  const onSubmit = (values: z.infer<typeof footerFormSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <div className="flex bg-white border text-[0.8rem] border-gray-400 rounded-sm p-px">
                  <FormControl>
                    <Input
                      className="outline-none h-[2.2rem] text-[0.8rem] bg-transparent border-none"
                      placeholder="Votre mobile"
                      {...field}
                    />
                  </FormControl>
                  <MyButton className="min-w-[7rem]" type="submit">
                    S`abonner
                  </MyButton>
                </div>
                <FormMessage className="absolute" />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
}

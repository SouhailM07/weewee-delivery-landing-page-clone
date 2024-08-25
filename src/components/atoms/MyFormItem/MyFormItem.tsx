import "./styles.css";
import { FormControl, FormField, FormItem, FormMessage } from "../../ui/form";
import { Input } from "../../ui/input";
import { FormFieldType, MyInputProps } from "../../../types";
import { Textarea } from "../../ui/textarea";

const RenderInput = ({ field, props }: { field: any; props: MyInputProps }) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <FormControl>
          <Input
            className="rounded-none w-full h-[2.2rem] text-[0.8rem]  focus:!border-mainBlue"
            placeholder={props.placeholder}
            {...field}
          />
        </FormControl>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            className="text-[0.8rem]  focus:!border-mainBlue rounded-none"
            placeholder={props.placeholder}
            {...field}
          />
        </FormControl>
      );
    default:
      return <>unknown</>;
  }
};

export default function MyFormItem(props: MyInputProps) {
  const { name, form } = props;
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`${
            props.fieldType == FormFieldType.TEXTAREA && "h-full "
          }`}
        >
          <RenderInput props={props} field={field} />
          <FormMessage className="absolute translate-y-[-9px] max-sm:text-[0.7rem]" />
        </FormItem>
      )}
    />
  );
}

import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHFrom";
import PHInput from "../../../components/form/PHInput";
import { Button } from "antd";

export default function CreateAcademicSemester() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type="text" name="name" />
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
}

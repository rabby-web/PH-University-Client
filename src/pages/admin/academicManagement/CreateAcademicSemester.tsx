import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHFrom";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

export default function CreateAcademicSemester() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="name" label="name" />
          <PHInput type="text" name="name" label="year" />
          <PHSelect label="name"></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>{" "}
      </Col>
    </Flex>
  );
}

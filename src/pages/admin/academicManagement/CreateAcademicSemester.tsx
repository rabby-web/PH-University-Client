import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHFrom";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];

export default function CreateAcademicSemester() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = nameOptions[Number(data.name) - 1].label;

    const semesterData = {
      name,
      code: data.name,
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect label="Name" name="name" options={nameOptions}></PHSelect>
          <PHSelect label="Year" name="year" options={nameOptions}></PHSelect>
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={nameOptions}
          ></PHSelect>
          <PHSelect
            label="End Month"
            name="endMonth"
            options={nameOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>{" "}
      </Col>
    </Flex>
  );
}

import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type THSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[];
};

export default function PHSelect({ label, name, options }: THSelectProps) {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Select
              style={{ width: "100%" }}
              {...field}
              options={options}
              size="large"
            />
          </Form.Item>
        )}
      />
    </>
  );
}

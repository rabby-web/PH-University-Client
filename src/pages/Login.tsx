/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "antd";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHFrom from "../components/form/PHFrom";
import PHInput from "../components/form/PHInput";

export default function Login() {
  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     id: "A-0001",
  //     password: "admin123",
  //   },
  // });

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const tostId = toast.loading("Loading");
    // try {
    //   const userInfo = {
    //     id: data.id,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;
    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   navigate(`/${user.role}/dashboard`);
    //   toast.success("Login", { id: tostId, duration: 2000 });
    // } catch (err) {
    //   toast.error("Something went wrong", { id: tostId, duration: 2000 });
    // }
  };

  return (
    <>
      <PHFrom onSubmit={onSubmit}>
        <div>
          <PHInput type="text" name="userId" label="ID:" />
        </div>
        <div>
          <PHInput type="text" name="password" label="Password:" />
        </div>
        <Button htmlType="submit">Login</Button>
      </PHFrom>
    </>
  );
}

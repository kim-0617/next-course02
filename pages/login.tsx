import axios from "axios";
import { useRouter } from "next/router";
import { Button, Form } from "semantic-ui-react";

function Login() {
  const router = useRouter();

  const login = () => {
    axios.post("/api/login").then((res: any) => {
      if (res.status === 200) {
        router.push("/admin");
      }
    });
  };

  return (
    <div style={{ padding: "100px 0", textAlign: "center" }}>
      <Form>
        <Form.Field inline>
          <input type="text" placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="PassWord" />
        </Form.Field>
        <Button color="blue" onClick={login}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;

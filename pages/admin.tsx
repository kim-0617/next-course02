import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Header } from "semantic-ui-react";

function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const logout = () => {
    console.log("click");
    axios.get("/api/logout");
    setIsLogin(false);
    router.push("/login");
  };

  async function checkLogin() {
    const res = await axios("/api/isLogin");
    if (res.status === 200 && res.data.name) {
      // login
      setIsLogin(true);
    } else {
      // no login
      setIsLogin(false);
      router.push("/login");
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <div>
      <Header as="h2">Admin</Header>
      {isLogin && (
        <Button color="teal" onClick={logout}>
          Logout
        </Button>
      )}
    </div>
  );
}

export default Admin;

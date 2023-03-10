import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

function Gnb() {
  const router = useRouter();

  let activeItem;
  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  }
  const goLink = (event: React.MouseEvent<HTMLAnchorElement>, data: any) => {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    } else if (data.name === "admin") {
      router.push("/admin");
    }
  };

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={goLink}
      />
      <Menu.Item
        name="admin"
        active={activeItem === "admin"}
        onClick={goLink}
      />
    </Menu>
  );
}

export default Gnb;

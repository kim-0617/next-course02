import Image from "next/image";
import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

function Top() {
  return (
    <>
      <div className="whole__wrap">
        <div className="top__wrap">
          <Image
            src="/images/logo.jpg"
            width={80}
            height={80}
            alt="logo"
            style={{ display: "block", borderRadius: "50%", marginRight: 20 }}
          />
          <Header as="h1">Kim-0617</Header>
        </div>
        <Gnb />
      </div>

      <style jsx>{`
        .whole__wrap {
        }

        .top__wrap {
          display: flex;
          padding-top: 20px;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export default Top;

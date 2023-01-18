import React from "react";
import { Button, Divider, Header, List } from "semantic-ui-react";

function About() {
  return (
    <div>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        회사소개
      </Header>
      <Divider />
      <List>
        <List.Item>
          <List.Icon name="users" />
          <List.Content>Semantic UI</List.Content>
        </List.Item>

        <List.Item>
          <List.Icon name="marker" />
          <List.Content>New York, NY</List.Content>
        </List.Item>

        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="mailto:kkk5993@naver.com">kkk5993@naver.com</a>
          </List.Content>
        </List.Item>

        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="http://www.semantic-ui.com">semantic-ui.com</a>
          </List.Content>
        </List.Item>
      </List>

      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        문의사항
      </Header>
      <Divider />

      <Header as="h5">제목</Header>
      <input type="text" />
      <Header as="h5">제목</Header>
      <textarea></textarea>
      <Button positive>Save</Button>

      <style jsx>{`
        input,
        textarea {
          display: block;
          width: 70%;
          padding: 5px;
        }

        textarea {
          resize: none;
          margin-bottom: 20px;
          min-height: 150px;
        }
      `}</style>
    </div>
  );
}

export default About;

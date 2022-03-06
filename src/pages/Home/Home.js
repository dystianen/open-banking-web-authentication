import React from "react";
import {Button, PageHeader} from "antd";
import {store} from "../../utils/useStore";
import {observer} from "mobx-react-lite";

export const Home = observer(() => {
  return <div>
    <PageHeader
      style={{
        padding: 0,
        margin: 0,
        height: 40,
        backgroundColor: "transparent",
      }}
      title={"Home"}
    >
    </PageHeader>
    <Button onClick={() => {
      store.ui.setTestValue();
    }}>{store.ui.testValue}</Button>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut recusandae velit! Consequatur corporis, eum fuga, harum incidunt laboriosam minus necessitatibus neque non nostrum pariatur tempore. Dignissimos impedit rem tempora!
  </div>
});

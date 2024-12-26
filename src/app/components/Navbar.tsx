"use client";

import { Layout, Menu } from "antd";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const { Header } = Layout;

const menuItems = [
  {
    key: "/",
    label: "项目介绍",
  },
  {
    key: "/features",
    label: "功能展示",
  },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [current, setCurrent] = useState(pathname);

  const handleClick = (e: { key: string }) => {
    setCurrent(e.key);
    router.push(e.key);
  };

  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 50px",
        height: "64px",
      }}
    >
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        items={menuItems}
        onClick={handleClick}
        style={{
          flex: 1,
          minWidth: "auto",
          justifyContent: "center",
          border: "none",
          background: "transparent",
        }}
      />
    </Header>
  );
}

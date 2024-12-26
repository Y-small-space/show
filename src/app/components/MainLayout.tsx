"use client";

import { Layout } from "antd";
import Navbar from "./Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout style={{ background: "#f5f5f5" }}>
      <Navbar />
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
}

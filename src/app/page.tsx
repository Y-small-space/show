"use client";
import { Card, Typography } from "antd";
import { motion } from "framer-motion";
import {
  MessageOutlined,
  TeamOutlined,
  DatabaseOutlined,
  SyncOutlined,
  SafetyCertificateOutlined,
  ClockCircleOutlined,
  RocketOutlined,
  CodeOutlined,
  CloudServerOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Title, Paragraph, Text } = Typography;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  const router = useRouter();

  const handleFeatureClick = () => {
    router.push("/features");
  };

  return (
    <main
      style={{
        padding: "120px 50px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      {/* 项目背景 */}
      <motion.div {...fadeInUp}>
        <Card
          style={{
            marginBottom: "48px",
            borderRadius: "16px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Title
            level={2}
            style={{
              marginBottom: "32px",
              letterSpacing: "-0.5px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <RocketOutlined style={{ fontSize: "28px", color: "#1677ff" }} />
            项目背景
          </Title>
          <div style={{ display: "grid", gap: "32px" }}>
            <motion.div whileHover={{ scale: 1.01 }}>
              <Title
                level={4}
                style={{
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <CloudServerOutlined style={{ color: "#1677ff" }} />
                大数据专业背景
              </Title>
              <Paragraph
                style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.8 }}
              >
                作为数据科学与大数据专业的学生，我深刻认识到大数据在现代社会中的关键作用。大数据不仅仅关注数据的数量，更注重如何从海量数据中提取有价值的洞察。
              </Paragraph>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }}>
              <Title
                level={4}
                style={{
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <MessageOutlined style={{ color: "#1677ff" }} />
                实时通讯与非结构化数据
              </Title>
              <Paragraph
                style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.8 }}
              >
                实时通讯应用每天都会生成大量非结构化数据，包括文本消息、图片、视频、音频等。这些数据的多样性和复杂性使得数据的处理、存储与分析变得更加具有挑战性。
              </Paragraph>
            </motion.div>
          </div>
        </Card>
      </motion.div>

      {/* 技术栈 */}
      <motion.div {...fadeInUp}>
        <Card
          style={{
            marginBottom: "48px",
            borderRadius: "16px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Title
            level={2}
            style={{
              marginBottom: "32px",
              letterSpacing: "-0.5px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <CodeOutlined style={{ fontSize: "28px", color: "#1677ff" }} />
            技术栈
          </Title>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            <motion.div whileHover={{ scale: 1.02 }}>
              <Title
                level={4}
                style={{
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <AppstoreOutlined style={{ color: "#1677ff" }} />
                前端技术
              </Title>
              <Paragraph
                style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.8 }}
              >
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Next.js - React框架</li>
                  <li>TypeScript</li>
                  <li>Ant Design - UI组件库</li>
                </ul>
              </Paragraph>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Title
                level={4}
                style={{
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <CloudServerOutlined style={{ color: "#1677ff" }} />
                后端技术
              </Title>
              <Paragraph
                style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.8 }}
              >
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Go语言</li>
                  <li>Gin框架</li>
                  <li>WebSocket</li>
                </ul>
              </Paragraph>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Title
                level={4}
                style={{
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <DatabaseOutlined style={{ color: "#1677ff" }} />
                数据存储
              </Title>
              <Paragraph
                style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.8 }}
              >
                <ul style={{ paddingLeft: "20px" }}>
                  <li>MongoDB - 文档数据库</li>
                  <li>Redis - 缓存系统</li>
                </ul>
              </Paragraph>
            </motion.div>
          </div>
        </Card>
      </motion.div>

      {/* 核心功能 */}
      <motion.div {...fadeInUp}>
        <Card
          style={{
            marginBottom: "48px",
            borderRadius: "16px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Title
            level={2}
            style={{
              marginBottom: "32px",
              letterSpacing: "-0.5px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <AppstoreOutlined style={{ fontSize: "28px", color: "#1677ff" }} />
            核心功能
          </Title>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                icon: <MessageOutlined style={{ fontSize: "24px" }} />,
                title: "实时消息传输",
                desc: "基于WebSocket的即时通讯，确保消息的实时性和可靠性",
              },
              {
                icon: <TeamOutlined style={{ fontSize: "24px" }} />,
                title: "多房间聊天",
                desc: "支持创建和加入多个聊天室，实现群组通讯",
              },
              {
                icon: <DatabaseOutlined style={{ fontSize: "24px" }} />,
                title: "消息持久化",
                desc: "使用MongoDB存储聊天记录，支持历史消息查询",
              },
              {
                icon: <SyncOutlined style={{ fontSize: "24px" }} />,
                title: "多设备同步",
                desc: "支持多设备同时在线，消息实时同步",
              },
              {
                icon: (
                  <SafetyCertificateOutlined style={{ fontSize: "24px" }} />
                ),
                title: "用户认证",
                desc: "完整的用户认证系统，确保通讯安全",
              },
              {
                icon: <ClockCircleOutlined style={{ fontSize: "24px" }} />,
                title: "实时状态",
                desc: "实时显示用户在线状态，支持状态切换",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                }}
                style={{
                  padding: "24px",
                  background: "#f8f9fa",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    marginBottom: "16px",
                    color: "#1677ff",
                  }}
                >
                  {feature.icon}
                </div>
                <Title level={4} style={{ marginBottom: "16px" }}>
                  {feature.title}
                </Title>
                <Text style={{ fontSize: "1.1rem", color: "#666" }}>
                  {feature.desc}
                </Text>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </main>
  );
}

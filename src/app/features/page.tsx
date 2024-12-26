"use client";

import { Card, Typography } from "antd";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  MessageOutlined,
  TeamOutlined,
  UserOutlined,
  FileImageOutlined,
  ContactsOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import Image from "next/image";
const { Title, Paragraph } = Typography;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

interface Feature {
  key: string;
  label: string;
  icon: React.ReactNode;
  content: {
    title: string;
    description: string;
    details: string[];
    images: {
      src: string;
      alt: string;
      desc: string;
    }[];
  };
}

export default function Features() {
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px",
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const features: Feature[] = [
    {
      key: "auth",
      label: "登录注册",
      icon: <SafetyCertificateOutlined />,
      content: {
        title: "用户认证系统",
        description: "安全可靠的用户认证系统，支持多种登录方式和注册流程。",
        details: ["账号密码登录"],
        images: [
          {
            src: "/images/login.png",
            alt: "登录界面",
            desc: "登录界面",
          },
          {
            src: "/images/register.png",
            alt: "注册界面",
            desc: "注册界面",
          },
        ],
      },
    },
    {
      key: "profile",
      label: "个人中心",
      icon: <UserOutlined />,
      content: {
        title: "用户管理",
        description: "完整的用户资料管理系统，支持个性化设置。",
        details: ["个人信息编辑", "头像上传", "密码修改"],
        images: [
          {
            src: "/images/profile/profile-1.png",
            alt: "用户管理",
            desc: "用户管理功能展示",
          },
        ],
      },
    },
    {
      key: "chat",
      label: "聊天功能",
      icon: <MessageOutlined />,
      content: {
        title: "实时聊天系统",
        description:
          "支持一对一私聊和群组聊天，消息实时送达，支持图片和文件传输。",
        details: [
          "WebSocket实时通讯",
          "消息已读状态",
          "消息撤回功能",
          "图片预览",
          "文件上传下载",
          "消息引用回复",
        ],
        images: [
          {
            src: "/images/chat/chat_1.png",
            alt: "聊天列表",
            desc: "聊天列表",
          },
          {
            src: "/images/chat/chat_2.png",
            alt: "私聊",
            desc: "私聊",
          },
          {
            src: "/images/chat/chat_3.png",
            alt: "群聊",
            desc: "群聊",
          },
        ],
      },
    },
    {
      key: "friends",
      label: "好友列表",
      icon: <ContactsOutlined />,
      content: {
        title: "好友管理系统",
        description:
          "完整的好友管理功能，支持添加好友、分组管理、在线状态显示等。",
        details: [
          "好友搜索与添加",
          "好友分组管理",
          "在线状态实时显示",
          "好友备注设置",
          "好友关系管理",
        ],
        images: [
          {
            src: "/images/friends/friends_1.png",
            alt: "好友列表",
            desc: "好友列表",
          },
        ],
      },
    },
    {
      key: "group",
      label: "群组管理",
      icon: <TeamOutlined />,
      content: {
        title: "群组系统",
        description: "创建和管理群组，支持群组设置和成员管理。",
        details: ["创建群组", "邀请成员"],
        images: [
          {
            src: "/images/group/group_1.png",
            alt: "创建群组",
            desc: "创建群组功能",
          },
          {
            src: "/images/group/group_2.png",
            alt: "群组列表",
            desc: "群组列表",
          },
        ],
      },
    },
    {
      key: "moments",
      label: "好友动态",
      icon: <FileImageOutlined />,
      content: {
        title: "社交动态",
        description: "分享生活动态，支持图文混合发布，好友互动。",
        details: ["发布动态", "图片上传", "点赞评论"],
        images: [
          {
            src: "/images/moments/moments_1.png",
            alt: "动态列表",
            desc: "动态列表",
          },
        ],
      },
    },
    {
      key: "language",
      label: "语言切换",
      icon: <GlobalOutlined />,
      content: {
        title: "多语言支持",
        description: "支持中英文切换，为国际用户提供更好的使用体验。",
        details: ["中英文无缝切换", "实时切换无需刷新"],
        images: [
          {
            src: "/images/language/zh.png",
            alt: "中文界面",
            desc: "中文界面展示",
          },
          {
            src: "/images/language/en.png",
            alt: "英文界面",
            desc: "英文界面展示",
          },
        ],
      },
    },
    {
      key: "theme",
      label: "主题切换",
      icon: <BgColorsOutlined />,
      content: {
        title: "主题切换",
        description: "支持明暗主题切换，提供个性化的视觉体验。",
        details: ["明暗主题切换", "自动跟随系统主题", "无缝切换动画"],
        images: [
          {
            src: "/images/theme/light.png",
            alt: "明亮主题",
            desc: "明亮主题展示",
          },
          {
            src: "/images/theme/dark.png",
            alt: "暗黑主题",
            desc: "暗黑主题展示",
          },
        ],
      },
    },
  ];

  return (
    <main
      style={{
        padding: "120px 50px 24px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <motion.div {...fadeInUp}>
        <div style={{ position: "relative" }}>
          {/* 左侧导航 */}
          <div
            style={{
              position: "fixed",
              width: "250px",
              top: "100px",
              bottom: "24px",
              overflowY: "auto",
            }}
          >
            <Card
              style={{
                borderRadius: "16px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {features.map((feature) => (
                  <motion.div
                    key={feature.key}
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      document.getElementById(feature.key)?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "16px",
                      cursor: "pointer",
                      borderRadius: "8px",
                      background:
                        activeSection === feature.key
                          ? "#f0f5ff"
                          : "transparent",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span
                      style={{
                        color:
                          activeSection === feature.key ? "#1677ff" : "#666",
                        fontSize: "20px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {feature.icon}
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        color:
                          activeSection === feature.key ? "#1677ff" : "#666",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {feature.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* 右侧内容 */}
          <div
            style={{
              marginLeft: "304px", // 280px + 24px gap
              paddingTop: "24px", // 添加顶部间距
            }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.key}
                id={feature.key}
                data-section
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-20% 0px" }} // 调整视口触发范围
                variants={{
                  initial: { opacity: 0, y: 50 },
                  animate: { opacity: 1, y: 0 },
                }}
                style={{
                  scrollMarginTop: "100px", // 添加滚动偏移量
                }}
              >
                <Card
                  style={{
                    marginBottom: "40px",
                    borderRadius: "16px",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "32px",
                    }}
                  >
                    {/* 描述部分 */}
                    <div>
                      <div
                        style={{
                          color: "#1677ff",
                          fontSize: "24px",
                          marginBottom: "16px",
                        }}
                      >
                        {feature.icon}
                      </div>
                      <Title level={2} style={{ marginBottom: "24px" }}>
                        {feature.content.title}
                      </Title>
                      <Paragraph
                        style={{
                          fontSize: "1.1rem",
                          color: "#666",
                          marginBottom: "24px",
                        }}
                      >
                        {feature.content.description}
                      </Paragraph>
                      <ul
                        style={{
                          paddingLeft: "20px",
                          display: "grid",
                          gap: "12px",
                        }}
                      >
                        {feature.content.details.map((detail, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                              fontSize: "1.1rem",
                              color: "#666",
                            }}
                          >
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* 图片展示部分 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                      }}
                    >
                      {feature.content.images.map((image, index) => (
                        <motion.div
                          key={index}
                          whileHover={{
                            scale: 1.01,
                            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          style={{
                            borderRadius: "12px",
                            overflow: "hidden",
                            background: "#fff",
                            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              width: "100%",
                              paddingTop: "56.25%", // 16:9 比例
                            }}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              style={{
                                objectFit: "cover",
                                padding: "16px",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              padding: "16px",
                              borderTop: "1px solid rgba(0,0,0,0.06)",
                            }}
                          >
                            <div
                              style={{
                                fontSize: "14px",
                                color: "#666",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                              }}
                            >
                              {feature.icon}
                              <span>{image.desc}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}

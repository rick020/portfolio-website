import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Grid, Icon, Tag, Card } from "@/once-ui/components";

import { baseURL } from "@/app/resources";
import { home, about, person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `https://${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `https://${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      {/* Hero Section */}
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="s">
            <Flex gap="8" style={{ alignItems: 'center' }} wrap>
              <Tag variant="neutral" size="s">
                {person.role}
              </Tag>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {person.location}
              </Text>
            </Flex>
          </RevealFx>
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Flex gap="12" wrap>
              <Button id="work" data-border="rounded" href="/work" variant="primary" size="m" arrowIcon>
                View Work
              </Button>
              <Button id="contact" data-border="rounded" href="/about#Contact" variant="secondary" size="m">
                <Flex gap="8" vertical="center">
                  {about.avatar.display && (
                    <Avatar
                      style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  Start a Project
                </Flex>
              </Button>
            </Flex>
          </RevealFx>
        </Column>
      </Column>

      {/* Stats Section */}
      <RevealFx translateY="16" delay={0.6} fillWidth>
        <Grid columns="2" mobileColumns="1" gap="m" fillWidth>
          <Card border="neutral-medium" background="surface" padding="m" radius="l">
            <Column gap="4">
              <Heading variant="display-strong-s" onBackground="brand-weak">6+</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">Years in ML/Data</Text>
            </Column>
          </Card>
          <Card border="neutral-medium" background="surface" padding="m" radius="l">
            <Column gap="4">
              <Heading variant="display-strong-s" onBackground="brand-weak">20+</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">Websites Delivered</Text>
            </Column>
          </Card>
        </Grid>
      </RevealFx>

      {/* What I Do Section */}
      <RevealFx translateY="16" delay={0.7} fillWidth>
        <Column gap="l" fillWidth>
          <Heading variant="display-strong-m" align="center">What I Do</Heading>
          <Grid columns="2" mobileColumns="1" gap="m" fillWidth>
            <Card border="neutral-medium" background="surface" padding="l" radius="l">
              <Column gap="m">
                <Flex gap="12" style={{ alignItems: 'center' }}>
                  <Icon name="code" size="l" onBackground="brand-strong" />
                  <Heading variant="heading-strong-l">Web Development</Heading>
                </Flex>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Fast, conversion-focused websites for startups and service businesses. Built with modern tech stacks for performance and SEO.
                </Text>
                <Flex gap="8" wrap>
                  <Tag variant="neutral" size="s">Next.js</Tag>
                  <Tag variant="neutral" size="s">React</Tag>
                  <Tag variant="neutral" size="s">TypeScript</Tag>
                </Flex>
              </Column>
            </Card>
            <Card border="neutral-medium" background="surface" padding="l" radius="l">
              <Column gap="m">
                <Flex gap="12" style={{ alignItems: 'center' }}>
                  <Icon name="server" size="l" onBackground="brand-strong" />
                  <Heading variant="heading-strong-l">MLOps Engineering</Heading>
                </Flex>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Senior ML Engineer at Cleo. Specializing in scalable ML operations, recommendation systems, and production ML infrastructure.
                </Text>
                <Flex gap="8" wrap>
                  <Tag variant="neutral" size="s">Python</Tag>
                  <Tag variant="neutral" size="s">AWS</Tag>
                  <Tag variant="neutral" size="s">MLOps</Tag>
                  <Tag variant="neutral" size="s">Kubernetes</Tag>
                  <Tag variant="neutral" size="s">Kafka</Tag>
                </Flex>
              </Column>
            </Card>
          </Grid>
        </Column>
      </RevealFx>
    </Column>
  );
}

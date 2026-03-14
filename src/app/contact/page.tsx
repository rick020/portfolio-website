import {
  Button,
  Column,
  Flex,
  Heading,
  Text,
  Icon,
  Card,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person, about, social } from "@/app/resources/content";

export async function generateMetadata() {
  const title = "Contact";
  const description = about.contact.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/contact`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Contact() {
  return (
    <Column maxWidth="m" horizontal="center" paddingY="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact",
            description: about.contact.description,
            url: `https://${baseURL}/contact`,
            mainEntity: {
              "@type": "Person",
              name: person.name,
              email: social.find((s) => s.name === "Email")?.link?.replace("mailto:", ""),
              url: `https://${baseURL}`,
            },
          }),
        }}
      />
      <Column maxWidth="s" gap="l" fillWidth>
        <Column gap="m">
          <Heading variant="display-strong-l">Get in Touch</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {about.contact.description}
          </Text>
        </Column>

        <Column gap="m">
          <Card border="neutral-medium" background="surface" padding="l" radius="l">
            <Flex gap="m" direction="column">
              <Flex gap="12" style={{ alignItems: 'center' }}>
                <Icon name="email" size="l" onBackground="brand-strong" />
                <Column gap="4">
                  <Text variant="heading-strong-m">Email</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    Best for project inquiries
                  </Text>
                </Column>
              </Flex>
              <Button href={about.contact.primaryCta.link} variant="primary" size="m" fillWidth>
                {about.contact.primaryCta.label}
              </Button>
            </Flex>
          </Card>

          <Card border="neutral-medium" background="surface" padding="l" radius="l">
            <Flex gap="m" direction="column">
              <Flex gap="12" style={{ alignItems: 'center' }}>
                <Icon name="linkedin" size="l" onBackground="brand-strong" />
                <Column gap="4">
                  <Text variant="heading-strong-m">LinkedIn</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    Connect professionally
                  </Text>
                </Column>
              </Flex>
              <Button href={about.contact.secondaryCta.link} variant="secondary" size="m" fillWidth>
                {about.contact.secondaryCta.label}
              </Button>
            </Flex>
          </Card>
        </Column>

        <Column gap="m" paddingTop="l">
          <Text variant="heading-strong-m">Other ways to connect</Text>
          <Flex gap="12" wrap>
            {social
              .filter((item) => item.link && !item.link.startsWith("mailto:"))
              .map((item) => (
                <Button
                  key={item.name}
                  href={item.link}
                  prefixIcon={item.icon}
                  label={item.name}
                  size="s"
                  variant="tertiary"
                />
              ))}
          </Flex>
        </Column>

        <Card border="neutral-medium" background="surface" padding="l" radius="l">
          <Column gap="m">
            <Flex gap="12" style={{ alignItems: 'center' }}>
              <Icon name="globe" size="l" onBackground="brand-strong" />
              <Text variant="heading-strong-m">Location & Availability</Text>
            </Flex>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Based in {person.location}. Available for remote projects worldwide and local meetings in London.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}

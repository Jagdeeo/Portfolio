import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = () => {
  const siteUrl = "https://yourdomain.com";

  const title =
    "Jagdeep Dhanda | MERN Stack Developer, Cyber Security & AI Enthusiast";

  const description =
    "Jagdeep Dhanda is a MERN Stack Developer focused on React, Node.js, Express, MongoDB, Cyber Security, Artificial Intelligence and Prompt Engineering. Explore his projects, skills and web development portfolio.";

  const keywords = [
    "Jagdeep Dhanda",
    "Jagdeep Dhanda Developer",
    "MERN Stack Developer",
    "MERN Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "Web Developer",
    "Cyber Security",
    "Cyber Security Enthusiast",
    "AI",
    "Artificial Intelligence",
    "Prompt Engineering",
    "React Portfolio",
    "MERN Stack Portfolio",
    "Full Stack Web Developer India",
  ];

  return (
    <Helmet>
      {/* ==============================
          BASIC SEO
      ============================== */}

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords.join(", ")}
      />

      <meta
        name="author"
        content="Jagdeep Dhanda"
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        name="language"
        content="English"
      />

      <meta
        name="theme-color"
        content="#0f172a"
      />

      {/* ==============================
          CANONICAL URL
      ============================== */}

      <link
        rel="canonical"
        href={siteUrl}
      />

      {/* ==============================
          OPEN GRAPH / FACEBOOK
      ============================== */}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content={siteUrl}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={`${siteUrl}/og-image.jpg`}
      />

      <meta
        property="og:image:alt"
        content="Jagdeep Dhanda - MERN Stack Developer Portfolio"
      />

      <meta
        property="og:site_name"
        content="Jagdeep Dhanda"
      />

      {/* ==============================
          TWITTER / X
      ============================== */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={`${siteUrl}/og-image.jpg`}
      />

      {/* ==============================
          FAVICON
      ============================== */}

      <link
        rel="icon"
        type="image/png"
        href="/favicon.png"
      />

      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
      />

      {/* ==============================
          STRUCTURED DATA
      ============================== */}

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jagdeep Dhanda",
          url: siteUrl,
          jobTitle: "MERN Stack Developer",
          description:
            "MERN Stack Developer focused on web development, Cyber Security, Artificial Intelligence and Prompt Engineering.",
          knowsAbout: [
            "MERN Stack",
            "React",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Web Development",
            "Cyber Security",
            "Artificial Intelligence",
            "Prompt Engineering",
          ],
          sameAs: [
            "https://github.com/Jagdeeo",
            "https://www.linkedin.com/in/jagdeep-dhanda-667b55227/",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;

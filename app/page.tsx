import * as stylex from "@stylexjs/stylex";

import { globalTokens as $, spacing, text } from "./globalTokens.stylex";

import ButtonsDemo from "./components/ButtonsDemo";
import Card from "./Card";
import Counter from "./components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <main {...stylex.props(s.main)}>
      <div {...stylex.props(s.navBar)}>
        <Link href="/commonFactor">common factor</Link>
        <Link href="/rateLimiter">rate limiter</Link>
      </div>
    </main>
  );
}

const MEDIA_MOBILE: "@media (max-width: 700px)" = "@media (max-width: 700px)";
const MEDIA_TABLET: "@media (min-width: 701px) and (max-width: 1120px)" =
  "@media (min-width: 701px) and (max-width: 1120px)";

const bgImage = `linear-gradient(to bottom, ${$.bgStartRGB}, ${$.calloutRGB50})`;
const xBorderColor = `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.3)`;
const xBorderBottomColor = `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.25)`;

const s = stylex.create({
  main: {
    minHeight: "100vh",
  },
  navBar: {
    display: "flex",
    justifyContent: "center",
    gap: spacing.md,
  },
  h1: {
    fontSize: text.h1,
    lineHeight: 1,
    fontFamily: $.fontSans,
    fontWeight: 400,
    textAlign: "center",
    display: "flex",
    gap: spacing.md,
    whiteSpace: "nowrap",
    flexDirection: {
      default: "row",
      [MEDIA_MOBILE]: "column",
    },
  },
  emoji: {
    position: "relative",
    fontFamily: "sans-serif",
    top: {
      default: 0,
      [MEDIA_MOBILE]: spacing.xxxs,
    },
  },
  description: {
    display: "inherit",
    justifyContent: "inherit",
    alignItems: "inherit",
    fontSize: text.sm,
    maxWidth: $.maxWidth,
    width: "100%",
    zIndex: 2,
    fontFamily: $.fontMono,
  },
  descLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xxs,
    padding: { [MEDIA_MOBILE]: spacing.sm },
  },
  descP: {
    display: { [MEDIA_MOBILE]: "flex" },
    position: {
      default: "relative",
      [MEDIA_MOBILE]: "fixed",
    },
    justifyContent: { [MEDIA_MOBILE]: "center" },
    alignItems: { [MEDIA_MOBILE]: "center" },
    width: { [MEDIA_MOBILE]: "100%" },
    margin: 0,
    paddingInline: spacing.sm,
    paddingTop: {
      default: spacing.sm,
      [MEDIA_MOBILE]: spacing.lg,
    },
    paddingBottom: {
      default: spacing.sm,
      [MEDIA_MOBILE]: spacing.md,
    },
    backgroundColor: $.calloutRGB50,
    backgroundImage: {
      default: null,
      [MEDIA_MOBILE]: bgImage,
    },
    borderWidth: {
      default: "1px",
      [MEDIA_MOBILE]: "0",
    },
    borderStyle: "solid",
    borderColor: xBorderColor,
    borderBottomColor: {
      default: null,
      [MEDIA_MOBILE]: xBorderBottomColor,
    },
    borderRadius: {
      default: spacing.xs,
      [MEDIA_MOBILE]: 0,
    },
    inset: { [MEDIA_MOBILE]: "0 0 auto" },
  },
  code: {
    fontWeight: 700,
    fontFamily: $.fontMono,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(4, minmax(25%, auto))",
      [MEDIA_MOBILE]: "1fr",
      [MEDIA_TABLET]: "repeat(2, 50%)",
    },
    width: $.maxWidth,
    maxWidth: {
      default: "100%",
      [MEDIA_MOBILE]: 320,
    },
    textAlign: { [MEDIA_MOBILE]: "center" },
  },
});
/* @ds-bundle: {"format":4,"namespace":"EPIColorspaceDesignSystem_710f86","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardMedia","sourcePath":"components/core/Card.jsx"},{"name":"CardBody","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"MediaFrame","sourcePath":"components/core/MediaFrame.jsx"},{"name":"SpectrumRule","sourcePath":"components/core/SpectrumRule.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Spinner","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"SectionHeader","sourcePath":"components/layout/SectionHeader.jsx"},{"name":"StatBand","sourcePath":"components/layout/StatBand.jsx"},{"name":"Accordion","sourcePath":"components/marketing/Accordion.jsx"},{"name":"CTABand","sourcePath":"components/marketing/CTABand.jsx"},{"name":"CaseStudyCard","sourcePath":"components/marketing/CaseStudyCard.jsx"},{"name":"Hero","sourcePath":"components/marketing/Hero.jsx"},{"name":"LogoWall","sourcePath":"components/marketing/LogoWall.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"MobileMenu","sourcePath":"components/navigation/MobileMenu.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"97a3dd684c63","components/core/Button.jsx":"3acb8eb9f2fd","components/core/Card.jsx":"c2910d37cdd3","components/core/Icon.jsx":"46162503c078","components/core/IconButton.jsx":"ef0ad46f9b6a","components/core/MediaFrame.jsx":"5efe9ffbe707","components/core/SpectrumRule.jsx":"f13f1e3b0dca","components/core/Stat.jsx":"ebceb22ec6c6","components/core/Tag.jsx":"7ca96d6fc63d","components/core/Wordmark.jsx":"2e4fc5ba9aae","components/feedback/Alert.jsx":"365408cbacfe","components/feedback/Dialog.jsx":"a1775d90ce47","components/feedback/ProgressBar.jsx":"148117a46bf6","components/feedback/Toast.jsx":"3cb7206cc8be","components/feedback/Tooltip.jsx":"500691f70e05","components/forms/Checkbox.jsx":"f6903f2a1f7b","components/forms/Field.jsx":"ccad86790cc8","components/forms/Input.jsx":"cdd1ee944b98","components/forms/Radio.jsx":"2a660754fcd9","components/forms/Select.jsx":"b4251aee72b3","components/forms/Switch.jsx":"975e959e4029","components/layout/Section.jsx":"bf38a7d4825d","components/layout/SectionHeader.jsx":"31d2db33206b","components/layout/StatBand.jsx":"e0c056407d35","components/marketing/Accordion.jsx":"92b3674a86b2","components/marketing/CTABand.jsx":"8b272c622ae7","components/marketing/CaseStudyCard.jsx":"e4b0f3dc48b8","components/marketing/Hero.jsx":"434a61135061","components/marketing/LogoWall.jsx":"0ffa2002489c","components/marketing/ServiceCard.jsx":"53bc33abb115","components/marketing/TestimonialCard.jsx":"b82fcf53cc82","components/navigation/Breadcrumbs.jsx":"52f0f46416be","components/navigation/Footer.jsx":"43bf104385ec","components/navigation/MobileMenu.jsx":"f3bc5e7abcd3","components/navigation/Navbar.jsx":"97b1a564ae27","components/navigation/Pagination.jsx":"f2c4454ddc7a","components/navigation/Tabs.jsx":"42be7dfa1b47","ui_kits/website/App.jsx":"f0055126210b","ui_kits/website/Chrome.jsx":"70efca37b247","ui_kits/website/Contact.jsx":"f016e3f31b19","ui_kits/website/Home.jsx":"93bf20ca4944","ui_kits/website/Services.jsx":"78aa94cdaba3","ui_kits/website/Work.jsx":"d7ecb08d95fe","ui_kits/website/data.js":"91a6a59beb08"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EPIColorspaceDesignSystem_710f86 = window.EPIColorspaceDesignSystem_710f86 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANT = {
  default: "",
  flat: "epi-card--flat",
  raised: "epi-card--raised",
  inverse: "epi-card--inverse"
};
function Card({
  children,
  variant = "default",
  interactive = false,
  spectrum = false,
  as = "div",
  className = "",
  ...rest
}) {
  const Comp = rest.href ? "a" : as;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    className: ["epi-card", VARIANT[variant] || "", interactive ? "epi-card--interactive" : "", className].filter(Boolean).join(" ")
  }, rest), children, spectrum && /*#__PURE__*/React.createElement("span", {
    className: "epi-card__accent",
    "aria-hidden": "true"
  }));
}
function CardMedia({
  children,
  ratio = "16 / 9",
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `epi-card__media ${className}`,
    style: {
      aspectRatio: ratio,
      ...style
    }
  }, rest), children);
}
function CardBody({
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `epi-card__body ${className}`
  }, rest), children);
}
function CardFooter({
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `epi-card__footer ${className}`
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardMedia, CardBody, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE = "https://unpkg.com/lucide-static@0.469.0/icons/";
const CACHE = new Map(); // name -> markup string
const PENDING = new Map(); // name -> promise

function load(name) {
  if (CACHE.has(name)) return null;
  if (!PENDING.has(name)) {
    PENDING.set(name, fetch(LUCIDE + name + ".svg").then(r => r.ok ? r.text() : "").then(t => {
      CACHE.set(name, t);
      return t;
    }).catch(() => {
      CACHE.set(name, "");
      return "";
    }));
  }
  return PENDING.get(name);
}

/**
 * Lucide glyph inlined from the pinned lucide-static CDN. The SVG uses
 * stroke="currentColor", so the icon inherits colour like a glyph.
 */
function Icon({
  name,
  size = 20,
  color,
  label,
  className = "",
  style,
  ...rest
}) {
  const [markup, setMarkup] = React.useState(() => CACHE.get(name) || "");
  React.useEffect(() => {
    if (CACHE.has(name)) {
      setMarkup(CACHE.get(name));
      return;
    }
    let live = true;
    load(name).then(t => {
      if (live) setMarkup(t);
    });
    return () => {
      live = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? "img" : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : "true",
    className: "epi-icon " + className,
    style: {
      width: size,
      height: size,
      color: color || undefined,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: markup
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: "",
  brand: "epi-badge--brand",
  brandSoft: "epi-badge--brand-soft",
  success: "epi-badge--success",
  warning: "epi-badge--warning",
  info: "epi-badge--info",
  outline: "epi-badge--outline"
};
function Badge({
  children,
  tone = "neutral",
  icon,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["epi-badge", TONE[tone] || "", className].filter(Boolean).join(" ")
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANT = {
  primary: "",
  secondary: "epi-btn--secondary",
  ghost: "epi-btn--ghost",
  inverse: "epi-btn--inverse",
  outlineInverse: "epi-btn--outline-inverse",
  link: "epi-btn--link"
};
const SIZE = {
  sm: "epi-btn--sm",
  md: "",
  lg: "epi-btn--lg"
};
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  href,
  block = false,
  disabled = false,
  type = "button",
  className = "",
  ...rest
}) {
  const cls = ["epi-btn", VARIANT[variant] || "", SIZE[size] || "", block ? "epi-btn--block" : "", className].filter(Boolean).join(" ");
  const iconSize = size === "lg" ? 20 : size === "sm" ? 16 : 18;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: iconSize
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: iconSize
  }));
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANT = {
  ghost: "",
  outline: "epi-iconbtn--outline",
  solid: "epi-iconbtn--solid"
};
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  disabled,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    className: ["epi-iconbtn", VARIANT[variant] || "", size === "sm" ? "epi-iconbtn--sm" : "", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "sm" ? 16 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/MediaFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Image container with the house placeholder for unfilled art. */
function MediaFrame({
  src,
  alt = "",
  ratio = "16 / 9",
  caption,
  placeholder = "Photography placeholder",
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `epi-media ${className}`,
    style: {
      aspectRatio: ratio,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("div", {
    className: "epi-media__placeholder"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, placeholder)), caption && /*#__PURE__*/React.createElement("div", {
    className: "epi-media__caption"
  }, caption));
}
Object.assign(__ds_scope, { MediaFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MediaFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/SpectrumRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The brand's signature 4-stop process-colour rule. */
function SpectrumRule({
  width = "100%",
  height,
  vertical = false,
  className = "",
  style,
  ...rest
}) {
  const h = height || "var(--rule-spectrum-height)";
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    className: `epi-rule-spectrum ${className}`,
    style: vertical ? {
      display: "block",
      width: h,
      height: width,
      background: "linear-gradient(180deg,var(--cyan-500) 0 25%,var(--magenta-500) 25% 50%,var(--yellow-500) 50% 75%,var(--ink-950) 75% 100%)",
      ...style
    } : {
      display: "block",
      width,
      height: h,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { SpectrumRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpectrumRule.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  suffix,
  tone = "default",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `epi-stat ${className}`
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "epi-stat__value",
    style: tone === "brand" ? {
      color: "var(--text-accent)"
    } : undefined
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.55em",
      verticalAlign: "0.6em",
      marginLeft: 2
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    className: "epi-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  className = "",
  ...rest
}) {
  const Comp = onClick ? "button" : "span";
  return /*#__PURE__*/React.createElement(Comp, _extends({
    type: onClick ? "button" : undefined,
    onClick: onClick,
    "aria-pressed": onClick ? selected : undefined,
    className: ["epi-tag", selected ? "epi-tag--selected" : "", className].filter(Boolean).join(" "),
    style: onClick ? {
      cursor: "pointer",
      font: "inherit"
    } : undefined
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Type-set wordmark. The official EPI-Colorspace logo file was not available when this
 * system was built, so the brand name is set in display type. Swap in assets/logo.svg
 * when the real mark is supplied — see readme.md > Logo.
 */
function Wordmark({
  href = "/",
  size = 22,
  stack = false,
  tone = "auto",
  className = "",
  ...rest
}) {
  const Comp = href ? "a" : "span";
  return /*#__PURE__*/React.createElement(Comp, _extends({
    href: href || undefined,
    className: ["epi-wordmark", stack ? "epi-wordmark--stack" : "", className].filter(Boolean).join(" "),
    style: {
      fontSize: size,
      color: tone === "inverse" ? "var(--paper)" : tone === "ink" ? "var(--ink-950)" : "inherit"
    },
    "aria-label": "EPI Colorspace"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "epi-wordmark__epi"
  }, "EPI"), /*#__PURE__*/React.createElement("span", {
    className: "epi-wordmark__space"
  }, "COLORSPACE"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
const ICONS = {
  info: "info",
  success: "check-circle",
  warning: "alert-triangle",
  danger: "alert-octagon"
};
function Alert({
  tone = "info",
  title,
  children,
  onDismiss,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: tone === "danger" ? "alert" : "status",
    className: cx("epi-alert", "epi-alert--" + tone, className)
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[tone],
    size: 20,
    className: "epi-alert__icon"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "var(--text-body-sm)"
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body-sm)",
      color: "var(--text-secondary)"
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    onClick: onDismiss
  }));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function Dialog({
  open,
  title,
  description,
  children,
  footer,
  onClose,
  className = "",
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "epi-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    className: cx("epi-dialog", className),
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "epi-dialog__head"
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("h2", {
    className: "epi-h3"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "epi-body-sm",
    style: {
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, description)), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    onClick: onClose
  })), children && /*#__PURE__*/React.createElement("div", {
    className: "epi-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "epi-dialog__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function ProgressBar({
  value = 0,
  label,
  className = "",
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(className)
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "var(--space-2)",
      fontSize: "var(--text-caption)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    className: "epi-mono"
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    className: "epi-progress",
    role: "progressbar",
    "aria-valuenow": pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-label": typeof label === "string" ? label : "Progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "epi-progress__fill",
    style: {
      width: pct + "%"
    }
  })));
}
function Spinner({
  size = 20,
  label = "Loading",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": label,
    className: cx("epi-spinner", className),
    style: {
      width: size,
      height: size
    }
  }, rest));
}
Object.assign(__ds_scope, { ProgressBar, Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
const BAR = {
  info: "var(--cyan-500)",
  success: "var(--green-500)",
  warning: "var(--yellow-500)",
  danger: "var(--red-500)"
};
function Toast({
  tone = "info",
  title,
  children,
  onDismiss,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    "aria-live": "polite",
    className: cx("epi-toast", className),
    style: {
      position: "relative"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "epi-toast__bar",
    style: {
      background: BAR[tone]
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: tone === "success" ? "check" : tone === "danger" ? "alert-octagon" : "info",
    size: 18
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      paddingLeft: 2
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "var(--text-body-sm)"
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption)",
      color: "var(--text-inverse-secondary)"
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    onClick: onDismiss,
    style: {
      color: "var(--paper)"
    }
  }));
}
function ToastStack({
  children,
  position = "bottom-right"
}) {
  const [v, h] = position.split("-");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      zIndex: "var(--z-toast)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      [v]: "var(--space-6)",
      [h]: "var(--space-6)"
    }
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function Tooltip({
  label,
  children,
  className = "",
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cx("epi-tooltip", className),
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: "epi-tooltip__bubble"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function Checkbox({
  label,
  description,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: cx("epi-choice", className),
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "epi-choice__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    className: "epi-choice__text"
  }, label, description && /*#__PURE__*/React.createElement("span", {
    className: "epi-choice__desc"
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");

/** Label + hint + error wrapper. Wire ids yourself so label/for and aria-describedby line up. */
function Field({
  label,
  htmlFor,
  hint,
  error,
  required,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx("epi-field", className)
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    className: "epi-field__label",
    htmlFor: htmlFor
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "epi-field__req",
    "aria-hidden": "true"
  }, "*")), children, hint && !error && /*#__PURE__*/React.createElement("span", {
    className: "epi-field__hint"
  }, hint), error && /*#__PURE__*/React.createElement("span", {
    className: "epi-field__error",
    role: "alert"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert-circle",
    size: 14
  }), error));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function Input({
  icon,
  invalid,
  className = "",
  ...rest
}) {
  const input = /*#__PURE__*/React.createElement("input", _extends({
    className: cx("epi-input", className),
    "aria-invalid": invalid || undefined
  }, rest));
  if (!icon) return input;
  return /*#__PURE__*/React.createElement("span", {
    className: "epi-inputgroup"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--text-muted)"
  }), input);
}
function Textarea({
  invalid,
  className = "",
  rows = 4,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    className: cx("epi-input", "epi-input--textarea", className),
    "aria-invalid": invalid || undefined
  }, rest));
}
Object.assign(__ds_scope, { Input, Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function Radio({
  label,
  description,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: cx("epi-choice", className),
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "epi-choice__box epi-choice__box--radio",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "epi-choice__dot"
  })), /*#__PURE__*/React.createElement("span", {
    className: "epi-choice__text"
  }, label, description && /*#__PURE__*/React.createElement("span", {
    className: "epi-choice__desc"
  }, description)));
}
function RadioGroup({
  legend,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("fieldset", _extends({
    className: cx(className),
    style: {
      border: 0,
      margin: 0,
      padding: 0
    }
  }, rest), legend && /*#__PURE__*/React.createElement("legend", {
    className: "epi-field__label",
    style: {
      padding: 0,
      marginBottom: "var(--space-2)"
    }
  }, legend), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)"
    }
  }, children));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function Select({
  options = [],
  placeholder,
  invalid,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "epi-select"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: cx("epi-input", className),
    "aria-invalid": invalid || undefined
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    className: "epi-select__chev"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function Switch({
  label,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: cx("epi-switch", className),
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "epi-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "epi-switch__knob"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "epi-choice__text"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
const TONE = {
  paper: "",
  warm: "epi-section--warm",
  sunken: "epi-section--sunken",
  inverse: "epi-section--inverse epi-inverse"
};
const SIZE = {
  sm: "epi-section--sm",
  md: "",
  lg: "epi-section--lg"
};
const WIDTH = {
  narrow: "epi-container-narrow",
  default: "epi-container",
  wide: "epi-container-wide",
  bleed: ""
};
function Section({
  children,
  tone = "paper",
  size = "md",
  width = "default",
  as = "section",
  className = "",
  ...rest
}) {
  const Comp = as;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    className: cx("epi-section", SIZE[size], TONE[tone], className)
  }, rest), width === "bleed" ? children : /*#__PURE__*/React.createElement("div", {
    className: WIDTH[width]
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function SectionHeader({
  eyebrow,
  title,
  lede,
  action,
  align = "left",
  level = "h2",
  spectrum = true,
  className = "",
  ...rest
}) {
  const H = level;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx("epi-sectionhead", className),
    style: {
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      marginInline: align === "center" ? "auto" : undefined
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "epi-overline"
  }, eyebrow), spectrum && /*#__PURE__*/React.createElement(__ds_scope.SpectrumRule, {
    width: 64
  })), title && /*#__PURE__*/React.createElement(H, {
    className: level === "h1" ? "epi-h1" : "epi-h2"
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    className: "epi-body-lg",
    style: {
      maxWidth: "var(--measure)"
    }
  }, lede), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, action));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/StatBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function StatBand({
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx("epi-statband", className)
  }, rest), children);
}
Object.assign(__ds_scope, { StatBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/StatBand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function Accordion({
  items = [],
  allowMultiple = false,
  className = "",
  ...rest
}) {
  const [open, setOpen] = React.useState([]);
  const toggle = id => setOpen(prev => prev.includes(id) ? prev.filter(x => x !== id) : allowMultiple ? [...prev, id] : [id]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx("epi-accordion", className)
  }, rest), items.map((it, i) => {
    const id = it.id || String(i);
    const isOpen = open.includes(id);
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      className: "epi-accordion__item"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "epi-accordion__trigger",
      "aria-expanded": isOpen,
      onClick: () => toggle(id)
    }, it.title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: isOpen ? "minus" : "plus",
      size: 20,
      color: "var(--text-accent)"
    })), isOpen && /*#__PURE__*/React.createElement("div", {
      className: "epi-accordion__panel"
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CTABand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function CTABand({
  title,
  lede,
  actions,
  tone = "brand",
  className = "",
  ...rest
}) {
  const inverse = tone === "brand" || tone === "ink";
  return /*#__PURE__*/React.createElement("section", _extends({
    className: cx("epi-ctaband", inverse && "epi-inverse", className),
    style: {
      background: tone === "ink" ? "var(--ink-950)" : tone === "brand" ? "var(--red-600)" : "var(--paper-warm)",
      color: inverse ? "var(--paper)" : "var(--text-primary)"
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "epi-container",
    style: {
      paddingBlock: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      maxWidth: "38rem"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "epi-display-2",
    style: {
      fontSize: "clamp(1.875rem,3.4vw,3rem)"
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    className: "epi-body-lg",
    style: {
      color: inverse ? "var(--text-inverse-secondary)" : "var(--text-secondary)"
    }
  }, lede)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3)"
    }
  }, actions))));
}
Object.assign(__ds_scope, { CTABand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CTABand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CaseStudyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CaseStudyCard({
  title,
  client,
  category,
  image,
  ratio = "4 / 3",
  href,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    interactive: !!href,
    href: href,
    className: className
  }, rest, {
    style: {
      textDecoration: "none",
      color: "inherit"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.CardMedia, {
    ratio: ratio
  }, /*#__PURE__*/React.createElement(__ds_scope.MediaFrame, {
    src: image,
    ratio: ratio,
    placeholder: (client || "Project") + " — install photo"
  })), /*#__PURE__*/React.createElement(__ds_scope.CardBody, null, category && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "brandSoft"
  }, category), /*#__PURE__*/React.createElement("h3", {
    className: "epi-h3",
    style: {
      fontSize: "var(--text-h4)",
      fontFamily: "var(--font-display)"
    }
  }, title), client && /*#__PURE__*/React.createElement("span", {
    className: "epi-caption"
  }, client), href && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "var(--space-2)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--text-body-sm)",
      fontWeight: 600,
      color: "var(--text-accent)"
    }
  }, "View project ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 15
  }))));
}
Object.assign(__ds_scope, { CaseStudyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CaseStudyCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function Hero({
  eyebrow,
  title,
  lede,
  actions,
  image,
  imageAlt = "",
  align = "left",
  size = "lg",
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    className: cx("epi-hero", "epi-inverse", className)
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "epi-hero__media",
    "aria-hidden": "true"
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: "repeating-linear-gradient(135deg,var(--ink-900) 0 14px,var(--ink-800) 14px 28px)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "epi-hero__scrim",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "epi-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "epi-hero__inner",
    style: {
      paddingBlock: size === "sm" ? "clamp(3rem,7vw,5rem)" : undefined,
      alignItems: align === "center" ? "center" : undefined,
      textAlign: align
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      alignItems: align === "center" ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "epi-overline",
    style: {
      color: "var(--yellow-500)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement(__ds_scope.SpectrumRule, {
    width: 88
  })), /*#__PURE__*/React.createElement("h1", {
    className: size === "sm" ? "epi-h1" : "epi-display-2",
    style: {
      color: "var(--paper)"
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    className: "epi-body-lg",
    style: {
      color: "var(--text-inverse-secondary)",
      maxWidth: "var(--measure)"
    }
  }, lede), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3)"
    }
  }, actions), children)), /*#__PURE__*/React.createElement(__ds_scope.SpectrumRule, null));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoWall.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");

/**
 * Client wall. Logos are drawn from props — when a client mark is unavailable the cell
 * shows the name set in display type rather than a fabricated logo.
 */
function LogoWall({
  items = [],
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx("epi-logowall", className)
  }, rest), items.map(it => {
    const name = typeof it === "string" ? it : it.name;
    const src = typeof it === "string" ? null : it.src;
    return /*#__PURE__*/React.createElement("div", {
      key: name,
      className: "epi-logowall__cell"
    }, src ? /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: name,
      style: {
        maxHeight: 40,
        width: "auto",
        filter: "grayscale(1)",
        opacity: 0.8
      }
    }) : name);
  }));
}
Object.assign(__ds_scope, { LogoWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoWall.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function ServiceCard({
  index,
  icon,
  title,
  summary,
  bullets = [],
  href,
  className = "",
  ...rest
}) {
  const Comp = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Comp, _extends({
    href: href,
    className: cx("epi-servicecard", className),
    style: href ? {
      textDecoration: "none",
      color: "inherit"
    } : undefined
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-3)"
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 26,
    color: "var(--text-accent)"
  }) : /*#__PURE__*/React.createElement("span", null), index && /*#__PURE__*/React.createElement("span", {
    className: "epi-servicecard__num"
  }, index)), /*#__PURE__*/React.createElement("h3", {
    className: "epi-h3"
  }, title), summary && /*#__PURE__*/React.createElement("p", {
    className: "epi-body-sm",
    style: {
      color: "var(--text-secondary)"
    }
  }, summary), bullets.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: typeof b === "string" ? b : b.label,
    style: {
      display: "flex",
      gap: "var(--space-2)",
      fontSize: "var(--text-body-sm)",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    color: "var(--text-accent)",
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", null, typeof b === "string" ? b : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, b.label, ":"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, b.text)))))), href && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-2)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--text-body-sm)",
      fontWeight: 600,
      color: "var(--text-accent)"
    }
  }, "Read more ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16
  })));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function TestimonialCard({
  quote,
  name,
  role,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: cx("epi-quote", className),
    style: {
      margin: 0
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.SpectrumRule, {
    width: 72,
    className: "epi-quote__mark"
  }), /*#__PURE__*/React.createElement("blockquote", {
    className: "epi-quote__text",
    style: {
      margin: 0
    }
  }, quote), (name || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: "var(--text-body-sm)"
    }
  }, name && /*#__PURE__*/React.createElement("strong", null, name), name && role && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, " \u2014 ", role)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function Breadcrumbs({
  items = [],
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    className: cx("epi-breadcrumbs", className)
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it.label
  }, i > 0 && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 12
  }), it.href && i < items.length - 1 ? /*#__PURE__*/React.createElement("a", {
    href: it.href
  }, it.label) : /*#__PURE__*/React.createElement("span", {
    "aria-current": "page",
    style: {
      color: "var(--text-primary)"
    }
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function Footer({
  columns = [],
  address,
  phone,
  social = [],
  legal = [],
  note,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: cx("epi-footer", "epi-inverse", className)
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "epi-rule-spectrum",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "epi-container",
    style: {
      paddingBlock: "var(--space-16) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-10)",
      gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))"
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "epi-overline",
    style: {
      color: "var(--paper)"
    }
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href
  }, l.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 20,
    tone: "inverse",
    href: ""
  }), address && /*#__PURE__*/React.createElement("address", {
    style: {
      fontStyle: "normal",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-secondary)",
      lineHeight: 1.5
    }
  }, address), phone && /*#__PURE__*/React.createElement("a", {
    href: "tel:" + phone.replace(/[^0-9]/g, ""),
    style: {
      fontWeight: 600
    }
  }, phone), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href,
    "aria-label": s.label,
    style: {
      display: "inline-flex",
      padding: 6,
      border: "1px solid var(--border-inverse)",
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 16
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "var(--space-12)",
      paddingTop: "var(--space-5)",
      borderTop: "1px solid var(--border-inverse)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-5)"
    }
  }, legal.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      fontSize: "var(--text-caption)"
    }
  }, l.label))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MobileMenu.jsx
try { (() => {
/** Full-bleed ink drawer used below 1024px. */
function MobileMenu({
  open,
  links = [],
  cta,
  onClose,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "epi-drawer epi-inverse",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 20,
    tone: "inverse",
    href: ""
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close menu",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Mobile",
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    className: "epi-drawer__link"
  }, l.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: l.external ? "arrow-up-right" : "arrow-right",
    size: 20
  })))), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "inverse",
    size: "lg",
    block: true,
    href: cta.href,
    iconRight: "arrow-right"
  }, cta.label)), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-8)",
      color: "var(--text-secondary)",
      fontSize: "var(--text-body-sm)"
    }
  }, footer));
}
Object.assign(__ds_scope, { MobileMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MobileMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");

/**
 * Site header. Desktop shows inline links; below 1024px the links collapse and the
 * burger is exposed (see epi-components.css responsive block).
 */
function Navbar({
  links = [],
  current,
  cta = {
    label: "Start Your Project",
    href: "#"
  },
  transparent = false,
  scrolled = false,
  onBurger,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: cx("epi-nav", transparent && "epi-nav--transparent", scrolled && "epi-nav--scrolled", className)
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "epi-nav__spectrum",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "epi-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "epi-nav__inner"
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 22,
    href: links.length ? "#" : ""
  }), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "epi-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    className: "epi-navlink",
    "aria-current": current === l.label ? "page" : undefined
  }, l.label, l.external && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 13
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    href: cta.href,
    iconRight: "arrow-right",
    className: "epi-nav__cta"
  }, cta.label), /*#__PURE__*/React.createElement("span", {
    className: "epi-nav__burger"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "menu",
    label: "Open menu",
    variant: "outline",
    onClick: onBurger
  }))))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function Pagination({
  page = 1,
  pages = 1,
  onChange,
  className = "",
  ...rest
}) {
  const go = p => onChange && p >= 1 && p <= pages && onChange(p);
  const list = Array.from({
    length: pages
  }, (_, i) => i + 1);
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Pagination",
    className: cx("epi-pagination", className)
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "epi-pagination__item",
    "aria-label": "Previous page",
    disabled: page === 1,
    onClick: () => go(page - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 18
  })), list.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    type: "button",
    className: "epi-pagination__item",
    "aria-current": p === page ? "page" : undefined,
    onClick: () => go(p)
  }, p)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "epi-pagination__item",
    "aria-label": "Next page",
    disabled: page === pages,
    onClick: () => go(page + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 18
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function Tabs({
  tabs = [],
  value,
  onChange,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx("epi-tabs", className),
    role: "tablist"
  }, rest), tabs.map(t => {
    const id = typeof t === "string" ? t : t.value;
    const label = typeof t === "string" ? t : t.label;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      role: "tab",
      className: "epi-tab",
      "aria-selected": value === id,
      onClick: () => onChange && onChange(id)
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function App() {
  const [page, setPage] = React.useState("Home");
  const scroll = React.useRef(null);
  const go = label => {
    const map = {
      "Services": "Services",
      "Case Studies": "Case Studies",
      "Markets": "Case Studies",
      "Contact Us": "Contact Us",
      "Booth2Biz": "Home",
      "Send Files": "Contact Us",
      "Home": "Home"
    };
    setPage(map[label] || "Home");
    if (scroll.current) scroll.current.scrollTop = 0;
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "kit-scroll",
    ref: scroll,
    style: {
      height: "100vh",
      overflowY: "auto",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(SiteChrome, {
    page: page,
    onNavigate: go
  }, page === "Services" ? /*#__PURE__*/React.createElement(ServicesScreen, {
    onNavigate: go
  }) : page === "Case Studies" ? /*#__PURE__*/React.createElement(WorkScreen, {
    onNavigate: go
  }) : page === "Contact Us" ? /*#__PURE__*/React.createElement(ContactScreen, null) : /*#__PURE__*/React.createElement(HomeScreen, {
    onNavigate: go
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Navbar,
  MobileMenu,
  Footer
} = window.EPIColorspaceDesignSystem_710f86;
const ROUTES = ["Home", "Services", "Case Studies", "Markets", "Contact Us", "Send Files", "Booth2Biz", "Start Your Project", "See our Projects", "See our Markets"];
function SiteChrome({
  page,
  onNavigate,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const D = window.EPI_DATA;
  React.useEffect(() => {
    const el = document.getElementById("kit-scroll");
    if (!el) return;
    const fn = () => setScrolled(el.scrollTop > 40);
    el.addEventListener("scroll", fn);
    return () => el.removeEventListener("scroll", fn);
  }, []);
  // Links inside the header/drawer/footer are rendered as href="#" by the primitives;
  // route them by their label so the kit stays click-through without a router.
  const intercept = e => {
    const a = e.target.closest("a");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    if (href.startsWith("tel:")) return;
    const label = (a.textContent || "").trim();
    if (href === "#" || href === "") {
      e.preventDefault();
      setOpen(false);
      if (ROUTES.includes(label)) onNavigate(label);else if (D.services.some(s => s.title === label)) onNavigate("Services");else if (label === "Blog") onNavigate("Home");else if (a.getAttribute("aria-label") === "EPI Colorspace") onNavigate("Home");
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    onClickCapture: intercept
  }, /*#__PURE__*/React.createElement(Navbar, {
    links: D.nav,
    current: page,
    scrolled: scrolled,
    cta: {
      label: "Start Your Project",
      href: "#"
    },
    onBurger: () => setOpen(true)
  }), /*#__PURE__*/React.createElement(MobileMenu, {
    open: open,
    onClose: () => setOpen(false),
    links: D.nav,
    cta: {
      label: "Start Your Project",
      href: "#"
    },
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, "8435 Helgerman Ct, Gaithersburg, MD 20877", /*#__PURE__*/React.createElement("br", null), "301-990-2666")
  }), /*#__PURE__*/React.createElement("main", null, children), /*#__PURE__*/React.createElement(Footer, {
    columns: [{
      title: "Services",
      links: D.services.map(s => ({
        label: s.title,
        href: "#"
      }))
    }, {
      title: "Our Projects",
      links: [{
        label: "See our Projects",
        href: "#"
      }, {
        label: "See our Markets",
        href: "#"
      }]
    }, {
      title: "Quick Links",
      links: [{
        label: "Home",
        href: "#"
      }, {
        label: "Services",
        href: "#"
      }, {
        label: "Blog",
        href: "#"
      }, {
        label: "Contact Us",
        href: "#"
      }, {
        label: "Send Files",
        href: "#"
      }]
    }],
    address: /*#__PURE__*/React.createElement(React.Fragment, null, "8435 Helgerman Ct,", /*#__PURE__*/React.createElement("br", null), "Gaithersburg, MD 20877"),
    phone: "301-990-2666",
    social: [{
      label: "LinkedIn",
      href: "#",
      icon: "linkedin"
    }],
    legal: [{
      label: "Privacy Policy",
      href: "#"
    }, {
      label: "Terms of Use",
      href: "#"
    }],
    note: "\xA9 2026 EPI-Colorspace. All rights reserved."
  }));
}
Object.assign(window, {
  SiteChrome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  Hero,
  Section,
  SectionHeader,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
  Button,
  Card,
  CardBody,
  Alert,
  Toast,
  ToastStack,
  Icon,
  SpectrumRule,
  Breadcrumbs,
  Dialog
} = window.EPIColorspaceDesignSystem_710f86;
function ContactScreen() {
  const D = window.EPI_DATA;
  const [sent, setSent] = React.useState(false);
  const [err, setErr] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [filesOpen, setFilesOpen] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    if (!email.includes("@")) {
      setErr(true);
      return;
    }
    setErr(false);
    setSent(true);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    size: "sm",
    eyebrow: "Contact Us",
    title: "Start your project.",
    lede: "Tell us the space, the deadline and the budget. We reply within one business day."
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: "Home",
      href: "#"
    }, {
      label: "Contact Us"
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    size: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.3fr) minmax(0,0.85fr)",
      gap: "clamp(2rem,5vw,4rem)",
      alignItems: "start"
    },
    className: "epi-split"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Project brief",
    title: "Tell us what you need",
    level: "h2"
  }), sent && /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Brief received",
    onDismiss: () => setSent(false)
  }, "We'll come back with questions and a plan within one business day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    },
    className: "epi-split"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    htmlFor: "n",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "n",
    placeholder: "Jane Rodriguez",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Organisation",
    htmlFor: "o"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "o",
    placeholder: "Institution or company"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    htmlFor: "e",
    required: true,
    error: err ? "Enter a valid email address." : undefined
  }, /*#__PURE__*/React.createElement(Input, {
    id: "e",
    type: "email",
    icon: "mail",
    placeholder: "you@company.com",
    value: email,
    invalid: err,
    onChange: ev => setEmail(ev.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    htmlFor: "p",
    hint: "Optional \u2014 faster for rush work."
  }, /*#__PURE__*/React.createElement(Input, {
    id: "p",
    icon: "phone",
    placeholder: "301-000-0000"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "What do you need?",
    htmlFor: "s",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    id: "s",
    placeholder: "Select a service",
    options: D.services.map(x => x.title)
  })), /*#__PURE__*/React.createElement(RadioGroup, {
    legend: "Timeline"
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "tl",
    label: "Rush \u2014 in hands under 1 week"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "tl",
    label: "Standard \u2014 2 to 3 weeks",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "tl",
    label: "Planning ahead \u2014 over a month out"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Project brief",
    htmlFor: "b",
    hint: "Sizes, substrate, install location, in-hands date."
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "b",
    rows: 5,
    placeholder: "44ft lobby wall, vinyl, install week of Oct 14\u2026"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Include installation",
    description: "Our crews install across DC, Maryland and Virginia.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    iconRight: "arrow-right"
  }, "Send brief"), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    variant: "secondary",
    size: "lg",
    iconLeft: "upload",
    onClick: () => setFilesOpen(true)
  }, "Send files"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    spectrum: true
  }, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(SpectrumRule, {
    width: 56
  }), /*#__PURE__*/React.createElement("h3", {
    className: "epi-h3"
  }, "The shop"), /*#__PURE__*/React.createElement("address", {
    style: {
      fontStyle: "normal",
      color: "var(--text-secondary)",
      lineHeight: 1.6
    }
  }, "8435 Helgerman Ct", /*#__PURE__*/React.createElement("br", null), "Gaithersburg, MD 20877"), /*#__PURE__*/React.createElement("a", {
    href: "tel:3019902666",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), "301-990-2666"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 16
  }), "Connect with us"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement("span", {
    className: "epi-overline"
  }, "Hours"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontSize: "var(--text-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Mon \u2013 Fri"), /*#__PURE__*/React.createElement("span", {
    className: "epi-mono"
  }, "8:00 \u2013 17:00")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Sat \u2013 Sun"), /*#__PURE__*/React.createElement("span", {
    className: "epi-mono"
  }, "By appointment"))))), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Files over 25 MB"
  }, "Use Send files \u2014 it opens our Hightail drop, no account needed.")))), /*#__PURE__*/React.createElement(Dialog, {
    open: filesOpen,
    onClose: () => setFilesOpen(false),
    title: "Send us your files",
    description: "Print-ready PDF, AI or EPS with fonts outlined and 0.125in bleed. Up to 25 GB per upload.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setFilesOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      iconRight: "arrow-up-right",
      onClick: () => setFilesOpen(false)
    }, "Open Hightail"))
  }), sent && /*#__PURE__*/React.createElement(ToastStack, null, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Brief sent to EPI-Colorspace",
    onDismiss: () => setSent(false)
  }, "Confirmation on its way to ", email || "your inbox", ".")));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Hero,
  Section,
  SectionHeader,
  ServiceCard,
  CaseStudyCard,
  TestimonialCard,
  CTABand,
  LogoWall,
  StatBand,
  Stat,
  Button,
  MediaFrame,
  Badge,
  SpectrumRule
} = window.EPIColorspaceDesignSystem_710f86;
function HomeScreen({
  onNavigate
}) {
  const D = window.EPI_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "Graphics \xB7 Fabrication \xB7 Installation",
    title: "We bring visions to life.",
    lede: "Improve brand visibility and impact with the top-tier graphics and printing solutions of EPI-Colorspace. For over 20 years we have been a trusted partner across the DMV.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      iconRight: "arrow-right",
      onClick: () => onNavigate("Contact Us")
    }, "Start Your Project"), /*#__PURE__*/React.createElement(Button, {
      variant: "outlineInverse",
      size: "lg",
      onClick: () => onNavigate("Case Studies")
    }, "See our work"))
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    size: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)",
      gap: "clamp(2rem,5vw,4.5rem)",
      alignItems: "center"
    },
    className: "epi-split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(SpectrumRule, {
    width: 72
  }), /*#__PURE__*/React.createElement("h2", {
    className: "epi-h2"
  }, "EPI-Colorspace is the trusted partner for custom signage, fabrication, and installation in the DMV."), /*#__PURE__*/React.createElement("p", {
    className: "epi-body-lg"
  }, "We specialize in transforming a wide variety of spaces\u2014from museums and universities to commercial real estate and corporate environments\u2014into dynamic, immersive brand experiences that engage and inspire."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => onNavigate("Services")
  }, "Explore services"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "3 / 4",
    placeholder: "Exhibit install"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "1 / 1",
    placeholder: "Wall mural"
  }), /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "1 / 1",
    placeholder: "Booth build"
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse",
    size: "md"
  }, /*#__PURE__*/React.createElement(StatBand, null, /*#__PURE__*/React.createElement(Stat, {
    value: "20",
    suffix: "+",
    label: "Years serving the DMV"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "400",
    suffix: "+",
    label: "Combined years of team expertise"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "48",
    suffix: "hr",
    label: "Typical artwork turnaround"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1",
    label: "Shop for design, print, fabrication and install",
    tone: "brand"
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "warm",
    size: "md"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Services",
    title: "Creative solutions for projects of any size",
    lede: "EPI-Colorspace provides diverse services across industries, creating impactful experiences and helping partners achieve their marketing goals.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconRight: "arrow-right",
      onClick: () => onNavigate("Services")
    }, "All services")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "var(--space-5)",
      marginTop: "var(--space-10)"
    }
  }, D.services.slice(0, 3).map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.id,
    index: s.index,
    icon: s.icon,
    title: s.title,
    summary: s.summary,
    bullets: s.bullets.slice(0, 2),
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("Services");
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    size: "md"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Our Projects",
    title: "Recent work"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "var(--space-5)",
      marginTop: "var(--space-10)"
    }
  }, D.projects.slice(0, 3).map(p => /*#__PURE__*/React.createElement(CaseStudyCard, _extends({
    key: p.title
  }, p, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("Case Studies");
    }
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "warm",
    size: "md",
    width: "narrow"
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "EPI-Colorspace provided exceptional print quality! The colors were vibrant, and the turnaround time was incredibly fast. Highly recommended!",
    name: "Marketing Director",
    role: "Commercial real estate client"
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    size: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      marginBottom: "var(--space-6)"
    },
    className: "epi-eyebrow-rule"
  }, /*#__PURE__*/React.createElement("span", {
    className: "epi-overline"
  }, "Trusted by")), /*#__PURE__*/React.createElement(LogoWall, {
    items: D.clients
  })), /*#__PURE__*/React.createElement(CTABand, {
    title: "Let's make it unforgettable.",
    lede: "Tell us the space, the deadline and the budget. We'll handle design, print, fabrication and install.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      iconRight: "arrow-right",
      onClick: () => onNavigate("Contact Us")
    }, "Start Your Project"), /*#__PURE__*/React.createElement(Button, {
      variant: "outlineInverse",
      size: "lg",
      iconLeft: "phone",
      href: "tel:3019902666"
    }, "301-990-2666"))
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
const {
  Hero,
  Section,
  SectionHeader,
  ServiceCard,
  Tabs,
  Accordion,
  CTABand,
  Button,
  MediaFrame,
  Badge,
  Breadcrumbs,
  SpectrumRule,
  Icon
} = window.EPIColorspaceDesignSystem_710f86;
function ServicesScreen({
  onNavigate
}) {
  const D = window.EPI_DATA;
  const [tab, setTab] = React.useState(D.services[0].id);
  const active = D.services.find(s => s.id === tab) || D.services[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    size: "sm",
    eyebrow: "Services",
    title: "High-impact graphics, expert printing, fabrication and installation.",
    lede: "We pride ourselves on delivering unmatched levels of responsiveness, unwavering commitment, and extensive industry knowledge.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      iconRight: "arrow-right",
      onClick: () => onNavigate("Contact Us")
    }, "Start Your Project")
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: "Home",
      href: "#"
    }, {
      label: "Services"
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: D.services.map(s => ({
      value: s.id,
      label: s.title
    })),
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,0.9fr)",
      gap: "clamp(2rem,4vw,3.5rem)",
      marginTop: "var(--space-10)",
      alignItems: "start"
    },
    className: "epi-split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: active.icon,
    size: 28,
    color: "var(--text-accent)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "epi-mono",
    style: {
      color: "var(--text-muted)"
    }
  }, active.index)), /*#__PURE__*/React.createElement("h2", {
    className: "epi-h2"
  }, active.title), /*#__PURE__*/React.createElement(SpectrumRule, {
    width: 64
  }), /*#__PURE__*/React.createElement("p", {
    className: "epi-h4",
    style: {
      color: "var(--text-accent)",
      fontFamily: "var(--font-sans)"
    }
  }, active.kicker), /*#__PURE__*/React.createElement("p", {
    className: "epi-body-lg"
  }, active.summary), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, active.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b.label,
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--text-accent)",
    style: {
      marginTop: 4
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, b.label, ":"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, b.text))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right",
    onClick: () => onNavigate("Contact Us")
  }, "Talk to us about ", active.title.split(" & ")[0].toLowerCase()))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "4 / 5",
    placeholder: active.title + " — 01"
  }), /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "4 / 5",
    placeholder: active.title + " — 02"
  }), /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "16 / 10",
    placeholder: active.title + " — 03",
    style: {
      gridColumn: "span 2"
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "warm",
    size: "md"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Everything we do",
    title: "Five service lines, one shop"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "var(--space-5)",
      marginTop: "var(--space-10)"
    }
  }, D.services.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.id,
    index: s.index,
    icon: s.icon,
    title: s.title,
    summary: s.summary,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setTab(s.id);
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    size: "md",
    width: "narrow"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Good to know",
    title: "Working with us"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: D.faqs
  }))), /*#__PURE__*/React.createElement(CTABand, {
    tone: "ink",
    title: "Ready when you are.",
    lede: "Send artwork, dimensions and an in-hands date. We'll come back with a plan.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      iconRight: "arrow-right",
      onClick: () => onNavigate("Contact Us")
    }, "Start Your Project")
  }));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Hero,
  Section,
  SectionHeader,
  CaseStudyCard,
  Tag,
  Pagination,
  CTABand,
  Button,
  Breadcrumbs,
  Alert
} = window.EPIColorspaceDesignSystem_710f86;
function WorkScreen({
  onNavigate
}) {
  const D = window.EPI_DATA;
  const filters = ["All markets", ...D.markets];
  const [filter, setFilter] = React.useState("All markets");
  const [page, setPage] = React.useState(1);
  const list = filter === "All markets" ? D.projects : D.projects.filter(p => p.market === filter);
  const perPage = 6;
  const pages = Math.max(1, Math.ceil(list.length / perPage));
  const shown = list.slice((page - 1) * perPage, page * perPage);
  const pick = t => {
    setFilter(t);
    setPage(1);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    size: "sm",
    eyebrow: "Our Projects",
    title: "Work across the DMV and beyond.",
    lede: "Museums, universities, commercial real estate and corporate environments \u2014 built, printed and installed by our own crews."
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: "Home",
      href: "#"
    }, {
      label: "Case Studies"
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    size: "sm"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Filter",
    title: "Browse by market"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)",
      marginTop: "var(--space-6)"
    }
  }, filters.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: filter === t,
    onClick: () => pick(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "var(--space-5)",
      marginTop: "var(--space-8)"
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(CaseStudyCard, _extends({
    key: p.title
  }, p, {
    href: "#",
    onClick: e => e.preventDefault()
  })))), shown.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "No projects in this market yet"
  }, "Try another filter, or ask us \u2014 the archive is larger than what's published here.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "var(--space-4)",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "epi-caption"
  }, "Showing ", shown.length, " of ", list.length, " projects"), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pages: pages,
    onChange: setPage
  }))), /*#__PURE__*/React.createElement(CTABand, {
    title: "Your project could be next.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      iconRight: "arrow-right",
      onClick: () => onNavigate("Contact Us")
    }, "Start Your Project")
  }));
}
Object.assign(window, {
  WorkScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.EPI_DATA = {
  nav: [{
    label: "Services",
    href: "#services"
  }, {
    label: "Case Studies",
    href: "#work"
  }, {
    label: "Markets",
    href: "#markets"
  }],
  services: [{
    id: "tradeshows",
    index: "01",
    icon: "presentation",
    title: "Tradeshows",
    kicker: "From Concept to Execution we help our Clients create a Show-Stopping Presence",
    summary: "Our comprehensive trade show services allow for impactful solutions that will captivate audiences. From initial concept development to post-event storage, our expert team delivers seamless, turnkey creative solutions that help you stand out on the show floor.",
    bullets: [{
      label: "Design & Concept Development",
      text: "Eye catching, custom booth designs tailored to your brand, messaging, and target audiences."
    }, {
      label: "Fabrication & Production",
      text: "Large-scale, custom artwork with storytelling visuals, vibrant colors, and unique branding elements."
    }, {
      label: "Logistics & Storage Solutions",
      text: "Secure storage and efficient transportation management for materials."
    }]
  }, {
    id: "exhibits",
    index: "02",
    icon: "landmark",
    title: "Exhibits & Displays",
    kicker: "Bringing Visions to Life with Precision Craftsmanship",
    summary: "Specializing in bringing curators' visions to life with craftsmanship and precision. Our dedication to excellence has made us a trusted partner for renowned institutions, including the Smithsonian, Library of Congress, and The Kennedy Center.",
    bullets: [{
      label: "Custom Exhibit Fabrication",
      text: "Precision-crafted displays and wall coverings using high-quality materials."
    }, {
      label: "Professional Installation",
      text: "Expert handling and on-site assembly for seamless, secure installations."
    }, {
      label: "Specialty Solutions",
      text: "Custom lighting, interactive elements and structural components."
    }]
  }, {
    id: "signage",
    index: "03",
    icon: "signpost",
    title: "Signage Solutions",
    kicker: "Creating Effective, Impactful Branding Through Design and Installation",
    summary: "From construction signage to retail graphics, we help businesses stand out and communicate their brand effectively. Our large-format printing and signage services are perfect for a variety of environments and applications.",
    bullets: [{
      label: "Exterior Signage",
      text: "Durable, weather-resistant banners and wraps for construction branding and retail leasing."
    }, {
      label: "Permanent Garage Signage",
      text: "Custom parking garage signs and wayfinding, built for clarity and durability."
    }]
  }, {
    id: "large-format",
    index: "04",
    icon: "printer",
    title: "Large Format Printing",
    kicker: "High-Quality Wall Murals, Floor Graphics, Banners, and Outdoor Displays",
    summary: "We print with state-of-the-art technology for superior clarity and durability, ensuring your visuals captivate audiences and stand out at trade shows and events.",
    bullets: [{
      label: "Design & Concept Development",
      text: "Eye-catching, custom designs tailored to your brand and audiences."
    }, {
      label: "Fabrication & Production",
      text: "High-quality construction using premium materials."
    }, {
      label: "Logistics & Storage Solutions",
      text: "Secure storage and efficient transportation management."
    }]
  }, {
    id: "corporate",
    index: "05",
    icon: "building-2",
    title: "Corporate Branding & Environmental Graphics",
    kicker: "Transforming Workspaces and Public Areas with Custom-Framed Visuals",
    summary: "We specialize in cutting-edge, out-of-the-box marketing solutions, from immersive experiential setups to vibrant large-format prints and interactive installations.",
    bullets: [{
      label: "Workplace Environmental Graphics",
      text: "Designs that strengthen brand identity and inspire employees."
    }, {
      label: "Murals",
      text: "Large-scale custom artwork with storytelling visuals and vibrant colors."
    }, {
      label: "Custom Framing",
      text: "Frames that showcase artwork, certificates and branding materials."
    }]
  }],
  markets: ["Museums & Cultural", "Universities", "Commercial Real Estate", "Corporate Environments", "Retail", "Construction"],
  clients: ["Smithsonian", "Library of Congress", "The Kennedy Center", "Georgetown University", "JBG Smith", "Marriott"],
  projects: [{
    title: "Permanent gallery build-out",
    client: "Library of Congress",
    category: "Exhibits & Displays",
    market: "Museums & Cultural"
  }, {
    title: "REACH wayfinding programme",
    client: "The Kennedy Center",
    category: "Signage Solutions",
    market: "Museums & Cultural"
  }, {
    title: "20×20 island booth",
    client: "Regional healthcare group",
    category: "Tradeshows",
    market: "Corporate Environments"
  }, {
    title: "Lobby mural, 44ft run",
    client: "Downtown DC office tower",
    category: "Corporate Branding",
    market: "Commercial Real Estate"
  }, {
    title: "Leasing barricade wrap",
    client: "Mixed-use development",
    category: "Signage Solutions",
    market: "Commercial Real Estate"
  }, {
    title: "Student centre environmental graphics",
    client: "Georgetown University",
    category: "Corporate Branding",
    market: "Universities"
  }, {
    title: "Garage wayfinding, 6 levels",
    client: "Class-A office campus",
    category: "Signage Solutions",
    market: "Commercial Real Estate"
  }, {
    title: "Travelling exhibit crates & graphics",
    client: "Smithsonian-affiliated museum",
    category: "Exhibits & Displays",
    market: "Museums & Cultural"
  }, {
    title: "Retail window programme, 12 stores",
    client: "National specialty retailer",
    category: "Large Format Printing",
    market: "Retail"
  }],
  faqs: [{
    title: "What file formats do you accept?",
    content: "Print-ready PDF, AI or EPS with fonts outlined and 0.125in bleed. For files over 25 MB, use the Send Files link — it opens our Hightail drop."
  }, {
    title: "Do you install outside the DMV?",
    content: "Yes. Our crews are based in Gaithersburg and install across DC, Maryland and Virginia, and travel nationwide for exhibit and tradeshow work."
  }, {
    title: "How fast can you turn a job around?",
    content: "Standard production is two to three weeks including proofing. Rush work under a week is routine — tell us the in-hands date and we will tell you what is possible."
  }, {
    title: "Can you store our booth between shows?",
    content: "Yes. We warehouse exhibit properties and manage inbound and outbound freight so nothing ships from your office."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardMedia = __ds_scope.CardMedia;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.MediaFrame = __ds_scope.MediaFrame;

__ds_ns.SpectrumRule = __ds_scope.SpectrumRule;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatBand = __ds_scope.StatBand;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.CTABand = __ds_scope.CTABand;

__ds_ns.CaseStudyCard = __ds_scope.CaseStudyCard;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.MobileMenu = __ds_scope.MobileMenu;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

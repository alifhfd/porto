(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data_project/porto/components/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThemeProvider({ children, ...props }) {
    _s();
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ThemeProvider.useEffect": ()=>{
            setMounted(true);
        }
    }["ThemeProvider.useEffect"], []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/data_project/porto/components/theme-provider.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data_project/porto/components/star-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StarBackground",
    ()=>StarBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const STARS_COUNT = 350;
const StarBackground = ({ className = "" })=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -9999,
        y: -9999
    });
    const starsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StarBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let animFrameId;
            const resize = {
                "StarBackground.useEffect.resize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["StarBackground.useEffect.resize"];
            resize();
            window.addEventListener("resize", resize);
            starsRef.current = Array.from({
                length: STARS_COUNT
            }, {
                "StarBackground.useEffect": ()=>({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        size: Math.random() < 0.8 ? Math.random() * 0.8 + 0.1 : Math.random() * 1.5 + 0.8,
                        speedY: Math.random() * 0.15 + 0.05,
                        opacity: Math.random() * 0.5 + 0.1,
                        opacityDir: Math.random() > 0.5 ? 1 : -1,
                        opacitySpeed: Math.random() * 0.008 + 0.002
                    })
            }["StarBackground.useEffect"]);
            const onMouseMove = {
                "StarBackground.useEffect.onMouseMove": (e)=>{
                    mouseRef.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["StarBackground.useEffect.onMouseMove"];
            window.addEventListener("mousemove", onMouseMove);
            const draw = {
                "StarBackground.useEffect.draw": ()=>{
                    const { width, height } = canvas;
                    const mouse = mouseRef.current;
                    const isDark = resolvedTheme === "dark";
                    const gradient = ctx.createRadialGradient(width / 2, height, 0, width / 2, height, height);
                    gradient.addColorStop(0, isDark ? "#262626" : "#d4d4d4");
                    gradient.addColorStop(1, isDark ? "#000000" : "#ffffff");
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, height);
                    starsRef.current.forEach({
                        "StarBackground.useEffect.draw": (star)=>{
                            star.y -= star.speedY;
                            if (star.y < 0) {
                                star.y = height;
                                star.x = Math.random() * width;
                            }
                            star.opacity += star.opacityDir * star.opacitySpeed;
                            if (star.opacity >= 1) {
                                star.opacity = 1;
                                star.opacityDir = -1;
                            }
                            if (star.opacity <= 0.1) {
                                star.opacity = 0.1;
                                star.opacityDir = 1;
                            }
                            const dx = star.x - mouse.x;
                            const dy = star.y - mouse.y;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            const repelRadius = 80;
                            if (dist < repelRadius) {
                                const force = (repelRadius - dist) / repelRadius;
                                star.x += dx / dist * force * 2;
                                star.y += dy / dist * force * 2;
                            }
                            ctx.beginPath();
                            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                            ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${star.opacity})` : `rgba(0, 0, 0, ${star.opacity})`;
                            ctx.shadowBlur = star.size * 3;
                            ctx.shadowColor = isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.4)";
                            ctx.fill();
                        }
                    }["StarBackground.useEffect.draw"]);
                    animFrameId = requestAnimationFrame(draw);
                }
            }["StarBackground.useEffect.draw"];
            draw();
            return ({
                "StarBackground.useEffect": ()=>{
                    cancelAnimationFrame(animFrameId);
                    window.removeEventListener("resize", resize);
                    window.removeEventListener("mousemove", onMouseMove);
                }
            })["StarBackground.useEffect"];
        }
    }["StarBackground.useEffect"], [
        resolvedTheme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: `fixed inset-0 ${className}`,
        style: {
            zIndex: 0
        }
    }, void 0, false, {
        fileName: "[project]/data_project/porto/components/star-background.tsx",
        lineNumber: 111,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StarBackground, "kquF8Hxa+UF/vc8rHiPHeeTpzWY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = StarBackground;
var _c;
__turbopack_context__.k.register(_c, "StarBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data_project/porto/components/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const navLinks = [
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Skills',
        href: '#skills'
    },
    {
        label: 'Projects',
        href: '#projects'
    },
    {
        label: 'Experience',
        href: '#experience'
    },
    {
        label: 'Certifications',
        href: '#certifications'
    },
    {
        label: 'Contact',
        href: '#contact'
    }
];
function Navbar() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hero');
    const { theme, setTheme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setMounted(true);
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setScrolled(window.scrollY > 20)
            }["Navbar.useEffect.onScroll"];
            onScroll();
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const sectionIds = [
                'hero',
                'about',
                'skills',
                'projects',
                'experience',
                'certifications',
                'contact'
            ];
            const observer = new IntersectionObserver({
                "Navbar.useEffect": (entries)=>{
                    entries.forEach({
                        "Navbar.useEffect": (entry)=>{
                            if (entry.isIntersecting) setActiveSection(entry.target.id);
                        }
                    }["Navbar.useEffect"]);
                }
            }["Navbar.useEffect"], {
                rootMargin: '-40% 0px -55% 0px'
            });
            sectionIds.forEach({
                "Navbar.useEffect": (id)=>{
                    const el = document.getElementById(id);
                    if (el) observer.observe(el);
                }
            }["Navbar.useEffect"]);
            return ({
                "Navbar.useEffect": ()=>observer.disconnect()
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const handleNavClick = (href)=>{
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        setMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 border-b border-border/70 shadow-xl backdrop-blur-xl' : 'bg-transparent'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleNavClick('#hero'),
                        className: "text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-200",
                        children: [
                            "Alifhfd ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/data_project/porto/components/navbar.tsx",
                                lineNumber: 63,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/data_project/porto/components/navbar.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex items-center gap-6",
                                children: navLinks.map((link)=>{
                                    const sectionId = link.href.replace('#', '');
                                    const isActive = activeSection === sectionId;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleNavClick(link.href),
                                            className: `text-sm transition-colors duration-200 ${isActive ? 'text-primary font-semibold' : 'text-foreground/70 hover:text-primary'}`,
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/data_project/porto/components/navbar.tsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this)
                                    }, link.label, false, {
                                        fileName: "[project]/data_project/porto/components/navbar.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/data_project/porto/components/navbar.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
                                className: "p-2 rounded-lg border border-border bg-background/80 hover:bg-accent transition-colors",
                                "aria-label": "Toggle theme",
                                children: resolvedTheme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/data_project/porto/components/navbar.tsx",
                                    lineNumber: 89,
                                    columnNumber: 43
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/data_project/porto/components/navbar.tsx",
                                    lineNumber: 89,
                                    columnNumber: 63
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/data_project/porto/components/navbar.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/data_project/porto/components/navbar.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden flex items-center gap-3",
                        children: [
                            mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
                                className: "p-2 rounded-lg border border-border bg-background/80 hover:bg-accent transition-colors",
                                children: resolvedTheme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/data_project/porto/components/navbar.tsx",
                                    lineNumber: 100,
                                    columnNumber: 43
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/data_project/porto/components/navbar.tsx",
                                    lineNumber: 100,
                                    columnNumber: 63
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/data_project/porto/components/navbar.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex flex-col gap-1.5 p-2 rounded-lg bg-background/90 backdrop-blur-xl border border-border text-foreground shadow-sm",
                                onClick: ()=>setMenuOpen(!menuOpen),
                                "aria-expanded": menuOpen,
                                children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/data_project/porto/components/navbar.tsx",
                                    lineNumber: 108,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/data_project/porto/components/navbar.tsx",
                                    lineNumber: 108,
                                    columnNumber: 43
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/data_project/porto/components/navbar.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/data_project/porto/components/navbar.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/data_project/porto/components/navbar.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 pb-4 bg-background/95 backdrop-blur-xl border-t border-border/70",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-col gap-3 pt-3",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavClick(link.href),
                                    className: "w-full text-left text-sm text-foreground/80 hover:text-primary transition-colors duration-200",
                                    children: link.label
                                }, void 0, false, {
                                    fileName: "[project]/data_project/porto/components/navbar.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this)
                            }, link.label, false, {
                                fileName: "[project]/data_project/porto/components/navbar.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/data_project/porto/components/navbar.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/data_project/porto/components/navbar.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/data_project/porto/components/navbar.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/data_project/porto/components/navbar.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(Navbar, "+2k1Dysj2P5Ljj5xlPqWXAxUDlU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data_project/porto/components/intro-animation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntroAnimation",
    ()=>IntroAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const LINES = [
    {
        text: 'Hello, and welcome',
        delay: 0
    },
    {
        text: 'to my portfolio',
        delay: 900
    },
    {
        text: 'alifhfd_',
        delay: 1800
    }
];
const CURSOR_BLINK_END = 3400 // stop blinking cursor
;
const HOLD_DURATION = 900 // hold after last line fully typed
;
const FADE_OUT_START = CURSOR_BLINK_END + HOLD_DURATION;
const UNMOUNT_DELAY = FADE_OUT_START + 700 // after CSS fade completes
;
function IntroAnimation({ onDone }) {
    _s();
    // Which lines are visible and how many chars
    const [chars, setChars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0,
        0
    ]);
    const [visibleLines, setVisibleLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        false,
        false,
        false
    ]);
    const [cursorLine, setCursorLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0) // which line has the cursor
    ;
    const [showCursor, setShowCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fadeOut, setFadeOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntroAnimation.useEffect": ()=>{
            const timers = [];
            LINES.forEach({
                "IntroAnimation.useEffect": (line, li)=>{
                    // Show line (slide in)
                    timers.push(setTimeout({
                        "IntroAnimation.useEffect": ()=>{
                            setVisibleLines({
                                "IntroAnimation.useEffect": (prev)=>{
                                    const n = [
                                        ...prev
                                    ];
                                    n[li] = true;
                                    return n;
                                }
                            }["IntroAnimation.useEffect"]);
                            setCursorLine(li);
                            // Type each character
                            for(let ci = 0; ci <= line.text.length; ci++){
                                timers.push(setTimeout({
                                    "IntroAnimation.useEffect": ()=>{
                                        setChars({
                                            "IntroAnimation.useEffect": (prev)=>{
                                                const n = [
                                                    ...prev
                                                ];
                                                n[li] = ci;
                                                return n;
                                            }
                                        }["IntroAnimation.useEffect"]);
                                    }
                                }["IntroAnimation.useEffect"], ci * 55));
                            }
                        }
                    }["IntroAnimation.useEffect"], line.delay));
                }
            }["IntroAnimation.useEffect"]);
            // Stop cursor blink
            timers.push(setTimeout({
                "IntroAnimation.useEffect": ()=>setShowCursor(false)
            }["IntroAnimation.useEffect"], CURSOR_BLINK_END));
            // Fade out overlay
            timers.push(setTimeout({
                "IntroAnimation.useEffect": ()=>setFadeOut(true)
            }["IntroAnimation.useEffect"], FADE_OUT_START));
            // Unmount
            timers.push(setTimeout({
                "IntroAnimation.useEffect": ()=>onDone()
            }["IntroAnimation.useEffect"], UNMOUNT_DELAY));
            return ({
                "IntroAnimation.useEffect": ()=>timers.forEach(clearTimeout)
            })["IntroAnimation.useEffect"];
        }
    }["IntroAnimation.useEffect"], [
        onDone
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] flex items-center justify-center bg-background",
        style: {
            transition: 'opacity 700ms cubic-bezier(0.4,0,0.2,1)',
            opacity: fadeOut ? 0 : 1,
            pointerEvents: fadeOut ? 'none' : 'all'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    background: 'radial-gradient(ellipse 60% 45% at 50% 50%, oklch(0.62 0.13 200 / 0.08) 0%, transparent 70%)'
                }
            }, void 0, false, {
                fileName: "[project]/data_project/porto/components/intro-animation.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col gap-3 px-6",
                children: LINES.map((line, li)=>{
                    const isLast = li === LINES.length - 1;
                    const isCurrent = li === cursorLine;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transition: 'opacity 400ms ease, transform 400ms cubic-bezier(0.16,1,0.3,1)',
                            opacity: visibleLines[li] ? 1 : 0,
                            transform: visibleLines[li] ? 'translateY(0)' : 'translateY(10px)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: isLast ? 'font-mono text-3xl sm:text-5xl font-black tracking-tight text-primary' : 'font-mono text-2xl sm:text-4xl font-semibold tracking-tight text-foreground/80',
                            children: [
                                line.text.slice(0, chars[li]),
                                isCurrent && showCursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block w-[2px] sm:w-[3px] h-[1em] align-middle ml-1 bg-primary",
                                    style: {
                                        animation: 'introBlink 0.7s step-end infinite'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/data_project/porto/components/intro-animation.tsx",
                                    lineNumber: 99,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/data_project/porto/components/intro-animation.tsx",
                            lineNumber: 90,
                            columnNumber: 15
                        }, this)
                    }, li, false, {
                        fileName: "[project]/data_project/porto/components/intro-animation.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/data_project/porto/components/intro-animation.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes introBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/data_project/porto/components/intro-animation.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/data_project/porto/components/intro-animation.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(IntroAnimation, "ypMzZB2b5ER6V34gE/EnKIkXJEE=");
_c = IntroAnimation;
var _c;
__turbopack_context__.k.register(_c, "IntroAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data_project/porto/components/profile-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)';
const ANIMATION_CONFIG = {
    INITIAL_DURATION: 1200,
    INITIAL_X_OFFSET: 70,
    INITIAL_Y_OFFSET: 60,
    DEVICE_BETA_OFFSET: 20,
    ENTER_TRANSITION_MS: 180
};
const clamp = (v, min = 0, max = 100)=>Math.min(Math.max(v, min), max);
const round = (v, precision = 3)=>parseFloat(v.toFixed(precision));
const adjust = (v, fMin, fMax, tMin, tMax)=>round(tMin + (tMax - tMin) * (v - fMin) / (fMax - fMin));
// Inject keyframes once
const KEYFRAMES_ID = 'pc-keyframes';
if (typeof document !== 'undefined' && !document.getElementById(KEYFRAMES_ID)) {
    const style = document.createElement('style');
    style.id = KEYFRAMES_ID;
    style.textContent = `
    @keyframes pc-holo-bg {
      0% { background-position: 0 var(--background-y), 0 0, center; }
      100% { background-position: 0 var(--background-y), 90% 90%, center; }
    }
  `;
    document.head.appendChild(style);
}
const ProfileCardComponent = ({ avatarUrl = '', iconUrl = '', grainUrl = '', innerGradient, behindGlowEnabled = true, behindGlowColor, behindGlowSize, className = '', enableTilt = true, enableMobileTilt = false, mobileTiltSensitivity = 5, miniAvatarUrl, name = 'Alief Hafid Sidiq', title = 'Data Analyst', handle = 'alifhfd', status = 'Open to Work', contactText = 'Contact', showUserInfo = true, onContactClick })=>{
    _s();
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shellRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const enterTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leaveRafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tiltEngine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProfileCardComponent.useMemo[tiltEngine]": ()=>{
            if (!enableTilt) return null;
            let rafId = null;
            let running = false;
            let lastTs = 0;
            let currentX = 0;
            let currentY = 0;
            let targetX = 0;
            let targetY = 0;
            const DEFAULT_TAU = 0.14;
            const INITIAL_TAU = 0.6;
            let initialUntil = 0;
            const setVarsFromXY = {
                "ProfileCardComponent.useMemo[tiltEngine].setVarsFromXY": (x, y)=>{
                    const shell = shellRef.current;
                    const wrap = wrapRef.current;
                    if (!shell || !wrap) return;
                    const width = shell.clientWidth || 1;
                    const height = shell.clientHeight || 1;
                    const percentX = clamp(100 / width * x);
                    const percentY = clamp(100 / height * y);
                    const centerX = percentX - 50;
                    const centerY = percentY - 50;
                    const properties = {
                        '--pointer-x': `${percentX}%`,
                        '--pointer-y': `${percentY}%`,
                        '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
                        '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
                        '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
                        '--pointer-from-top': `${percentY / 100}`,
                        '--pointer-from-left': `${percentX / 100}`,
                        '--rotate-x': `${round(-(centerX / 5))}deg`,
                        '--rotate-y': `${round(centerY / 4)}deg`
                    };
                    for (const [k, v] of Object.entries(properties))wrap.style.setProperty(k, v);
                }
            }["ProfileCardComponent.useMemo[tiltEngine].setVarsFromXY"];
            const step = {
                "ProfileCardComponent.useMemo[tiltEngine].step": (ts)=>{
                    if (!running) return;
                    if (lastTs === 0) lastTs = ts;
                    const dt = (ts - lastTs) / 1000;
                    lastTs = ts;
                    const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
                    const k = 1 - Math.exp(-dt / tau);
                    currentX += (targetX - currentX) * k;
                    currentY += (targetY - currentY) * k;
                    setVarsFromXY(currentX, currentY);
                    const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;
                    if (stillFar || document.hasFocus()) {
                        rafId = requestAnimationFrame(step);
                    } else {
                        running = false;
                        lastTs = 0;
                        if (rafId) {
                            cancelAnimationFrame(rafId);
                            rafId = null;
                        }
                    }
                }
            }["ProfileCardComponent.useMemo[tiltEngine].step"];
            const start = {
                "ProfileCardComponent.useMemo[tiltEngine].start": ()=>{
                    if (running) return;
                    running = true;
                    lastTs = 0;
                    rafId = requestAnimationFrame(step);
                }
            }["ProfileCardComponent.useMemo[tiltEngine].start"];
            return {
                setImmediate (x, y) {
                    currentX = x;
                    currentY = y;
                    setVarsFromXY(x, y);
                },
                setTarget (x, y) {
                    targetX = x;
                    targetY = y;
                    start();
                },
                toCenter () {
                    const shell = shellRef.current;
                    if (!shell) return;
                    this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
                },
                beginInitial (durationMs) {
                    initialUntil = performance.now() + durationMs;
                    start();
                },
                getCurrent () {
                    return {
                        x: currentX,
                        y: currentY,
                        tx: targetX,
                        ty: targetY
                    };
                },
                cancel () {
                    if (rafId) cancelAnimationFrame(rafId);
                    rafId = null;
                    running = false;
                    lastTs = 0;
                }
            };
        }
    }["ProfileCardComponent.useMemo[tiltEngine]"], [
        enableTilt
    ]);
    const getOffsets = (evt, el)=>{
        const rect = el.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };
    const handlePointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfileCardComponent.useCallback[handlePointerMove]": (event)=>{
            const shell = shellRef.current;
            if (!shell || !tiltEngine) return;
            const { x, y } = getOffsets(event, shell);
            tiltEngine.setTarget(x, y);
        }
    }["ProfileCardComponent.useCallback[handlePointerMove]"], [
        tiltEngine
    ]);
    const handlePointerEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfileCardComponent.useCallback[handlePointerEnter]": (event)=>{
            const shell = shellRef.current;
            if (!shell || !tiltEngine) return;
            shell.classList.add('active', 'entering');
            if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
            enterTimerRef.current = window.setTimeout({
                "ProfileCardComponent.useCallback[handlePointerEnter]": ()=>{
                    shell.classList.remove('entering');
                }
            }["ProfileCardComponent.useCallback[handlePointerEnter]"], ANIMATION_CONFIG.ENTER_TRANSITION_MS);
            const { x, y } = getOffsets(event, shell);
            tiltEngine.setTarget(x, y);
        }
    }["ProfileCardComponent.useCallback[handlePointerEnter]"], [
        tiltEngine
    ]);
    const handlePointerLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfileCardComponent.useCallback[handlePointerLeave]": ()=>{
            const shell = shellRef.current;
            if (!shell || !tiltEngine) return;
            tiltEngine.toCenter();
            const checkSettle = {
                "ProfileCardComponent.useCallback[handlePointerLeave].checkSettle": ()=>{
                    const { x, y, tx, ty } = tiltEngine.getCurrent();
                    if (Math.hypot(tx - x, ty - y) < 0.6) {
                        shell.classList.remove('active');
                        leaveRafRef.current = null;
                    } else {
                        leaveRafRef.current = requestAnimationFrame(checkSettle);
                    }
                }
            }["ProfileCardComponent.useCallback[handlePointerLeave].checkSettle"];
            if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
            leaveRafRef.current = requestAnimationFrame(checkSettle);
        }
    }["ProfileCardComponent.useCallback[handlePointerLeave]"], [
        tiltEngine
    ]);
    const handleDeviceOrientation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfileCardComponent.useCallback[handleDeviceOrientation]": (event)=>{
            const shell = shellRef.current;
            if (!shell || !tiltEngine) return;
            const { beta, gamma } = event;
            if (beta == null || gamma == null) return;
            const centerX = shell.clientWidth / 2;
            const centerY = shell.clientHeight / 2;
            const x = clamp(centerX + gamma * mobileTiltSensitivity, 0, shell.clientWidth);
            const y = clamp(centerY + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity, 0, shell.clientHeight);
            tiltEngine.setTarget(x, y);
        }
    }["ProfileCardComponent.useCallback[handleDeviceOrientation]"], [
        tiltEngine,
        mobileTiltSensitivity
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileCardComponent.useEffect": ()=>{
            if (!enableTilt || !tiltEngine) return;
            const shell = shellRef.current;
            if (!shell) return;
            shell.addEventListener('pointerenter', handlePointerEnter);
            shell.addEventListener('pointermove', handlePointerMove);
            shell.addEventListener('pointerleave', handlePointerLeave);
            const handleClick = {
                "ProfileCardComponent.useEffect.handleClick": ()=>{
                    if (!enableMobileTilt || location.protocol !== 'https:') return;
                    const anyMotion = window.DeviceMotionEvent;
                    if (anyMotion && typeof anyMotion.requestPermission === 'function') {
                        anyMotion.requestPermission().then({
                            "ProfileCardComponent.useEffect.handleClick": (state)=>{
                                if (state === 'granted') window.addEventListener('deviceorientation', handleDeviceOrientation);
                            }
                        }["ProfileCardComponent.useEffect.handleClick"]).catch(console.error);
                    } else {
                        window.addEventListener('deviceorientation', handleDeviceOrientation);
                    }
                }
            }["ProfileCardComponent.useEffect.handleClick"];
            shell.addEventListener('click', handleClick);
            const initialX = (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
            const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
            tiltEngine.setImmediate(initialX, initialY);
            tiltEngine.toCenter();
            tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);
            return ({
                "ProfileCardComponent.useEffect": ()=>{
                    shell.removeEventListener('pointerenter', handlePointerEnter);
                    shell.removeEventListener('pointermove', handlePointerMove);
                    shell.removeEventListener('pointerleave', handlePointerLeave);
                    shell.removeEventListener('click', handleClick);
                    window.removeEventListener('deviceorientation', handleDeviceOrientation);
                    if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
                    if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
                    tiltEngine.cancel();
                    shell.classList.remove('entering');
                }
            })["ProfileCardComponent.useEffect"];
        }
    }["ProfileCardComponent.useEffect"], [
        enableTilt,
        enableMobileTilt,
        tiltEngine,
        handlePointerMove,
        handlePointerEnter,
        handlePointerLeave,
        handleDeviceOrientation
    ]);
    const cardRadius = '30px';
    const cardStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProfileCardComponent.useMemo[cardStyle]": ()=>({
                '--icon': iconUrl ? `url(${iconUrl})` : 'none',
                '--grain': grainUrl ? `url(${grainUrl})` : 'none',
                '--inner-gradient': innerGradient ?? DEFAULT_INNER_GRADIENT,
                '--behind-glow-color': behindGlowColor ?? 'rgba(125, 190, 255, 0.67)',
                '--behind-glow-size': behindGlowSize ?? '50%',
                '--pointer-x': '50%',
                '--pointer-y': '50%',
                '--pointer-from-center': '0',
                '--pointer-from-top': '0.5',
                '--pointer-from-left': '0.5',
                '--card-opacity': '0',
                '--rotate-x': '0deg',
                '--rotate-y': '0deg',
                '--background-x': '50%',
                '--background-y': '50%',
                '--card-radius': cardRadius,
                '--sunpillar-1': 'hsl(2, 100%, 73%)',
                '--sunpillar-2': 'hsl(53, 100%, 69%)',
                '--sunpillar-3': 'hsl(93, 100%, 69%)',
                '--sunpillar-4': 'hsl(176, 100%, 76%)',
                '--sunpillar-5': 'hsl(228, 100%, 74%)',
                '--sunpillar-6': 'hsl(283, 100%, 73%)',
                '--sunpillar-clr-1': 'var(--sunpillar-1)',
                '--sunpillar-clr-2': 'var(--sunpillar-2)',
                '--sunpillar-clr-3': 'var(--sunpillar-3)',
                '--sunpillar-clr-4': 'var(--sunpillar-4)',
                '--sunpillar-clr-5': 'var(--sunpillar-5)',
                '--sunpillar-clr-6': 'var(--sunpillar-6)'
            })
    }["ProfileCardComponent.useMemo[cardStyle]"], [
        iconUrl,
        grainUrl,
        innerGradient,
        behindGlowColor,
        behindGlowSize
    ]);
    const shineStyle = {
        maskImage: 'var(--icon)',
        maskMode: 'luminance',
        maskRepeat: 'repeat',
        maskSize: '150%',
        maskPosition: 'top calc(200% - (var(--background-y) * 5)) left calc(100% - var(--background-x))',
        filter: 'brightness(0.66) contrast(1.33) saturate(0.33) opacity(0.5)',
        animation: 'pc-holo-bg 18s linear infinite',
        mixBlendMode: 'color-dodge',
        transform: 'translate3d(0, 0, 1px)',
        overflow: 'hidden',
        zIndex: 3,
        background: 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `
      repeating-linear-gradient(0deg,
        var(--sunpillar-clr-1) calc(5% * 1),
        var(--sunpillar-clr-2) calc(5% * 2),
        var(--sunpillar-clr-3) calc(5% * 3),
        var(--sunpillar-clr-4) calc(5% * 4),
        var(--sunpillar-clr-5) calc(5% * 5),
        var(--sunpillar-clr-6) calc(5% * 6),
        var(--sunpillar-clr-1) calc(5% * 7)
      ),
      repeating-linear-gradient(-45deg,
        #0e152e 0%, hsl(180,10%,60%) 3.8%, hsl(180,29%,66%) 4.5%,
        hsl(180,10%,60%) 5.2%, #0e152e 10%, #0e152e 12%
      ),
      radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y),
        hsla(0,0%,0%,0.1) 12%, hsla(0,0%,0%,0.15) 20%, hsla(0,0%,0%,0.25) 120%
      )
    `.replace(/\s+/g, ' '),
        gridArea: '1 / -1',
        borderRadius: cardRadius,
        pointerEvents: 'none'
    };
    const glareStyle = {
        transform: 'translate3d(0, 0, 1.1px)',
        overflow: 'hidden',
        backgroundImage: `radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y),
      hsl(248,25%,80%) 12%, hsla(207,40%,30%,0.8) 90%)`,
        mixBlendMode: 'overlay',
        filter: 'brightness(0.8) contrast(1.2)',
        zIndex: 4,
        gridArea: '1 / -1',
        borderRadius: cardRadius,
        pointerEvents: 'none'
    };
    const handleContactClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfileCardComponent.useCallback[handleContactClick]": ()=>{
            onContactClick?.();
        }
    }["ProfileCardComponent.useCallback[handleContactClick]"], [
        onContactClick
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapRef,
        className: `relative touch-none ${className}`.trim(),
        style: {
            perspective: '500px',
            transform: 'translate3d(0,0,0.1px)',
            ...cardStyle
        },
        children: [
            behindGlowEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 pointer-events-none transition-opacity duration-200 ease-out",
                style: {
                    background: `radial-gradient(circle at var(--pointer-x) var(--pointer-y), var(--behind-glow-color) 0%, transparent var(--behind-glow-size))`,
                    filter: 'blur(50px) saturate(1.1)',
                    opacity: 'calc(0.8 * var(--card-opacity))'
                }
            }, void 0, false, {
                fileName: "[project]/data_project/porto/components/profile-card.tsx",
                lineNumber: 362,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: shellRef,
                className: "relative z-[1] group",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "grid relative overflow-hidden w-full",
                    style: {
                        height: '420px',
                        maxHeight: '420px',
                        borderRadius: cardRadius,
                        boxShadow: 'rgba(0,0,0,0.8) calc((var(--pointer-from-left)*10px) - 3px) calc((var(--pointer-from-top)*20px) - 6px) 20px -5px',
                        transition: 'transform 1s ease',
                        transform: 'translateZ(0) rotateX(0deg) rotateY(0deg)',
                        background: 'rgba(0,0,0,0.9)'
                    },
                    onMouseEnter: (e)=>{
                        e.currentTarget.style.transition = 'none';
                        e.currentTarget.style.transform = 'translateZ(0) rotateX(var(--rotate-y)) rotateY(var(--rotate-x))';
                    },
                    onMouseLeave: (e)=>{
                        const shell = shellRef.current;
                        e.currentTarget.style.transition = shell?.classList.contains('entering') ? 'transform 180ms ease-out' : 'transform 1s ease';
                        e.currentTarget.style.transform = 'translateZ(0) rotateX(0deg) rotateY(0deg)';
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: 'var(--inner-gradient)',
                            backgroundColor: 'rgba(0,0,0,0.9)',
                            borderRadius: cardRadius,
                            display: 'grid',
                            gridArea: '1 / -1'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: shineStyle
                            }, void 0, false, {
                                fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                lineNumber: 406,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: glareStyle
                            }, void 0, false, {
                                fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                lineNumber: 408,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    mixBlendMode: 'luminosity',
                                    transform: 'translateZ(2px)',
                                    gridArea: '1 / -1',
                                    borderRadius: cardRadius,
                                    overflow: 'visible',
                                    pointerEvents: 'none'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "w-full absolute left-1/2 bottom-[-1px] will-change-transform transition-transform duration-[120ms] ease-out",
                                        src: avatarUrl,
                                        alt: `${name} avatar`,
                                        loading: "lazy",
                                        style: {
                                            transformOrigin: '50% 100%',
                                            transform: 'translateX(calc(-50% + (var(--pointer-from-left) - 0.5) * 6px)) translateZ(0) scaleY(calc(1 + (var(--pointer-from-top) - 0.5) * 0.02)) scaleX(calc(1 + (var(--pointer-from-left) - 0.5) * 0.01))',
                                            borderRadius: cardRadius
                                        },
                                        onError: (e)=>{
                                            e.target.style.display = 'none';
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                        lineNumber: 422,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    showUserInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute z-[2] flex items-center justify-between backdrop-blur-[30px] border border-white/10 pointer-events-auto",
                                        style: {
                                            bottom: '20px',
                                            left: '20px',
                                            right: '20px',
                                            background: 'rgba(255,255,255,0.1)',
                                            borderRadius: 'calc(max(0px, 30px - 20px + 6px))',
                                            padding: '12px 14px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            className: "w-full h-full object-cover rounded-full",
                                                            src: miniAvatarUrl || avatarUrl,
                                                            alt: `${name} mini`,
                                                            loading: "lazy",
                                                            onError: (e)=>{
                                                                e.target.style.opacity = '0.5';
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-medium text-white/90 leading-none",
                                                                children: [
                                                                    "@",
                                                                    handle
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                                                lineNumber: 457,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-white/70 leading-none",
                                                                children: status
                                                            }, void 0, false, {
                                                                fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                                                lineNumber: 458,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                                lineNumber: 445,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleContactClick,
                                                className: "border border-white/10 rounded-lg px-4 py-3 text-xs font-semibold text-white/90 cursor-pointer backdrop-blur-[10px] transition-all duration-200 hover:border-white/40 hover:-translate-y-px",
                                                children: contactText
                                            }, void 0, false, {
                                                fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                                lineNumber: 461,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                        lineNumber: 436,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                lineNumber: 411,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-full overflow-hidden text-center relative z-[5] pointer-events-none",
                                style: {
                                    transform: 'translate3d(calc(var(--pointer-from-left)*-6px + 3px), calc(var(--pointer-from-top)*-6px + 3px), 0.1px)',
                                    mixBlendMode: 'luminosity',
                                    gridArea: '1 / -1',
                                    borderRadius: cardRadius
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full absolute flex flex-col",
                                    style: {
                                        top: '3em'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold m-0",
                                            style: {
                                                fontSize: 'min(5svh, 3em)',
                                                backgroundImage: 'linear-gradient(to bottom, #fff, #6f6fbe)',
                                                backgroundSize: '1em 1.5em',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                                WebkitBackgroundClip: 'text'
                                            },
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                            lineNumber: 483,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold whitespace-nowrap mx-auto w-min",
                                            style: {
                                                position: 'relative',
                                                top: '-12px',
                                                fontSize: '16px',
                                                backgroundImage: 'linear-gradient(to bottom, #fff, #4a4ac0)',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                                WebkitBackgroundClip: 'text'
                                            },
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                            lineNumber: 496,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                    lineNumber: 482,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/data_project/porto/components/profile-card.tsx",
                                lineNumber: 473,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/data_project/porto/components/profile-card.tsx",
                        lineNumber: 395,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/data_project/porto/components/profile-card.tsx",
                    lineNumber: 372,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/data_project/porto/components/profile-card.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/data_project/porto/components/profile-card.tsx",
        lineNumber: 356,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProfileCardComponent, "CA8nMWysiGgeHzpX5UwtJAAqzug=");
_c = ProfileCardComponent;
const ProfileCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(ProfileCardComponent);
_c1 = ProfileCard;
const __TURBOPACK__default__export__ = ProfileCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProfileCardComponent");
__turbopack_context__.k.register(_c1, "ProfileCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data_project/porto/components/sections/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$components$2f$intro$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/components/intro-animation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$components$2f$profile$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/components/profile-card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const TITLES = [
    'Data Analyst',
    'Business Intelligence',
    'SAP ERP Specialist',
    'Process Optimizer'
];
const stats = [
    {
        value: '2+',
        label: 'Tahun Pengalaman'
    },
    {
        value: '4+',
        label: 'Sertifikasi'
    },
    {
        value: '3+',
        label: 'Project Selesai'
    }
];
const tools = [
    'Power BI',
    'SQL',
    'Python',
    'SAP ERP',
    'Excel',
    'ISO 9001'
];
function Hero() {
    _s();
    const [titleIndex, setTitleIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [displayed, setDisplayed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showIntro, setShowIntro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [heroVisible, setHeroVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleIntroDone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Hero.useCallback[handleIntroDone]": ()=>{
            setShowIntro(false);
            // slight delay before hero fades in
            setTimeout({
                "Hero.useCallback[handleIntroDone]": ()=>setHeroVisible(true)
            }["Hero.useCallback[handleIntroDone]"], 80);
        }
    }["Hero.useCallback[handleIntroDone]"], []);
    // Typewriter
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (!heroVisible) return;
            const current = TITLES[titleIndex];
            let timeout;
            if (!isDeleting && displayed.length < current.length) {
                timeout = setTimeout({
                    "Hero.useEffect": ()=>setDisplayed(current.slice(0, displayed.length + 1))
                }["Hero.useEffect"], 80);
            } else if (!isDeleting && displayed.length === current.length) {
                timeout = setTimeout({
                    "Hero.useEffect": ()=>setIsDeleting(true)
                }["Hero.useEffect"], 2000);
            } else if (isDeleting && displayed.length > 0) {
                timeout = setTimeout({
                    "Hero.useEffect": ()=>setDisplayed(current.slice(0, displayed.length - 1))
                }["Hero.useEffect"], 45);
            } else {
                setIsDeleting(false);
                setTitleIndex({
                    "Hero.useEffect": (i)=>(i + 1) % TITLES.length
                }["Hero.useEffect"]);
            }
            return ({
                "Hero.useEffect": ()=>clearTimeout(timeout)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        displayed,
        isDeleting,
        titleIndex,
        heroVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showIntro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$components$2f$intro$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntroAnimation"], {
                onDone: handleIntroDone
            }, void 0, false, {
                fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                lineNumber: 56,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "hero",
                className: "relative min-h-screen flex items-center px-6 pt-24 pb-16",
                style: {
                    transition: 'opacity 700ms ease, transform 700ms cubic-bezier(0.16,1,0.3,1)',
                    opacity: heroVisible ? 1 : 0,
                    transform: heroVisible ? 'translateY(0)' : 'translateY(16px)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl w-full grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4",
                                    children: "👋 Halo, saya"
                                }, void 0, false, {
                                    fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl sm:text-6xl font-black tracking-tight text-foreground leading-tight",
                                    children: [
                                        "Alief Hafid",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: "Sidiq"
                                        }, void 0, false, {
                                            fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 h-10 flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold text-muted-foreground",
                                        children: [
                                            displayed,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "animate-pulse text-primary",
                                                children: "|"
                                            }, void 0, false, {
                                                fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
                                    children: "Lulusan Manajemen Bisnis dengan ketertarikan kuat pada analisis data, visualisasi, dan optimasi proses bisnis. Terbiasa dengan SAP ERP, rekonsiliasi inventori, dan standar mutu produksi."
                                }, void 0, false, {
                                    fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex flex-wrap gap-2",
                                    children: tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-border bg-background/60 backdrop-blur px-3 py-1 text-xs font-semibold text-foreground",
                                            children: tool
                                        }, tool, false, {
                                            fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex flex-wrap gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#projects",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                document.getElementById('projects')?.scrollIntoView({
                                                    behavior: 'smooth'
                                                });
                                            },
                                            className: "inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90",
                                            children: "Lihat Projects →"
                                        }, void 0, false, {
                                            fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#contact",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                document.getElementById('contact')?.scrollIntoView({
                                                    behavior: 'smooth'
                                                });
                                            },
                                            className: "inline-flex rounded-xl border border-border bg-background/60 backdrop-blur px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent",
                                            children: "Hubungi Saya"
                                        }, void 0, false, {
                                            fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-12 flex gap-8",
                                    children: stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-black text-primary",
                                                    children: s.value
                                                }, void 0, false, {
                                                    fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mt-1",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, s.label, true, {
                                            fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center lg:justify-end items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[280px] lg:w-[300px] shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$components$2f$profile$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    name: "Alief Hafid Sidiq",
                                    title: "Data Analyst",
                                    handle: "alifhfd",
                                    status: "Open to Work ✦",
                                    contactText: "Hubungi",
                                    avatarUrl: "/images/profil.png",
                                    miniAvatarUrl: "/images/profil.png",
                                    showUserInfo: true,
                                    enableTilt: true,
                                    enableMobileTilt: false,
                                    behindGlowEnabled: true,
                                    behindGlowColor: "rgba(96, 165, 250, 0.5)",
                                    innerGradient: "linear-gradient(145deg, #1e1b4b8c 0%, #0e7490aa 60%, #06b6d444 100%)",
                                    className: "!w-full",
                                    onContactClick: ()=>{
                                        document.getElementById('contact')?.scrollIntoView({
                                            behavior: 'smooth'
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/data_project/porto/components/sections/hero.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Hero, "o7rhHB+BQ9ZsUzCFbOCZdg845P4=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data_project/porto/components/border-glow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function parseHSL(hslStr) {
    const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
    if (!match) return {
        h: 40,
        s: 80,
        l: 80
    };
    return {
        h: Number.parseFloat(match[1]),
        s: Number.parseFloat(match[2]),
        l: Number.parseFloat(match[3])
    };
}
function buildBoxShadow(glowColor, intensity) {
    const { h, s, l } = parseHSL(glowColor);
    const base = `${h}deg ${s}% ${l}%`;
    const layers = [
        [
            0,
            0,
            0,
            1,
            100,
            true
        ],
        [
            0,
            0,
            1,
            0,
            60,
            true
        ],
        [
            0,
            0,
            3,
            0,
            50,
            true
        ],
        [
            0,
            0,
            6,
            0,
            40,
            true
        ],
        [
            0,
            0,
            15,
            0,
            30,
            true
        ],
        [
            0,
            0,
            25,
            2,
            20,
            true
        ],
        [
            0,
            0,
            50,
            2,
            10,
            true
        ],
        [
            0,
            0,
            1,
            0,
            60,
            false
        ],
        [
            0,
            0,
            3,
            0,
            50,
            false
        ],
        [
            0,
            0,
            6,
            0,
            40,
            false
        ],
        [
            0,
            0,
            15,
            0,
            30,
            false
        ],
        [
            0,
            0,
            25,
            2,
            20,
            false
        ],
        [
            0,
            0,
            50,
            2,
            10,
            false
        ]
    ];
    return layers.map(([x, y, blur, spread, alpha, inset])=>{
        const a = Math.min(alpha * intensity, 100);
        return `${inset ? "inset " : ""}${x}px ${y}px ${blur}px ${spread}px hsl(${base} / ${a}%)`;
    }).join(", ");
}
function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}
function easeInCubic(x) {
    return x * x * x;
}
function animateValue({ start = 0, end = 100, duration = 1000, delay = 0, ease = easeOutCubic, onUpdate, onEnd }) {
    const t0 = performance.now() + delay;
    function tick() {
        const elapsed = performance.now() - t0;
        const t = Math.min(elapsed / duration, 1);
        onUpdate(start + (end - start) * ease(t));
        if (t < 1) requestAnimationFrame(tick);
        else if (onEnd) onEnd();
    }
    setTimeout(()=>requestAnimationFrame(tick), delay);
}
const GRADIENT_POSITIONS = [
    "80% 55%",
    "69% 34%",
    "8% 6%",
    "41% 38%",
    "86% 85%",
    "82% 18%",
    "51% 4%"
];
const COLOR_MAP = [
    0,
    1,
    2,
    0,
    1,
    2,
    1
];
function buildMeshGradients(colors) {
    const gradients = [];
    for(let i = 0; i < 7; i++){
        const c = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
        gradients.push(`radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${c} 0px, transparent 50%)`);
    }
    gradients.push(`linear-gradient(${colors[0]} 0 100%)`);
    return gradients;
}
const BorderGlow = ({ children, className = "", edgeSensitivity = 30, glowColor = "40 80 80", backgroundColor = "transparent", borderRadius = 28, glowRadius = 40, glowIntensity = 1.0, coneSpread = 25, animated = false, colors = [
    "#c084fc",
    "#f472b6",
    "#38bdf8"
], fillOpacity = 0 })=>{
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cursorAngle, setCursorAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(45);
    const [edgeProximity, setEdgeProximity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [sweepActive, setSweepActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getCenterOfElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BorderGlow.useCallback[getCenterOfElement]": (el)=>{
            const { width, height } = el.getBoundingClientRect();
            return [
                width / 2,
                height / 2
            ];
        }
    }["BorderGlow.useCallback[getCenterOfElement]"], []);
    const getEdgeProximity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BorderGlow.useCallback[getEdgeProximity]": (el, x, y)=>{
            const [cx, cy] = getCenterOfElement(el);
            const dx = x - cx;
            const dy = y - cy;
            let kx = Number.POSITIVE_INFINITY;
            let ky = Number.POSITIVE_INFINITY;
            if (dx !== 0) kx = cx / Math.abs(dx);
            if (dy !== 0) ky = cy / Math.abs(dy);
            return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
        }
    }["BorderGlow.useCallback[getEdgeProximity]"], [
        getCenterOfElement
    ]);
    const getCursorAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BorderGlow.useCallback[getCursorAngle]": (el, x, y)=>{
            const [cx, cy] = getCenterOfElement(el);
            const dx = x - cx;
            const dy = y - cy;
            if (dx === 0 && dy === 0) return 0;
            const radians = Math.atan2(dy, dx);
            let degrees = radians * (180 / Math.PI) + 90;
            if (degrees < 0) degrees += 360;
            return degrees;
        }
    }["BorderGlow.useCallback[getCursorAngle]"], [
        getCenterOfElement
    ]);
    const handlePointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BorderGlow.useCallback[handlePointerMove]": (e)=>{
            const card = cardRef.current;
            if (!card) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setEdgeProximity(getEdgeProximity(card, x, y));
            setCursorAngle(getCursorAngle(card, x, y));
        }
    }["BorderGlow.useCallback[handlePointerMove]"], [
        getEdgeProximity,
        getCursorAngle
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BorderGlow.useEffect": ()=>{
            if (!animated) return;
            const angleStart = 110;
            const angleEnd = 465;
            setSweepActive(true);
            setCursorAngle(angleStart);
            animateValue({
                duration: 500,
                onUpdate: {
                    "BorderGlow.useEffect": (v)=>setEdgeProximity(v / 100)
                }["BorderGlow.useEffect"]
            });
            animateValue({
                ease: easeInCubic,
                duration: 1500,
                end: 50,
                onUpdate: {
                    "BorderGlow.useEffect": (v)=>{
                        setCursorAngle((angleEnd - angleStart) * (v / 100) + angleStart);
                    }
                }["BorderGlow.useEffect"]
            });
            animateValue({
                ease: easeOutCubic,
                delay: 1500,
                duration: 2250,
                start: 50,
                end: 100,
                onUpdate: {
                    "BorderGlow.useEffect": (v)=>{
                        setCursorAngle((angleEnd - angleStart) * (v / 100) + angleStart);
                    }
                }["BorderGlow.useEffect"]
            });
            animateValue({
                ease: easeInCubic,
                delay: 2500,
                duration: 1500,
                start: 100,
                end: 0,
                onUpdate: {
                    "BorderGlow.useEffect": (v)=>setEdgeProximity(v / 100)
                }["BorderGlow.useEffect"],
                onEnd: {
                    "BorderGlow.useEffect": ()=>setSweepActive(false)
                }["BorderGlow.useEffect"]
            });
        }
    }["BorderGlow.useEffect"], [
        animated
    ]);
    const colorSensitivity = edgeSensitivity + 20;
    const isVisible = isHovered || sweepActive;
    const borderOpacity = isVisible ? Math.max(0, (edgeProximity * 100 - colorSensitivity) / (100 - colorSensitivity)) : 0;
    const glowOpacity = isVisible ? Math.max(0, (edgeProximity * 100 - edgeSensitivity) / (100 - edgeSensitivity)) : 0;
    const meshGradients = buildMeshGradients(colors);
    const borderBg = meshGradients.map((g)=>`${g} border-box`);
    const fillBg = meshGradients.map((g)=>`${g} padding-box`);
    const angleDeg = `${cursorAngle.toFixed(3)}deg`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        onPointerMove: handlePointerMove,
        onPointerEnter: ()=>setIsHovered(true),
        onPointerLeave: ()=>setIsHovered(false),
        className: `relative flex flex-col isolate border border-white/15 ${className}`,
        style: {
            background: backgroundColor,
            borderRadius: `${borderRadius}px`,
            transform: "translate3d(0, 0, 0.01px)",
            boxShadow: "rgba(0,0,0,0.1) 0 1px 2px, rgba(0,0,0,0.1) 0 2px 4px, rgba(0,0,0,0.1) 0 4px 8px, rgba(0,0,0,0.1) 0 8px 16px, rgba(0,0,0,0.1) 0 16px 32px, rgba(0,0,0,0.1) 0 32px 64px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-[inherit] -z-[1]",
                style: {
                    border: "1px solid transparent",
                    background: [
                        `linear-gradient(${backgroundColor} 0 100%) padding-box`,
                        "linear-gradient(rgb(255 255 255 / 0%) 0% 100%) border-box",
                        ...borderBg
                    ].join(", "),
                    opacity: borderOpacity,
                    maskImage: `conic-gradient(from ${angleDeg} at center, black ${coneSpread}%, transparent ${coneSpread + 15}%, transparent ${100 - coneSpread - 15}%, black ${100 - coneSpread}%)`,
                    WebkitMaskImage: `conic-gradient(from ${angleDeg} at center, black ${coneSpread}%, transparent ${coneSpread + 15}%, transparent ${100 - coneSpread - 15}%, black ${100 - coneSpread}%)`,
                    transition: isVisible ? "opacity 0.25s ease-out" : "opacity 0.75s ease-in-out"
                }
            }, void 0, false, {
                fileName: "[project]/data_project/porto/components/border-glow.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-[inherit] -z-[1]",
                style: {
                    border: "1px solid transparent",
                    background: fillBg.join(", "),
                    maskImage: [
                        "linear-gradient(to bottom, black, black)",
                        "radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%)",
                        "radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%)",
                        "radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%)",
                        "radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%)",
                        "radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%)",
                        `conic-gradient(from ${angleDeg} at center, transparent 5%, black 15%, black 85%, transparent 95%)`
                    ].join(", "),
                    WebkitMaskImage: [
                        "linear-gradient(to bottom, black, black)",
                        "radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%)",
                        "radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%)",
                        "radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%)",
                        "radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%)",
                        "radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%)",
                        `conic-gradient(from ${angleDeg} at center, transparent 5%, black 15%, black 85%, transparent 95%)`
                    ].join(", "),
                    maskComposite: "subtract, add, add, add, add, add",
                    WebkitMaskComposite: "source-out, source-over, source-over, source-over, source-over, source-over",
                    opacity: borderOpacity * fillOpacity,
                    mixBlendMode: "soft-light",
                    transition: isVisible ? "opacity 0.25s ease-out" : "opacity 0.75s ease-in-out"
                }
            }, void 0, false, {
                fileName: "[project]/data_project/porto/components/border-glow.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute pointer-events-none z-[1] rounded-[inherit]",
                style: {
                    inset: `${-glowRadius}px`,
                    maskImage: `conic-gradient(from ${angleDeg} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
                    WebkitMaskImage: `conic-gradient(from ${angleDeg} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
                    opacity: glowOpacity,
                    mixBlendMode: "plus-lighter",
                    transition: isVisible ? "opacity 0.25s ease-out" : "opacity 0.75s ease-in-out"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute rounded-[inherit]",
                    style: {
                        inset: `${glowRadius}px`,
                        boxShadow: buildBoxShadow(glowColor, glowIntensity)
                    }
                }, void 0, false, {
                    fileName: "[project]/data_project/porto/components/border-glow.tsx",
                    lineNumber: 290,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/data_project/porto/components/border-glow.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col relative overflow-visible z-[1]",
                children: children
            }, void 0, false, {
                fileName: "[project]/data_project/porto/components/border-glow.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/data_project/porto/components/border-glow.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BorderGlow, "ahtr810bg+/7fFW9PulbD3zw7QE=");
_c = BorderGlow;
const __TURBOPACK__default__export__ = BorderGlow;
var _c;
__turbopack_context__.k.register(_c, "BorderGlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data_project/porto/components/glow-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlowCard",
    ()=>GlowCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$components$2f$border$2d$glow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/components/border-glow.tsx [app-client] (ecmascript)");
"use client";
;
;
function GlowCard({ children, className = "", borderRadius = 24, animated = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$components$2f$border$2d$glow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        animated: animated,
        backgroundColor: "var(--card) / 0.7",
        borderRadius: borderRadius,
        coneSpread: 98,
        edgeSensitivity: 77,
        fillOpacity: 0.16,
        glowColor: "38 75 78",
        glowIntensity: 2,
        glowRadius: 57,
        colors: [
            "#c084fc",
            "#f472b6",
            "#38bdf8"
        ],
        className: `text-card-foreground ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/data_project/porto/components/glow-card.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = GlowCard;
var _c;
__turbopack_context__.k.register(_c, "GlowCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data_project/porto/components/sections/projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Projects",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$components$2f$glow$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/components/glow-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const projects = [
    {
        title: 'Power BI Performance Dashboard',
        description: 'Dashboard interaktif untuk memantau KPI produksi, efisiensi mesin, dan tren downtime secara real-time. Menggabungkan data dari SAP ERP dan spreadsheet operasional.',
        tags: [
            'Power BI',
            'DAX',
            'Data Modeling'
        ],
        image: '/images/project-sales.png'
    },
    {
        title: 'SAP ERP Inventory Monitoring',
        description: 'Sistem pemantauan stok bahan baku berbasis SAP ERP dengan rekonsiliasi harian untuk menjaga akurasi inventori dan meminimalisir selisih stok fisik vs sistem.',
        tags: [
            'SAP ERP',
            'Inventory',
            'Reconciliation'
        ],
        image: '/images/project-funnel.png'
    },
    {
        title: 'Customer Churn Analysis',
        description: 'Analisis pola churn pelanggan menggunakan Python dan SQL untuk mengidentifikasi faktor risiko dan memberikan rekomendasi retensi berbasis data.',
        tags: [
            'Python',
            'SQL',
            'Analytics'
        ],
        image: '/images/project-churn.png'
    },
    {
        title: 'Customer Segmentation',
        description: 'Segmentasi pelanggan menggunakan metode clustering untuk membantu tim bisnis memahami profil pelanggan dan menyusun strategi yang lebih tepat sasaran.',
        tags: [
            'Python',
            'Clustering',
            'Power BI'
        ],
        image: '/images/project-segment.png'
    }
];
// Card width = (max-w-5xl - 2 * padding - 2 * gap) / 3
// max-w-5xl = 64rem = 1024px, px-6 = 24px each side, gap-5 = 20px * 2 gaps
// (1024 - 48 - 40) / 3 ≈ 312px
const CARD_W = 'w-[300px] lg:w-[calc((64rem-3rem-2.5rem)/3)]';
function Projects() {
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scroll = (dir)=>{
        const el = scrollRef.current;
        if (!el) return;
        const cardWidth = el.querySelector('div')?.clientWidth ?? 300;
        el.scrollBy({
            left: dir === 'right' ? cardWidth + 20 : -(cardWidth + 20),
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "relative py-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-5xl px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
                        children: "Projects"
                    }, void 0, false, {
                        fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-end justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-black tracking-tight",
                                        children: "Studi Kasus & Project"
                                    }, void 0, false, {
                                        fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 max-w-2xl text-muted-foreground",
                                        children: "Kumpulan project analisis data dan business intelligence yang pernah dikerjakan."
                                    }, void 0, false, {
                                        fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:flex items-center gap-2 shrink-0 pb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scroll('left'),
                                        className: "p-2 rounded-full border border-border bg-background/80 hover:bg-accent transition-colors",
                                        "aria-label": "Scroll kiri",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scroll('right'),
                                        className: "p-2 rounded-full border border-border bg-background/80 hover:bg-accent transition-colors",
                                        "aria-label": "Scroll kanan",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "mt-10 flex gap-5 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pl-6 lg:pl-[max(1.5rem,calc((100vw-64rem)/2+1.5rem))] pr-6",
                children: [
                    projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `snap-start shrink-0 ${CARD_W} min-w-[260px]`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$components$2f$glow$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlowCard"], {
                                className: "h-full overflow-hidden flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-44 w-full shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: project.image,
                                            alt: project.title,
                                            fill: true,
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 flex flex-col flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-lg leading-snug",
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm leading-relaxed text-muted-foreground flex-1",
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex flex-wrap gap-2",
                                                children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full border border-border bg-background/60 px-3 py-0.5 text-xs font-semibold text-primary",
                                                        children: tag
                                                    }, tag, false, {
                                                        fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        }, project.title, false, {
                            fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0 w-6"
                    }, void 0, false, {
                        fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/data_project/porto/components/sections/projects.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/data_project/porto/components/sections/projects.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(Projects, "rUl6RJdP9XfufN21BrtKqIOri0o=");
_c = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data_project/porto/components/sections/certifications.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Certifications",
    ()=>Certifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$components$2f$glow$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/components/glow-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const certifications = [
    {
        name: 'ISO 9001:2015 Quality Management',
        issuer: 'BSI / Internal Training',
        year: '2024',
        desc: 'Sistem manajemen mutu untuk memastikan konsistensi kualitas produk dan proses.'
    },
    {
        name: 'Data Analytics Foundations',
        issuer: 'Online Platform',
        year: '2024',
        desc: 'Dasar-dasar analisis data, statistik deskriptif, dan visualisasi data.'
    },
    {
        name: 'Accelerate Job with AI',
        issuer: 'Online Platform',
        year: '2024',
        desc: 'Penerapan AI tools untuk meningkatkan produktivitas dan kualitas kerja.'
    },
    {
        name: 'Siswa Magang Terbaik',
        issuer: 'SMK Bina Vokasi Nusantara',
        year: '2021',
        desc: 'Penghargaan sebagai siswa magang terbaik di bidang Mechanical Engineering.'
    }
];
const CARD_W = 'w-[300px] lg:w-[calc((64rem-3rem-2.5rem)/3)]';
function Certifications() {
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scroll = (dir)=>{
        const el = scrollRef.current;
        if (!el) return;
        const cardWidth = el.querySelector('div')?.clientWidth ?? 300;
        el.scrollBy({
            left: dir === 'right' ? cardWidth + 20 : -(cardWidth + 20),
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "certifications",
        className: "relative py-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-5xl px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
                        children: "Certifications"
                    }, void 0, false, {
                        fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-end justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-black tracking-tight",
                                        children: "Sertifikasi"
                                    }, void 0, false, {
                                        fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 max-w-2xl text-muted-foreground",
                                        children: "Sertifikasi dan penghargaan yang mendukung kompetensi analitik dan operasional."
                                    }, void 0, false, {
                                        fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:flex items-center gap-2 shrink-0 pb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scroll('left'),
                                        className: "p-2 rounded-full border border-border bg-background/80 hover:bg-accent transition-colors",
                                        "aria-label": "Scroll kiri",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scroll('right'),
                                        className: "p-2 rounded-full border border-border bg-background/80 hover:bg-accent transition-colors",
                                        "aria-label": "Scroll kanan",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "mt-10 flex gap-5 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pl-6 lg:pl-[max(1.5rem,calc((100vw-64rem)/2+1.5rem))] pr-6",
                children: [
                    certifications.map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `snap-start shrink-0 ${CARD_W} min-w-[260px]`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$components$2f$glow$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlowCard"], {
                                className: "h-full p-6 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl font-black text-primary/20 leading-none",
                                        children: cert.year
                                    }, void 0, false, {
                                        fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-4 font-bold text-lg leading-snug",
                                        children: cert.name
                                    }, void 0, false, {
                                        fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs font-semibold text-primary",
                                        children: cert.issuer
                                    }, void 0, false, {
                                        fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm text-muted-foreground flex-1",
                                        children: cert.desc
                                    }, void 0, false, {
                                        fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, cert.name, false, {
                            fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0 w-6"
                    }, void 0, false, {
                        fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/data_project/porto/components/sections/certifications.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(Certifications, "rUl6RJdP9XfufN21BrtKqIOri0o=");
_c = Certifications;
var _c;
__turbopack_context__.k.register(_c, "Certifications");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=data_project_porto_components_0-9qp5j._.js.map
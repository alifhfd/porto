(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data_project/porto/components/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function ThemeProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        attribute: "class",
        defaultTheme: "dark",
        enableSystem: true,
        disableTransitionOnChange: true,
        children: children
    }, void 0, false, {
        fileName: "[project]/data_project/porto/components/theme-provider.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
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
"[project]/data_project/porto/components/sections/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$components$2f$intro$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data_project/porto/components/intro-animation.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/profile-card'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
                            className: "flex justify-center lg:justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$data_project$2f$porto$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileCard, {
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
                                onContactClick: ()=>{
                                    document.getElementById('contact')?.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                }
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
]);

//# sourceMappingURL=data_project_porto_components_0e629nd._.js.map
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Antigravity.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie_review_system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@react-three/fiber'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie_review_system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'three'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
;
;
;
// Helper function to generate initial particles - outside component to avoid Strict Mode warnings
function createParticles(count, width, height) {
    const temp = [];
    for(let i = 0; i < count; i++){
        const t = Math.random() * 100;
        const factor = 20 + Math.random() * 100;
        const speed = 0.01 + Math.random() / 200;
        const xFactor = -50 + Math.random() * 100;
        const yFactor = -50 + Math.random() * 100;
        const zFactor = -50 + Math.random() * 100;
        const x = (Math.random() - 0.5) * width;
        const y = (Math.random() - 0.5) * height;
        const z = (Math.random() - 0.5) * 20;
        const randomRadiusOffset = (Math.random() - 0.5) * 2;
        temp.push({
            t,
            factor,
            speed,
            xFactor,
            yFactor,
            zFactor,
            mx: x,
            my: y,
            mz: z,
            cx: x,
            cy: y,
            cz: z,
            vx: 0,
            vy: 0,
            vz: 0,
            randomRadiusOffset
        });
    }
    return temp;
}
const AntigravityInner = ({ count = 300, magnetRadius = 10, ringRadius = 10, waveSpeed = 0.4, waveAmplitude = 1, particleSize = 2, lerpSpeed = 0.1, color = '#FF9FFC', autoAnimate = false, particleVariance = 1, rotationSpeed = 0, depthFactor = 1, pulseSpeed = 3, particleShape = 'capsule', fieldStrength = 10 })=>{
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { viewport } = useThree();
    const dummy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AntigravityInner.useMemo[dummy]": ()=>new THREE.Object3D()
    }["AntigravityInner.useMemo[dummy]"], []);
    const lastMousePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const lastMouseMoveTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const virtualMouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AntigravityInner.useMemo[particles]": ()=>{
            const width = viewport.width || 100;
            const height = viewport.height || 100;
            return createParticles(count, width, height);
        }
    }["AntigravityInner.useMemo[particles]"], [
        count,
        viewport.width,
        viewport.height
    ]);
    useFrame({
        "AntigravityInner.useFrame": (state)=>{
            const mesh = meshRef.current;
            if (!mesh) return;
            const { viewport: v, pointer: m } = state;
            const mouseDist = Math.sqrt(Math.pow(m.x - lastMousePos.current.x, 2) + Math.pow(m.y - lastMousePos.current.y, 2));
            if (mouseDist > 0.001) {
                lastMouseMoveTime.current = Date.now();
                lastMousePos.current = {
                    x: m.x,
                    y: m.y
                };
            }
            let destX = m.x * v.width / 2;
            let destY = m.y * v.height / 2;
            if (autoAnimate && Date.now() - lastMouseMoveTime.current > 2000) {
                const time = state.clock.getElapsedTime();
                destX = Math.sin(time * 0.5) * (v.width / 4);
                destY = Math.cos(time * 0.5 * 2) * (v.height / 4);
            }
            const smoothFactor = 0.05;
            virtualMouse.current.x += (destX - virtualMouse.current.x) * smoothFactor;
            virtualMouse.current.y += (destY - virtualMouse.current.y) * smoothFactor;
            const targetX = virtualMouse.current.x;
            const targetY = virtualMouse.current.y;
            const globalRotation = state.clock.getElapsedTime() * rotationSpeed;
            particles.forEach({
                "AntigravityInner.useFrame": (particle, i)=>{
                    const { speed, mx, my, mz, randomRadiusOffset } = particle;
                    particle.t += speed / 2;
                    const projectionFactor = 1 - particle.cz / 50;
                    const projectedTargetX = targetX * projectionFactor;
                    const projectedTargetY = targetY * projectionFactor;
                    const dx = mx - projectedTargetX;
                    const dy = my - projectedTargetY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const targetPos = {
                        x: mx,
                        y: my,
                        z: mz * depthFactor
                    };
                    if (dist < magnetRadius) {
                        const angle = Math.atan2(dy, dx) + globalRotation;
                        const wave = Math.sin(particle.t * waveSpeed + angle) * (0.5 * waveAmplitude);
                        const deviation = randomRadiusOffset * (5 / (fieldStrength + 0.1));
                        const currentRingRadius = ringRadius + wave + deviation;
                        targetPos.x = projectedTargetX + currentRingRadius * Math.cos(angle);
                        targetPos.y = projectedTargetY + currentRingRadius * Math.sin(angle);
                        targetPos.z = mz * depthFactor + Math.sin(particle.t) * (1 * waveAmplitude * depthFactor);
                    }
                    particle.cx += (targetPos.x - particle.cx) * lerpSpeed;
                    particle.cy += (targetPos.y - particle.cy) * lerpSpeed;
                    particle.cz += (targetPos.z - particle.cz) * lerpSpeed;
                    dummy.position.set(particle.cx, particle.cy, particle.cz);
                    dummy.lookAt(projectedTargetX, projectedTargetY, particle.cz);
                    dummy.rotateX(Math.PI / 2);
                    const currentDistToMouse = Math.sqrt(Math.pow(particle.cx - projectedTargetX, 2) + Math.pow(particle.cy - projectedTargetY, 2));
                    const distFromRing = Math.abs(currentDistToMouse - ringRadius);
                    let scaleFactor = 1 - distFromRing / 10;
                    scaleFactor = Math.max(0, Math.min(1, scaleFactor));
                    const finalScale = scaleFactor * (0.8 + Math.sin(particle.t * pulseSpeed) * 0.2 * particleVariance) * particleSize;
                    dummy.scale.set(finalScale, finalScale, finalScale);
                    dummy.updateMatrix();
                    mesh.setMatrixAt(i, dummy.matrix);
                }
            }["AntigravityInner.useFrame"]);
            mesh.instanceMatrix.needsUpdate = true;
        }
    }["AntigravityInner.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
        ref: meshRef,
        args: [
            undefined,
            undefined,
            count
        ],
        children: [
            particleShape === 'capsule' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("capsuleGeometry", {
                args: [
                    0.1,
                    0.4,
                    4,
                    8
                ]
            }, void 0, false, {
                fileName: "[project]/app/components/Antigravity.tsx",
                lineNumber: 183,
                columnNumber: 39
            }, ("TURBOPACK compile-time value", void 0)),
            particleShape === 'sphere' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                args: [
                    0.2,
                    16,
                    16
                ]
            }, void 0, false, {
                fileName: "[project]/app/components/Antigravity.tsx",
                lineNumber: 184,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0)),
            particleShape === 'box' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                args: [
                    0.3,
                    0.3,
                    0.3
                ]
            }, void 0, false, {
                fileName: "[project]/app/components/Antigravity.tsx",
                lineNumber: 185,
                columnNumber: 35
            }, ("TURBOPACK compile-time value", void 0)),
            particleShape === 'tetrahedron' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tetrahedronGeometry", {
                args: [
                    0.3
                ]
            }, void 0, false, {
                fileName: "[project]/app/components/Antigravity.tsx",
                lineNumber: 186,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                color: color
            }, void 0, false, {
                fileName: "[project]/app/components/Antigravity.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Antigravity.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AntigravityInner, "EzH8tjMSJh4jTC2sAQj4KhfXMx0=", false, function() {
    return [
        useThree,
        useFrame
    ];
});
_c = AntigravityInner;
const Antigravity = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Canvas, {
        camera: {
            position: [
                0,
                0,
                50
            ],
            fov: 35
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AntigravityInner, {
            ...props
        }, void 0, false, {
            fileName: "[project]/app/components/Antigravity.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Antigravity.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = Antigravity;
const __TURBOPACK__default__export__ = Antigravity;
var _c, _c1;
__turbopack_context__.k.register(_c, "AntigravityInner");
__turbopack_context__.k.register(_c1, "Antigravity");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie_review_system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie_review_system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Antigravity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Antigravity.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Home() {
    _s();
    const [movieDetails, setMovieDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const fetchMovies = {
                "Home.useEffect.fetchMovies": async ()=>{
                    try {
                        const res = await fetch('/api/movies');
                        const data = await res.json();
                        setMovieDetails(data);
                    } catch (error) {
                        console.error('Error fetching movies:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["Home.useEffect.fetchMovies"];
            fetchMovies();
        }
    }["Home.useEffect"], []);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading movies..."
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 31,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    height: '400px',
                    position: 'relative',
                    marginBottom: '40px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Antigravity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    count: 250,
                    magnetRadius: 8,
                    ringRadius: 6,
                    waveSpeed: 0.3,
                    waveAmplitude: 1.2,
                    particleSize: 1.8,
                    lerpSpeed: 0.08,
                    color: '#FF9FFC',
                    autoAnimate: true,
                    particleVariance: 1,
                    rotationSpeed: 0.5
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Movie Reviews"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            movieDetails && movieDetails.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: movieDetails.map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: movie.movie_name
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: movie.review
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)
                        ]
                    }, movie.id, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie_review_system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No reviews available. Start by writing a review!"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "Kbp21DOrHUyT/L4VH9fNXO08REQ=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Bproject%5D_app_8c889e8f._.js.map
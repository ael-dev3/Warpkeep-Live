const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GLTFLoader-EZ5xqKp4.js","assets/three.module-DkXFtuId.js","assets/SkeletonUtils-CnBZT6G2.js","assets/chunk-Cyuzqnbw.js"])))=>i.map(i=>d[i]);
import{a as e}from"./chunk-Cyuzqnbw.js";import{a as t,o as n,x as r}from"./MiniAppHostProvider-BKGOfp0f.js";import{C as i,O as a,S as o,T as s,a as c,b as l,c as u,d,i as f,k as p,l as m,o as h,r as g,s as _,u as v,v as y,w as b,x,y as S}from"./application-CJkabyye.js";import{$ as C,A as w,Dt as T,Ft as E,Gt as D,Jt as O,Ot as k,Yt as A,_t as j,b as ee,dt as M,gt as N,h as P,ht as F,k as I,kt as L,l as R,mt as te,n as ne,nt as z,r as re,s as ie,tt as B,u as V,vt as ae,wt as oe,zt as se}from"./three.module-DkXFtuId.js";var H=e(r(),1),U=n(),ce=5500,W=8,le={"--warpkeep-gateway-hit-width-min":`${u.gateway.hitWidthMinPx}px`,"--warpkeep-gateway-hit-width-fluid":`${u.gateway.hitWidthViewportRatio*100}vw`,"--warpkeep-gateway-hit-width-max":`${u.gateway.hitWidthMaxPx}px`,"--warpkeep-gateway-hit-height-min":`${u.gateway.hitHeightMinPx}px`,"--warpkeep-gateway-hit-height-fluid":`${u.gateway.hitHeightViewportRatio*100}vw`,"--warpkeep-gateway-hit-height-max":`${u.gateway.hitHeightMaxPx}px`};function ue(...e){return e.filter(Boolean).join(` `)}var de=()=>l({x:0,y:0,viewportWidth:0,viewportHeight:0,visible:!1}),fe=()=>Object.freeze({generation:0,rendererPoint:de(),sourceSurfaceRect:null,gatewayClientCenter:null,buttonClientCenter:null,alignmentErrorPx:null,ready:!1});function pe(e){return e.width<=768||e.height<=520?3:2}function me(e,t,n){let r=n.clientWidth>0?n.clientWidth:t.width,i=n.clientHeight>0?n.clientHeight:t.height;return{x:(e.x-t.left)/t.width*r,y:(e.y-t.top)/t.height*i,clientToLocalX:r/t.width,clientToLocalY:i/t.height}}var G=(0,H.forwardRef)(function({onActivate:e,onFocusChange:t,onMeaningfulInteraction:n,autoDismissMs:r=ce,accessibleLabel:a=`Enter Warpkeep`,notice:c=null,className:d,disabled:f=!1},p){let m=(0,H.useRef)(null),h=(0,H.useRef)(null),g=(0,H.useRef)(null),_=(0,H.useRef)(null),C=(0,H.useRef)(fe()),w=(0,H.useRef)({width:0,height:0}),T=(0,H.useRef)({x:NaN,y:NaN}),E=(0,H.useRef)(!1),D=(0,H.useRef)(f),O=(0,H.useRef)(!1),k=(0,H.useRef)(!1),A=(0,H.useRef)(null),[j,ee]=(0,H.useState)(!1),[M,N]=(0,H.useState)({open:!1,version:0}),P=`warpkeep-gateway-notice-${(0,H.useId)().replace(/:/g,``)}`,F=(0,H.useCallback)(e=>{let t=_.current;if(!t||!E.current)return;if(e){let e=t.getBoundingClientRect();w.current.width=Math.max(0,e.width),w.current.height=Math.max(0,e.height)}let n=C.current.gatewayClientCenter,r=m.current,i=s(r?.getBoundingClientRect());if(!n||!r||!i)return;let a=me(n,i,r),o=window.innerWidth,c=window.innerHeight,l=v({anchorX:n.x,anchorY:n.y,noticeWidth:w.current.width,noticeHeight:w.current.height,viewportWidth:o,viewportHeight:c,hitRadius:u.gateway.hitHeightMaxPx*.5,preferredPlacement:c<460&&o>c?`above`:`below`});t.style.left=`${(l.left-n.x)*a.clientToLocalX}px`,t.style.top=`${(l.top-n.y)*a.clientToLocalY}px`;let d=Math.min(Math.max(n.x-l.left,14),Math.max(14,w.current.width-14));t.style.setProperty(`--warpkeep-gateway-notice-arrow-x`,`${d*a.clientToLocalX}px`),t.dataset.placement=l.placement,T.current.x=n.x,T.current.y=n.y},[]),I=(0,H.useCallback)((e,t)=>{let n=l(e),r=s(t),a=b(n,r),o=C.current,c=o.rendererPoint.viewportWidth!==n.viewportWidth||o.rendererPoint.viewportHeight!==n.viewportHeight||o.sourceSurfaceRect?.left!==r?.left||o.sourceSurfaceRect?.top!==r?.top||o.sourceSurfaceRect?.width!==r?.width||o.sourceSurfaceRect?.height!==r?.height,u=m.current,d=h.current,f=g.current,p=s(u?.getBoundingClientRect()),_=null,v=null,y=null,S=!!(n.visible&&a&&r);if(u&&d&&f&&a&&r&&p&&!k.current){let e=me(a,p,u);d.style.transform=`translate3d(${e.x}px, ${e.y}px, 0)`,D.current||(u.dataset.visible=`true`,u.dataset.interactive=`true`,d.hidden=!1,d.dataset.visible=`true`,d.setAttribute(`aria-hidden`,`false`),f.disabled=!1,_=s(f.getBoundingClientRect()),v=i(_),y=x(a,v),S=S&&y!==null&&y<=pe(r))}else S=!1;let w=Object.freeze({generation:o.generation+1,rendererPoint:n,sourceSurfaceRect:r,gatewayClientCenter:a,buttonClientCenter:v,alignmentErrorPx:y,ready:S});C.current=w;let O=S&&!D.current&&!k.current,A=O?`true`:`false`;d&&(d.hidden=!O,d.inert=!O,d.setAttribute(`aria-hidden`,String(!O)),d.dataset.visible=A),f&&(f.disabled=!O,f.tabIndex=O?0:-1),u&&(u.dataset.visible=A,u.dataset.interactive=A,u.dataset.ready=String(S),u.dataset.rendererViewportWidth=String(n.viewportWidth),u.dataset.rendererViewportHeight=String(n.viewportHeight),u.dataset.rendererX=String(n.x),u.dataset.rendererY=String(n.y),u.dataset.sourceLeft=String(r?.left??``),u.dataset.sourceTop=String(r?.top??``),u.dataset.sourceWidth=String(r?.width??``),u.dataset.sourceHeight=String(r?.height??``),u.dataset.clientX=String(a?.x??``),u.dataset.clientY=String(a?.y??``),u.dataset.buttonCenterX=String(v?.x??``),u.dataset.buttonCenterY=String(v?.y??``),u.dataset.alignmentError=String(y??``),u.dataset.measurementGeneration=String(w.generation));let j=T.current;return O&&E.current&&a&&(c||Math.abs(a.x-j.x)>=W||Math.abs(a.y-j.y)>=W)&&F(!1),S},[F]),L=(0,H.useCallback)(()=>C.current,[]),R=(0,H.useCallback)(()=>C.current.gatewayClientCenter,[]),te=(0,H.useCallback)((e,t)=>{let n=C.current,r=s(g.current?.getBoundingClientRect()),a=i(r)??n.buttonClientCenter,o=x(n.gatewayClientCenter,a)??n.alignmentErrorPx,c=!!(n.sourceSurfaceRect&&o!==null&&o<=pe(n.sourceSurfaceRect)),l=e!==`history`||!D.current;return y({input:e,pointerClientPoint:t,buttonRect:r,rendererPoint:n.rendererPoint,sourceSurfaceRect:n.sourceSurfaceRect,gatewayClientCenter:n.gatewayClientCenter,buttonClientCenter:a,alignmentErrorPx:o,measurementGeneration:n.generation,ready:n.ready&&(!l||c)})},[]),ne=(0,H.useCallback)(()=>{D.current||k.current||!C.current.ready||g.current?.focus()},[]);(0,H.useImperativeHandle)(p,()=>({setRenderedGateway:I,getRenderedMeasurement:L,getGatewayClientCenter:R,captureActivation:te,focus:ne}),[te,ne,R,L,I]),(0,H.useLayoutEffect)(()=>{let e=D.current;D.current=f,A.current=null,e&&!f&&(k.current=!1,O.current=!1,ee(!1));let t=m.current,n=h.current,r=g.current,i=!f&&!k.current&&C.current.ready;t&&(t.dataset.visible=String(i),t.dataset.interactive=String(i)),n&&(n.hidden=!i,n.inert=!i,n.dataset.visible=String(i),n.setAttribute(`aria-hidden`,String(!i))),r&&(r.disabled=!i,r.tabIndex=i?0:-1,!i&&document.activeElement===r&&r.blur()),!f&&C.current.sourceSurfaceRect&&I(C.current.rendererPoint,C.current.sourceSurfaceRect)},[f,I]),(0,H.useLayoutEffect)(()=>{I(de(),null)},[I]);let z=(0,H.useCallback)(()=>{E.current&&(E.current=!1,N(e=>e.open?{...e,open:!1}:e))},[]),re=(0,H.useCallback)((t,r)=>{if(D.current||k.current||O.current||!C.current.ready)return;O.current=!0;let i=te(t,r);if(!i.ready||t===`pointer`&&!o(i.pointerClientPoint,i.buttonRect)){O.current=!1;return}let a=m.current;a&&(a.dataset.acceptedPointerX=String(i.pointerClientPoint?.x??``),a.dataset.acceptedPointerY=String(i.pointerClientPoint?.y??``),a.dataset.frozenClientX=String(i.gatewayClientCenter?.x??``),a.dataset.frozenClientY=String(i.gatewayClientCenter?.y??``),a.dataset.measurementGeneration=String(i.measurementGeneration)),c&&(E.current=!0,N(e=>({open:!0,version:e.version+1}))),n?.();try{e?.(i)}finally{if(O.current=!1,e){k.current=!0,C.current=Object.freeze({...C.current,rendererPoint:l({...C.current.rendererPoint,visible:!1}),ready:!1}),ee(!0);let e=m.current,t=h.current,n=g.current;e&&(e.dataset.visible=`false`,e.dataset.interactive=`false`),t&&(t.hidden=!0,t.inert=!0,t.dataset.visible=`false`,t.setAttribute(`aria-hidden`,`true`)),n&&(n.disabled=!0,n.tabIndex=-1,n.blur())}}},[te,c,e,n]);return(0,H.useEffect)(()=>{if(!M.open)return;let e=e=>{let t=h.current;t&&(e.composedPath().includes(t)||e.target instanceof Node&&t.contains(e.target)||z())},t=e=>{e.key===`Escape`&&z()};return document.addEventListener(`pointerdown`,e,!0),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`pointerdown`,e,!0),document.removeEventListener(`keydown`,t)}},[z,M.open]),(0,H.useEffect)(()=>{if(!M.open||r===null)return;let e=Number.isFinite(r)&&r>0?r:ce,t=window.setTimeout(z,e);return()=>window.clearTimeout(t)},[r,z,M.open,M.version]),(0,H.useLayoutEffect)(()=>{if(!M.open)return;F(!0);let e=_.current;if(!e||typeof ResizeObserver>`u`)return;let t=new ResizeObserver(()=>F(!0));return t.observe(e),()=>t.disconnect()},[M.open,M.version,F]),(0,U.jsx)(`div`,{ref:m,className:ue(`warpkeep-gateway`,d),"data-interactive":String(!f&&!j),"data-notice-open":String(M.open),"data-visible":`false`,style:le,children:(0,U.jsxs)(`div`,{ref:h,"aria-hidden":`true`,className:`warpkeep-gateway-anchor`,"data-visible":`false`,hidden:!0,inert:!0,children:[(0,U.jsx)(`button`,{ref:g,type:`button`,className:`warpkeep-gateway-button`,"aria-label":a,"aria-controls":M.open?P:void 0,"aria-describedby":M.open?P:void 0,"aria-expanded":c?M.open:void 0,disabled:f||j,tabIndex:f||j?-1:0,onPointerDown:e=>{A.current=e.isPrimary!==!1&&e.button===0&&Number.isFinite(e.clientX)&&Number.isFinite(e.clientY)?S(e.clientX,e.clientY):null},onPointerCancel:()=>{A.current=null},onClick:e=>{let t=e.detail===0?`keyboard`:`pointer`,n=A.current;A.current=null,re(t,t===`pointer`?n??S(e.clientX,e.clientY):null)},onFocus:()=>{t?.(!0)},onBlur:()=>t?.(!1)}),M.open?(0,U.jsx)(`div`,{ref:_,id:P,className:`warpkeep-gateway-notice`,role:`status`,"aria-live":`polite`,"aria-atomic":`true`,children:c},M.version):null]})})}),he=Array.from({length:48},(e,t)=>({id:`fallback-star-${t}`,left:`${(t*47+7)%101}%`,top:`${(t*61+11)%97}%`,delay:`${t%11*-.62}s`,duration:`${7.5+t%6*.8}s`,size:`${t%13==0?4:1+t%3}px`})),ge=(0,H.forwardRef)(function({phase:e=`active`,onRequestEnterMenu:t,onReady:n,onMeaningfulInteraction:r},i){let a=(0,H.useRef)(null),o=(0,H.useRef)(null),d=(0,H.useRef)(null),p=(0,H.useRef)(null),m=(0,H.useRef)(null),h=(0,H.useRef)(0),_=(0,H.useRef)(!1),v=(0,H.useRef)(!1),y=(0,H.useRef)({onRequestEnterMenu:t,onReady:n,onMeaningfulInteraction:r});y.current={onRequestEnterMenu:t,onReady:n,onMeaningfulInteraction:r},(0,H.useLayoutEffect)(()=>{let t=a.current,n=o.current,r=e===`departing`||e===`returning`;if(t&&n&&r&&!m.current){let e=Math.max(1,t.clientWidth),r=Math.max(1,t.clientHeight),i=n.offsetLeft,a=n.offsetTop,o=Math.max(1,n.offsetWidth),s=Math.max(1,n.offsetHeight);m.current={surfaceCssText:t.getAttribute(`style`),galaxyCssText:n.getAttribute(`style`)},t.style.width=`${e}px`,t.style.height=`${r}px`,t.style.minWidth=`${e}px`,t.style.maxWidth=`${e}px`,t.style.minHeight=`${r}px`,t.style.maxHeight=`${r}px`,n.style.top=`${a}px`,n.style.left=`${i}px`,n.style.width=`${o}px`,n.style.height=`${s}px`,n.style.aspectRatio=`auto`}else if(t&&n&&!r&&m.current){let{surfaceCssText:e,galaxyCssText:r}=m.current;e===null?t.removeAttribute(`style`):t.setAttribute(`style`,e),r===null?n.removeAttribute(`style`):n.setAttribute(`style`,r),m.current=null}},[e]);let b=(0,H.useCallback)(()=>{let e=a.current,t=d.current;if(!e||!t)return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=n.width||e.clientWidth||window.innerWidth,o=n.height||e.clientHeight||window.innerHeight,c=r.left-n.left+r.width*.5,u=r.top-n.top+r.height*.5,f=p.current?.setRenderedGateway(l({x:c,y:u,viewportWidth:i,viewportHeight:o,visible:r.width>0&&r.height>0}),s(n));!v.current&&f&&(v.current=!0,y.current.onReady?.())},[]),x=(0,H.useCallback)(t=>{if(_.current||e!==`active`)return;_.current=!0;let n=a.current;n&&(window.clearTimeout(h.current),n.dataset.gatewaySurging=`false`,n.offsetWidth,n.dataset.gatewaySurging=`true`,h.current=window.setTimeout(()=>{n.dataset.gatewaySurging=`false`},u.gateway.surgeDurationSeconds*1e3)),y.current.onMeaningfulInteraction?.();let r=typeof t==`string`?p.current?.captureActivation(t)??g(t):t;if(!r.ready){_.current=!1;return}y.current.onRequestEnterMenu?.(r)},[e]);return(0,H.useImperativeHandle)(i,()=>({requestEnter:x,focusGateway:()=>p.current?.focus(),getGatewayClientCenter:()=>p.current?.getGatewayClientCenter()??f(),getGatewayMeasurement:()=>p.current?.getRenderedMeasurement()??c(),getGatewayActivation:e=>p.current?.captureActivation(e)??g(e)}),[x]),(0,H.useEffect)(()=>{let e=a.current,t=d.current;if(!e||!t)return;let n=null,r=window.setTimeout(b,0);return window.addEventListener(`resize`,b),typeof ResizeObserver<`u`&&(n=new ResizeObserver(b),n.observe(e),n.observe(t)),b(),()=>{window.clearTimeout(r),window.clearTimeout(h.current),window.removeEventListener(`resize`,b),n?.disconnect(),p.current?.setRenderedGateway(l({x:0,y:0,viewportWidth:0,viewportHeight:0,visible:!1}),null)}},[b]),(0,U.jsxs)(`main`,{ref:a,className:`warpkeep-title-screen warpkeep-title-screen--fallback`,"aria-label":`Warpkeep title screen`,"data-gateway-surging":`false`,"data-title-phase":e,children:[(0,U.jsx)(`div`,{className:`warpkeep-fallback-stars`,"aria-hidden":`true`,children:he.map(e=>(0,U.jsx)(`span`,{style:{left:e.left,top:e.top,width:e.size,height:e.size,animationDelay:e.delay,animationDuration:e.duration}},e.id))}),(0,U.jsx)(`div`,{ref:o,className:`warpkeep-fallback-galaxy`,"aria-hidden":`true`,children:(0,U.jsxs)(`div`,{ref:d,className:`warpkeep-fallback-galaxy-core`,children:[(0,U.jsx)(`span`,{className:`warpkeep-fallback-lens warpkeep-fallback-lens--upper`}),(0,U.jsx)(`span`,{className:`warpkeep-fallback-lens warpkeep-fallback-lens--lower`}),(0,U.jsx)(`span`,{className:`warpkeep-fallback-ray warpkeep-fallback-ray--primary`}),(0,U.jsx)(`span`,{className:`warpkeep-fallback-ray warpkeep-fallback-ray--secondary`})]})}),(0,U.jsx)(G,{ref:p,onActivate:x,onMeaningfulInteraction:r,disabled:e!==`active`}),(0,U.jsx)(`div`,{className:`warpkeep-title-vignette`,"aria-hidden":`true`})]})}),_e=1e-16,K=1e-12;function ve(){return{raycaster:new oe,discPlane:new F,ndc:new O,planeOrigin:new A,planeTangentX:new A,planeTangentY:new A,planeNormal:new A,worldIntersection:new A,spinLocalIntersection:new A,inverseSpinWorld:new B}}function ye(e){return e.x=0,e.y=0,e.valid=!1,e}function be(e){for(let t=0;t<e.elements.length;t+=1)if(!Number.isFinite(e.elements[t]))return!1;return!0}function xe(e,t,n,r,i,a,o,s){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(a)||a<=0||(n.updateWorldMatrix(!0,!1),r.updateWorldMatrix(!0,!1),i.updateWorldMatrix(!0,!1),!be(n.matrixWorld)||!be(n.projectionMatrix)||!be(r.matrixWorld)||!be(i.matrixWorld)))return ye(o);let c=i.matrixWorld.determinant();if(!Number.isFinite(c)||Math.abs(c)<=K)return ye(o);s.planeOrigin.set(0,0,0).applyMatrix4(r.matrixWorld),s.planeTangentX.set(1,0,0).applyMatrix4(r.matrixWorld).sub(s.planeOrigin),s.planeTangentY.set(0,1,0).applyMatrix4(r.matrixWorld).sub(s.planeOrigin),s.planeNormal.crossVectors(s.planeTangentX,s.planeTangentY);let l=s.planeNormal.lengthSq();if(!Number.isFinite(l)||l<=_e||(s.planeNormal.multiplyScalar(1/Math.sqrt(l)),s.discPlane.setFromNormalAndCoplanarPoint(s.planeNormal,s.planeOrigin),s.ndc.set(e,t),s.raycaster.setFromCamera(s.ndc,n),!s.raycaster.ray.intersectPlane(s.discPlane,s.worldIntersection)))return ye(o);s.inverseSpinWorld.copy(i.matrixWorld).invert(),s.spinLocalIntersection.copy(s.worldIntersection).applyMatrix4(s.inverseSpinWorld);let u=s.spinLocalIntersection.x/a,d=s.spinLocalIntersection.y/a;return!Number.isFinite(u)||!Number.isFinite(d)?ye(o):(o.x=u,o.y=d,o.valid=!0,o)}var Se={high:{particleCount:420,ribbonCount:3,ribbonSegments:128,filamentCount:18,filamentSegments:48,noiseOctaves:5,maxNewDrawCalls:6,pointerDistortionEnabled:!0,starDistortionEnabled:!0,shockwaveEnabled:!0},compact:{particleCount:144,ribbonCount:2,ribbonSegments:72,filamentCount:8,filamentSegments:28,noiseOctaves:3,maxNewDrawCalls:4,pointerDistortionEnabled:!0,starDistortionEnabled:!0,shockwaveEnabled:!1},reduced:{particleCount:36,ribbonCount:1,ribbonSegments:40,filamentCount:0,filamentSegments:0,noiseOctaves:1,maxNewDrawCalls:2,pointerDistortionEnabled:!1,starDistortionEnabled:!1,shockwaveEnabled:!1}},Ce=900,we=540,Te=4096;function Ee(e,t,n){return Math.min(n,Math.max(t,e))}function De(e,t){return Number.isFinite(e)?e:t}function q(e){return Ee(De(e,0),0,1)}function J(e){let t=q(e);return t*t*(3-2*t)}function Oe(e,t){return e<=t?0:J((e-t)/(1-t))}function ke({viewportWidth:e,viewportHeight:t,reducedMotion:n=!1,rendererMaxTextureSize:r=Te,supportsHighpFragment:i=!0}){if(n)return`reduced`;let a=De(e,0),o=De(t,0),s=De(r,0);return a<=0||o<=0||a<Ce||o<we||!i||s<Te?`compact`:`high`}function Ae(e,t,n=Te,r=!0){return e===`reduced`||t===`performance`?`reduced`:t===`balanced`?e===`high`?`compact`:e:n>=Te&&r?`high`:`compact`}var Y={pointerBendThreshold:.34,localDistortionThreshold:.38,eyeFocusThreshold:.26,maximumBrightness:.68,maximumRayThickness:1.11,maximumPointerBend:.32,maximumLocalDistortion:.24,maximumEyeFocus:.18},je={high:{brightness:1,thickness:1,motion:1,turbulence:1,pointer:1,distortion:1,focus:1},compact:{brightness:.9,thickness:.82,motion:.76,turbulence:.68,pointer:.72,distortion:.62,focus:.82},reduced:{brightness:.42,thickness:.28,motion:.025,turbulence:.012,pointer:0,distortion:0,focus:.24}};function Me(e,t=`high`,n){let r=q(e),i=r*r,a=i*r,o=je[t],s=Oe(r,Y.pointerBendThreshold),c=Oe(r,Y.localDistortionThreshold),l=Oe(r,Y.eyeFocusThreshold),u=n??{proximity:0,proximitySquared:0,proximityCubed:0,brightness:.5,rayThickness:1,orbitSpeed:.18,turbulence:.025,pointerBend:0,localDistortion:0,particleSpeed:.22,highlightSpeed:.12,eyeFocus:0};return u.proximity=r,u.proximitySquared=i,u.proximityCubed=a,u.brightness=Math.min(Y.maximumBrightness,.5+.18*r*o.brightness),u.rayThickness=Math.min(Y.maximumRayThickness,1+.11*r*o.thickness),u.orbitSpeed=.18+3*i*o.motion,u.turbulence=.025+1.675*a*o.turbulence,u.pointerBend=Math.min(Y.maximumPointerBend,Y.maximumPointerBend*s*o.pointer),u.localDistortion=Math.min(Y.maximumLocalDistortion,Y.maximumLocalDistortion*c*o.distortion),u.particleSpeed=.22+2.55*i*o.motion,u.highlightSpeed=.12+3.4*a*o.motion,u.eyeFocus=Math.min(Y.maximumEyeFocus,Y.maximumEyeFocus*l*o.focus),u}var X={durationSeconds:1.6,stages:{intake:{startSeconds:0,endSeconds:.12},focus:{startSeconds:.12,endSeconds:.3},rupture:{startSeconds:.25,endSeconds:.9},settle:{startSeconds:.9,endSeconds:1.6}}};function Ne(e,t,n=.42){if(e<t.startSeconds||e>=t.endSeconds)return 0;let r=t.endSeconds-t.startSeconds,i=(e-t.startSeconds)/r,a=Ee(n,.05,.95);return i<=a?J(i/a):1-J((i-a)/(1-a))}function Pe(e){return e<0||e>=X.durationSeconds?`idle`:e<X.stages.intake.endSeconds?`intake`:e<X.stages.rupture.startSeconds?`focus`:e<X.stages.rupture.endSeconds?`rupture`:`settle`}function Fe(e,t){let n=De(e,-1),r=n>=0&&n<X.durationSeconds,i=Ee(n,0,X.durationSeconds),a=r?Ne(i,X.stages.intake,.45):0,o=r?Ne(i,X.stages.focus,.55):0,s=r?Ne(i,X.stages.rupture,.38):0,c=.12,l=X.stages.settle.startSeconds-c,u=!r||i<l?0:i<X.stages.settle.startSeconds?J((i-l)/c):1-J((i-X.stages.settle.startSeconds)/(X.stages.settle.endSeconds-X.stages.settle.startSeconds)),d=q(a+o*.55),f=q(o*.88+s*.28+u*.12),p=q(s*J((i-.25)/.17)),m=q(o*.28+s*.82+u*.08),h=q(s*J((i-.3)/.18)+u*.16),g=t??{phase:`idle`,progress:0,intake:0,focus:0,rupture:0,settle:0,compression:0,eyeFocus:0,shockwave:0,distortion:0,particlePeel:0,outerLuminanceScale:1};return g.phase=r?Pe(i):`idle`,g.progress=n<0?0:q(i/X.durationSeconds),g.intake=a,g.focus=o,g.rupture=s,g.settle=u,g.compression=d,g.eyeFocus=f,g.shockwave=p,g.distortion=m,g.particlePeel=h,g.outerLuminanceScale=Ee(1-a*.12+o*.08+s*.1+u*.025,.88,1.12),g}var Ie={infall:0,orbit:1,escape:2},Le={seed:1464555096,maximumCount:4096,behaviorRatios:{infall:.72,orbit:.2,escape:.08},bounds:{radius:{minimum:.24,maximum:1},orbitalSpeedMagnitude:{minimum:.42,maximum:1.36},infallDrift:{minimum:-.18,maximum:-.04},orbitDrift:{minimum:-.012,maximum:.012},escapeDrift:{minimum:.045,maximum:.14},verticalOffset:{minimum:-.16,maximum:.16},size:{minimum:.32,maximum:1.08},brightness:{minimum:.26,maximum:.84}}};function Re(e){let t=e>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ze(e,t,n){return t+(n-t)*e()}function Be(e){return!Number.isFinite(e)||e<=0?0:Math.min(Le.maximumCount,Math.floor(e))}function Ve(e,t=Le.seed){let n=Be(e),r=Re(Number.isFinite(t)?Math.floor(t):Le.seed),i=new Float32Array(n),a=new Float32Array(n),o=new Float32Array(n),s=new Float32Array(n),c=new Float32Array(n),l=new Float32Array(n),u=new Float32Array(n),d=new Float32Array(n),f=new Uint8Array(n),p=Math.floor(n*Le.behaviorRatios.orbit),m=Math.floor(n*Le.behaviorRatios.escape),h=n-p-m;f.fill(Ie.infall,0,h),f.fill(Ie.orbit,h,h+p),f.fill(Ie.escape,h+p);for(let e=n-1;e>0;--e){let t=Math.floor(r()*(e+1)),n=f[e];f[e]=f[t],f[t]=n}let g=Le.bounds,_=Math.PI*2;for(let e=0;e<n;e+=1){let t=f[e],n=r()<.18?-1:1;i[e]=r()*_,a[e]=ze(r,g.radius.minimum,g.radius.maximum),o[e]=n*ze(r,g.orbitalSpeedMagnitude.minimum,g.orbitalSpeedMagnitude.maximum),s[e]=t===Ie.infall?ze(r,g.infallDrift.minimum,g.infallDrift.maximum):t===Ie.orbit?ze(r,g.orbitDrift.minimum,g.orbitDrift.maximum):ze(r,g.escapeDrift.minimum,g.escapeDrift.maximum),c[e]=r()*_,l[e]=ze(r,g.verticalOffset.minimum,g.verticalOffset.maximum),u[e]=ze(r,g.size.minimum,g.size.maximum),d[e]=ze(r,g.brightness.minimum,g.brightness.maximum)}return{initialAngles:i,radii:a,orbitalSpeeds:o,radialDrifts:s,phases:c,verticalOffsets:l,sizes:u,brightness:d,behaviorTypes:f}}var He=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Ue=`
  varying vec2 vUv;
  uniform float time;
  uniform float coreExtent;
  uniform float shadowRadius;
  uniform float accretionRadius;
  uniform float lensRadius;
  uniform float gatewayBrightness;
  uniform float gatewayEyeFocus;
  uniform float gatewayPulsePhase;
  uniform float gatewayFlowPhase;
  uniform float activationProgress;
  uniform float activationCompression;
  uniform float activationFocus;
  uniform float activationRupture;
  uniform float activationShockwave;
  uniform float reducedMotion;

  const float TAU = 6.28318530718;

  float ellipseRadius(vec2 point, float verticalCompression) {
    return length(vec2(point.x, point.y / max(0.2, verticalCompression)));
  }

  float narrowRing(float radius, float target, float width) {
    return exp(-pow((radius - target) / max(0.0001, width), 2.0));
  }

  void main() {
    vec2 point = (vUv - vec2(0.5)) * 2.0 * coreExtent;
    float proximityFocus = clamp(gatewayEyeFocus + activationFocus * 0.72, 0.0, 1.0);
    float shadowCompression = 0.68 - proximityFocus * 0.075;
    float shadowMetric = ellipseRadius(point, shadowCompression);
    vec2 anglePoint = vec2(point.x, point.y / shadowCompression);
    if (dot(anglePoint, anglePoint) < 0.00000001) {
      anglePoint.x = 0.0001;
    }
    float angle = atan(anglePoint.y, anglePoint.x);
    float stableAsymmetry = 1.0 + sin(angle * 2.0 + 0.35) * 0.008;
    shadowMetric *= stableAsymmetry;

    float focusedShadowRadius = shadowRadius * (
      1.0 - proximityFocus * 0.045 - activationCompression * 0.07
    );
    float absorption = 1.0 - smoothstep(
      focusedShadowRadius * 0.84,
      focusedShadowRadius * 1.14,
      shadowMetric
    );

    float lensCompression = 0.45 - proximityFocus * 0.035;
    float lensMetric = ellipseRadius(point, lensCompression);
    float horizontalTaper = 1.0 - smoothstep(
      accretionRadius * 0.46,
      accretionRadius * 1.02,
      abs(point.x)
    );
    float sideCaustic = smoothstep(
      accretionRadius * 0.62,
      lensRadius * 0.72,
      abs(point.x)
    ) * (1.0 - smoothstep(lensRadius * 0.72, lensRadius * 1.02, abs(point.x)));
    sideCaustic *= exp(-pow(point.y / 0.034, 2.0));
    float upperGate = smoothstep(-0.012, 0.035, point.y);
    float lowerGate = 1.0 - smoothstep(-0.04, 0.018, point.y);
    float breathing = mix(
      0.5,
      0.5 + 0.5 * sin(time * 0.82 + gatewayPulsePhase * 0.2),
      1.0 - reducedMotion
    );
    float upperArc = narrowRing(
      lensMetric,
      accretionRadius * (1.0 - activationCompression * 0.05),
      0.009 + proximityFocus * 0.0015
    ) * upperGate * horizontalTaper;
    float lowerArc = narrowRing(
      lensMetric,
      accretionRadius * 1.075,
      0.0065 + proximityFocus * 0.001
    ) * lowerGate * horizontalTaper;
    float outerPhoton = narrowRing(lensMetric, lensRadius * 0.72, 0.008) * sideCaustic;

    float travellingHighlight = pow(
      max(0.0, 0.5 + 0.5 * cos(angle * 1.35 - gatewayFlowPhase * 1.8)),
      16.0
    );
    float innerRim = narrowRing(
      shadowMetric,
      focusedShadowRadius * 1.23,
      0.0045 + proximityFocus * 0.001
    ) * (0.2 + travellingHighlight * 0.8);

    float shockRadius = mix(
      accretionRadius * 0.78,
      lensRadius * 1.12,
      clamp(activationProgress, 0.0, 1.0)
    );
    float shockwave = narrowRing(lensMetric, shockRadius, 0.0065) *
      activationShockwave * horizontalTaper;
    float focusedFlash = narrowRing(lensMetric, accretionRadius * 0.96, 0.005) *
      activationRupture * travellingHighlight;

    float arcEnergy = upperArc * 0.9 + lowerArc * 0.54 + outerPhoton * 0.44;
    arcEnergy *= 0.62 + gatewayBrightness * 0.55 + breathing * 0.08;
    arcEnergy += innerRim * (0.34 + proximityFocus * 0.35);
    arcEnergy += shockwave * 0.62 + focusedFlash * 0.48;
    arcEnergy *= 1.0 - absorption * 0.985;

    vec3 black = vec3(0.00025, 0.00035, 0.0012);
    vec3 deepViolet = vec3(0.16, 0.025, 0.31);
    vec3 reflectiveViolet = vec3(0.53, 0.19, 0.86);
    vec3 caustic = vec3(0.87, 0.66, 1.0);
    float reflectiveMix = clamp(
      travellingHighlight * (upperArc + lowerArc) + shockwave * 0.8,
      0.0,
      1.0
    );
    vec3 energyColor = mix(deepViolet, reflectiveViolet, 0.42 + gatewayBrightness * 0.35);
    energyColor = mix(energyColor, caustic, reflectiveMix * 0.72);
    vec3 color = mix(black, energyColor, clamp(arcEnergy * 2.7, 0.0, 1.0));
    float alpha = max(absorption * 0.995, arcEnergy * 0.86);
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,We=`
  attribute float ribbonAngle;
  attribute float ribbonSide;
  attribute float ribbonLayer;
  attribute float ribbonPhase;
  attribute float ribbonRadius;
  attribute float ribbonWidth;
  attribute float ribbonDirection;
  attribute float ribbonKind;
  varying float vAcross;
  varying float vAlong;
  varying float vPhase;
  varying float vLayer;
  varying float vKind;
  varying float vPointerFacing;
  uniform float time;
  uniform float galaxyRadius;
  uniform float gatewayOrbitSpeed;
  uniform float gatewayTurbulence;
  uniform float gatewayRayThickness;
  uniform float gatewayPointerBend;
  uniform float activationCompression;
  uniform float activationRupture;
  uniform vec2 gatewayPointerDirection;
  uniform float gatewayPointerValid;
  uniform float reducedMotion;

  const float TAU = 6.28318530718;

  void main() {
    float motionScale = 1.0 - reducedMotion * 0.985;
    float layerRate = mix(0.72, 1.24, fract(ribbonPhase * 0.137 + ribbonLayer * 0.31));
    float activeRate = 0.26 + max(0.0, gatewayOrbitSpeed - 0.18) * 1.55;
    float orbit = time * activeRate * ribbonDirection * layerRate * motionScale;
    float angle = ribbonAngle + ribbonPhase + orbit;
    float filament = step(0.5, ribbonKind);
    float spiralProgress = ribbonAngle / TAU;
    float spiralPull = filament * (0.5 - spiralProgress) * 0.055;
    float turbulence = sin(
      ribbonAngle * mix(3.0, 7.0, filament) + ribbonPhase * 2.0 +
      time * (0.18 + gatewayOrbitSpeed * 0.72) * ribbonDirection
    );
    turbulence += sin(
      ribbonAngle * mix(5.0, 11.0, filament) - ribbonPhase +
      time * (0.12 + gatewayOrbitSpeed * 0.41)
    ) * 0.46;
    float turbulentOffset = turbulence * (0.0025 + gatewayTurbulence * 0.0095);
    float compression = 1.0 - activationCompression * (0.09 + filament * 0.04);
    float ruptureExpansion = activationRupture * (0.012 + filament * 0.028);
    float radius = max(
      0.035,
      ribbonRadius * compression + spiralPull + turbulentOffset + ruptureExpansion
    );
    float width = ribbonWidth * gatewayRayThickness * (
      1.0 + filament * gatewayTurbulence * 0.06
    );
    vec2 radial = vec2(cos(angle), sin(angle));
    vec2 tangent = vec2(-radial.y, radial.x);
    float pointerFacing = max(0.0, dot(radial, gatewayPointerDirection));
    float pointerResponsive = step(0.53, fract(ribbonPhase * 0.73 + ribbonLayer * 0.37));
    vec2 pointerOffset = gatewayPointerDirection *
      gatewayPointerBend * gatewayPointerValid * pointerFacing * pointerResponsive *
      mix(0.012, 0.024, filament);
    vec2 localPoint = radial * radius + tangent * ribbonSide * width + pointerOffset;

    vAcross = ribbonSide;
    vAlong = ribbonAngle;
    vPhase = ribbonPhase;
    vLayer = ribbonLayer;
    vKind = ribbonKind;
    vPointerFacing = pointerFacing * pointerResponsive * gatewayPointerValid;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(localPoint * galaxyRadius, 0.0, 1.0);
  }
`,Ge=`
  varying float vAcross;
  varying float vAlong;
  varying float vPhase;
  varying float vLayer;
  varying float vKind;
  varying float vPointerFacing;
  uniform float time;
  uniform float gatewayBrightness;
  uniform float gatewayHighlightSpeed;
  uniform float gatewayTurbulence;
  uniform float activationRupture;
  uniform float reducedMotion;

  void main() {
    float edge = 1.0 - smoothstep(0.18, 1.0, abs(vAcross));
    float highlightRate = 0.4 + max(0.0, gatewayHighlightSpeed - 0.12) * 2.35;
    float travelling = 0.5 + 0.5 * cos(
      vAlong * (2.0 + mod(vLayer, 2.0)) -
      time * highlightRate * (1.0 - reducedMotion * 0.97) + vPhase * 3.0
    );
    float reflection = pow(max(0.0, travelling), 19.0);
    float brokenBand = pow(max(0.0, 0.5 + 0.5 * sin(vAlong * 5.0 + vPhase * 6.0)), 7.0);
    float filament = step(0.5, vKind);
    float ribbonCarrier = 0.5 + 0.5 * cos(vAlong - vPhase * 0.72 + vLayer * 1.91);
    float ribbonWindow = smoothstep(0.22, 0.84, ribbonCarrier);
    float filamentCarrier = 0.5 + 0.5 * sin(vAlong * 1.65 + vPhase * 2.3);
    float filamentWindow = smoothstep(0.46, 0.91, filamentCarrier) * (0.42 + brokenBand * 0.58);
    float visibility = mix(ribbonWindow, filamentWindow, filament);
    float body = edge * visibility * (0.018 + gatewayBrightness * mix(0.072, 0.052, filament));
    float narrowLight = edge * reflection * visibility * (0.24 + gatewayBrightness * 0.46);
    narrowLight *= mix(0.62 + brokenBand * 0.38, 0.38 + brokenBand * 0.62, filament);
    narrowLight *= 1.0 + vPointerFacing * gatewayTurbulence * 0.18;
    float violentActivity = smoothstep(0.34, 1.18, gatewayTurbulence);
    body *= 1.0 + violentActivity * mix(1.25, 0.82, filament);
    narrowLight *= 1.0 + violentActivity * 0.32;
    float shearGlint = pow(max(
      0.0,
      0.5 + 0.5 * sin(
        vAlong * mix(8.0, 13.0, filament) + vPhase * 4.0 +
        time * (1.4 + gatewayHighlightSpeed * 2.8)
      )
    ), 17.0);
    narrowLight += edge * visibility * shearGlint * violentActivity *
      mix(0.22, 0.15, filament);
    float rupture = edge * visibility * activationRupture * reflection * 0.19;
    float alpha = body + narrowLight + rupture;
    if (alpha < 0.004) discard;
    vec3 deepPurple = vec3(0.12, 0.018, 0.27);
    vec3 violet = vec3(0.46, 0.12, 0.78);
    vec3 lavender = vec3(0.84, 0.59, 1.0);
    vec3 color = mix(deepPurple, violet, 0.48 + gatewayBrightness * 0.36);
    color = mix(color, lavender, clamp(reflection * 0.78 + rupture, 0.0, 0.84));
    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Ke=`
  attribute float particleAngle;
  attribute float particleRadius;
  attribute float particleOrbitSpeed;
  attribute float particleRadialDrift;
  attribute float particlePhase;
  attribute float particleVerticalOffset;
  attribute float particleSize;
  attribute float particleBrightness;
  attribute float particleBehavior;
  varying float vBrightness;
  varying float vBehavior;
  varying float vHot;
  uniform float time;
  uniform float pixelRatio;
  uniform float galaxyRadius;
  uniform float gatewayParticleSpeed;
  uniform float gatewayTurbulence;
  uniform float gatewayPointerBend;
  uniform float activationParticlePeel;
  uniform vec2 gatewayPointerDirection;
  uniform float gatewayPointerValid;
  uniform float reducedMotion;

  void main() {
    float motionScale = 1.0 - reducedMotion * 0.99;
    float cycleRate = 0.022 + max(0.0, gatewayParticleSpeed - 0.22) * 0.065;
    float cycle = fract(particlePhase / 6.28318530718 + time * cycleRate * motionScale);
    float baseRadius = mix(0.075, 0.37, particleRadius);
    float isOrbit = step(0.5, particleBehavior) * (1.0 - step(1.5, particleBehavior));
    float isEscape = step(1.5, particleBehavior);
    float isInfall = 1.0 - isOrbit - isEscape;
    float infallTarget = 0.068 + particleRadialDrift * 0.055;
    float infallRadius = mix(
      baseRadius,
      infallTarget,
      pow(cycle, 0.78 + abs(particleRadialDrift) * 1.6)
    );
    float orbitRadius = baseRadius + sin(time * 0.21 + particlePhase) * particleRadialDrift * 0.12;
    float escapeTarget = 0.43 + particleRadialDrift * 0.38;
    float escapeRadius = mix(baseRadius, escapeTarget, cycle);
    float radius = infallRadius * isInfall + orbitRadius * isOrbit + escapeRadius * isEscape;
    radius += activationParticlePeel * (0.025 + isEscape * 0.055) * smoothstep(0.15, 1.0, cycle);
    float orbitalRate = 0.16 + max(0.0, gatewayParticleSpeed - 0.22) * 1.45;
    float angle = particleAngle + time * orbitalRate * particleOrbitSpeed * motionScale;
    angle += sin(particlePhase + time * (0.14 + gatewayTurbulence * 0.5)) *
      gatewayTurbulence * 0.025;
    vec2 radial = vec2(cos(angle), sin(angle));
    vec2 localPoint = radial * radius;
    float pointerSubset = step(0.84, fract(particlePhase * 0.618));
    float pointerFacing = max(0.0, dot(radial, gatewayPointerDirection));
    localPoint += gatewayPointerDirection * gatewayPointerBend * gatewayPointerValid *
      pointerSubset * pointerFacing * 0.018;
    float z = particleVerticalOffset * 0.12 + sin(angle * 2.0 + particlePhase) * 0.008;
    vec4 viewPosition = modelViewMatrix * vec4(localPoint * galaxyRadius, z * galaxyRadius, 1.0);
    float activitySize = 1.0 + min(0.32, gatewayTurbulence * 0.08);
    gl_PointSize = clamp(
      particleSize * pixelRatio * 6.5 * activitySize / max(7.0, -viewPosition.z),
      1.0,
      5.5
    );
    gl_Position = projectionMatrix * viewPosition;
    vBrightness = particleBrightness;
    vBehavior = particleBehavior;
    vHot = pointerFacing * pointerSubset + activationParticlePeel * 0.7;
  }
`,qe=`
  varying float vBrightness;
  varying float vBehavior;
  varying float vHot;
  uniform float gatewayBrightness;

  void main() {
    vec2 point = gl_PointCoord - vec2(0.5);
    float radial = length(point);
    float spark = 1.0 - smoothstep(0.08, 0.48, radial);
    float horizontal = exp(-abs(point.y) * 34.0) *
      (1.0 - smoothstep(0.08, 0.5, abs(point.x)));
    float shape = max(spark, horizontal * 0.46);
    float alpha = shape * vBrightness * (0.24 + gatewayBrightness * 0.44);
    if (alpha < 0.008) discard;
    vec3 deepPurple = vec3(0.27, 0.065, 0.5);
    vec3 lavender = vec3(0.82, 0.58, 1.0);
    float heat = clamp(vHot * 0.52 + step(1.5, vBehavior) * 0.12, 0.0, 0.72);
    vec3 color = mix(deepPurple, lavender, 0.32 + heat);
    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function Z(e,t){return Number.isFinite(e)?e:t}function Je(e,t){let n=Z(e,t);return n>0?n:t}function Ye({layerCount:e,segments:t,filament:n}){let r=Math.max(0,Math.floor(e)),i=Math.max(3,Math.floor(t)),a=(i+1)*2,o=r*a,s=new Float32Array(o*3),c=new Float32Array(o),l=new Float32Array(o),u=new Float32Array(o),d=new Float32Array(o),f=new Float32Array(o),p=new Float32Array(o),m=new Float32Array(o),h=new Float32Array(o),g=o>65535?new Uint32Array(r*i*6):new Uint16Array(r*i*6),_=Math.PI*2;for(let e=0;e<r;e+=1){let t=(e*2.3999632297+(n?.73:.18))%_,r=e%3==1?-1:1,o=n?.105+e%7*.031+Math.floor(e/7)*.009:[.128,.205,.282,.345,.39][e]??.39,s=n?.00125+e%4*22e-5:[.012,.0072,.0046,.0038,.0032][e]??.0032,v=e*a;for(let a=0;a<=i;a+=1){let g=a/i*_*(n?1.12+e%3*.09:1);for(let i=0;i<2;i+=1){let _=v+a*2+i;c[_]=g,l[_]=i===0?-1:1,u[_]=e,d[_]=t,f[_]=o,p[_]=s,m[_]=r,h[_]=+!!n}}for(let t=0;t<i;t+=1){let n=v+t*2,r=(e*i+t)*6;g[r]=n,g[r+1]=n+1,g[r+2]=n+2,g[r+3]=n+2,g[r+4]=n+1,g[r+5]=n+3}}let v=new V;return v.setAttribute(`position`,new R(s,3)),v.setAttribute(`ribbonAngle`,new R(c,1)),v.setAttribute(`ribbonSide`,new R(l,1)),v.setAttribute(`ribbonLayer`,new R(u,1)),v.setAttribute(`ribbonPhase`,new R(d,1)),v.setAttribute(`ribbonRadius`,new R(f,1)),v.setAttribute(`ribbonWidth`,new R(p,1)),v.setAttribute(`ribbonDirection`,new R(m,1)),v.setAttribute(`ribbonKind`,new R(h,1)),v.setIndex(new R(g,1)),v}function Xe(e){let t=Ve(e),n=new V;return n.setAttribute(`position`,new R(new Float32Array(t.radii.length*3),3)),n.setAttribute(`particleAngle`,new R(t.initialAngles,1)),n.setAttribute(`particleRadius`,new R(t.radii,1)),n.setAttribute(`particleOrbitSpeed`,new R(t.orbitalSpeeds,1)),n.setAttribute(`particleRadialDrift`,new R(t.radialDrifts,1)),n.setAttribute(`particlePhase`,new R(t.phases,1)),n.setAttribute(`particleVerticalOffset`,new R(t.verticalOffsets,1)),n.setAttribute(`particleSize`,new R(t.sizes,1)),n.setAttribute(`particleBrightness`,new R(t.brightness,1)),n.setAttribute(`particleBehavior`,new D(t.behaviorTypes,1)),n}function Ze(e){return{time:{value:0},pixelRatio:{value:Je(e.pixelRatio,1)},galaxyRadius:{value:Je(e.galaxyRadius,1)},coreExtent:{value:.46},shadowRadius:{value:Je(e.shadowRadius,.055)},accretionRadius:{value:Je(e.accretionRadius,.17)},lensRadius:{value:Je(e.lensRadius,.29)},gatewayProximity:{value:0},gatewayBrightness:{value:.5},gatewayRayThickness:{value:1},gatewayOrbitSpeed:{value:.18},gatewayTurbulence:{value:.025},gatewayPointerBend:{value:0},gatewayParticleSpeed:{value:.22},gatewayHighlightSpeed:{value:.12},gatewayEyeFocus:{value:0},gatewayPulsePhase:{value:0},gatewayFlowPhase:{value:0},gatewayPointerLocal:{value:new O},gatewayPointerDirection:{value:new O(1,0)},gatewayPointerValid:{value:0},activationProgress:{value:1},activationCompression:{value:0},activationFocus:{value:0},activationRupture:{value:0},activationShockwave:{value:0},activationParticlePeel:{value:0},reducedMotion:{value:0}}}function Qe(e){let t=e.quality,n=Se[t],r=Ze(e),i=new I;i.name=`warpkeep-gateway-vfx-${t}`;let a=[],o=[],s=Ye({layerCount:n.ribbonCount,segments:n.ribbonSegments,filament:!1}),c=new L({transparent:!0,depthWrite:!1,side:0,blending:2,uniforms:r,vertexShader:We,fragmentShader:Ge}),l=new z(s,c);l.name=`warpkeep-gateway-ribbons`,l.position.z=.11,l.renderOrder=3,l.frustumCulled=!1,i.add(l),a.push(s),o.push(c);let u=r.coreExtent.value,d=new N(e.galaxyRadius*u*2,e.galaxyRadius*u*2),f=new L({transparent:!0,depthWrite:!1,side:0,blending:1,uniforms:r,vertexShader:He,fragmentShader:Ue}),p=new z(d,f);if(p.name=`warpkeep-gateway-eye-lens`,p.position.z=.24,p.renderOrder=4,i.add(p),a.push(d),o.push(f),n.filamentCount>0){let e=Ye({layerCount:n.filamentCount,segments:n.filamentSegments,filament:!0}),t=new L({transparent:!0,depthWrite:!1,side:0,blending:2,uniforms:r,vertexShader:We,fragmentShader:Ge}),s=new z(e,t);s.name=`warpkeep-gateway-filaments`,s.position.z=.28,s.renderOrder=5,s.frustumCulled=!1,i.add(s),a.push(e),o.push(t)}let m=Xe(n.particleCount),h=new L({transparent:!0,depthWrite:!1,blending:2,uniforms:r,vertexShader:Ke,fragmentShader:qe}),g=new ae(m,h);g.name=`warpkeep-gateway-residue`,g.position.z=.31,g.renderOrder=6,g.frustumCulled=!1,i.add(g),a.push(m),o.push(h);let _=!1;return{group:i,materials:o,stats:{quality:t,particleCount:n.particleCount,ribbonCount:n.ribbonCount,filamentCount:n.filamentCount,drawCalls:o.length,incrementalDrawCalls:Math.max(0,o.length-1),materialCount:o.length,geometryCount:a.length,renderTargetCount:0},update:e=>{let i=e.response,a=e.activation;r.time.value=Z(e.time,0),r.gatewayProximity.value=Z(i.proximity,0),r.gatewayBrightness.value=Z(i.brightness,.5)*Z(a.outerLuminanceScale,1),r.gatewayRayThickness.value=Z(i.rayThickness,1),r.gatewayOrbitSpeed.value=Z(i.orbitSpeed,.18),r.gatewayTurbulence.value=Z(i.turbulence,.025),r.gatewayPointerBend.value=Z(i.pointerBend,0),r.gatewayParticleSpeed.value=Z(i.particleSpeed,.22),r.gatewayHighlightSpeed.value=Z(i.highlightSpeed,.12),r.gatewayEyeFocus.value=Math.min(1,Math.max(0,Z(i.eyeFocus,0)+Z(a.eyeFocus,0)*.55)),r.gatewayPulsePhase.value=Z(e.pulsePhase,0),r.gatewayFlowPhase.value=Z(e.flowPhase,0),r.gatewayPointerLocal.value.copy(e.pointerLocal),r.gatewayPointerDirection.value.copy(e.pointerDirection),r.gatewayPointerValid.value=+!!e.pointerValid,r.activationProgress.value=Z(a.progress,1),r.activationCompression.value=Z(a.compression,0),r.activationFocus.value=Z(a.focus,0),r.activationRupture.value=Z(a.rupture,0),r.activationShockwave.value=n.shockwaveEnabled?Z(a.shockwave,0):0,r.activationParticlePeel.value=t===`reduced`?0:Z(a.particlePeel,0),r.reducedMotion.value=+!!e.reducedMotion},setPixelRatio:e=>{r.pixelRatio.value=Math.min(2,Je(e,1))},dispose:()=>{_||(_=!0,i.removeFromParent(),a.forEach(e=>e.dispose()),o.forEach(e=>e.dispose()))}}}function $e(e){return Math.min(1,Math.max(-1,e))}function et(e,t,n){let r=Math.max(1,n.width),i=Math.max(1,n.height),a=(e-n.left)/r*2-1,o=1-(t-n.top)/i*2;return{x:$e(a),y:$e(o)}}function tt(e){return e===`mouse`}function nt(e,t,n,r){let i=Math.max(0,Math.min(.25,n)),a=1-Math.exp(-Math.max(0,r)*i);return e+(t-e)*a}var rt={high:{path:`models/title/warpkeep-title-high.glb`,bytes:3844364,sha256:`2354a57d88be80e5568afb5754102c20c9ea0fe9a83aa5ac49c0d8dd67ae9ff5`,primaryTimeoutMs:2e4,sourceBounds:{min:[-6.8276704862,-545372e-10,-.2499984896],max:[6.8277085873,1.9000545372,.2499984896]},normalized:{safeWidth:15.6668513296,visualHeight:2.18,depth:.5736478127,uniformScale:1.1473025571,pivot:`bottom-center`}},compact:{path:`models/title/warpkeep-title-compact.glb`,bytes:1714060,sha256:`d29435dfa3a5fbf5103a825cc00bb3ffcef7694167a7fb7303fa89af242d7af8`,primaryTimeoutMs:16e3,sourceBounds:{min:[-6.8278748744,-83843e-10,-.250056647],max:[6.8279107023,1.9000083843,.250056647]},normalized:{safeWidth:15.6680788548,visualHeight:2.18,depth:.5738091363,uniformScale:1.1473582949,pivot:`bottom-center`}}},it=Object.freeze({safeWidth:rt.compact.normalized.safeWidth,visualHeight:2.18,anchor:[0,-1.52,.28],pivot:`bottom-center`}),at=new Map;function ot(e,t){let n=p(t),r=rt[n],i=e.endsWith(`/`)?e:`${e}/`;return{...r,profile:n,url:`${i}${r.path}`}}async function Q(e){let t=await crypto.subtle.digest(`SHA-256`,e);return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function st(){return new DOMException(`Title model load was cancelled.`,`AbortError`)}async function ct(e,t){if(!Number.isSafeInteger(t)||t<=0)throw Error(`Invalid Warpkeep title response limit.`);let n=e.body?.getReader();if(!n){let n=await e.arrayBuffer();if(n.byteLength!==t)throw Error(`Warpkeep title integrity check failed: response does not match its exact byte budget.`);return n}let r=e.headers.get(`content-length`),i=e.headers.get(`content-encoding`);if(r!==null){if(!/^\d+$/.test(r))throw Error(`Warpkeep title response has an invalid Content-Length.`);let e=Number(r);if(!Number.isSafeInteger(e)||e>t)throw Error(`Warpkeep title integrity check failed: response exceeds its exact byte budget.`);if(!i&&e!==t)throw Error(`Warpkeep title integrity check failed: response does not match its exact byte budget.`)}let a=new Uint8Array(t),o=0;try{for(;;){let{done:e,value:r}=await n.read();if(e)break;if(!ArrayBuffer.isView(r)||r.BYTES_PER_ELEMENT!==1||o+r.byteLength>t){try{await n.cancel(`Warpkeep title response exceeded its exact byte budget.`)}catch{}throw Error(`Warpkeep title integrity check failed: response exceeds its exact byte budget.`)}a.set(r,o),o+=r.byteLength}}finally{n.releaseLock()}if(o!==t)throw Error(`Warpkeep title integrity check failed: response does not match its exact byte budget.`);return a.buffer}function lt(e){let t=new AbortController,n,r={controller:t,consumers:0,releaseGeneration:0,settled:!1,promise:Promise.resolve(new ArrayBuffer(0))},i=fetch(e.url,{credentials:`same-origin`,redirect:`error`,referrerPolicy:`no-referrer`,signal:t.signal}).then(async t=>{if(!t.ok)throw Error(`Title model request failed with ${t.status}.`);let n=await ct(t,e.bytes);if(await Q(n)!==e.sha256)throw Error(`Warpkeep ${e.profile} title model failed its integrity check.`);return n}),a=new Promise((r,i)=>{n=setTimeout(()=>{t.abort(),i(Error(`Warpkeep ${e.profile} title model timed out after ${e.primaryTimeoutMs}ms.`))},e.primaryTimeoutMs)});return r.promise=Promise.race([i,a]).catch(n=>{throw t.abort(),at.get(e.url)===r&&at.delete(e.url),n}).finally(()=>{r.settled=!0,n!==void 0&&clearTimeout(n)}),at.set(e.url,r),r}function ut(e,t){if(t?.aborted)return Promise.reject(st());let n=at.get(e.url)??lt(e);return n.consumers+=1,n.releaseGeneration+=1,n.releaseGeneration,new Promise((r,i)=>{let a=!1,o=()=>{if(!a&&(a=!0,t?.removeEventListener(`abort`,s),n.consumers=Math.max(0,n.consumers-1),!n.settled&&n.consumers===0)){let t=++n.releaseGeneration;queueMicrotask(()=>{!n.settled&&n.consumers===0&&n.releaseGeneration===t&&(at.get(e.url)===n&&at.delete(e.url),n.controller.abort())})}},s=()=>{o(),i(st())};t?.addEventListener(`abort`,s,{once:!0}),n.promise.then(e=>{a||(o(),r(e))},e=>{a||(o(),i(e))}),n.releaseGeneration})}async function dt(e,n){let[{GLTFLoader:r},{MeshoptDecoder:i}]=await Promise.all([t(()=>import(`./GLTFLoader-EZ5xqKp4.js`),__vite__mapDeps([0,1,2,3])),t(()=>import(`./meshopt_decoder.module-DXTYc6wn.js`),[])]),a=new r;return a.setMeshoptDecoder(i),(await a.parseAsync(e,n)).scene}function ft(e,t){e.updateMatrixWorld(!0);let n=new ie().setFromObject(e),r=n.getSize(new A),i=n.getCenter(new A);if(!Number.isFinite(r.x)||!Number.isFinite(r.y)||!Number.isFinite(r.z)||r.x<=0||r.y<=0||r.z<=0)throw Error(`Warpkeep title model has invalid bounds.`);let a=t/r.y;e.position.sub(new A(i.x,n.min.y,i.z));let o=new I;o.name=`warpkeep-title-normalization`,o.scale.setScalar(a),o.add(e);let s=new I;return s.name=`warpkeep-title-model`,s.add(o),{group:s,safeWidth:r.x*a,uniformScale:a}}function $(e){let t=new Set,n=new Set,r=new Set,i=e=>{e instanceof se&&!r.has(e.uuid)&&(r.add(e.uuid),e.dispose())};e.traverse(e=>{let r=e;r.geometry&&!t.has(r.geometry.uuid)&&(t.add(r.geometry.uuid),r.geometry.dispose()),(r.material?Array.isArray(r.material)?r.material:[r.material]:[]).forEach(e=>{if(n.has(e.uuid))return;n.add(e.uuid),Object.values(e).forEach(i);let t=e.uniforms;t&&Object.values(t).forEach(e=>i(e.value)),e.dispose()})})}async function pt({baseUrl:e,quality:t,targetHeight:n,signal:r,parser:i=dt}){let a=ot(e,t);if(r?.aborted)throw st();let o=await ut(a,r);if(r?.aborted)throw st();let s=await i(o.slice(0),a.url.slice(0,a.url.lastIndexOf(`/`)+1));if(r?.aborted)throw $(s),st();try{return{...ft(s,n),profile:a.profile}}catch(e){throw $(s),e}}function mt(e){let t=new Map;e.traverse(e=>{let n=e.material;(n?Array.isArray(n)?n:[n]:[]).forEach(e=>t.set(e.uuid,e))});let n=[...t.values()].map(e=>({material:e,opacity:e.opacity,transparent:e.transparent,depthWrite:e.depthWrite})),r=!1;return{materials:n.map(({material:e})=>e),setOpacity:e=>{let t=Math.min(1,Math.max(0,e));r=!1,n.forEach(e=>{let n=t<1;(e.material.transparent!==(n?!0:e.transparent)||e.material.depthWrite!==(n?!1:e.depthWrite))&&(e.material.transparent=n?!0:e.transparent,e.material.depthWrite=n?!1:e.depthWrite,e.material.needsUpdate=!0),e.material.opacity=e.opacity*t})},restore:()=>{r||(r=!0,n.forEach(e=>{(e.material.transparent!==e.transparent||e.material.depthWrite!==e.depthWrite)&&(e.material.transparent=e.transparent,e.material.depthWrite=e.depthWrite,e.material.needsUpdate=!0),e.material.opacity=e.opacity}))}}}var ht=1e4,gt=16e3,_t=2e4;function vt(e){return e===`high`?_t:gt}function yt(e){return e?160:800}function bt(e,t,n,r=1){return{phase:`model-loading`,mountStartedAt:t,minimumFallbackAt:t+ht,primaryDeadlineAt:t+vt(e),fallbackEligible:!1,fallbackLocked:!1,requestId:r,desiredProfile:e,activeProfile:null,candidateProfile:null,transitionStartedAt:null,reducedMotion:n,failure:null}}function xt(e,t=e.failure){return e.activeProfile||e.fallbackLocked||e.phase===`disposed`?e:{...e,phase:`fallback-compiling`,fallbackEligible:!0,fallbackLocked:!0,candidateProfile:null,transitionStartedAt:null,failure:t}}function St(e,t){return!e.fallbackLocked&&e.requestId===t}function Ct(e,t){if(e.phase===`disposed`)return e;if(t.type===`dispose`)return{...e,phase:`disposed`};switch(t.type){case`minimum-elapsed`:return t.now<e.minimumFallbackAt||e.activeProfile||e.fallbackLocked?e:e.phase===`model-failed-waiting`?xt(e):{...e,fallbackEligible:!0};case`primary-timeout`:return t.now<e.primaryDeadlineAt||e.activeProfile||![`model-loading`,`model-compiling`,`model-failed-waiting`].includes(e.phase)?e:xt(e,e.failure??`The title model exceeded its bounded startup deadline.`);case`model-loaded`:return St(e,t.requestId)?e.phase===`model-loading`?{...e,phase:`model-compiling`}:e.phase===`replacement-loading`?{...e,phase:`replacement-compiling`,candidateProfile:e.desiredProfile}:e:e;case`model-compiled`:return St(e,t.requestId)?e.phase===`model-compiling`?{...e,phase:`model-revealing`,activeProfile:e.desiredProfile,transitionStartedAt:t.now,failure:null}:e.phase===`replacement-compiling`?{...e,phase:`replacement-crossfading`,candidateProfile:e.desiredProfile,transitionStartedAt:t.now,failure:null}:e:e;case`model-failed`:{if(!St(e,t.requestId))return e;if(e.phase===`replacement-loading`||e.phase===`replacement-compiling`)return{...e,phase:`model-ready`,candidateProfile:null,transitionStartedAt:null,failure:t.reason};if(e.phase!==`model-loading`&&e.phase!==`model-compiling`)return e;let n={...e,failure:t.reason};return t.now>=e.minimumFallbackAt||e.fallbackEligible?xt(n,t.reason):{...n,phase:`model-failed-waiting`}}case`quality-requested`:{if(e.fallbackLocked)return e;let n=!e.activeProfile&&[`model-loading`,`model-compiling`,`model-failed-waiting`].includes(e.phase);if(n&&t.profile===e.desiredProfile)return e;let r=!!e.activeProfile&&[`replacement-loading`,`replacement-compiling`,`replacement-crossfading`].includes(e.phase);return r&&t.profile===e.candidateProfile?e:e.activeProfile&&t.profile===e.activeProfile?r?{...e,phase:`model-ready`,requestId:t.requestId,desiredProfile:t.profile,candidateProfile:null,transitionStartedAt:null,failure:null}:e:e.activeProfile&&[`model-revealing`,`model-ready`,`replacement-loading`,`replacement-compiling`,`replacement-crossfading`].includes(e.phase)?{...e,phase:`replacement-loading`,requestId:t.requestId,desiredProfile:t.profile,candidateProfile:t.profile,transitionStartedAt:null,failure:null}:n?{...e,phase:`model-loading`,requestId:t.requestId,desiredProfile:t.profile,primaryDeadlineAt:e.mountStartedAt+vt(t.profile),transitionStartedAt:null,failure:null}:e}case`replacement-timeout`:return e.requestId!==t.requestId||!e.activeProfile||e.phase!==`replacement-loading`&&e.phase!==`replacement-compiling`?e:{...e,phase:`model-ready`,candidateProfile:null,transitionStartedAt:null,failure:t.reason};case`fallback-compiled`:return e.phase===`fallback-compiling`?{...e,phase:`fallback-revealing`,transitionStartedAt:t.now}:e;case`fallback-create-failed`:return e.phase===`fallback-compiling`?{...e,phase:`fallback-failed`,transitionStartedAt:null,failure:t.reason}:e;case`fallback-compile-failed`:return e.phase===`fallback-compiling`?{...e,phase:`fallback-ready`,transitionStartedAt:null,failure:t.reason}:e;case`transition-finished`:return e.phase===`model-revealing`?{...e,phase:`model-ready`,transitionStartedAt:null}:e.phase===`fallback-revealing`?{...e,phase:`fallback-ready`,transitionStartedAt:null}:e.phase===`replacement-crossfading`&&e.candidateProfile?{...e,phase:`model-ready`,activeProfile:e.candidateProfile,candidateProfile:null,transitionStartedAt:null}:e;case`reduced-motion-changed`:{if(e.reducedMotion===t.reducedMotion)return e;if(e.transitionStartedAt===null)return{...e,reducedMotion:t.reducedMotion};let n=wt(e,t.now);return{...e,reducedMotion:t.reducedMotion,transitionStartedAt:t.now-n*yt(t.reducedMotion)}}}}function wt(e,t){return e.transitionStartedAt===null?1:Math.min(1,Math.max(0,(t-e.transitionStartedAt)/yt(e.reducedMotion)))}function Tt(e,t){return e instanceof Error&&e.message.trim().length>0?e.message:t}function Et(e){return e instanceof DOMException&&e.name===`AbortError`}function Dt(e){let t=mt(e.group);return t.setOpacity(0),{...e,reveal:t}}function Ot({scene:e,camera:t,renderer:n,baseUrl:r,initialQuality:i,reducedMotion:a,createFallback:o,onNeedsRender:s=()=>void 0,onStateChange:c=()=>void 0,now:l=()=>performance.now(),loadTitle:u=pt}){let d=new I;d.name=`warpkeep-title-stage`,d.position.set(...it.anchor),e.add(d);let f=ot(r,i).profile,p=bt(f,l(),a),m=null,h=null,g=it.safeWidth,_=p.requestId,v=null,y=0,b=0,x=0,S=!1,C=new WeakSet,w=()=>{c(p),s()},T=e=>{e&&window.clearTimeout(e)},E=e=>{!e||C.has(e.group)||(C.add(e.group),d.remove(e.group),$(e.group))},D=()=>{let e=h;h=null,E(e)},O=e=>e===p?!1:(p=e,w(),!0),k=()=>void 0,A=e=>{let t=p.phase,n=O(Ct(p,e));return n&&p.phase===`fallback-compiling`&&t!==`fallback-compiling`&&k(),n},j=()=>{T(b);let e=Math.max(0,p.primaryDeadlineAt-l());b=window.setTimeout(()=>{b=0,A({type:`primary-timeout`,now:l()})},e)},ee=(e,t)=>{T(x);let n=ot(r,t).profile;x=window.setTimeout(()=>{x=0,v?.abort(),v=null,D(),A({type:`replacement-timeout`,requestId:e,reason:`The replacement title model exceeded its bounded startup deadline.`})},vt(n))},M=(e,t)=>{let n=Ct(p,{type:`model-compiled`,requestId:t,now:l()});if(n===p){h===e&&(h=null),E(e);return}n.phase===`model-revealing`?(T(b),T(y),b=0,y=0,m=e,h=null,g=e.safeWidth):n.phase===`replacement-crossfading`&&(T(x),x=0),O(n)},N=(i,a)=>{v?.abort(),v=new AbortController;let o=v;D(),u({baseUrl:r,quality:i,targetHeight:it.visualHeight,signal:o.signal}).then(r=>{if(S||o.signal.aborted||p.requestId!==a||p.fallbackLocked){$(r.group);return}let i=Ct(p,{type:`model-loaded`,requestId:a});if(i===p){$(r.group);return}O(i);let c=Dt(r);h=c,d.add(c.group),s();try{if(n.compile(e,t),S||o.signal.aborted||h!==c||p.requestId!==a||p.fallbackLocked){h===c&&(h=null),E(c);return}M(c,a)}catch(e){if(h===c&&(h=null),E(c),S||o.signal.aborted||p.requestId!==a)return;A({type:`model-failed`,requestId:a,now:l(),reason:Tt(e,`The title model could not be prepared for rendering.`)})}}).catch(e=>{S||o.signal.aborted||Et(e)||p.requestId!==a||A({type:`model-failed`,requestId:a,now:l(),reason:Tt(e,`The title model could not be loaded.`)})}).finally(()=>{v===o&&(v=null)})};return k=()=>{v?.abort(),v=null,T(b),T(x),b=0,x=0,D();let r;try{r=Dt(o()),m=r,g=r.safeWidth,d.add(r.group)}catch(e){A({type:`fallback-create-failed`,reason:Tt(e,`The fallback title could not be created.`)});return}try{if(n.compile(e,t),S||m!==r||p.phase!==`fallback-compiling`)return;A({type:`fallback-compiled`,now:l()})}catch(e){if(S||m!==r||p.phase!==`fallback-compiling`)return;r.reveal.restore(),A({type:`fallback-compile-failed`,reason:Tt(e,`The fallback title could not be prepared for rendering.`)})}},y=window.setTimeout(()=>{y=0,A({type:`minimum-elapsed`,now:l()})},Math.max(0,p.minimumFallbackAt-l())),j(),c(p),N(i,p.requestId),{stage:d,getSafeWidth:()=>g,getState:()=>p,setQuality:e=>{if(S)return;let t=++_,n=p,i=Ct(p,{type:`quality-requested`,requestId:t,profile:ot(r,e).profile});if(i!==p){if(O(i),p.phase===`model-ready`&&n.candidateProfile){v?.abort(),v=null,T(x),x=0,m?.reveal.restore(),D(),s();return}p.phase!==`replacement-loading`&&p.phase!==`model-loading`||(p.phase===`replacement-loading`&&m?.reveal.restore(),N(e,t),p.phase===`replacement-loading`?ee(t,e):j())}},setReducedMotion:e=>{S||p.reducedMotion===e||A({type:`reduced-motion-changed`,reducedMotion:e,now:l()})},update:e=>{if(S)return!1;if(p.phase===`model-revealing`||p.phase===`fallback-revealing`){let t=wt(p,e);return m?.reveal.setOpacity(t),t>=1?(m?.reveal.restore(),A({type:`transition-finished`}),!1):!0}if(p.phase===`replacement-crossfading`&&m&&h){let t=wt(p,e);if(m.reveal.setOpacity(1-t),h.reveal.setOpacity(t),t>=1){let e=m;return h.reveal.restore(),m=h,h=null,g=m.safeWidth,d.remove(e.group),$(e.group),A({type:`transition-finished`}),!1}return!0}return!1},dispose:()=>{if(S)return;S=!0,v?.abort(),v=null,T(y),T(b),T(x),y=0,b=0,x=0,p=Ct(p,{type:`dispose`});let t=m;m=null;let n=h;h=null,E(t),E(n),e.remove(d),c(p)}}}function kt(e,t,n,r){for(let[i,a]of[[e,`viewport width`],[t,`viewport height`],[n,`visible world width`],[r,`title safe width`]])if(!Number.isFinite(i)||i<=0)throw RangeError(`Title ${a} must be a finite positive number.`);let i=e/t<1,a=!i&&t<=460,o=i?u.title.mobileViewportWidth:u.title.desktopViewportWidth;return{portrait:i,shortLandscape:a,scale:Math.min(1.16,n*o/r),baseY:i?-.46:a?-2.9:-1.52,cameraTargetY:i?.08:-.42,restYawRadians:(i?-.35:-1.1)*Math.PI/180,cameraDriftX:i?.025:.1}}function At(e){return Object.values(e).every(Number.isFinite)}function jt(e){let t={pointerX:e.pointerCurrent.x,pointerY:e.pointerCurrent.y,galaxyX:e.galaxyGroup.position.x,galaxyY:e.galaxyGroup.position.y,galaxyZ:e.galaxyGroup.position.z,galaxyScaleX:e.galaxyGroup.scale.x,galaxyScaleY:e.galaxyGroup.scale.y,galaxyScaleZ:e.galaxyGroup.scale.z,galaxyGrowthScale:e.galaxyGrowthGroup.scale.x,galaxyParallaxRotationX:e.galaxyParallaxGroup.rotation.x,galaxyParallaxRotationY:e.galaxyParallaxGroup.rotation.y,cameraX:e.camera.position.x,cameraY:e.camera.position.y,cameraZ:e.camera.position.z,cameraQuaternionX:e.camera.quaternion.x,cameraQuaternionY:e.camera.quaternion.y,cameraQuaternionZ:e.camera.quaternion.z,cameraQuaternionW:e.camera.quaternion.w};if(!At(t))throw Error(`TITLE_DEPARTURE_POSE_INVALID`);return Object.freeze(t)}function Mt(e,t){if(!At(e))throw Error(`TITLE_DEPARTURE_POSE_INVALID`);t.pointerTarget.x=e.pointerX,t.pointerTarget.y=e.pointerY,t.pointerCurrent.x=e.pointerX,t.pointerCurrent.y=e.pointerY,t.galaxyGroup.position.set(e.galaxyX,e.galaxyY,e.galaxyZ),t.galaxyGroup.scale.set(e.galaxyScaleX,e.galaxyScaleY,e.galaxyScaleZ),t.galaxyGrowthGroup.scale.setScalar(e.galaxyGrowthScale),t.galaxyParallaxGroup.rotation.x=e.galaxyParallaxRotationX,t.galaxyParallaxGroup.rotation.y=e.galaxyParallaxRotationY,t.camera.position.set(e.cameraX,e.cameraY,e.cameraZ),t.camera.quaternion.set(e.cameraQuaternionX,e.cameraQuaternionY,e.cameraQuaternionZ,e.cameraQuaternionW)}function Nt(){return a().available}function Pt(e){let t=e>>>0;return()=>(t=Math.imul(1664525,t)+1013904223,(t>>>0)/4294967296)}function Ft(e,t,n,r,i=0,a=0,o=0){return new L({transparent:!0,depthWrite:!1,vertexColors:!0,blending:2,uniforms:{time:{value:0},pixelRatio:{value:e},pointScale:{value:t},maxPointSize:{value:u.galaxy.maxPointSize},layerOpacity:{value:n},flickerSpeed:{value:r},softness:{value:i},coreFade:{value:a},warpStrength:{value:o},galaxyRadius:{value:u.galaxy.radius},shadowRadius:{value:u.core.shadowRadius},gatewayPointerLocal:{value:new O},gatewayPointerValid:{value:0},gatewayLocalDistortion:{value:0}},vertexShader:`
      attribute float phase;
      attribute float size;
      attribute float brightness;
      varying float vBrightness;
      varying float vPhase;
      varying float vCoreFade;
      varying vec3 vColor;
      uniform float time;
      uniform float pixelRatio;
      uniform float pointScale;
      uniform float maxPointSize;
      uniform float flickerSpeed;
      uniform float coreFade;
      uniform float warpStrength;
      uniform float galaxyRadius;
      uniform float shadowRadius;
      uniform vec2 gatewayPointerLocal;
      uniform float gatewayPointerValid;
      uniform float gatewayLocalDistortion;

      void main() {
        vBrightness = brightness;
        vPhase = phase;
        vColor = color;
        vec3 localPosition = position;
        vec2 normalizedPosition = localPosition.xy / galaxyRadius;
        float pointerLengthSquared = dot(gatewayPointerLocal, gatewayPointerLocal);
        if (
          warpStrength > 0.0 &&
          gatewayPointerValid > 0.5 &&
          gatewayLocalDistortion > 0.0
        ) {
          float along = clamp(
            dot(normalizedPosition, gatewayPointerLocal) / max(0.0004, pointerLengthSquared),
            0.0,
            1.0
          );
          vec2 nearest = gatewayPointerLocal * along;
          float fieldDistance = length(normalizedPosition - nearest);
          float lineField = 1.0 - smoothstep(0.035, 0.18, fieldDistance);
          lineField *= smoothstep(0.02, 0.22, along) *
            (1.0 - smoothstep(0.78, 1.0, along));
          float normalizedRadius = length(normalizedPosition);
          float coreField = smoothstep(
            shadowRadius * 0.72,
            shadowRadius * 1.45,
            normalizedRadius
          ) * (1.0 - smoothstep(0.07, 0.24, normalizedRadius));
          float centeredPointer = 1.0 - smoothstep(
            0.018,
            0.075,
            sqrt(pointerLengthSquared)
          );
          float field = max(lineField, coreField * centeredPointer);
          vec2 inward = -normalize(normalizedPosition + vec2(0.00001));
          vec2 tangent = vec2(-inward.y, inward.x);
          vec2 warp = (inward * 0.014 + tangent * 0.008) *
            field * gatewayLocalDistortion * warpStrength;
          localPosition.xy += warp * galaxyRadius;
          normalizedPosition = localPosition.xy / galaxyRadius;
        }
        float normalizedRadius = length(normalizedPosition);
        float coreVisibility = smoothstep(
          shadowRadius * 0.72,
          shadowRadius * 2.2,
          normalizedRadius
        );
        vCoreFade = mix(1.0, coreVisibility, coreFade);
        vec4 viewPosition = modelViewMatrix * vec4(localPosition, 1.0);
        float flicker = 0.94 + 0.06 * sin(time * flickerSpeed + phase);
        float perspectiveSize = size * pixelRatio * pointScale * flicker / max(7.0, -viewPosition.z);
        gl_PointSize = clamp(perspectiveSize, 1.0, maxPointSize);
        gl_Position = projectionMatrix * viewPosition;
      }
    `,fragmentShader:`
      varying float vBrightness;
      varying float vPhase;
      varying float vCoreFade;
      varying vec3 vColor;
      uniform float time;
      uniform float layerOpacity;
      uniform float flickerSpeed;
      uniform float softness;

      void main() {
        vec2 centered = gl_PointCoord - vec2(0.5);
        float radius = length(centered);
        float stellarCore = 1.0 - smoothstep(0.035, 0.5, radius);
        float horizontalFlare = exp(-abs(centered.y) * 40.0) *
          (1.0 - smoothstep(0.025, 0.48, abs(centered.x)));
        float verticalFlare = exp(-abs(centered.x) * 44.0) *
          (1.0 - smoothstep(0.025, 0.46, abs(centered.y)));
        float starShape = max(stellarCore, (horizontalFlare + verticalFlare) * 0.15);
        float dustShape = pow(max(0.0, 1.0 - radius * 2.0), 2.2);
        float pointShape = mix(starShape, dustShape, softness);
        float flicker = 0.95 + 0.05 * sin(time * flickerSpeed + vPhase);
        float alpha = pointShape * vBrightness * layerOpacity * flicker * vCoreFade;
        if (alpha < 0.006) discard;
        gl_FragColor = vec4(vColor, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `})}function It(e,t){let n=Pt(1262830928),r=new Float32Array(e*3),i=new Float32Array(e*3),a=new Float32Array(e),o=new Float32Array(e),s=new Float32Array(e),c=new P(u.palette.coldStar),l=new P(`#a59bd2`),d=new P(u.palette.oldGold);for(let t=0;t<e;t+=1){let e=t*3,u=n()>.966,f=c.clone().lerp(l,n()*.3);n()>.94&&f.lerp(d,.12+n()*.12),r[e]=(n()-.5)*48,r[e+1]=(n()-.5)*30+1,r[e+2]=-8-n()*58,i[e]=f.r,i[e+1]=f.g,i[e+2]=f.b,a[t]=n()*Math.PI*2,o[t]=u?2.15+n()*1.5:.5+n()*1.08,s[t]=u?.7+n()*.28:.15+n()*.56}let f=new V;f.setAttribute(`position`,new R(r,3)),f.setAttribute(`color`,new R(i,3)),f.setAttribute(`phase`,new R(a,1)),f.setAttribute(`size`,new R(o,1)),f.setAttribute(`brightness`,new R(s,1));let p=Ft(t,86,.86,.38),m=new ae(f,p);return m.frustumCulled=!1,{points:m,material:p}}function Lt(e){let t=e!==`high`,n=Se[e].noiseOctaves,r=t?`broadNoise`:`fbm(point * 10.5 + vec2(4.3, -2.1))`,i=t?`mix(broadNoise, fineNoise, 0.45)`:`fbm(point * 13.5 + vec2(-3.7, 8.2))`,a=t?`fineNoise`:`fbm(point * 23.0 + vec2(7.0, 3.0))`,o=t?`broadNoise`:`fbm(point * 7.4 + vec2(-8.0, 5.0))`;return new L({transparent:!0,depthWrite:!1,side:0,blending:2,uniforms:{time:{value:0},purpleMix:{value:u.galaxy.purpleMix},armCount:{value:u.galaxy.armCount},spiralTurns:{value:u.galaxy.spiralTurns},shineSpeed:{value:Math.PI*2/u.galaxy.shinePeriodSeconds},shadowRadius:{value:u.core.shadowRadius},accretionRadius:{value:u.core.accretionRadius},lensRadius:{value:u.core.lensRadius},gatewayProximity:{value:0},gatewayPulsePhase:{value:0},gatewayFlowPhase:{value:0},gatewaySurge:{value:0},gatewaySurgeProgress:{value:1},reducedMotion:{value:0},gatewayPointerLocal:{value:new O},gatewayPointerValid:{value:0},gatewayLocalDistortion:{value:0},gatewayEyeFocus:{value:0}},vertexShader:`
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform float time;
      uniform float purpleMix;
      uniform float armCount;
      uniform float spiralTurns;
      uniform float shineSpeed;
      uniform float shadowRadius;
      uniform float accretionRadius;
      uniform float lensRadius;
      uniform float gatewayProximity;
      uniform float gatewayPulsePhase;
      uniform float gatewayFlowPhase;
      uniform float gatewaySurge;
      uniform float gatewaySurgeProgress;
      uniform float reducedMotion;
      uniform vec2 gatewayPointerLocal;
      uniform float gatewayPointerValid;
      uniform float gatewayLocalDistortion;
      uniform float gatewayEyeFocus;

      const float TAU = 6.28318530718;

      float hash21(vec2 point) {
        point = fract(point * vec2(123.34, 456.21));
        point += dot(point, point + 45.32);
        return fract(point.x * point.y);
      }

      float valueNoise(vec2 point) {
        vec2 cell = floor(point);
        vec2 local = fract(point);
        local = local * local * (3.0 - 2.0 * local);
        float a = hash21(cell);
        float b = hash21(cell + vec2(1.0, 0.0));
        float c = hash21(cell + vec2(0.0, 1.0));
        float d = hash21(cell + vec2(1.0, 1.0));
        return mix(mix(a, b, local.x), mix(c, d, local.x), local.y);
      }

      float fbm(vec2 point) {
        float value = 0.0;
        float amplitude = 0.52;
        mat2 turn = mat2(0.8, -0.6, 0.6, 0.8);
        for (int octave = 0; octave < ${n}; octave += 1) {
          value += valueNoise(point) * amplitude;
          point = turn * point * 2.03 + vec2(13.1, 7.7);
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 rawPoint = (vUv - vec2(0.5)) * 2.0;
        vec2 point = rawPoint;
        float pointerLengthSquared = dot(gatewayPointerLocal, gatewayPointerLocal);
        if (
          gatewayPointerValid > 0.5 &&
          gatewayLocalDistortion > 0.0
        ) {
          float along = clamp(
            dot(point, gatewayPointerLocal) / max(0.0004, pointerLengthSquared),
            0.0,
            1.0
          );
          vec2 nearest = gatewayPointerLocal * along;
          float fieldDistance = length(point - nearest);
          float lineField = 1.0 - smoothstep(0.035, 0.19, fieldDistance);
          lineField *= smoothstep(0.02, 0.2, along) *
            (1.0 - smoothstep(0.8, 1.0, along));
          float pointRadius = length(point);
          float coreField = smoothstep(
            shadowRadius * 0.72,
            shadowRadius * 1.45,
            pointRadius
          ) * (1.0 - smoothstep(0.07, 0.24, pointRadius));
          float centeredPointer = 1.0 - smoothstep(
            0.018,
            0.075,
            sqrt(pointerLengthSquared)
          );
          float field = max(lineField, coreField * centeredPointer);
          vec2 inward = -normalize(point + vec2(0.00001));
          vec2 tangent = vec2(-inward.y, inward.x);
          point += (inward * 0.026 + tangent * 0.016) * field * gatewayLocalDistortion;
        }
        float radius = length(point);
        float rawRadius = length(rawPoint);
        if (rawRadius > 1.045) discard;

        float broadNoise = fbm(point * 4.8 + vec2(time * 0.002, -time * 0.0015));
        float fineNoise = fbm(point * 17.0 - vec2(time * 0.003, time * 0.001));
        float warpedRadius = radius * (0.955 + broadNoise * 0.095);
        float angle = atan(point.y, point.x);
        float spiralPhase = angle * armCount -
          warpedRadius * spiralTurns * TAU * armCount +
          (broadNoise - 0.5) * 2.1;
        float armWave = 0.5 + 0.5 * cos(spiralPhase);
        float secondaryWave = 0.5 + 0.5 * cos(spiralPhase + 0.65 + fineNoise * 0.72);
        float arm = pow(smoothstep(0.31, 0.99, armWave), 2.05);
        float feathers = pow(smoothstep(0.58, 0.99, secondaryWave), 3.1);
        float edgeFade = 1.0 - smoothstep(0.74, 1.035, radius);
        float innerFade = smoothstep(0.035, 0.16, radius);
        float dustLane = smoothstep(0.48, 0.79, ${r});
        float granularDust = pow(smoothstep(0.18, 0.94, fineNoise), 1.7);
        float clumpNoise = ${i};
        float clumps = smoothstep(0.34, 0.76, clumpNoise);
        float armDensity = (arm * 0.72 + feathers * 0.28) *
          (0.5 + granularDust * 0.5) * (0.55 + clumps * 0.45);
        armDensity *= mix(1.0, 0.4, dustLane) * innerFade * edgeFade;

        float coreNoise = ${a};
        float coreDistance = rawRadius * (0.985 + (coreNoise - 0.5) * 0.04);
        float gatewayActivity = clamp(gatewayProximity, 0.0, 1.0);
        float gatewayActivity2 = gatewayActivity * gatewayActivity;
        float gatewayPulse = mix(
          0.72,
          0.5 + 0.5 * sin(gatewayPulsePhase),
          1.0 - reducedMotion
        );
        float shadow = 1.0 - smoothstep(
          shadowRadius * (0.84 - gatewayEyeFocus * 0.025),
          shadowRadius * (1.16 - gatewayEyeFocus * 0.035),
          rawRadius
        );
        float accretionWidth = 0.038 + coreNoise * 0.014;
        float accretion = exp(-pow((coreDistance - accretionRadius) / accretionWidth, 2.0));
        float lensing = exp(-pow((coreDistance - lensRadius) / 0.065, 2.0));
        float coreBloom = exp(-coreDistance * 8.2) * (1.0 - shadow * 0.86);
        float accretionFlux = 0.86 + 0.14 * sin(
          angle * 3.0 - gatewayFlowPhase + coreNoise * 2.4
        );
        float accretionGain = 1.0 + gatewayPulse * 0.08 +
          gatewayActivity * 0.12 + gatewayActivity2 * 0.08 + gatewaySurge * 0.14;
        accretion *= accretionFlux * accretionGain;
        lensing *= 1.0 + gatewayActivity * 0.04 +
          gatewayActivity2 * 0.1 + gatewaySurge * 0.1;
        coreBloom *= 1.0 + gatewayPulse * 0.04 +
          gatewayActivity * 0.13 + gatewaySurge * 0.08;

        float residueEnvelope =
          smoothstep(lensRadius * 0.82, lensRadius * 1.02, coreDistance) *
          (1.0 - smoothstep(lensRadius * 1.52, lensRadius * 1.88, coreDistance));
        float residueWave = 0.5 + 0.5 * sin(
          coreDistance * 34.0 - angle * 4.0 - gatewayFlowPhase +
          (fineNoise - 0.5) * 3.2
        );
        float residue = pow(smoothstep(0.62, 0.98, residueWave), 3.0) *
          (0.35 + clumps * 0.65) * residueEnvelope;
        float residueGain = 0.05 + gatewayPulse * 0.022 +
          gatewayActivity * 0.05 + gatewayActivity2 * 0.07 + gatewaySurge * 0.075;
        float surgeRadius = mix(
          accretionRadius * 0.9,
          lensRadius * 1.55,
          clamp(gatewaySurgeProgress, 0.0, 1.0)
        );
        float surgeWidth = mix(0.022, 0.047, clamp(gatewaySurgeProgress, 0.0, 1.0));
        float surgeRing = exp(-pow((coreDistance - surgeRadius) / surgeWidth, 2.0)) *
          gatewaySurge * (0.58 + fineNoise * 0.42);

        float shineWave = 0.5 + 0.5 * cos(
          angle * 2.0 - warpedRadius * 15.0 - time * shineSpeed
        );
        float shine = pow(shineWave, 13.0) * (0.25 + arm * 0.75) * edgeFade;
        float peripheralDust = ${o} * edgeFade;
        float density = armDensity * 0.36 + peripheralDust * 0.045 +
          coreBloom * 0.25 + accretion * 0.24 + lensing * 0.075 + shine * 0.06 +
          residue * residueGain + surgeRing * 0.11;
        density *= 1.0 - shadow * 0.9;

        vec3 coldIvory = vec3(0.91, 0.94, 1.0);
        vec3 deepViolet = vec3(0.45, 0.16, 0.75);
        vec3 lavender = vec3(0.78, 0.45, 1.0);
        vec3 oldGold = vec3(0.54, 0.45, 0.31);
        vec3 color = mix(coldIvory, deepViolet, purpleMix * (0.7 + radius * 0.42));
        color *= 0.72 + granularDust * 0.4;
        color += deepViolet * arm * (0.18 + purpleMix * 0.28);
        color += lavender * (accretion * 0.5 + shine * 0.36 + lensing * 0.24);
        color += deepViolet * accretion * (
          0.28 + gatewayPulse * 0.15 + gatewayActivity * 0.28
        );
        color += deepViolet * residue * (0.55 + gatewayActivity * 0.45);
        color += lavender * surgeRing * 0.46;
        color += oldGold * coreBloom * 0.16;
        color *= 1.0 - shadow * 0.94;

        float alpha = density * (0.9 + broadNoise * 0.2) * edgeFade;
        if (alpha < 0.003) discard;
        gl_FragColor = vec4(color, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `})}function Rt(e,t){let n=e.phases.length,r=Math.max(1,Math.floor(n*.48)),i=new Float32Array(r*3),a=new Float32Array(r*3),o=new Float32Array(r),s=new Float32Array(r),c=new Float32Array(r),l=new P(`#7f3fb2`),d=new P(`#c6b5d8`),f=new P(u.palette.oldGold);for(let t=0;t<r;t+=1){let r=(t*11+3)%n,u=r*3,p=t*3,m=e.phases[r],h=e.temperature[r],g=l.clone().lerp(d,.08+h*.12);r%17==0&&g.lerp(f,.12),i[p]=e.positions[u]+Math.cos(m)*.035,i[p+1]=e.positions[u+1]+Math.sin(m)*.035,i[p+2]=e.positions[u+2]-.035,a[p]=g.r,a[p+1]=g.g,a[p+2]=g.b,o[t]=m,s[t]=1.3+e.sizes[r]*1.35,c[t]=.12+e.brightness[r]*.24}let p=new V;p.setAttribute(`position`,new R(i,3)),p.setAttribute(`color`,new R(a,3)),p.setAttribute(`phase`,new R(o,1)),p.setAttribute(`size`,new R(s,1)),p.setAttribute(`brightness`,new R(c,1));let m=Ft(t,112,.62,.16,.92,1,.76),h=new ae(p,m);return h.frustumCulled=!1,h.renderOrder=1,{points:h,material:m}}function zt(e,t){let n=_(e),r=new Float32Array(e*3),i=new P(`#e9e1eb`),a=new P(`#d7ddff`),o=new P(`#b068e8`);for(let t=0;t<e;t+=1){let e=t*3,s=n.temperature[t],c=o.clone().lerp(a,.18+s*.28);c.lerp(i,.08),r[e]=c.r,r[e+1]=c.g,r[e+2]=c.b}let s=new V;s.setAttribute(`position`,new R(n.positions,3)),s.setAttribute(`color`,new R(r,3)),s.setAttribute(`phase`,new R(n.phases,1)),s.setAttribute(`size`,new R(n.sizes,1)),s.setAttribute(`brightness`,new R(n.brightness,1)),s.computeBoundingSphere();let c=Ft(t,96,.72,.3,0,1,.46),l=new ae(s,c);return l.frustumCulled=!1,l.renderOrder=2,{stars:{points:l,material:c},dust:Rt(n,t)}}function Bt(e,t,n){let{stars:r,dust:i}=zt(e,t),a=Lt(n),o=new z(new N(u.galaxy.radius*2,u.galaxy.radius*2),a);o.position.z=-.075,o.renderOrder=0;let s=new M;s.name=`warpkeep-gateway-anchor`,s.position.z=.24;let c=new I;c.position.set(0,1.55,-18);let l=new I,d=new I,f=new I,p=new I;return f.rotation.x=Math.acos(u.galaxy.verticalScale),p.add(o,i.points,r.points,s),f.add(p),d.add(f),l.add(d),c.add(l),{group:c,parallaxGroup:l,growthGroup:d,spinGroup:p,gatewayAnchor:s,stars:r,dust:i,disc:o,discMaterial:a,particleCount:e}}function Vt(e,t){$(e),t.renderLists.dispose(),t.dispose()}var Ht=(0,H.forwardRef)(function({phase:e=`active`,onRequestEnterMenu:t,onReady:n,onMeaningfulInteraction:r,graphicsQuality:i=`balanced`},a){let o=(0,H.useRef)(null),p=(0,H.useRef)(null),_=(0,H.useRef)(null),v=(0,H.useRef)(null),y=(0,H.useRef)(null),b=(0,H.useRef)(0),x=(0,H.useRef)(!1),S=(0,H.useRef)(null),D=(0,H.useRef)(e),M=(0,H.useRef)(!1),N=(0,H.useRef)(!1),F=(0,H.useRef)({onRequestEnterMenu:t,onReady:n,onMeaningfulInteraction:r}),L=(0,H.useRef)(i),R=(0,H.useRef)(null),[z,ie]=(0,H.useState)(!1);D.current=e,L.current=i,F.current={onRequestEnterMenu:t,onReady:n,onMeaningfulInteraction:r},(0,H.useEffect)(()=>{R.current?.(i)},[i]),(0,H.useLayoutEffect)(()=>{(e===`departing`||e===`returning`)&&S.current?.()},[e]),(0,H.useLayoutEffect)(()=>{let t=p.current,n=e===`departing`||e===`returning`;if(t&&n&&!y.current){y.current={cssText:t.getAttribute(`style`)};let e=Math.max(1,t.clientWidth),n=Math.max(1,t.clientHeight),r=t.offsetLeft,i=t.offsetTop;t.style.inset=`auto`,t.style.left=`${r}px`,t.style.top=`${i}px`,t.style.right=`auto`,t.style.bottom=`auto`,t.style.width=`${e}px`,t.style.height=`${n}px`,t.style.minWidth=`${e}px`,t.style.maxWidth=`${e}px`,t.style.minHeight=`${n}px`,t.style.maxHeight=`${n}px`}else if(t&&!n&&y.current){let{cssText:e}=y.current;e===null?t.removeAttribute(`style`):t.setAttribute(`style`,e),y.current=null}},[e]);let B=(0,H.useCallback)(e=>{if(v.current){v.current.requestEnter(typeof e==`string`?e:e.input);return}if(M.current||D.current!==`active`)return;M.current=!0;let t=typeof e==`string`?_.current?.captureActivation(e)??g(e):e;if(!t.ready){M.current=!1;return}b.current+=1,F.current.onMeaningfulInteraction?.(),F.current.onRequestEnterMenu?.(t)},[]);(0,H.useImperativeHandle)(a,()=>({requestEnter:B,focusGateway:()=>v.current?.focusGateway()??_.current?.focus(),getGatewayClientCenter:()=>v.current?.getGatewayClientCenter()??_.current?.getGatewayClientCenter()??f(),getGatewayMeasurement:()=>v.current?.getGatewayMeasurement()??_.current?.getRenderedMeasurement()??c(),getGatewayActivation:e=>v.current?.getGatewayActivation(e)??_.current?.captureActivation(e)??g(e)}),[B]);let V=(0,H.useCallback)(e=>{x.current=e},[]);return(0,H.useEffect)(()=>{let e=p.current,t=o.current;if(!e||!t)return;if(!Nt()){ie(!0);return}let n=null,r=null,i=null,a=0,c=null,f=null,g=null,v=null,y=null,M=null,z=null,B=0,V=null,ae=()=>void 0,oe=()=>void 0,se=!1,H=!1,U=!1,ce={x:0,y:0},W={x:0,y:0},le={x:0,y:0,active:!1},ue=()=>{U&&!N.current&&(N.current=!0,F.current.onReady?.())},de=()=>{H||(H=!0,window.clearTimeout(B),S.current=null,R.current=null,V?.dispose(),V=null,c?.disconnect(),a&&window.cancelAnimationFrame(a),f&&t.removeEventListener(`pointermove`,f),g&&(t.removeEventListener(`pointerleave`,g),window.removeEventListener(`blur`,g)),v&&n&&n.domElement.removeEventListener(`webglcontextlost`,v),y&&document.removeEventListener(`visibilitychange`,y),M&&z&&M.removeEventListener(`change`,z),i?.dispose(),i=null,r&&n&&Vt(r,n),_.current?.setRenderedGateway(l({x:0,y:0,viewportWidth:0,viewportHeight:0,visible:!1}),null),n?.domElement.remove())};try{M=window.matchMedia(`(prefers-reduced-motion: reduce)`);let o=M.matches,p=Math.max(1,Math.round(e.clientWidth)),N=Math.max(1,Math.round(e.clientHeight)),F=L.current,fe=()=>F===`cinematic`?1.65:F===`balanced`?1.4:1.1,pe=Math.min(window.devicePixelRatio||1,fe());r=new k,r.background=new P(u.palette.void);let me=10.8,G=new te(39,p/N,.1,100);G.position.set(0,.18,me),n=new ne({antialias:F!==`performance`,alpha:!1,powerPreference:F===`cinematic`?`high-performance`:`default`}),n.setPixelRatio(pe),n.setSize(p,N,!1),n.outputColorSpace=T,n.toneMapping=4,n.toneMappingExposure=1.08,n.domElement.className=`warpkeep-title-canvas`;let he=n.capabilities.maxTextureSize,ge=n.capabilities.getMaxPrecision(`highp`)===`highp`,_e=Ae(ke({viewportWidth:p,viewportHeight:N,reducedMotion:o,rendererMaxTextureSize:he,supportsHighpFragment:ge}),F,he,ge),K=_e,ye=_e!==`high`,be=t.getBoundingClientRect(),Ce={left:be.left,top:be.top,width:Math.max(1,be.width),height:Math.max(1,be.height)};n.domElement.dataset.gatewayVfxQuality=K,e.appendChild(n.domElement),v=e=>{e.preventDefault(),de(),ie(!0)},n.domElement.addEventListener(`webglcontextlost`,v);let we=window.matchMedia(`(pointer: fine)`).matches,Te=()=>{o||!we||f||(f=e=>{if(D.current!==`active`||!tt(e.pointerType))return;let n=t.getBoundingClientRect();Ce.left=n.left,Ce.top=n.top,Ce.width=Math.max(1,n.width),Ce.height=Math.max(1,n.height);let r=et(e.clientX,e.clientY,Ce);ce.x=r.x,ce.y=r.y,le.x=e.clientX,le.y=e.clientY,le.active=!0},g=()=>{ce.x=0,ce.y=0,le.active=!1},t.addEventListener(`pointermove`,f,{passive:!0}),t.addEventListener(`pointerleave`,g),window.addEventListener(`blur`,g))},Ee=()=>{f&&=(t.removeEventListener(`pointermove`,f),null),g&&=(t.removeEventListener(`pointerleave`,g),window.removeEventListener(`blur`,g),null),ce.x=0,ce.y=0,W.x=0,W.y=0,le.active=!1};Te();let De=ye?u.galaxy.mobileBackgroundStars:u.galaxy.desktopBackgroundStars,q=It(De,pe);r.add(q.points);let J=Bt(ye?u.galaxy.mobileParticleCount:u.galaxy.desktopParticleCount,pe,K),Oe=n,je=r,Ne=e=>{Oe.domElement.dataset.gatewayVfxQuality=e.stats.quality,Oe.domElement.dataset.gatewayVfxDrawCalls=String(e.stats.drawCalls),Oe.domElement.dataset.gatewayVfxIncrementalDrawCalls=String(e.stats.incrementalDrawCalls),Oe.domElement.dataset.gatewayVfxParticles=String(e.stats.particleCount)},Pe=(e,t)=>{let n=Qe({quality:e,pixelRatio:t,galaxyRadius:u.galaxy.radius,shadowRadius:u.core.shadowRadius,accretionRadius:u.core.accretionRadius,lensRadius:u.core.lensRadius});return J.spinGroup.add(n.group),Ne(n),n},Ie=(e,t)=>{if(i&&e===K){i.setPixelRatio(t);return}if(i?.dispose(),e!==K){let t=J.discMaterial;J.discMaterial=Lt(e),J.disc.material=J.discMaterial,t.dispose()}K=e,i=Pe(e,t)};i=Pe(K,pe),r.add(J.group);let Le=e=>{e.points.geometry.dispose(),e.material.dispose()},Re=(e,t)=>{let n=e!==`high`,r=n?u.galaxy.mobileBackgroundStars:u.galaxy.desktopBackgroundStars;if(r!==De){let e=q;q=It(r,t),De=r,je.remove(e.points),je.add(q.points),Le(e)}let i=n?u.galaxy.mobileParticleCount:u.galaxy.desktopParticleCount;if(i!==J.particleCount){let e=J.stars,n=J.dust,r=zt(i,t);J.spinGroup.remove(e.points,n.points),J.spinGroup.add(r.dust.points,r.stars.points),J.stars=r.stars,J.dust=r.dust,J.particleCount=i,Le(e),Le(n)}Oe.domElement.dataset.titleGalaxyParticles=String(J.particleCount),Oe.domElement.dataset.titleBackgroundStars=String(De)};Re(K,pe);let ze=()=>{let e=new I;return e.name=`warpkeep-title-model-unavailable`,{group:e,safeWidth:it.safeWidth}};n.domElement.dataset.titleModelState=`loading`,n.domElement.dataset.titleModelQuality=F,r.add(new re(1119522,.3)),r.add(new w(15131350,329489,.72));let Be=new ee(16775144,2.45);Be.position.set(-3.4,5.8,8.6),r.add(Be);let Ve=new E(16249576,48,36,.64,.92,1.25);Ve.position.set(-5.8,4.2,8.5),Ve.target.position.set(0,-.7,0),r.add(Ve,Ve.target);let He=new j(7754147,21,28,1.75);He.position.set(0,1.3,-4.8),r.add(He);let Ue=new j(12103845,5.5,22,1.65);Ue.position.set(-6,-1.4,4.5),r.add(Ue),V=Ot({scene:r,camera:G,renderer:n,baseUrl:`/`,initialQuality:F,reducedMotion:o,createFallback:ze,onNeedsRender:()=>ae(),onStateChange:e=>{n&&(n.domElement.dataset.titleModelState=e.phase,n.domElement.dataset.titleModelProfile=e.activeProfile??(e.fallbackLocked?`fallback`:`pending`),oe(),ue())}});let We=V.stage,Ge=-1.52,Ke=1.55,qe=1,Z=-.42,Je=C.degToRad(-1.1),Ye=.1,Xe=1,Ze=p,$e=N,rt=C.clamp(m(p,N,u.gateway.interactionRadiusRatio),u.gateway.minInteractionRadiusPx,u.gateway.maxInteractionRadiusPx),at=()=>{if(!n||!r||H)return;let i=Math.max(1,Math.round(e.clientWidth)),a=Math.max(1,Math.round(e.clientHeight)),s=t.getBoundingClientRect(),c=i/a,l=c<1,d=!l&&a<=460,f=Math.min(window.devicePixelRatio||1,fe());Ze=i,$e=a,Ce.left=s.left,Ce.top=s.top,Ce.width=Math.max(1,s.width),Ce.height=Math.max(1,s.height),rt=C.clamp(m(i,a,u.gateway.interactionRadiusRatio),u.gateway.minInteractionRadiusPx,u.gateway.maxInteractionRadiusPx),n.setPixelRatio(f),n.setSize(i,a,!1),G.aspect=c,G.updateProjectionMatrix();let p=kt(i,a,2*(me-We.position.z)*Math.tan(C.degToRad(G.fov*.5))*c,V?.getSafeWidth()??1);Xe=p.scale,We.scale.setScalar(Xe),Ge=p.baseY,Z=p.cameraTargetY,Je=p.restYawRadians,Ye=p.cameraDriftX;let h=2*(me-J.group.position.z)*Math.tan(C.degToRad(G.fov*.5)),g=h*c*(l?u.galaxy.portraitViewportWidth:u.galaxy.desktopViewportWidth),_=h*(l?u.galaxy.portraitViewportHeight:u.galaxy.desktopViewportHeight),v=u.galaxy.radius*2;qe=C.clamp(Math.min(g/v,_/(v*u.galaxy.verticalScale)),.42,2.25),J.group.scale.setScalar(qe),Ke=l?2.8:d?u.galaxy.shortLandscapeBaseY:1.55,J.group.position.y=Ke,[q.material,J.stars.material,J.dust.material].forEach(e=>{e.uniforms.pixelRatio.value=f});let y=Ae(ke({viewportWidth:i,viewportHeight:a,reducedMotion:o,rendererMaxTextureSize:he,supportsHighpFragment:ge}),F,he,ge);Re(y,f),Ie(y,f)};oe=at,R.current=e=>{H||F===e||(F=e,n?.domElement.setAttribute(`data-title-model-quality`,e),V?.setQuality(e),at(),ae())};let ot=performance.now(),Q=0,st=!document.hidden,ct=C.degToRad(-2.1),lt=new A,ut=new A,dt=ve(),ft={x:0,y:0,valid:!1},$=new O,pt=new O(1,0),mt=0,ht=0,gt=.42,_t=0,vt=b.current,yt=X.durationSeconds,bt=null,xt=null,St={proximity:0,proximitySquared:0,proximityCubed:0,brightness:.5,rayThickness:1,orbitSpeed:.18,turbulence:.025,pointerBend:0,localDistortion:0,particleSpeed:.22,highlightSpeed:.12,eyeFocus:0},Ct={proximity:0,proximitySquared:0,proximityCubed:0,brightness:.5,rayThickness:1,orbitSpeed:.18,turbulence:.025,pointerBend:0,localDistortion:0,particleSpeed:.22,highlightSpeed:.12,eyeFocus:0},wt={phase:`idle`,progress:1,intake:0,focus:0,rupture:0,settle:0,compression:0,eyeFocus:0,shockwave:0,distortion:0,particlePeel:0,outerLuminanceScale:1},Tt={time:0,delta:0,proximity:0,pulsePhase:gt,flowPhase:_t,response:St,activation:wt,pointerLocal:$,pointerDirection:pt,pointerValid:!1,reducedMotion:o},Et=()=>{if(a=0,!n||!r||H)return;se=!0;let e=performance.now(),t=V?.update(e)??!1,c=Math.max(0,(e-ot)/1e3);ot=e;let f=o||!st?0:c,p=Math.min(.05,f);Q+=f;let m=o?7.5:Q,g=D.current===`departing`,v=g||D.current===`returning`;v&&bt===null&&(bt=Q,xt=jt({pointerCurrent:W,galaxyGroup:J.group,galaxyGrowthGroup:J.growthGroup,galaxyParallaxGroup:J.parallaxGroup,camera:G})),v&&xt?(Mt(xt,{pointerTarget:ce,pointerCurrent:W,galaxyGroup:J.group,galaxyGrowthGroup:J.growthGroup,galaxyParallaxGroup:J.parallaxGroup,camera:G}),le.active=!1):v||(bt=null,xt=null);let y=!g||bt===null||o?0:C.clamp((Q-bt)/1.45,0,1),S=y*y*(3-2*y);!o&&!v&&(W.x=nt(W.x,ce.x,p,u.interaction.damping),W.y=nt(W.y,ce.y,p,u.interaction.damping)),q.material.uniforms.time.value=m,J.stars.material.uniforms.time.value=m,J.dust.material.uniforms.time.value=m,J.discMaterial.uniforms.time.value=m,q.points.rotation.z=Q*65e-5,q.points.rotation.x=W.y*.003,q.points.rotation.y=W.x*-.004,J.spinGroup.rotation.z=-.13+Math.PI*2*Q/u.galaxy.rotationPeriodSeconds,v||(J.growthGroup.scale.setScalar(h(Q)),J.parallaxGroup.rotation.x=W.y*u.interaction.galaxyRotationX,J.parallaxGroup.rotation.y=W.x*-u.interaction.galaxyRotationY,J.group.position.x=Math.sin(Q*.05)*.065-W.x*u.interaction.galaxyTravelX,J.group.position.y=Ke+W.y*u.interaction.galaxyTravelY),We.scale.setScalar(Xe*(1-S*.08)),We.rotation.y=Je+Math.sin(Q*.1)*.008+W.x*u.interaction.titleRotationY,We.rotation.x=ct+Math.sin(Q*.075+.7)*.0028-W.y*u.interaction.titleRotationX,We.position.y=Ge+Math.sin(Q*.13)*.018;let w=m/u.title.shinePeriodSeconds*Math.PI*2;Ve.position.x=Math.sin(w)*6.8+W.x*u.interaction.lightTravelX,Ve.position.y=4.1+Math.cos(w*.72)*.52+W.y*u.interaction.lightTravelY,Ve.target.position.set(W.x*1.1,Ge+W.y*.32,0),Ve.intensity=46+Math.sin(w+.4)*5,Be.position.x=-3.4+W.x*2.1,Be.position.y=5.8+W.y*1.15,He.position.x=W.x*2.6,He.position.y=1.3+W.y*1.2,Ue.position.x=-6+W.x*.65,v||(G.position.x=Math.sin(Q*.052)*Ye+W.x*u.interaction.cameraTravelX,G.position.y=.18+Math.cos(Q*.046)*.04+W.y*u.interaction.cameraTravelY,G.position.z=me,G.lookAt(W.x*u.interaction.cameraTargetX,Z+W.y*u.interaction.cameraTargetY,-1.4)),r.updateMatrixWorld(!0),G.updateMatrixWorld(!0),J.gatewayAnchor.getWorldPosition(lt),ut.copy(lt).project(G);let T=(ut.x*.5+.5)*Ze,E=(-ut.y*.5+.5)*$e,O=ut.z>=-1&&ut.z<=1&&T>=0&&T<=Ze&&E>=0&&E<=$e,k=l({x:T,y:E,viewportWidth:Ze,viewportHeight:$e,visible:O}),A=s(n.domElement.getBoundingClientRect());U=_.current?.setRenderedGateway(k,A)??!1;let j=_.current?.getGatewayClientCenter()??null;n.domElement.dataset.gatewayRendererX=String(k.x),n.domElement.dataset.gatewayRendererY=String(k.y),n.domElement.dataset.gatewayClientX=String(j?.x??``),n.domElement.dataset.gatewayClientY=String(j?.y??``),n.domElement.dataset.gatewaySurfaceLeft=String(A?.left??``),n.domElement.dataset.gatewaySurfaceTop=String(A?.top??``),n.domElement.dataset.gatewaySurfaceWidth=String(A?.width??``),n.domElement.dataset.gatewaySurfaceHeight=String(A?.height??``),ue();let ee=A?rt*Math.min(A.width/Ze,A.height/$e):rt,M=!o&&le.active&&j?d(le.x,le.y,j.x,j.y,ee):0,N=!o&&x.current?Math.max(M,.72):M,P=N>ht?u.gateway.proximityRiseResponse:u.gateway.proximitySettleResponse;ht=o?0:nt(ht,N,p,P),!o&&le.active?xe(W.x,W.y,G,J.disc,J.spinGroup,u.galaxy.radius,ft,dt):(ft.x=0,ft.y=0,ft.valid=!1);let F=ft.valid?C.clamp(ft.x,-1.25,1.25):0,I=ft.valid?C.clamp(ft.y,-1.25,1.25):0;$.x=nt($.x,F,p,9.2),$.y=nt($.y,I,p,9.2),mt=nt(mt,+!!ft.valid,p,ft.valid?8.4:4.2);let L=$.length();L>1e-4&&pt.set($.x/L,$.y/L),Me(ht,K,St),Me(M,K,Ct),St.pointerBend=Ct.pointerBend,St.localDistortion=Ct.localDistortion;let R=St.proximitySquared;gt+=f*C.lerp(Math.PI*2/u.gateway.idlePulsePeriodSeconds,Math.PI*2/u.gateway.activePulsePeriodSeconds,R),_t+=f*C.lerp(u.gateway.idleFlowRate,u.gateway.activeFlowRate,ht*(.65+ht*.35)),vt===b.current?o||(yt=Math.min(X.durationSeconds,yt+f)):(vt=b.current,yt=o?.16:0),Fe(yt,wt);let te=mt>.015&&M>Y.pointerBendThreshold,ne=Math.max(St.localDistortion,wt.distortion*(K===`high`?.16:.09)),z=Se[K],re=te&&z.pointerDistortionEnabled,ie=te&&z.starDistortionEnabled,B=J.discMaterial;B.uniforms.gatewayProximity.value=ht,B.uniforms.gatewayPulsePhase.value=gt,B.uniforms.gatewayFlowPhase.value=_t,B.uniforms.gatewaySurge.value=wt.rupture,B.uniforms.gatewaySurgeProgress.value=wt.progress,B.uniforms.reducedMotion.value=+!!o,B.uniforms.gatewayPointerLocal.value.copy($),B.uniforms.gatewayPointerValid.value=+!!re,B.uniforms.gatewayLocalDistortion.value=re?ne:0,J.dust.material.uniforms.gatewayPointerLocal.value.copy($),J.dust.material.uniforms.gatewayPointerValid.value=+!!re,J.dust.material.uniforms.gatewayLocalDistortion.value=re?ne:0,J.stars.material.uniforms.gatewayPointerLocal.value.copy($),J.stars.material.uniforms.gatewayPointerValid.value=+!!ie,J.stars.material.uniforms.gatewayLocalDistortion.value=ie?ne:0,J.discMaterial.uniforms.gatewayEyeFocus.value=Math.min(1,St.eyeFocus+wt.eyeFocus*.55),Tt.time=m,Tt.delta=f,Tt.proximity=ht,Tt.pulsePhase=gt,Tt.flowPhase=_t,Tt.pointerValid=te,Tt.reducedMotion=o,i?.update(Tt),He.intensity=19.5+Math.sin(m*.36)*2+St.brightness*5+wt.rupture*3.2,n.render(r,G),se=!1,(!o||t)&&st&&(a=window.requestAnimationFrame(Et))};ae=()=>{H||!st||se||a||(a=window.requestAnimationFrame(Et))};let Dt=()=>{H||(a&&=(window.cancelAnimationFrame(a),0),Et())};return S.current=()=>{!o||H||(window.clearTimeout(B),Dt(),B=window.setTimeout(()=>{H||!o||(yt=X.durationSeconds,Dt())},180))},y=()=>{st=!document.hidden,ot=performance.now(),st&&ae()},document.addEventListener(`visibilitychange`,y),z=e=>{H||o===e.matches||(o=e.matches,V?.setReducedMotion(o),window.clearTimeout(B),B=0,vt=b.current,yt=X.durationSeconds,ot=performance.now(),o?(Ee(),at(),Dt()):(at(),Te(),a||=window.requestAnimationFrame(Et)))},M.addEventListener(`change`,z),c=new ResizeObserver(()=>{at(),o&&Dt()}),c.observe(e),at(),Et(),de}catch{de(),console.error(`Warpkeep title scene setup failed; safe fallback activated.`),ie(!0);return}},[]),z?(0,U.jsx)(ge,{ref:v,phase:e,onRequestEnterMenu:t,onReady:n,onMeaningfulInteraction:r}):(0,U.jsxs)(`main`,{ref:o,className:`warpkeep-title-screen`,"aria-label":`Warpkeep title screen`,"data-title-phase":e,children:[(0,U.jsx)(`div`,{ref:p,className:`warpkeep-title-canvas-shell`,"aria-hidden":`true`}),(0,U.jsx)(G,{ref:_,onActivate:B,onFocusChange:V,onMeaningfulInteraction:r,disabled:e!==`active`}),(0,U.jsx)(`div`,{className:`warpkeep-title-vignette`,"aria-hidden":`true`})]})});export{Ht as WarpkeepTitleScreen3D};
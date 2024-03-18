"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8200],{38045:function(e,o,t){var l=t(85893),s=t(67294),a=t(45697),i=t.n(a),n=t(93967),c=t.n(n),r=t(98453),p=t(32996),d=t(10743),u=t(8455),h=t(80602),m=t(87499),v=t(62456),b=t(4341),g=t(2487),x=t(31972),j=t(30288),C=t(87466),f=t(43846);let k=s.memo(e=>{let{inSidebar:o,onSaveClick:t,isSavePopupOpen:a,saveStatus:i,onDotsMenuClick:n,onDeleteFromProjectClick:r,showDeleteFromProject:p,isMenuPopupOpen:d,showSave:u,deleted:g}=e,[x,j]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{j(!0)},[]),x)?o&&!g?u&&(0,l.jsx)(h.Z,{className:"overlay-buttons top left",children:(0,l.jsx)(m.Z,{$height:"18px",$padding:"2px 6px",$hoverColor:"purple",$hoverTextColor:"white",className:c()({active:a}),onClick:t,children:(0,l.jsx)(b.bb,{$margin:"0",$fontSize:"12px"})})}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.Z,{className:"overlay-buttons top left",children:(0,l.jsx)(m.Z,{$height:"18px",$padding:"2px 6px",$hoverColor:"purple",$hoverTextColor:"white",className:c()({active:d}),onClick:n,children:(0,l.jsx)(b.bb,{$margin:"0",$fontSize:"12px"})})}),(0,l.jsxs)(h.Z,{className:"overlay-buttons bottom left",children:[u&&(0,l.jsx)(v.Z,{className:"save",$width:"52px",$hoverColor:"purple",$hoverTextColor:"white",active:a,status:i,onClick:t}),p&&(0,l.jsx)(m.Z,{onClick:r,children:(0,l.jsx)(f.cC,{i18nKey:"designteaser-001",children:"Remove"})})]})]}):null});k.displayName="ShareButtonOverlay",k.propTypes={inSidebar:i().bool,onSaveClick:i().func,isSavePopupOpen:i().bool,saveStatus:i().string,isMenuPopupOpen:i().bool,onDotsMenuClick:i().func,onDeleteFromProjectClick:i().func,showDeleteFromProject:i().bool,showSave:i().bool,deleted:i().bool};let w=e=>{var o,t,a,i;let{image:n,project:h,onClick:m,inSidebar:v,onSaveClick:j,onDotsMenuClick:f,onDeleteFromProjectClick:w,showDeleteFromProject:S,isMenuPopupOpen:$,isSavePopupOpen:y,saveStatus:P,showSave:Z,showWatermarkStatus:N=!1,readOnly:O=!1}=e,{name:D,alias:M,deleted:T}=n,F=!!h,_=!v&&!F&&!!D,[I,z]=(0,x.pF)(n.width,n.height,n.units),E=(0,s.useRef)(),{src:L}=(0,g.Z)(null===(t=n.images)||void 0===t?void 0:null===(o=t.cover)||void 0===o?void 0:o.style_uri,null===(a=n.images)||void 0===a?void 0:a.cover,E),R=(0,s.useCallback)(e=>{j(e,n,v?{showInfo:!0,showArrow:!1,placement:"bottom-start"}:{},h)},[n,j,v,h]),A=(0,s.useCallback)(e=>{f(e,n,h)},[n,f,h]),B=(0,s.useCallback)(e=>{w(e,n,"project")},[w,n]),G=(0,s.useCallback)(e=>{m&&(v?m(e):m(n,L,e))},[m,n,L,v]),U=!O&&!T,K=(0,s.useMemo)(()=>({paddingBottom:"".concat(z/I*100,"%"),opacity:(null==n?void 0:n.is_new)?.7:1}),[I,z,null==n?void 0:n.is_new]);return(0,l.jsxs)(u.Z,{ref:E,$rounded:!v,$hasCaption:_,"data-testid":!v&&(null==n?void 0:n.id)?"".concat(C.ItemTypes.DESIGN,"-").concat(n.id):void 0,children:[(0,l.jsxs)("div",{className:c()("image-wrapper design-image-wrapper",{"is-popup-active":y||$}),style:K,itemScope:!0,itemType:"https://schema.org/ImageObject",typeof:"ImageObject",children:[(0,l.jsx)(r.Z,{condition:!n.is_new&&U,onClick:U?G:void 0,to:U?"".concat(M).concat(v?"":"?path=home.tab-my_designs"):void 0,target:U&&!v?"_blank":null,children:(0,l.jsx)(p.Z,{alt:D,width:I,height:z,srcSet:L,className:"teaser-image drag-preview",draggable:v&&!T?"":"false"})}),!O&&(0,l.jsx)(k,{inSidebar:v,onDotsMenuClick:A,isMenuPopupOpen:$,onSaveClick:R,isSavePopupOpen:y,saveStatus:P,onDeleteFromProjectClick:B,showDeleteFromProject:S,showSave:Z,deleted:!!T}),N&&(null===(i=n.designInfos)||void 0===i?void 0:i.has_watermark)&&(0,l.jsx)(b.zM,{$color:"equator",$fontSize:"18px",className:"watermarked-status"})]}),_&&(0,l.jsx)(r.Z,{className:"image-caption design-caption",condition:!n.is_new&&U,onClick:U?G:void 0,to:U?"".concat(M).concat(v?"":"?path=home.tab-my_designs"):void 0,target:U&&!v?"_blank":null,children:(0,l.jsx)(d.Z,{$fontSize:"16px",children:D})})]})};w.propTypes={image:j.co,project:j.iV,onClick:i().func,$rounded:i().bool,showTitle:i().bool,inSidebar:i().bool,onSaveClick:i().func,onDotsMenuClick:i().func,onDeleteFromProjectClick:i().func,showDeleteFromProject:i().bool,isSavePopupOpen:i().bool,isMenuPopupOpen:i().bool,saveStatus:i().string,showSave:i().bool},o.Z=w},44009:function(e,o,t){var l=t(85893),s=t(67294),a=t(93967),i=t.n(a),n=t(45697),c=t.n(n),r=t(4341),p=t(32996),d=t(87499),u=t(98453),h=t(8455),m=t(80602),v=t(62456),b=t(87466),g=t(2487),x=t(43846);let j=s.memo(e=>{let{inSidebar:o,onSaveClick:t,isSavePopupOpen:a,saveStatus:n,onDotsMenuClick:c,onDeleteFromProjectClick:p,showDeleteFromProject:u,isMenuPopupOpen:h,showSave:b,deleted:g}=e,[j,C]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{C(!0)},[]),j)?o&&!g?(0,l.jsx)(m.Z,{className:"overlay-buttons top left",children:b&&(0,l.jsx)(d.Z,{$height:"18px",$padding:"2px 6px",$hoverColor:"purple",$hoverTextColor:"white",className:i()({active:a}),onClick:t,children:(0,l.jsx)(r.bb,{$margin:"0",$fontSize:"12px"})})}):(0,l.jsxs)(l.Fragment,{children:[!!c&&(0,l.jsx)(m.Z,{className:"overlay-buttons top left",children:(0,l.jsx)(d.Z,{$height:"18px",$padding:"2px 6px",$hoverColor:"purple",$hoverTextColor:"white",className:i()({active:h}),onClick:c,children:(0,l.jsx)(r.bb,{$margin:"0",$fontSize:"12px"})})}),(0,l.jsxs)(m.Z,{className:"overlay-buttons bottom left",children:[b&&(0,l.jsx)(v.Z,{className:"save",$width:"52px",$hoverColor:"purple",$hoverTextColor:"white",active:a,status:n,onClick:t}),u&&(0,l.jsx)(d.Z,{onClick:p,children:(0,l.jsx)(x.cC,{i18nKey:"uploadteaser-001",children:"Remove"})})]})]}):null});j.displayName="ShareButtonOverlay",j.propTypes={inSidebar:c().bool,onSaveClick:c().func,isSavePopupOpen:c().bool,isMenuPopupOpen:c().bool,onDotsMenuClick:c().func,onDeleteFromProjectClick:c().func,saveStatus:c().string,showDeleteFromProject:c().bool,showSave:c().bool,deleted:c().bool};let C={useTransparentPng:!0},f=e=>{var o,t;let{image:a,project:n,onClick:c,onSaveClick:r,saveStatus:d,isSavePopupOpen:m,inSidebar:v,onDotsMenuClick:x,onDeleteFromProjectClick:f,showDeleteFromProject:k,isMenuPopupOpen:w,showSave:S}=e,{id:$,uid:y,name:P,width:Z,height:N,style_uri:O,filename:D,deleted:M}=a,T=s.useRef(),F=(null==D?void 0:D.length)?null===(o=D.split(".").pop())||void 0===o?void 0:o.toLowerCase():"png",{src:_}=(0,g.Z)(O,a,T,"style_uri",C),I=(0,s.useCallback)(e=>{r(e,a,v?{showInfo:!0,showArrow:!1,placement:"bottom-start"}:null)},[a,r,v]),z=(0,s.useCallback)(e=>{x(e,a)},[x,a]),E=(0,s.useCallback)(e=>{f(e,a,"project")},[f,a]),L=(0,s.useMemo)(()=>({paddingBottom:"".concat(N/Z*100,"%")}),[N,Z]),R=!!(null===(t=a.imgPlaceholder)||void 0===t?void 0:t.src)&&!O,A=(0,s.useMemo)(()=>({opacity:.3}),[]);return(0,l.jsx)(h.Z,{ref:T,className:i()("upload-teaser",{png:"png"===F}),"data-testid":!v&&(null==a?void 0:a.id)?"".concat(b.ItemTypes.UPLOAD,"-").concat(a.id):void 0,children:(0,l.jsxs)("div",{className:i()("image-wrapper",{"is-popup-active":m||w}),style:L,itemScope:!0,itemType:"https://schema.org/ImageObject",typeof:"ImageObject",children:[(0,l.jsxs)(u.Z,{condition:!M&&!R,onClick:v&&!M&&c&&!R?c.bind(void 0,a):void 0,to:M||v||R?void 0:"/uploads/".concat(y,"/").concat($),children:[!!O&&(0,l.jsx)(p.Z,{crossOrigin:"anonymous",alt:P,width:Z,height:N,srcSet:_,className:"teaser-image drag-preview"}),!!R&&(0,l.jsx)("img",{alt:"",crossOrigin:"anonymous",src:a.imgPlaceholder.src,width:Z,height:N,className:"teaser-image drag-preview",onLoad:()=>{URL.revokeObjectURL(a.imgPlaceholder.src)},style:A})]}),!R&&(0,l.jsx)(j,{onSaveClick:I,isSavePopupOpen:m,inSidebar:v,saveStatus:d,onDotsMenuClick:n?null:z,onDeleteFromProjectClick:E,isMenuPopupOpen:w,showDeleteFromProject:k,showSave:S,deleted:!!M})]})})};f.propTypes={image:c().object,onClick:c().func,inSidebar:c().bool,onSaveClick:c().func,isSavePopupOpen:c().bool,saveStatus:c().string,isMenuPopupOpen:c().bool,onDotsMenuClick:c().func,onDeleteFromProjectClick:c().func,showDeleteFromProject:c().bool,showSave:c().bool},o.Z=f},87466:function(e,o,t){t.d(o,{ItemTypes:function(){return l}});let l=Object.freeze({IMAGE:"image",UPLOAD:"upload",DESIGN:"design"})},31837:function(e,o,t){var l=t(5152),s=t.n(l);o.Z=s()(()=>Promise.all([t.e(8121),t.e(403)]).then(t.bind(t,403)),{loadableGenerated:{webpack:()=>[403]}})}}]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eo="150",Qn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gc=0,fo=1,xc=2,xl=1,_c=2,ji=3,Tn=0,Dt=1,bn=2,En=0,yi=1,po=2,mo=3,go=4,vc=5,gi=100,yc=101,Mc=102,xo=103,_o=104,wc=200,bc=201,Sc=202,Ec=203,_l=204,vl=205,Tc=206,Ac=207,Cc=208,Lc=209,Pc=210,Rc=0,Dc=1,Ic=2,qr=3,Fc=4,Nc=5,zc=6,Bc=7,yl=0,Oc=1,Uc=2,pn=0,kc=1,Gc=2,Vc=3,Wc=4,Hc=5,Ml=300,Ei=301,Ti=302,jr=303,Xr=304,Us=306,Yr=1e3,Vt=1001,$r=1002,wt=1003,vo=1004,Js=1005,Bt=1006,qc=1007,Zi=1008,jn=1009,jc=1010,Xc=1011,wl=1012,Yc=1013,Vn=1014,Wn=1015,Ki=1016,$c=1017,Zc=1018,Mi=1020,Kc=1021,Wt=1023,Jc=1024,Qc=1025,Hn=1026,Ai=1027,eh=1028,th=1029,nh=1030,ih=1031,sh=1033,Qs=33776,er=33777,tr=33778,nr=33779,yo=35840,Mo=35841,wo=35842,bo=35843,rh=36196,So=37492,Eo=37496,To=37808,Ao=37809,Co=37810,Lo=37811,Po=37812,Ro=37813,Do=37814,Io=37815,Fo=37816,No=37817,zo=37818,Bo=37819,Oo=37820,Uo=37821,ir=36492,oh=36283,ko=36284,Go=36285,Vo=36286,Xn=3e3,He=3001,ah=3200,lh=3201,bl=0,ch=1,Kt="srgb",Ji="srgb-linear",Sl="display-p3",sr=7680,hh=519,Wo=35044,Ho="300 es",Zr=1035;class Zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rr=Math.PI/180,qo=180/Math.PI;function ts(){const c=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[c&255]+pt[c>>8&255]+pt[c>>16&255]+pt[c>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function Et(c,e,t){return Math.max(e,Math.min(t,c))}function uh(c,e){return(c%e+e)%e}function or(c,e,t){return(1-t)*c+t*e}function jo(c){return(c&c-1)===0&&c!==0}function dh(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function ss(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function Ct(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,r,l,a){const u=this.elements;return u[0]=e,u[1]=i,u[2]=r,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[3],l=n[6],a=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],f=i[0],p=i[3],x=i[6],_=i[1],v=i[4],b=i[7],M=i[2],T=i[5],R=i[8];return s[0]=o*f+r*_+l*M,s[3]=o*p+r*v+l*T,s[6]=o*x+r*b+l*R,s[1]=a*f+u*_+d*M,s[4]=a*p+u*v+d*T,s[7]=a*x+u*b+d*R,s[2]=h*f+m*_+g*M,s[5]=h*p+m*v+g*T,s[8]=h*x+m*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],l=e[6],a=e[7],u=e[8];return t*o*u-t*r*a-n*s*u+n*r*l+i*s*a-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],l=e[6],a=e[7],u=e[8],d=u*o-r*a,h=r*l-u*s,m=a*s-o*l,g=t*d+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=d*f,e[1]=(i*a-u*n)*f,e[2]=(r*n-i*o)*f,e[3]=h*f,e[4]=(u*t-i*l)*f,e[5]=(i*s-r*t)*f,e[6]=m*f,e[7]=(n*l-a*t)*f,e[8]=(o*t-n*s)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,r){const l=Math.cos(s),a=Math.sin(s);return this.set(n*l,n*a,-n*(l*o+a*r)+o+e,-i*a,i*l,-i*(-a*o+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(ar.makeScale(e,t)),this}rotate(e){return this.premultiply(ar.makeRotation(-e)),this}translate(e,t){return this.premultiply(ar.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ar=new gt;function El(c){for(let e=c.length-1;e>=0;--e)if(c[e]>=65535)return!0;return!1}function Is(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}let Yn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,r){let l=n[i+0],a=n[i+1],u=n[i+2],d=n[i+3];const h=s[o+0],m=s[o+1],g=s[o+2],f=s[o+3];if(r===0){e[t+0]=l,e[t+1]=a,e[t+2]=u,e[t+3]=d;return}if(r===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=f;return}if(d!==f||l!==h||a!==m||u!==g){let p=1-r;const x=l*h+a*m+u*g+d*f,_=x>=0?1:-1,v=1-x*x;if(v>Number.EPSILON){const M=Math.sqrt(v),T=Math.atan2(M,x*_);p=Math.sin(p*T)/M,r=Math.sin(r*T)/M}const b=r*_;if(l=l*p+h*b,a=a*p+m*b,u=u*p+g*b,d=d*p+f*b,p===1-r){const M=1/Math.sqrt(l*l+a*a+u*u+d*d);l*=M,a*=M,u*=M,d*=M}}e[t]=l,e[t+1]=a,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const r=n[i],l=n[i+1],a=n[i+2],u=n[i+3],d=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=r*g+u*d+l*m-a*h,e[t+1]=l*g+u*h+a*d-r*m,e[t+2]=a*g+u*m+r*h-l*d,e[t+3]=u*g-r*d-l*h-a*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,r=Math.cos,l=Math.sin,a=r(n/2),u=r(i/2),d=r(s/2),h=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+a*m*g,this._y=a*m*d-h*u*g,this._z=a*u*g+h*m*d,this._w=a*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+a*m*g,this._y=a*m*d-h*u*g,this._z=a*u*g-h*m*d,this._w=a*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-a*m*g,this._y=a*m*d+h*u*g,this._z=a*u*g+h*m*d,this._w=a*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-a*m*g,this._y=a*m*d+h*u*g,this._z=a*u*g-h*m*d,this._w=a*u*d+h*m*g;break;case"YZX":this._x=h*u*d+a*m*g,this._y=a*m*d+h*u*g,this._z=a*u*g-h*m*d,this._w=a*u*d-h*m*g;break;case"XZY":this._x=h*u*d-a*m*g,this._y=a*m*d-h*u*g,this._z=a*u*g+h*m*d,this._w=a*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],r=t[5],l=t[9],a=t[2],u=t[6],d=t[10],h=n+r+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-a)*m,this._z=(o-i)*m}else if(n>r&&n>d){const m=2*Math.sqrt(1+n-r-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+a)/m}else if(r>d){const m=2*Math.sqrt(1+r-n-d);this._w=(s-a)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-r);this._w=(o-i)/m,this._x=(s+a)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,r=t._x,l=t._y,a=t._z,u=t._w;return this._x=n*u+o*r+i*a-s*l,this._y=i*u+o*l+s*r-n*a,this._z=s*u+o*a+n*l-i*r,this._w=o*u-n*r-i*l-s*a,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let r=o*e._w+n*e._x+i*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const a=Math.sqrt(l),u=Math.atan2(a,r),d=Math.sin((1-t)*u)/a,h=Math.sin(t*u)/a;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z,l=e.w,a=l*t+o*i-r*n,u=l*n+r*t-s*i,d=l*i+s*n-o*t,h=-s*t-o*n-r*i;return this.x=a*l+h*-s+u*-r-d*-o,this.y=u*l+h*-o+d*-s-a*-r,this.z=d*l+h*-r+a*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,r=t.y,l=t.z;return this.x=i*l-s*r,this.y=s*o-n*l,this.z=n*r-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lr.copy(this).projectOnVector(e),this.sub(lr)}reflect(e){return this.sub(lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lr=new U,Xo=new Yn;function wi(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function cr(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const fh=new gt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ph=new gt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Sn=new U;function mh(c){return c.convertSRGBToLinear(),Sn.set(c.r,c.g,c.b).applyMatrix3(ph),c.setRGB(Sn.x,Sn.y,Sn.z)}function gh(c){return Sn.set(c.r,c.g,c.b).applyMatrix3(fh),c.setRGB(Sn.x,Sn.y,Sn.z).convertLinearToSRGB()}const xh={[Ji]:c=>c,[Kt]:c=>c.convertSRGBToLinear(),[Sl]:mh},_h={[Ji]:c=>c,[Kt]:c=>c.convertLinearToSRGB(),[Sl]:gh},yt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(c){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!c},get workingColorSpace(){return Ji},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,e,t){if(this.enabled===!1||e===t||!e||!t)return c;const n=xh[e],i=_h[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(c))},fromWorkingColorSpace:function(c,e){return this.convert(c,this.workingColorSpace,e)},toWorkingColorSpace:function(c,e){return this.convert(c,e,this.workingColorSpace)}};let ti;class Tl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=Is("canvas")),ti.width=e.width,ti.height=e.height;const n=ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=wi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Al{constructor(e=null){this.isSource=!0,this.uuid=ts(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(hr(i[o].image)):s.push(hr(i[o]))}else s=hr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function hr(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?Tl.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vh=0;class It extends Zn{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Vt,i=Vt,s=Bt,o=Zi,r=Wt,l=jn,a=It.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=ts(),this.name="",this.source=new Al(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=a,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yr:e.x=e.x-Math.floor(e.x);break;case Vt:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yr:e.y=e.y-Math.floor(e.y);break;case Vt:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Ml;It.DEFAULT_ANISOTROPY=1;class qe{constructor(e=0,t=0,n=0,i=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,a=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],f=l[2],p=l[6],x=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+f)<.1&&Math.abs(g+p)<.1&&Math.abs(a+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(a+1)/2,b=(m+1)/2,M=(x+1)/2,T=(u+h)/4,R=(d+f)/4,y=(g+p)/4;return v>b&&v>M?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=T/n,s=R/n):b>M?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=T/i,s=y/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=R/s,i=y/s),this.set(n,i,s,t),this}let _=Math.sqrt((p-g)*(p-g)+(d-f)*(d-f)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(d-f)/_,this.z=(h-u)/_,this.w=Math.acos((a+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $n extends Zn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Al(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cl extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yh extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let l=0,a=e.length;l<a;l+=3){const u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>o&&(o=d),h>r&&(r=h)}return this.min.set(t,n,i),this.max.set(s,o,r),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let l=0,a=e.count;l<a;l++){const u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>o&&(o=d),h>r&&(r=h)}return this.min.set(t,n,i),this.max.set(s,o,r),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,r=s.count;o<r;o++)In.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(In)}else n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox),ur.applyMatrix4(e.matrixWorld),this.union(ur);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fi),rs.subVectors(this.max,Fi),ni.subVectors(e.a,Fi),ii.subVectors(e.b,Fi),si.subVectors(e.c,Fi),xn.subVectors(ii,ni),_n.subVectors(si,ii),Fn.subVectors(ni,si);let t=[0,-xn.z,xn.y,0,-_n.z,_n.y,0,-Fn.z,Fn.y,xn.z,0,-xn.x,_n.z,0,-_n.x,Fn.z,0,-Fn.x,-xn.y,xn.x,0,-_n.y,_n.x,0,-Fn.y,Fn.x,0];return!dr(t,ni,ii,si,rs)||(t=[1,0,0,0,1,0,0,0,1],!dr(t,ni,ii,si,rs))?!1:(os.crossVectors(xn,_n),t=[os.x,os.y,os.z],dr(t,ni,ii,si,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new U,new U,new U,new U,new U,new U,new U,new U],In=new U,ur=new ns,ni=new U,ii=new U,si=new U,xn=new U,_n=new U,Fn=new U,Fi=new U,rs=new U,os=new U,Nn=new U;function dr(c,e,t,n,i){for(let s=0,o=c.length-3;s<=o;s+=3){Nn.fromArray(c,s);const r=i.x*Math.abs(Nn.x)+i.y*Math.abs(Nn.y)+i.z*Math.abs(Nn.z),l=e.dot(Nn),a=t.dot(Nn),u=n.dot(Nn);if(Math.max(-Math.max(l,a,u),Math.min(l,a,u))>r)return!1}return!0}const Mh=new ns,Ni=new U,fr=new U;let ks=class{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Mh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ni,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(fr)),this.expandByPoint(Ni.copy(e.center).sub(fr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const nn=new U,pr=new U,as=new U,vn=new U,mr=new U,ls=new U,gr=new U;let Gs=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){pr.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(pr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(as),r=vn.dot(this.direction),l=-vn.dot(as),a=vn.lengthSq(),u=Math.abs(1-o*o);let d,h,m,g;if(u>0)if(d=o*l-r,h=o*r-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const f=1/u;d*=f,h*=f,m=d*(d+o*h+2*r)+h*(o*d+h+2*l)+a}else h=s,d=Math.max(0,-(o*h+r)),m=-d*d+h*(h+2*l)+a;else h=-s,d=Math.max(0,-(o*h+r)),m=-d*d+h*(h+2*l)+a;else h<=-g?(d=Math.max(0,-(-o*s+r)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+a):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+a):(d=Math.max(0,-(o*s+r)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+a);else h=o>0?-s:s,d=Math.max(0,-(o*h+r)),m=-d*d+h*(h+2*l)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(pr).addScaledVector(as,h),m}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),i=nn.dot(nn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),r=n-o,l=n+o;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,r,l;const a=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return a>=0?(n=(e.min.x-h.x)*a,i=(e.max.x-h.x)*a):(n=(e.max.x-h.x)*a,i=(e.min.x-h.x)*a),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(r=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(r=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,i,s){mr.subVectors(t,e),ls.subVectors(n,e),gr.crossVectors(mr,ls);let o=this.direction.dot(gr),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;vn.subVectors(this.origin,e);const l=r*this.direction.dot(ls.crossVectors(vn,ls));if(l<0)return null;const a=r*this.direction.dot(mr.cross(vn));if(a<0||l+a>o)return null;const u=-r*vn.dot(gr);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class je{constructor(){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,r,l,a,u,d,h,m,g,f,p){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=r,x[13]=l,x[2]=a,x[6]=u,x[10]=d,x[14]=h,x[3]=m,x[7]=g,x[11]=f,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ri.setFromMatrixColumn(e,0).length(),s=1/ri.setFromMatrixColumn(e,1).length(),o=1/ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(i),a=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*d,g=r*u,f=r*d;t[0]=l*u,t[4]=-l*d,t[8]=a,t[1]=m+g*a,t[5]=h-f*a,t[9]=-r*l,t[2]=f-h*a,t[6]=g+m*a,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,g=a*u,f=a*d;t[0]=h+f*r,t[4]=g*r-m,t[8]=o*a,t[1]=o*d,t[5]=o*u,t[9]=-r,t[2]=m*r-g,t[6]=f+h*r,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,g=a*u,f=a*d;t[0]=h-f*r,t[4]=-o*d,t[8]=g+m*r,t[1]=m+g*r,t[5]=o*u,t[9]=f-h*r,t[2]=-o*a,t[6]=r,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*d,g=r*u,f=r*d;t[0]=l*u,t[4]=g*a-m,t[8]=h*a+f,t[1]=l*d,t[5]=f*a+h,t[9]=m*a-g,t[2]=-a,t[6]=r*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*a,g=r*l,f=r*a;t[0]=l*u,t[4]=f-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-r*u,t[2]=-a*u,t[6]=m*d+g,t[10]=h-f*d}else if(e.order==="XZY"){const h=o*l,m=o*a,g=r*l,f=r*a;t[0]=l*u,t[4]=-d,t[8]=a*u,t[1]=h*d+f,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=r*u,t[10]=f*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wh,e,bh)}lookAt(e,t,n){const i=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),yn.crossVectors(n,Lt),yn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),yn.crossVectors(n,Lt)),yn.normalize(),cs.crossVectors(Lt,yn),i[0]=yn.x,i[4]=cs.x,i[8]=Lt.x,i[1]=yn.y,i[5]=cs.y,i[9]=Lt.y,i[2]=yn.z,i[6]=cs.z,i[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[4],l=n[8],a=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],f=n[6],p=n[10],x=n[14],_=n[3],v=n[7],b=n[11],M=n[15],T=i[0],R=i[4],y=i[8],S=i[12],L=i[1],I=i[5],B=i[9],E=i[13],A=i[2],F=i[6],N=i[10],X=i[14],G=i[3],j=i[7],J=i[11],se=i[15];return s[0]=o*T+r*L+l*A+a*G,s[4]=o*R+r*I+l*F+a*j,s[8]=o*y+r*B+l*N+a*J,s[12]=o*S+r*E+l*X+a*se,s[1]=u*T+d*L+h*A+m*G,s[5]=u*R+d*I+h*F+m*j,s[9]=u*y+d*B+h*N+m*J,s[13]=u*S+d*E+h*X+m*se,s[2]=g*T+f*L+p*A+x*G,s[6]=g*R+f*I+p*F+x*j,s[10]=g*y+f*B+p*N+x*J,s[14]=g*S+f*E+p*X+x*se,s[3]=_*T+v*L+b*A+M*G,s[7]=_*R+v*I+b*F+M*j,s[11]=_*y+v*B+b*N+M*J,s[15]=_*S+v*E+b*X+M*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],r=e[5],l=e[9],a=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],f=e[7],p=e[11],x=e[15];return g*(+s*l*d-i*a*d-s*r*h+n*a*h+i*r*m-n*l*m)+f*(+t*l*m-t*a*h+s*o*h-i*o*m+i*a*u-s*l*u)+p*(+t*a*d-t*r*m-s*o*d+n*o*m+s*r*u-n*a*u)+x*(-i*r*u-t*l*d+t*r*h+i*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],l=e[6],a=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],f=e[13],p=e[14],x=e[15],_=d*p*a-f*h*a+f*l*m-r*p*m-d*l*x+r*h*x,v=g*h*a-u*p*a-g*l*m+o*p*m+u*l*x-o*h*x,b=u*f*a-g*d*a+g*r*m-o*f*m-u*r*x+o*d*x,M=g*d*l-u*f*l-g*r*h+o*f*h+u*r*p-o*d*p,T=t*_+n*v+i*b+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=_*R,e[1]=(f*h*s-d*p*s-f*i*m+n*p*m+d*i*x-n*h*x)*R,e[2]=(r*p*s-f*l*s+f*i*a-n*p*a-r*i*x+n*l*x)*R,e[3]=(d*l*s-r*h*s-d*i*a+n*h*a+r*i*m-n*l*m)*R,e[4]=v*R,e[5]=(u*p*s-g*h*s+g*i*m-t*p*m-u*i*x+t*h*x)*R,e[6]=(g*l*s-o*p*s-g*i*a+t*p*a+o*i*x-t*l*x)*R,e[7]=(o*h*s-u*l*s+u*i*a-t*h*a-o*i*m+t*l*m)*R,e[8]=b*R,e[9]=(g*d*s-u*f*s-g*n*m+t*f*m+u*n*x-t*d*x)*R,e[10]=(o*f*s-g*r*s+g*n*a-t*f*a-o*n*x+t*r*x)*R,e[11]=(u*r*s-o*d*s-u*n*a+t*d*a+o*n*m-t*r*m)*R,e[12]=M*R,e[13]=(u*f*i-g*d*i+g*n*h-t*f*h-u*n*p+t*d*p)*R,e[14]=(g*r*i-o*f*i-g*n*l+t*f*l+o*n*p-t*r*p)*R,e[15]=(o*d*i-u*r*i+u*n*l-t*d*l-o*n*h+t*r*h)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,r=e.y,l=e.z,a=s*o,u=s*r;return this.set(a*o+n,a*r-i*l,a*l+i*r,0,a*r+i*l,u*r+n,u*l-i*o,0,a*l-i*r,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,r=t._z,l=t._w,a=s+s,u=o+o,d=r+r,h=s*a,m=s*u,g=s*d,f=o*u,p=o*d,x=r*d,_=l*a,v=l*u,b=l*d,M=n.x,T=n.y,R=n.z;return i[0]=(1-(f+x))*M,i[1]=(m+b)*M,i[2]=(g-v)*M,i[3]=0,i[4]=(m-b)*T,i[5]=(1-(h+x))*T,i[6]=(p+_)*T,i[7]=0,i[8]=(g+v)*R,i[9]=(p-_)*R,i[10]=(1-(h+f))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ri.set(i[0],i[1],i[2]).length();const o=ri.set(i[4],i[5],i[6]).length(),r=ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ot.copy(this);const a=1/s,u=1/o,d=1/r;return Ot.elements[0]*=a,Ot.elements[1]*=a,Ot.elements[2]*=a,Ot.elements[4]*=u,Ot.elements[5]*=u,Ot.elements[6]*=u,Ot.elements[8]*=d,Ot.elements[9]*=d,Ot.elements[10]*=d,t.setFromRotationMatrix(Ot),n.x=s,n.y=o,n.z=r,this}makePerspective(e,t,n,i,s,o){const r=this.elements,l=2*s/(t-e),a=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return r[0]=l,r[4]=0,r[8]=u,r[12]=0,r[1]=0,r[5]=a,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=h,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,n,i,s,o){const r=this.elements,l=1/(t-e),a=1/(n-i),u=1/(o-s),d=(t+e)*l,h=(n+i)*a,m=(o+s)*u;return r[0]=2*l,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*a,r[9]=0,r[13]=-h,r[2]=0,r[6]=0,r[10]=-2*u,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ri=new U,Ot=new je,wh=new U(0,0,0),bh=new U(1,1,1),yn=new U,cs=new U,Lt=new U,Yo=new je,$o=new Yn;class Vs{constructor(e=0,t=0,n=0,i=Vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],r=i[8],l=i[1],a=i[5],u=i[9],d=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,a),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,a)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,a),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,a),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $o.setFromEuler(this),this.setFromQuaternion($o,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vs.DEFAULT_ORDER="XYZ";class Ll{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sh=0;const Zo=new U,oi=new Yn,sn=new je,hs=new U,zi=new U,Eh=new U,Th=new Yn,Ko=new U(1,0,0),Jo=new U(0,1,0),Qo=new U(0,0,1),Ah={type:"added"},ea={type:"removed"};class bt extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new U,t=new Vs,n=new Yn,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new gt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Ko,e)}rotateY(e){return this.rotateOnAxis(Jo,e)}rotateZ(e){return this.rotateOnAxis(Qo,e)}translateOnAxis(e,t){return Zo.copy(e).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ko,e)}translateY(e){return this.translateOnAxis(Jo,e)}translateZ(e){return this.translateOnAxis(Qo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hs.copy(e):hs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(zi,hs,this.up):sn.lookAt(hs,zi,this.up),this.quaternion.setFromRotationMatrix(sn),i&&(sn.extractRotation(i.matrixWorld),oi.setFromRotationMatrix(sn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ah)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ea)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ea)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,Eh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,Th,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let a=0,u=l.length;a<u;a++){const d=l[a];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,a=this.material.length;l<a;l++)r.push(s(e.materials,this.material[l]));i.material=r}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];i.animations.push(s(e.animations,l))}}if(t){const r=o(e.geometries),l=o(e.materials),a=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),a.length>0&&(n.textures=a),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(r){const l=[];for(const a in r){const u=r[a];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DEFAULT_UP=new U(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ut=new U,rn=new U,xr=new U,on=new U,ai=new U,li=new U,ta=new U,_r=new U,vr=new U,yr=new U;class fn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ut.subVectors(e,t),i.cross(Ut);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ut.subVectors(i,t),rn.subVectors(n,t),xr.subVectors(e,t);const o=Ut.dot(Ut),r=Ut.dot(rn),l=Ut.dot(xr),a=rn.dot(rn),u=rn.dot(xr),d=o*a-r*r;if(d===0)return s.set(-2,-1,-1);const h=1/d,m=(a*l-r*u)*h,g=(o*u-r*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,on),on.x>=0&&on.y>=0&&on.x+on.y<=1}static getUV(e,t,n,i,s,o,r,l){return this.getBarycoord(e,t,n,i,on),l.set(0,0),l.addScaledVector(s,on.x),l.addScaledVector(o,on.y),l.addScaledVector(r,on.z),l}static isFrontFacing(e,t,n,i){return Ut.subVectors(n,t),rn.subVectors(e,t),Ut.cross(rn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Ut.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return fn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,r;ai.subVectors(i,n),li.subVectors(s,n),_r.subVectors(e,n);const l=ai.dot(_r),a=li.dot(_r);if(l<=0&&a<=0)return t.copy(n);vr.subVectors(e,i);const u=ai.dot(vr),d=li.dot(vr);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*a;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ai,o);yr.subVectors(e,s);const m=ai.dot(yr),g=li.dot(yr);if(g>=0&&m<=g)return t.copy(s);const f=m*a-l*g;if(f<=0&&a>=0&&g<=0)return r=a/(a-g),t.copy(n).addScaledVector(li,r);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return ta.subVectors(s,i),r=(d-u)/(d-u+(m-g)),t.copy(i).addScaledVector(ta,r);const x=1/(p+f+h);return o=f*x,r=h*x,t.copy(n).addScaledVector(ai,o).addScaledVector(li,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ch=0,Pi=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=yi,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_l,this.blendDst=vl,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const r in s){const l=s[r];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kt={h:0,s:0,l:0},us={h:0,s:0,l:0};function Mr(c,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?c+(e-c)*6*t:t<1/2?e:t<2/3?c+(e-c)*6*(2/3-t):c}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=yt.workingColorSpace){if(e=uh(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Mr(o,s,e+1/3),this.g=Mr(o,s,e),this.b=Mr(o,s,e-1/3)}return yt.toWorkingColorSpace(this,i),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,yt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,yt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const l=parseFloat(s[1])/360,a=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,a,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,yt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,yt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=Pl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return yt.fromWorkingColorSpace(mt.copy(this),e),Et(mt.r*255,0,255)<<16^Et(mt.g*255,0,255)<<8^Et(mt.b*255,0,255)<<0}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,i=mt.g,s=mt.b,o=Math.max(n,i,s),r=Math.min(n,i,s);let l,a;const u=(r+o)/2;if(r===o)l=0,a=0;else{const d=o-r;switch(a=u<=.5?d/(o+r):d/(2-o-r),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=a,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=Kt){yt.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,i=mt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(kt),kt.h+=e,kt.s+=t,kt.l+=n,this.setHSL(kt.h,kt.s,kt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kt),e.getHSL(us);const n=or(kt.h,us.h,t),i=or(kt.s,us.s,t),s=or(kt.l,us.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new Ue;Ue.NAMES=Pl;class Ri extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new U,ds=new Te;class Ze{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Rl extends Ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dl extends Ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends Ze{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lh=0;const zt=new je,wr=new bt,ci=new U,Pt=new ns,Bi=new ns,ut=new U;class ft extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(El(e)?Dl:Rl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new gt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return wr.lookAt(e),wr.updateMatrix(),this.applyMatrix4(wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Pt.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const r=t[s];Bi.setFromBufferAttribute(r),this.morphTargetsRelative?(ut.addVectors(Pt.min,Bi.min),Pt.expandByPoint(ut),ut.addVectors(Pt.max,Bi.max),Pt.expandByPoint(ut)):(Pt.expandByPoint(Bi.min),Pt.expandByPoint(Bi.max))}Pt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ut.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ut));if(t)for(let s=0,o=t.length;s<o;s++){const r=t[s],l=this.morphTargetsRelative;for(let a=0,u=r.count;a<u;a++)ut.fromBufferAttribute(r,a),l&&(ci.fromBufferAttribute(e,a),ut.add(ci)),i=Math.max(i,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,a=[],u=[];for(let L=0;L<r;L++)a[L]=new U,u[L]=new U;const d=new U,h=new U,m=new U,g=new Te,f=new Te,p=new Te,x=new U,_=new U;function v(L,I,B){d.fromArray(i,L*3),h.fromArray(i,I*3),m.fromArray(i,B*3),g.fromArray(o,L*2),f.fromArray(o,I*2),p.fromArray(o,B*2),h.sub(d),m.sub(d),f.sub(g),p.sub(g);const E=1/(f.x*p.y-p.x*f.y);isFinite(E)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(E),_.copy(m).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(E),a[L].add(x),a[I].add(x),a[B].add(x),u[L].add(_),u[I].add(_),u[B].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let L=0,I=b.length;L<I;++L){const B=b[L],E=B.start,A=B.count;for(let F=E,N=E+A;F<N;F+=3)v(n[F+0],n[F+1],n[F+2])}const M=new U,T=new U,R=new U,y=new U;function S(L){R.fromArray(s,L*3),y.copy(R);const I=a[L];M.copy(I),M.sub(R.multiplyScalar(R.dot(I))).normalize(),T.crossVectors(y,I);const E=T.dot(u[L])<0?-1:1;l[L*4]=M.x,l[L*4+1]=M.y,l[L*4+2]=M.z,l[L*4+3]=E}for(let L=0,I=b.length;L<I;++L){const B=b[L],E=B.start,A=B.count;for(let F=E,N=E+A;F<N;F+=3)S(n[F+0]),S(n[F+1]),S(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new U,s=new U,o=new U,r=new U,l=new U,a=new U,u=new U,d=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),f=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,f),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),a.fromBufferAttribute(n,p),r.add(u),l.add(u),a.add(u),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,a.x,a.y,a.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(r,l){const a=r.array,u=r.itemSize,d=r.normalized,h=new a.constructor(l.length*u);let m=0,g=0;for(let f=0,p=l.length;f<p;f++){r.isInterleavedBufferAttribute?m=l[f]*r.data.stride+r.offset:m=l[f]*u;for(let x=0;x<u;x++)h[g++]=a[m++]}return new Ze(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ft,n=this.index.array,i=this.attributes;for(const r in i){const l=i[r],a=e(l,n);t.setAttribute(r,a)}const s=this.morphAttributes;for(const r in s){const l=[],a=s[r];for(let u=0,d=a.length;u<d;u++){const h=a[u],m=e(h,n);l.push(m)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const a=o[r];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const a in l)l[a]!==void 0&&(e[a]=l[a]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const a=n[l];e.data.attributes[l]=a.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const a=this.morphAttributes[l],u=[];for(let d=0,h=a.length;d<h;d++){const m=a[d];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const a in i){const u=i[a];this.setAttribute(a,u.clone(t))}const s=e.morphAttributes;for(const a in s){const u=[],d=s[a];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[a]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let a=0,u=o.length;a<u;a++){const d=o[a];this.addGroup(d.start,d.count,d.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const na=new je,Xt=new Gs,fs=new ks,ia=new U,Oi=new U,Ui=new U,ki=new U,br=new U,ps=new U,ms=new Te,gs=new Te,xs=new Te,Sr=new U,_s=new U;class st extends bt{constructor(e=new ft,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const r=this.morphTargetInfluences;if(s&&r){ps.set(0,0,0);for(let l=0,a=s.length;l<a;l++){const u=r[l],d=s[l];u!==0&&(br.fromBufferAttribute(d,e),o?ps.addScaledVector(br,u):ps.addScaledVector(br.sub(t),u))}t.add(ps)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(s),Xt.copy(e.ray).recast(e.near),fs.containsPoint(Xt.origin)===!1&&(Xt.intersectSphere(fs,ia)===null||Xt.origin.distanceToSquared(ia)>(e.far-e.near)**2))||(na.copy(s).invert(),Xt.copy(e.ray).applyMatrix4(na),n.boundingBox!==null&&Xt.intersectsBox(n.boundingBox)===!1))return;let o;const r=n.index,l=n.attributes.position,a=n.attributes.uv,u=n.attributes.uv2,d=n.groups,h=n.drawRange;if(r!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const f=d[m],p=i[f.materialIndex],x=Math.max(f.start,h.start),_=Math.min(r.count,Math.min(f.start+f.count,h.start+h.count));for(let v=x,b=_;v<b;v+=3){const M=r.getX(v),T=r.getX(v+1),R=r.getX(v+2);o=vs(this,p,e,Xt,a,u,M,T,R),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),g=Math.min(r.count,h.start+h.count);for(let f=m,p=g;f<p;f+=3){const x=r.getX(f),_=r.getX(f+1),v=r.getX(f+2);o=vs(this,i,e,Xt,a,u,x,_,v),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const f=d[m],p=i[f.materialIndex],x=Math.max(f.start,h.start),_=Math.min(l.count,Math.min(f.start+f.count,h.start+h.count));for(let v=x,b=_;v<b;v+=3){const M=v,T=v+1,R=v+2;o=vs(this,p,e,Xt,a,u,M,T,R),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let f=m,p=g;f<p;f+=3){const x=f,_=f+1,v=f+2;o=vs(this,i,e,Xt,a,u,x,_,v),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}}}function Ph(c,e,t,n,i,s,o,r){let l;if(e.side===Dt?l=n.intersectTriangle(o,s,i,!0,r):l=n.intersectTriangle(i,s,o,e.side===Tn,r),l===null)return null;_s.copy(r),_s.applyMatrix4(c.matrixWorld);const a=t.ray.origin.distanceTo(_s);return a<t.near||a>t.far?null:{distance:a,point:_s.clone(),object:c}}function vs(c,e,t,n,i,s,o,r,l){c.getVertexPosition(o,Oi),c.getVertexPosition(r,Ui),c.getVertexPosition(l,ki);const a=Ph(c,e,t,n,Oi,Ui,ki,Sr);if(a){i&&(ms.fromBufferAttribute(i,o),gs.fromBufferAttribute(i,r),xs.fromBufferAttribute(i,l),a.uv=fn.getUV(Sr,Oi,Ui,ki,ms,gs,xs,new Te)),s&&(ms.fromBufferAttribute(s,o),gs.fromBufferAttribute(s,r),xs.fromBufferAttribute(s,l),a.uv2=fn.getUV(Sr,Oi,Ui,ki,ms,gs,xs,new Te));const u={a:o,b:r,c:l,normal:new U,materialIndex:0};fn.getNormal(Oi,Ui,ki,u.normal),a.face=u}return a}class mn extends ft{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],a=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(d,2));function g(f,p,x,_,v,b,M,T,R,y,S){const L=b/R,I=M/y,B=b/2,E=M/2,A=T/2,F=R+1,N=y+1;let X=0,G=0;const j=new U;for(let J=0;J<N;J++){const se=J*I-E;for(let k=0;k<F;k++){const Q=k*L-B;j[f]=Q*_,j[p]=se*v,j[x]=A,a.push(j.x,j.y,j.z),j[f]=0,j[p]=0,j[x]=T>0?1:-1,u.push(j.x,j.y,j.z),d.push(k/R),d.push(1-J/y),X+=1}}for(let J=0;J<y;J++)for(let se=0;se<R;se++){const k=h+se+F*J,Q=h+se+F*(J+1),te=h+(se+1)+F*(J+1),H=h+(se+1)+F*J;l.push(k,Q,H),l.push(Q,te,H),G+=6}r.addGroup(m,G,S),m+=G,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ci(c){const e={};for(const t in c){e[t]={};for(const n in c[t]){const i=c[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mt(c){const e={};for(let t=0;t<c.length;t++){const n=Ci(c[t]);for(const i in n)e[i]=n[i]}return e}function Rh(c){const e=[];for(let t=0;t<c.length;t++)e.push(c[t].clone());return e}function Il(c){return c.getRenderTarget()===null&&c.outputEncoding===He?Kt:Ji}const Fl={clone:Ci,merge:Mt};var Dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dh,this.fragmentShader=Ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=Rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nl extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rt extends Nl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,a=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/a,i*=o.width/l,n*=o.height/a}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=-90,ui=1;class Fh extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Rt(hi,ui,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Rt(hi,ui,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Rt(hi,ui,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const r=new Rt(hi,ui,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);const l=new Rt(hi,ui,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const a=new Rt(hi,ui,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,-1),this.add(a)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,r,l,a]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=pn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,r),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,a),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class zl extends It{constructor(e,t,n,i,s,o,r,l,a,u){e=e!==void 0?e:[],t=t!==void 0?t:Ei,super(e,t,n,i,s,o,r,l,a,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nh extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new mn(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:En});s.uniforms.tEquirect.value=t;const o=new st(i,s),r=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Bt),new Fh(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Er=new U,zh=new U,Bh=new gt;let On=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Er.subVectors(n,t).cross(zh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bh.getNormalMatrix(e),i=this.coplanarPoint(Er).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const di=new ks,ys=new U;class to{constructor(e=new On,t=new On,n=new On,i=new On,s=new On,o=new On){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],r=n[3],l=n[4],a=n[5],u=n[6],d=n[7],h=n[8],m=n[9],g=n[10],f=n[11],p=n[12],x=n[13],_=n[14],v=n[15];return t[0].setComponents(r-i,d-l,f-h,v-p).normalize(),t[1].setComponents(r+i,d+l,f+h,v+p).normalize(),t[2].setComponents(r+s,d+a,f+m,v+x).normalize(),t[3].setComponents(r-s,d-a,f-m,v-x).normalize(),t[4].setComponents(r-o,d-u,f-g,v-_).normalize(),t[5].setComponents(r+o,d+u,f+g,v+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSprite(e){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ys.x=i.normal.x>0?e.max.x:e.min.x,ys.y=i.normal.y>0?e.max.y:e.min.y,ys.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bl(){let c=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=c.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=c.requestAnimationFrame(i),e=!0)},stop:function(){c.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){c=s}}}function Oh(c,e){const t=e.isWebGL2,n=new WeakMap;function i(a,u){const d=a.array,h=a.usage,m=c.createBuffer();c.bindBuffer(u,m),c.bufferData(u,d,h),a.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(a.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:a.version}}function s(a,u,d){const h=u.array,m=u.updateRange;c.bindBuffer(d,a),m.count===-1?c.bufferSubData(d,0,h):(t?c.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):c.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),n.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const u=n.get(a);u&&(c.deleteBuffer(u.buffer),n.delete(a))}function l(a,u){if(a.isGLBufferAttribute){const h=n.get(a);(!h||h.version<a.version)&&n.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const d=n.get(a);d===void 0?n.set(a,i(a,u)):d.version<a.version&&(s(d.buffer,a,u),d.version=a.version)}return{get:o,remove:r,update:l}}class Qi extends ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,r=Math.floor(n),l=Math.floor(i),a=r+1,u=l+1,d=e/r,h=t/l,m=[],g=[],f=[],p=[];for(let x=0;x<u;x++){const _=x*h-o;for(let v=0;v<a;v++){const b=v*d-s;g.push(b,-_,0),f.push(0,0,1),p.push(v/r),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let _=0;_<r;_++){const v=_+a*x,b=_+a*(x+1),M=_+1+a*(x+1),T=_+1+a*x;m.push(v,b,T),m.push(b,M,T)}this.setIndex(m),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qh="vec3 transformed = vec3( position );",jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Yh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,su=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ru=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ou=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",du=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Au=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ru=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Fu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ou=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ku=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Qu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Md=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ed=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ad=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Pd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Rd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Dd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Id=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Fd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Nd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Od=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$d=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,of=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,af=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,gf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ae={alphamap_fragment:Uh,alphamap_pars_fragment:kh,alphatest_fragment:Gh,alphatest_pars_fragment:Vh,aomap_fragment:Wh,aomap_pars_fragment:Hh,begin_vertex:qh,beginnormal_vertex:jh,bsdfs:Xh,iridescence_fragment:Yh,bumpmap_pars_fragment:$h,clipping_planes_fragment:Zh,clipping_planes_pars_fragment:Kh,clipping_planes_pars_vertex:Jh,clipping_planes_vertex:Qh,color_fragment:eu,color_pars_fragment:tu,color_pars_vertex:nu,color_vertex:iu,common:su,cube_uv_reflection_fragment:ru,defaultnormal_vertex:ou,displacementmap_pars_vertex:au,displacementmap_vertex:lu,emissivemap_fragment:cu,emissivemap_pars_fragment:hu,encodings_fragment:uu,encodings_pars_fragment:du,envmap_fragment:fu,envmap_common_pars_fragment:pu,envmap_pars_fragment:mu,envmap_pars_vertex:gu,envmap_physical_pars_fragment:Cu,envmap_vertex:xu,fog_vertex:_u,fog_pars_vertex:vu,fog_fragment:yu,fog_pars_fragment:Mu,gradientmap_pars_fragment:wu,lightmap_fragment:bu,lightmap_pars_fragment:Su,lights_lambert_fragment:Eu,lights_lambert_pars_fragment:Tu,lights_pars_begin:Au,lights_toon_fragment:Lu,lights_toon_pars_fragment:Pu,lights_phong_fragment:Ru,lights_phong_pars_fragment:Du,lights_physical_fragment:Iu,lights_physical_pars_fragment:Fu,lights_fragment_begin:Nu,lights_fragment_maps:zu,lights_fragment_end:Bu,logdepthbuf_fragment:Ou,logdepthbuf_pars_fragment:Uu,logdepthbuf_pars_vertex:ku,logdepthbuf_vertex:Gu,map_fragment:Vu,map_pars_fragment:Wu,map_particle_fragment:Hu,map_particle_pars_fragment:qu,metalnessmap_fragment:ju,metalnessmap_pars_fragment:Xu,morphcolor_vertex:Yu,morphnormal_vertex:$u,morphtarget_pars_vertex:Zu,morphtarget_vertex:Ku,normal_fragment_begin:Ju,normal_fragment_maps:Qu,normal_pars_fragment:ed,normal_pars_vertex:td,normal_vertex:nd,normalmap_pars_fragment:id,clearcoat_normal_fragment_begin:sd,clearcoat_normal_fragment_maps:rd,clearcoat_pars_fragment:od,iridescence_pars_fragment:ad,output_fragment:ld,packing:cd,premultiplied_alpha_fragment:hd,project_vertex:ud,dithering_fragment:dd,dithering_pars_fragment:fd,roughnessmap_fragment:pd,roughnessmap_pars_fragment:md,shadowmap_pars_fragment:gd,shadowmap_pars_vertex:xd,shadowmap_vertex:_d,shadowmask_pars_fragment:vd,skinbase_vertex:yd,skinning_pars_vertex:Md,skinning_vertex:wd,skinnormal_vertex:bd,specularmap_fragment:Sd,specularmap_pars_fragment:Ed,tonemapping_fragment:Td,tonemapping_pars_fragment:Ad,transmission_fragment:Cd,transmission_pars_fragment:Ld,uv_pars_fragment:Pd,uv_pars_vertex:Rd,uv_vertex:Dd,uv2_pars_fragment:Id,uv2_pars_vertex:Fd,uv2_vertex:Nd,worldpos_vertex:zd,background_vert:Bd,background_frag:Od,backgroundCube_vert:Ud,backgroundCube_frag:kd,cube_vert:Gd,cube_frag:Vd,depth_vert:Wd,depth_frag:Hd,distanceRGBA_vert:qd,distanceRGBA_frag:jd,equirect_vert:Xd,equirect_frag:Yd,linedashed_vert:$d,linedashed_frag:Zd,meshbasic_vert:Kd,meshbasic_frag:Jd,meshlambert_vert:Qd,meshlambert_frag:ef,meshmatcap_vert:tf,meshmatcap_frag:nf,meshnormal_vert:sf,meshnormal_frag:rf,meshphong_vert:of,meshphong_frag:af,meshphysical_vert:lf,meshphysical_frag:cf,meshtoon_vert:hf,meshtoon_frag:uf,points_vert:df,points_frag:ff,shadow_vert:pf,shadow_frag:mf,sprite_vert:gf,sprite_frag:xf},re={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new gt},uv2Transform:{value:new gt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gt}}},Jt={basic:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:Mt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:Mt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:Mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:Mt([re.points,re.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:Mt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:Mt([re.common,re.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:Mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:Mt([re.sprite,re.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:Mt([re.common,re.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:Mt([re.lights,re.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Jt.physical={uniforms:Mt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Te(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const Ms={r:0,b:0,g:0};function _f(c,e,t,n,i,s,o){const r=new Ue(0);let l=s===!0?0:1,a,u,d=null,h=0,m=null;function g(p,x){let _=!1,v=x.isScene===!0?x.background:null;v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v));const b=c.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?f(r,l):v&&v.isColor&&(f(v,1),_=!0),(c.autoClear||_)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Us)?(u===void 0&&(u=new st(new mn(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Ci(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,R,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=v.encoding!==He,(d!==v||h!==v.version||m!==c.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,m=c.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(a===void 0&&(a=new st(new Qi(2,2),new An({name:"BackgroundMaterial",uniforms:Ci(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=v,a.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,a.material.toneMapped=v.encoding!==He,v.matrixAutoUpdate===!0&&v.updateMatrix(),a.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||m!==c.toneMapping)&&(a.material.needsUpdate=!0,d=v,h=v.version,m=c.toneMapping),a.layers.enableAll(),p.unshift(a,a.geometry,a.material,0,0,null))}function f(p,x){p.getRGB(Ms,Il(c)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,x,o)}return{getClearColor:function(){return r},setClearColor:function(p,x=1){r.set(p),l=x,f(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(r,l)},render:g}}function vf(c,e,t,n){const i=c.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},l=p(null);let a=l,u=!1;function d(A,F,N,X,G){let j=!1;if(o){const J=f(X,N,F);a!==J&&(a=J,m(a.object)),j=x(A,X,N,G),j&&_(A,X,N,G)}else{const J=F.wireframe===!0;(a.geometry!==X.id||a.program!==N.id||a.wireframe!==J)&&(a.geometry=X.id,a.program=N.id,a.wireframe=J,j=!0)}G!==null&&t.update(G,34963),(j||u)&&(u=!1,y(A,F,N,X),G!==null&&c.bindBuffer(34963,t.get(G).buffer))}function h(){return n.isWebGL2?c.createVertexArray():s.createVertexArrayOES()}function m(A){return n.isWebGL2?c.bindVertexArray(A):s.bindVertexArrayOES(A)}function g(A){return n.isWebGL2?c.deleteVertexArray(A):s.deleteVertexArrayOES(A)}function f(A,F,N){const X=N.wireframe===!0;let G=r[A.id];G===void 0&&(G={},r[A.id]=G);let j=G[F.id];j===void 0&&(j={},G[F.id]=j);let J=j[X];return J===void 0&&(J=p(h()),j[X]=J),J}function p(A){const F=[],N=[],X=[];for(let G=0;G<i;G++)F[G]=0,N[G]=0,X[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:N,attributeDivisors:X,object:A,attributes:{},index:null}}function x(A,F,N,X){const G=a.attributes,j=F.attributes;let J=0;const se=N.getAttributes();for(const k in se)if(se[k].location>=0){const te=G[k];let H=j[k];if(H===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(H=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(H=A.instanceColor)),te===void 0||te.attribute!==H||H&&te.data!==H.data)return!0;J++}return a.attributesNum!==J||a.index!==X}function _(A,F,N,X){const G={},j=F.attributes;let J=0;const se=N.getAttributes();for(const k in se)if(se[k].location>=0){let te=j[k];te===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(te=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(te=A.instanceColor));const H={};H.attribute=te,te&&te.data&&(H.data=te.data),G[k]=H,J++}a.attributes=G,a.attributesNum=J,a.index=X}function v(){const A=a.newAttributes;for(let F=0,N=A.length;F<N;F++)A[F]=0}function b(A){M(A,0)}function M(A,F){const N=a.newAttributes,X=a.enabledAttributes,G=a.attributeDivisors;N[A]=1,X[A]===0&&(c.enableVertexAttribArray(A),X[A]=1),G[A]!==F&&((n.isWebGL2?c:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,F),G[A]=F)}function T(){const A=a.newAttributes,F=a.enabledAttributes;for(let N=0,X=F.length;N<X;N++)F[N]!==A[N]&&(c.disableVertexAttribArray(N),F[N]=0)}function R(A,F,N,X,G,j){n.isWebGL2===!0&&(N===5124||N===5125)?c.vertexAttribIPointer(A,F,N,G,j):c.vertexAttribPointer(A,F,N,X,G,j)}function y(A,F,N,X){if(n.isWebGL2===!1&&(A.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const G=X.attributes,j=N.getAttributes(),J=F.defaultAttributeValues;for(const se in j){const k=j[se];if(k.location>=0){let Q=G[se];if(Q===void 0&&(se==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),se==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor)),Q!==void 0){const te=Q.normalized,H=Q.itemSize,he=t.get(Q);if(he===void 0)continue;const ue=he.buffer,me=he.type,pe=he.bytesPerElement;if(Q.isInterleavedBufferAttribute){const Me=Q.data,Se=Me.stride,Ee=Q.offset;if(Me.isInstancedInterleavedBuffer){for(let Pe=0;Pe<k.locationSize;Pe++)M(k.location+Pe,Me.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Pe=0;Pe<k.locationSize;Pe++)b(k.location+Pe);c.bindBuffer(34962,ue);for(let Pe=0;Pe<k.locationSize;Pe++)R(k.location+Pe,H/k.locationSize,me,te,Se*pe,(Ee+H/k.locationSize*Pe)*pe)}else{if(Q.isInstancedBufferAttribute){for(let Me=0;Me<k.locationSize;Me++)M(k.location+Me,Q.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Me=0;Me<k.locationSize;Me++)b(k.location+Me);c.bindBuffer(34962,ue);for(let Me=0;Me<k.locationSize;Me++)R(k.location+Me,H/k.locationSize,me,te,H*pe,H/k.locationSize*Me*pe)}}else if(J!==void 0){const te=J[se];if(te!==void 0)switch(te.length){case 2:c.vertexAttrib2fv(k.location,te);break;case 3:c.vertexAttrib3fv(k.location,te);break;case 4:c.vertexAttrib4fv(k.location,te);break;default:c.vertexAttrib1fv(k.location,te)}}}}T()}function S(){B();for(const A in r){const F=r[A];for(const N in F){const X=F[N];for(const G in X)g(X[G].object),delete X[G];delete F[N]}delete r[A]}}function L(A){if(r[A.id]===void 0)return;const F=r[A.id];for(const N in F){const X=F[N];for(const G in X)g(X[G].object),delete X[G];delete F[N]}delete r[A.id]}function I(A){for(const F in r){const N=r[F];if(N[A.id]===void 0)continue;const X=N[A.id];for(const G in X)g(X[G].object),delete X[G];delete N[A.id]}}function B(){E(),u=!0,a!==l&&(a=l,m(a.object))}function E(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:b,disableUnusedAttributes:T}}function yf(c,e,t,n){const i=n.isWebGL2;let s;function o(a){s=a}function r(a,u){c.drawArrays(s,a,u),t.update(u,s,1)}function l(a,u,d){if(d===0)return;let h,m;if(i)h=c,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,a,u,d),t.update(u,s,d)}this.setMode=o,this.render=r,this.renderInstances=l}function Mf(c,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=c.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&c instanceof WebGL2RenderingContext;let r=t.precision!==void 0?t.precision:"highp";const l=s(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const a=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=c.getParameter(34930),h=c.getParameter(35660),m=c.getParameter(3379),g=c.getParameter(34076),f=c.getParameter(34921),p=c.getParameter(36347),x=c.getParameter(36348),_=c.getParameter(36349),v=h>0,b=o||e.has("OES_texture_float"),M=v&&b,T=o?c.getParameter(36183):0;return{isWebGL2:o,drawBuffers:a,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:T}}function wf(c){const e=this;let t=null,n=0,i=!1,s=!1;const o=new On,r=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||i;return i=h,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,f=d.clipIntersection,p=d.clipShadows,x=c.get(d);if(!i||g===null||g.length===0||s&&!p)s?u(null):a();else{const _=s?0:n,v=_*4;let b=x.clippingState||null;l.value=b,b=u(g,h,v,m);for(let M=0;M!==v;++M)b[M]=t[M];x.clippingState=b,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=_}};function a(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,g){const f=d!==null?d.length:0;let p=null;if(f!==0){if(p=l.value,g!==!0||p===null){const x=m+f*4,_=h.matrixWorldInverse;r.getNormalMatrix(_),(p===null||p.length<x)&&(p=new Float32Array(x));for(let v=0,b=m;v!==f;++v,b+=4)o.copy(d[v]).applyMatrix4(_,r),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,p}}function bf(c){let e=new WeakMap;function t(o,r){return r===jr?o.mapping=Ei:r===Xr&&(o.mapping=Ti),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===jr||r===Xr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const a=new Nh(l.height/2);return a.fromEquirectangularTexture(c,o),e.set(o,a),o.addEventListener("dispose",i),t(a.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Sf extends Nl{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,r=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const a=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=a*this.view.offsetX,o=s+a*this.view.width,r-=u*this.view.offsetY,l=r-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _i=4,sa=[.125,.215,.35,.446,.526,.582],kn=20,Tr=new Sf,ra=new Ue;let Ar=null;const Un=(1+Math.sqrt(5))/2,fi=1/Un,oa=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Un,fi),new U(0,Un,-fi),new U(fi,0,Un),new U(-fi,0,Un),new U(Un,fi,0),new U(-Un,fi,0)];class aa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ar=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ha(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ca(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ar),e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ar=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Ki,format:Wt,encoding:Xn,depthBuffer:!1},i=la(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=la(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ef(s)),this._blurMaterial=Tf(s,e,t)}return i}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,Tr)}_sceneToCubeUV(e,t,n,i){const r=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(ra),u.toneMapping=pn,u.autoClear=!1;const m=new Ri({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new st(new mn,m);let f=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,f=!0):(m.color.copy(ra),f=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(r.up.set(0,l[x],0),r.lookAt(a[x],0,0)):_===1?(r.up.set(0,0,l[x]),r.lookAt(0,a[x],0)):(r.up.set(0,l[x],0),r.lookAt(0,0,a[x]));const v=this._cubeSize;ws(i,_*v,x>2?v:0,v,v),u.setRenderTarget(i),f&&u.render(g,r),u.render(e,r)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ei||e.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ha()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ca());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Tr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=oa[(i-1)%oa.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,r){const l=this._renderer,a=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new st(this._lodPlanes[i],a),h=a.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*kn-1),f=s/g,p=isFinite(s)?1+Math.floor(u*f):kn;p>kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kn}`);const x=[];let _=0;for(let R=0;R<kn;++R){const y=R/f,S=Math.exp(-y*y/2);x.push(S),R===0?_+=S:R<p&&(_+=2*S)}for(let R=0;R<x.length;R++)x[R]=x[R]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=x,h.latitudinal.value=o==="latitudinal",r&&(h.poleAxis.value=r);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const b=this._sizeLods[i],M=3*b*(i>v-_i?i-v+_i:0),T=4*(this._cubeSize-b);ws(t,M,T,3*b,2*b),l.setRenderTarget(t),l.render(d,Tr)}}function Ef(c){const e=[],t=[],n=[];let i=c;const s=c-_i+1+sa.length;for(let o=0;o<s;o++){const r=Math.pow(2,i);t.push(r);let l=1/r;o>c-_i?l=sa[o-c+_i-1]:o===0&&(l=0),n.push(l);const a=1/(r-2),u=-a,d=1+a,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,f=3,p=2,x=1,_=new Float32Array(f*g*m),v=new Float32Array(p*g*m),b=new Float32Array(x*g*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,y=T>2?0:-1,S=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];_.set(S,f*g*T),v.set(h,p*g*T);const L=[T,T,T,T,T,T];b.set(L,x*g*T)}const M=new ft;M.setAttribute("position",new Ze(_,f)),M.setAttribute("uv",new Ze(v,p)),M.setAttribute("faceIndex",new Ze(b,x)),e.push(M),i>_i&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function la(c,e,t){const n=new $n(c,e,t);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(c,e,t,n,i){c.viewport.set(e,t,n,i),c.scissor.set(e,t,n,i)}function Tf(c,e,t){const n=new Float32Array(kn),i=new U(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function ca(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function ha(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function no(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Af(c){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const l=r.mapping,a=l===jr||l===Xr,u=l===Ei||l===Ti;if(a||u)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=e.get(r);return t===null&&(t=new aa(c)),d=a?t.fromEquirectangular(r,d):t.fromCubemap(r,d),e.set(r,d),d.texture}else{if(e.has(r))return e.get(r).texture;{const d=r.image;if(a&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new aa(c));const h=a?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,h),r.addEventListener("dispose",s),h.texture}else return null}}}return r}function i(r){let l=0;const a=6;for(let u=0;u<a;u++)r[u]!==void 0&&l++;return l===a}function s(r){const l=r.target;l.removeEventListener("dispose",s);const a=e.get(l);a!==void 0&&(e.delete(l),a.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Cf(c){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=c.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lf(c,e,t,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function r(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],34962);const m=d.morphAttributes;for(const g in m){const f=m[g];for(let p=0,x=f.length;p<x;p++)e.update(f[p],34962)}}function a(d){const h=[],m=d.index,g=d.attributes.position;let f=0;if(m!==null){const _=m.array;f=m.version;for(let v=0,b=_.length;v<b;v+=3){const M=_[v+0],T=_[v+1],R=_[v+2];h.push(M,T,T,R,R,M)}}else{const _=g.array;f=g.version;for(let v=0,b=_.length/3-1;v<b;v+=3){const M=v+0,T=v+1,R=v+2;h.push(M,T,T,R,R,M)}}const p=new(El(h)?Dl:Rl)(h,1);p.version=f;const x=s.get(d);x&&e.remove(x),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&a(d)}else a(d);return s.get(d)}return{get:r,update:l,getWireframeAttribute:u}}function Pf(c,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let r,l;function a(h){r=h.type,l=h.bytesPerElement}function u(h,m){c.drawElements(s,m,r,h*l),t.update(m,s,1)}function d(h,m,g){if(g===0)return;let f,p;if(i)f=c,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,m,r,h*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=a,this.render=u,this.renderInstances=d}function Rf(c){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(t.calls++,o){case 4:t.triangles+=r*(s/3);break;case 1:t.lines+=r*(s/2);break;case 3:t.lines+=r*(s-1);break;case 2:t.lines+=r*s;break;case 0:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Df(c,e){return c[0]-e[0]}function If(c,e){return Math.abs(e[1])-Math.abs(c[1])}function Ff(c,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new qe,r=[];for(let a=0;a<8;a++)r[a]=[a,0];function l(a,u,d){const h=a.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let f=s.get(u);if(f===void 0||f.count!==g){let A=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const _=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),b===!0&&(y=3);let S=u.attributes.position.count*y,L=1;S>e.maxTextureSize&&(L=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const I=new Float32Array(S*L*4*g),B=new Cl(I,S,L,g);B.type=Wn,B.needsUpdate=!0;const E=y*4;for(let F=0;F<g;F++){const N=M[F],X=T[F],G=R[F],j=S*L*4*F;for(let J=0;J<N.count;J++){const se=J*E;_===!0&&(o.fromBufferAttribute(N,J),I[j+se+0]=o.x,I[j+se+1]=o.y,I[j+se+2]=o.z,I[j+se+3]=0),v===!0&&(o.fromBufferAttribute(X,J),I[j+se+4]=o.x,I[j+se+5]=o.y,I[j+se+6]=o.z,I[j+se+7]=0),b===!0&&(o.fromBufferAttribute(G,J),I[j+se+8]=o.x,I[j+se+9]=o.y,I[j+se+10]=o.z,I[j+se+11]=G.itemSize===4?o.w:1)}}f={count:g,texture:B,size:new Te(S,L)},s.set(u,f),u.addEventListener("dispose",A)}let p=0;for(let _=0;_<h.length;_++)p+=h[_];const x=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(c,"morphTargetBaseInfluence",x),d.getUniforms().setValue(c,"morphTargetInfluences",h),d.getUniforms().setValue(c,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(c,"morphTargetsTextureSize",f.size)}else{const m=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<m;v++){const b=g[v];b[0]=v,b[1]=h[v]}g.sort(If);for(let v=0;v<8;v++)v<m&&g[v][1]?(r[v][0]=g[v][0],r[v][1]=g[v][1]):(r[v][0]=Number.MAX_SAFE_INTEGER,r[v][1]=0);r.sort(Df);const f=u.morphAttributes.position,p=u.morphAttributes.normal;let x=0;for(let v=0;v<8;v++){const b=r[v],M=b[0],T=b[1];M!==Number.MAX_SAFE_INTEGER&&T?(f&&u.getAttribute("morphTarget"+v)!==f[M]&&u.setAttribute("morphTarget"+v,f[M]),p&&u.getAttribute("morphNormal"+v)!==p[M]&&u.setAttribute("morphNormal"+v,p[M]),i[v]=T,x+=T):(f&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const _=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(c,"morphTargetBaseInfluence",_),d.getUniforms().setValue(c,"morphTargetInfluences",i)}}return{update:l}}function Nf(c,e,t,n){let i=new WeakMap;function s(l){const a=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==a&&(e.update(d),i.set(d,a)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function r(l){const a=l.target;a.removeEventListener("dispose",r),t.remove(a.instanceMatrix),a.instanceColor!==null&&t.remove(a.instanceColor)}return{update:s,dispose:o}}const Ol=new It,Ul=new Cl,kl=new yh,Gl=new zl,ua=[],da=[],fa=new Float32Array(16),pa=new Float32Array(9),ma=new Float32Array(4);function Di(c,e,t){const n=c[0];if(n<=0||n>0)return c;const i=e*t;let s=ua[i];if(s===void 0&&(s=new Float32Array(i),ua[i]=s),e!==0){n.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,c[o].toArray(s,r)}return s}function at(c,e){if(c.length!==e.length)return!1;for(let t=0,n=c.length;t<n;t++)if(c[t]!==e[t])return!1;return!0}function lt(c,e){for(let t=0,n=e.length;t<n;t++)c[t]=e[t]}function Ws(c,e){let t=da[e];t===void 0&&(t=new Int32Array(e),da[e]=t);for(let n=0;n!==e;++n)t[n]=c.allocateTextureUnit();return t}function zf(c,e){const t=this.cache;t[0]!==e&&(c.uniform1f(this.addr,e),t[0]=e)}function Bf(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;c.uniform2fv(this.addr,e),lt(t,e)}}function Of(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(c.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;c.uniform3fv(this.addr,e),lt(t,e)}}function Uf(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;c.uniform4fv(this.addr,e),lt(t,e)}}function kf(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;c.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(at(t,n))return;ma.set(n),c.uniformMatrix2fv(this.addr,!1,ma),lt(t,n)}}function Gf(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;c.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(at(t,n))return;pa.set(n),c.uniformMatrix3fv(this.addr,!1,pa),lt(t,n)}}function Vf(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;c.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(at(t,n))return;fa.set(n),c.uniformMatrix4fv(this.addr,!1,fa),lt(t,n)}}function Wf(c,e){const t=this.cache;t[0]!==e&&(c.uniform1i(this.addr,e),t[0]=e)}function Hf(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;c.uniform2iv(this.addr,e),lt(t,e)}}function qf(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;c.uniform3iv(this.addr,e),lt(t,e)}}function jf(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;c.uniform4iv(this.addr,e),lt(t,e)}}function Xf(c,e){const t=this.cache;t[0]!==e&&(c.uniform1ui(this.addr,e),t[0]=e)}function Yf(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;c.uniform2uiv(this.addr,e),lt(t,e)}}function $f(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;c.uniform3uiv(this.addr,e),lt(t,e)}}function Zf(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;c.uniform4uiv(this.addr,e),lt(t,e)}}function Kf(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ol,i)}function Jf(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||kl,i)}function Qf(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Gl,i)}function ep(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ul,i)}function tp(c){switch(c){case 5126:return zf;case 35664:return Bf;case 35665:return Of;case 35666:return Uf;case 35674:return kf;case 35675:return Gf;case 35676:return Vf;case 5124:case 35670:return Wf;case 35667:case 35671:return Hf;case 35668:case 35672:return qf;case 35669:case 35673:return jf;case 5125:return Xf;case 36294:return Yf;case 36295:return $f;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return Jf;case 35680:case 36300:case 36308:case 36293:return Qf;case 36289:case 36303:case 36311:case 36292:return ep}}function np(c,e){c.uniform1fv(this.addr,e)}function ip(c,e){const t=Di(e,this.size,2);c.uniform2fv(this.addr,t)}function sp(c,e){const t=Di(e,this.size,3);c.uniform3fv(this.addr,t)}function rp(c,e){const t=Di(e,this.size,4);c.uniform4fv(this.addr,t)}function op(c,e){const t=Di(e,this.size,4);c.uniformMatrix2fv(this.addr,!1,t)}function ap(c,e){const t=Di(e,this.size,9);c.uniformMatrix3fv(this.addr,!1,t)}function lp(c,e){const t=Di(e,this.size,16);c.uniformMatrix4fv(this.addr,!1,t)}function cp(c,e){c.uniform1iv(this.addr,e)}function hp(c,e){c.uniform2iv(this.addr,e)}function up(c,e){c.uniform3iv(this.addr,e)}function dp(c,e){c.uniform4iv(this.addr,e)}function fp(c,e){c.uniform1uiv(this.addr,e)}function pp(c,e){c.uniform2uiv(this.addr,e)}function mp(c,e){c.uniform3uiv(this.addr,e)}function gp(c,e){c.uniform4uiv(this.addr,e)}function xp(c,e,t){const n=this.cache,i=e.length,s=Ws(t,i);at(n,s)||(c.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ol,s[o])}function _p(c,e,t){const n=this.cache,i=e.length,s=Ws(t,i);at(n,s)||(c.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||kl,s[o])}function vp(c,e,t){const n=this.cache,i=e.length,s=Ws(t,i);at(n,s)||(c.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Gl,s[o])}function yp(c,e,t){const n=this.cache,i=e.length,s=Ws(t,i);at(n,s)||(c.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ul,s[o])}function Mp(c){switch(c){case 5126:return np;case 35664:return ip;case 35665:return sp;case 35666:return rp;case 35674:return op;case 35675:return ap;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return hp;case 35668:case 35672:return up;case 35669:case 35673:return dp;case 5125:return fp;case 36294:return pp;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return xp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return yp}}class wp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=tp(t.type)}}class bp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Mp(t.type)}}class Sp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const r=i[s];r.setValue(e,t[r.id],n)}}}const Cr=/(\w+)(\])?(\[|\.)?/g;function ga(c,e){c.seq.push(e),c.map[e.id]=e}function Ep(c,e,t){const n=c.name,i=n.length;for(Cr.lastIndex=0;;){const s=Cr.exec(n),o=Cr.lastIndex;let r=s[1];const l=s[2]==="]",a=s[3];if(l&&(r=r|0),a===void 0||a==="["&&o+2===i){ga(t,a===void 0?new wp(r,c,e):new bp(r,c,e));break}else{let d=t.map[r];d===void 0&&(d=new Sp(r),ga(t,d)),t=d}}}class Ps{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Ep(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const r=t[s],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function xa(c,e,t){const n=c.createShader(e);return c.shaderSource(n,t),c.compileShader(n),n}let Tp=0;function Ap(c,e){const t=c.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}function Cp(c){switch(c){case Xn:return["Linear","( value )"];case He:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function _a(c,e,t){const n=c.getShaderParameter(e,35713),i=c.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Ap(c.getShaderSource(e),o)}else return i}function Lp(c,e){const t=Cp(e);return"vec4 "+c+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Pp(c,e){let t;switch(e){case kc:t="Linear";break;case Gc:t="Reinhard";break;case Vc:t="OptimizedCineon";break;case Wc:t="ACESFilmic";break;case Hc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+c+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rp(c){return[c.extensionDerivatives||c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xi).join(`
`)}function Dp(c){const e=[];for(const t in c){const n=c[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ip(c,e){const t={},n=c.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=c.getActiveAttrib(e,i),o=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),t[o]={type:s.type,location:c.getAttribLocation(e,o),locationSize:r}}return t}function Xi(c){return c!==""}function va(c,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ya(c,e){return c.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(c){return c.replace(Fp,Np)}function Np(c,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Kr(t)}const zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ma(c){return c.replace(zp,Bp)}function Bp(c,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function wa(c){let e="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?e+=`
#define HIGH_PRECISION`:c.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Op(c){let e="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF":c.shadowMapType===_c?e="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function Up(c){let e="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case Ei:case Ti:e="ENVMAP_TYPE_CUBE";break;case Us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kp(c){let e="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case Ti:e="ENVMAP_MODE_REFRACTION";break}return e}function Gp(c){let e="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case yl:e="ENVMAP_BLENDING_MULTIPLY";break;case Oc:e="ENVMAP_BLENDING_MIX";break;case Uc:e="ENVMAP_BLENDING_ADD";break}return e}function Vp(c){const e=c.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wp(c,e,t,n){const i=c.getContext(),s=t.defines;let o=t.vertexShader,r=t.fragmentShader;const l=Op(t),a=Up(t),u=kp(t),d=Gp(t),h=Vp(t),m=t.isWebGL2?"":Rp(t),g=Dp(s),f=i.createProgram();let p,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Xi).join(`
`),p.length>0&&(p+=`
`),x=[m,g].filter(Xi).join(`
`),x.length>0&&(x+=`
`)):(p=[wa(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),x=[m,wa(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?Ae.tonemapping_pars_fragment:"",t.toneMapping!==pn?Pp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,Lp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),o=Kr(o),o=va(o,t),o=ya(o,t),r=Kr(r),r=va(r,t),r=ya(r,t),o=Ma(o),r=Ma(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",t.glslVersion===Ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const v=_+p+o,b=_+x+r,M=xa(i,35633,v),T=xa(i,35632,b);if(i.attachShader(f,M),i.attachShader(f,T),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),c.debug.checkShaderErrors){const S=i.getProgramInfoLog(f).trim(),L=i.getShaderInfoLog(M).trim(),I=i.getShaderInfoLog(T).trim();let B=!0,E=!0;if(i.getProgramParameter(f,35714)===!1){B=!1;const A=_a(i,M,"vertex"),F=_a(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+S+`
`+A+`
`+F)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(L===""||I==="")&&(E=!1);E&&(this.diagnostics={runnable:B,programLog:S,vertexShader:{log:L,prefix:p},fragmentShader:{log:I,prefix:x}})}i.deleteShader(M),i.deleteShader(T);let R;this.getUniforms=function(){return R===void 0&&(R=new Ps(i,f)),R};let y;return this.getAttributes=function(){return y===void 0&&(y=Ip(i,f)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=Tp++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=M,this.fragmentShader=T,this}let Hp=0;class qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jp(e),t.set(e,n)),n}}class jp{constructor(e){this.id=Hp++,this.code=e,this.usedTimes=0}}function Xp(c,e,t,n,i,s,o){const r=new Ll,l=new qp,a=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y,S,L,I,B){const E=I.fog,A=B.geometry,F=y.isMeshStandardMaterial?I.environment:null,N=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),X=N&&N.mapping===Us?N.image.height:null,G=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const j=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,J=j!==void 0?j.length:0;let se=0;A.morphAttributes.position!==void 0&&(se=1),A.morphAttributes.normal!==void 0&&(se=2),A.morphAttributes.color!==void 0&&(se=3);let k,Q,te,H;if(G){const Se=Jt[G];k=Se.vertexShader,Q=Se.fragmentShader}else k=y.vertexShader,Q=y.fragmentShader,l.update(y),te=l.getVertexShaderID(y),H=l.getFragmentShaderID(y);const he=c.getRenderTarget(),ue=y.alphaTest>0,me=y.clearcoat>0,pe=y.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:y.type,vertexShader:k,fragmentShader:Q,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:H,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:B.isInstancedMesh===!0,instancingColor:B.isInstancedMesh===!0&&B.instanceColor!==null,supportsVertexTextures:h,outputEncoding:he===null?c.outputEncoding:he.isXRRenderTarget===!0?he.texture.encoding:Xn,map:!!y.map,matcap:!!y.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:X,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===ch,tangentSpaceNormalMap:y.normalMapType===bl,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===He,clearcoat:me,clearcoatMap:me&&!!y.clearcoatMap,clearcoatRoughnessMap:me&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!y.clearcoatNormalMap,iridescence:pe,iridescenceMap:pe&&!!y.iridescenceMap,iridescenceThicknessMap:pe&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===yi,alphaMap:!!y.alphaMap,alphaTest:ue,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!A.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!E,useFog:y.fog===!0,fogExp2:E&&E.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:c.shadowMap.enabled&&L.length>0,shadowMapType:c.shadowMap.type,toneMapping:y.toneMapped?c.toneMapping:pn,useLegacyLights:c.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bn,flipSided:y.side===Dt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)S.push(L),S.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(x(S,y),_(S,y),S.push(c.outputEncoding)),S.push(y.customProgramCacheKey),S.join()}function x(y,S){y.push(S.precision),y.push(S.outputEncoding),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.combine),y.push(S.vertexUvs),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function _(y,S){r.disableAll(),S.isWebGL2&&r.enable(0),S.supportsVertexTextures&&r.enable(1),S.instancing&&r.enable(2),S.instancingColor&&r.enable(3),S.map&&r.enable(4),S.matcap&&r.enable(5),S.envMap&&r.enable(6),S.lightMap&&r.enable(7),S.aoMap&&r.enable(8),S.emissiveMap&&r.enable(9),S.bumpMap&&r.enable(10),S.normalMap&&r.enable(11),S.objectSpaceNormalMap&&r.enable(12),S.tangentSpaceNormalMap&&r.enable(13),S.clearcoat&&r.enable(14),S.clearcoatMap&&r.enable(15),S.clearcoatRoughnessMap&&r.enable(16),S.clearcoatNormalMap&&r.enable(17),S.iridescence&&r.enable(18),S.iridescenceMap&&r.enable(19),S.iridescenceThicknessMap&&r.enable(20),S.displacementMap&&r.enable(21),S.specularMap&&r.enable(22),S.roughnessMap&&r.enable(23),S.metalnessMap&&r.enable(24),S.gradientMap&&r.enable(25),S.alphaMap&&r.enable(26),S.alphaTest&&r.enable(27),S.vertexColors&&r.enable(28),S.vertexAlphas&&r.enable(29),S.vertexUvs&&r.enable(30),S.vertexTangents&&r.enable(31),S.uvsVertexOnly&&r.enable(32),y.push(r.mask),r.disableAll(),S.fog&&r.enable(0),S.useFog&&r.enable(1),S.flatShading&&r.enable(2),S.logarithmicDepthBuffer&&r.enable(3),S.skinning&&r.enable(4),S.morphTargets&&r.enable(5),S.morphNormals&&r.enable(6),S.morphColors&&r.enable(7),S.premultipliedAlpha&&r.enable(8),S.shadowMapEnabled&&r.enable(9),S.useLegacyLights&&r.enable(10),S.doubleSided&&r.enable(11),S.flipSided&&r.enable(12),S.useDepthPacking&&r.enable(13),S.dithering&&r.enable(14),S.specularIntensityMap&&r.enable(15),S.specularColorMap&&r.enable(16),S.transmission&&r.enable(17),S.transmissionMap&&r.enable(18),S.thicknessMap&&r.enable(19),S.sheen&&r.enable(20),S.sheenColorMap&&r.enable(21),S.sheenRoughnessMap&&r.enable(22),S.decodeVideoTexture&&r.enable(23),S.opaque&&r.enable(24),y.push(r.mask)}function v(y){const S=g[y.type];let L;if(S){const I=Jt[S];L=Fl.clone(I.uniforms)}else L=y.uniforms;return L}function b(y,S){let L;for(let I=0,B=a.length;I<B;I++){const E=a[I];if(E.cacheKey===S){L=E,++L.usedTimes;break}}return L===void 0&&(L=new Wp(c,S,y,s),a.push(L)),L}function M(y){if(--y.usedTimes===0){const S=a.indexOf(y);a[S]=a[a.length-1],a.pop(),y.destroy()}}function T(y){l.remove(y)}function R(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:M,releaseShaderCache:T,programs:a,dispose:R}}function Yp(){let c=new WeakMap;function e(s){let o=c.get(s);return o===void 0&&(o={},c.set(s,o)),o}function t(s){c.delete(s)}function n(s,o,r){c.get(s)[o]=r}function i(){c=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function $p(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.material.id!==e.material.id?c.material.id-e.material.id:c.z!==e.z?c.z-e.z:c.id-e.id}function ba(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.z!==e.z?e.z-c.z:c.id-e.id}function Sa(){const c=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,h,m,g,f,p){let x=c[e];return x===void 0?(x={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:f,group:p},c[e]=x):(x.id=d.id,x.object=d,x.geometry=h,x.material=m,x.groupOrder=g,x.renderOrder=d.renderOrder,x.z=f,x.group=p),e++,x}function r(d,h,m,g,f,p){const x=o(d,h,m,g,f,p);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function l(d,h,m,g,f,p){const x=o(d,h,m,g,f,p);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function a(d,h){t.length>1&&t.sort(d||$p),n.length>1&&n.sort(h||ba),i.length>1&&i.sort(h||ba)}function u(){for(let d=e,h=c.length;d<h;d++){const m=c[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:r,unshift:l,finish:u,sort:a}}function Zp(){let c=new WeakMap;function e(n,i){const s=c.get(n);let o;return s===void 0?(o=new Sa,c.set(n,[o])):i>=s.length?(o=new Sa,s.push(o)):o=s[i],o}function t(){c=new WeakMap}return{get:e,dispose:t}}function Kp(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ue};break;case"SpotLight":t={position:new U,direction:new U,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new U,halfWidth:new U,halfHeight:new U};break}return c[e.id]=t,t}}}function Jp(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[e.id]=t,t}}}let Qp=0;function em(c,e){return(e.castShadow?2:0)-(c.castShadow?2:0)+(e.map?1:0)-(c.map?1:0)}function tm(c,e){const t=new Kp,n=Jp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new U);const s=new U,o=new je,r=new je;function l(u,d){let h=0,m=0,g=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let f=0,p=0,x=0,_=0,v=0,b=0,M=0,T=0,R=0,y=0;u.sort(em);const S=d===!0?Math.PI:1;for(let I=0,B=u.length;I<B;I++){const E=u[I],A=E.color,F=E.intensity,N=E.distance,X=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=A.r*F*S,m+=A.g*F*S,g+=A.b*F*S;else if(E.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],F);else if(E.isDirectionalLight){const G=t.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity*S),E.castShadow){const j=E.shadow,J=n.get(E);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.directionalShadow[f]=J,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=E.shadow.matrix,b++}i.directional[f]=G,f++}else if(E.isSpotLight){const G=t.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(A).multiplyScalar(F*S),G.distance=N,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[x]=G;const j=E.shadow;if(E.map&&(i.spotLightMap[R]=E.map,R++,j.updateMatrices(E),E.castShadow&&y++),i.spotLightMatrix[x]=j.matrix,E.castShadow){const J=n.get(E);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.spotShadow[x]=J,i.spotShadowMap[x]=X,T++}x++}else if(E.isRectAreaLight){const G=t.get(E);G.color.copy(A).multiplyScalar(F),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[_]=G,_++}else if(E.isPointLight){const G=t.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity*S),G.distance=E.distance,G.decay=E.decay,E.castShadow){const j=E.shadow,J=n.get(E);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,J.shadowCameraNear=j.camera.near,J.shadowCameraFar=j.camera.far,i.pointShadow[p]=J,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=E.shadow.matrix,M++}i.point[p]=G,p++}else if(E.isHemisphereLight){const G=t.get(E);G.skyColor.copy(E.color).multiplyScalar(F*S),G.groundColor.copy(E.groundColor).multiplyScalar(F*S),i.hemi[v]=G,v++}}_>0&&(e.isWebGL2||c.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==f||L.pointLength!==p||L.spotLength!==x||L.rectAreaLength!==_||L.hemiLength!==v||L.numDirectionalShadows!==b||L.numPointShadows!==M||L.numSpotShadows!==T||L.numSpotMaps!==R)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=_,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=T+R-y,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=y,L.directionalLength=f,L.pointLength=p,L.spotLength=x,L.rectAreaLength=_,L.hemiLength=v,L.numDirectionalShadows=b,L.numPointShadows=M,L.numSpotShadows=T,L.numSpotMaps=R,i.version=Qp++)}function a(u,d){let h=0,m=0,g=0,f=0,p=0;const x=d.matrixWorldInverse;for(let _=0,v=u.length;_<v;_++){const b=u[_];if(b.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),h++}else if(b.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),g++}else if(b.isRectAreaLight){const M=i.rectArea[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),r.identity(),o.copy(b.matrixWorld),o.premultiply(x),r.extractRotation(o),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),f++}else if(b.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),m++}else if(b.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(x),p++}}}return{setup:l,setupView:a,state:i}}function Ea(c,e){const t=new tm(c,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function r(d){i.push(d)}function l(d){t.setup(n,d)}function a(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:a,pushLight:o,pushShadow:r}}function nm(c,e){let t=new WeakMap;function n(s,o=0){const r=t.get(s);let l;return r===void 0?(l=new Ea(c,e),t.set(s,[l])):o>=r.length?(l=new Ea(c,e),r.push(l)):l=r[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class im extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sm extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,om=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function am(c,e,t){let n=new to;const i=new Te,s=new Te,o=new qe,r=new im({depthPacking:lh}),l=new sm,a={},u=t.maxTextureSize,d={[Tn]:Dt,[Dt]:Tn,[bn]:bn},h=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:rm,fragmentShader:om}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new ft;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new st(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl,this.render=function(b,M,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const R=c.getRenderTarget(),y=c.getActiveCubeFace(),S=c.getActiveMipmapLevel(),L=c.state;L.setBlending(En),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let I=0,B=b.length;I<B;I++){const E=b[I],A=E.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",E,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;i.copy(A.mapSize);const F=A.getFrameExtents();if(i.multiply(F),s.copy(A.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/F.x),i.x=s.x*F.x,A.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/F.y),i.y=s.y*F.y,A.mapSize.y=s.y)),A.map===null){const X=this.type!==ji?{minFilter:wt,magFilter:wt}:{};A.map=new $n(i.x,i.y,X),A.map.texture.name=E.name+".shadowMap",A.camera.updateProjectionMatrix()}c.setRenderTarget(A.map),c.clear();const N=A.getViewportCount();for(let X=0;X<N;X++){const G=A.getViewport(X);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),L.viewport(o),A.updateMatrices(E,X),n=A.getFrustum(),v(M,T,A.camera,E,this.type)}A.isPointLightShadow!==!0&&this.type===ji&&x(A,T),A.needsUpdate=!1}p.needsUpdate=!1,c.setRenderTarget(R,y,S)};function x(b,M){const T=e.update(f);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $n(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,c.setRenderTarget(b.mapPass),c.clear(),c.renderBufferDirect(M,null,T,h,f,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,c.setRenderTarget(b.map),c.clear(),c.renderBufferDirect(M,null,T,m,f,null)}function _(b,M,T,R,y,S){let L=null;const I=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)L=I;else if(L=T.isPointLight===!0?l:r,c.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const B=L.uuid,E=M.uuid;let A=a[B];A===void 0&&(A={},a[B]=A);let F=A[E];F===void 0&&(F=L.clone(),A[E]=F),L=F}return L.visible=M.visible,L.wireframe=M.wireframe,S===ji?L.side=M.shadowSide!==null?M.shadowSide:M.side:L.side=M.shadowSide!==null?M.shadowSide:d[M.side],L.alphaMap=M.alphaMap,L.alphaTest=M.alphaTest,L.map=M.map,L.clipShadows=M.clipShadows,L.clippingPlanes=M.clippingPlanes,L.clipIntersection=M.clipIntersection,L.displacementMap=M.displacementMap,L.displacementScale=M.displacementScale,L.displacementBias=M.displacementBias,L.wireframeLinewidth=M.wireframeLinewidth,L.linewidth=M.linewidth,T.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(T.matrixWorld),L.nearDistance=R,L.farDistance=y),L}function v(b,M,T,R,y){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===ji)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const I=e.update(b),B=b.material;if(Array.isArray(B)){const E=I.groups;for(let A=0,F=E.length;A<F;A++){const N=E[A],X=B[N.materialIndex];if(X&&X.visible){const G=_(b,X,R,T.near,T.far,y);c.renderBufferDirect(T,null,I,G,b,N)}}}else if(B.visible){const E=_(b,B,R,T.near,T.far,y);c.renderBufferDirect(T,null,I,E,b,null)}}const L=b.children;for(let I=0,B=L.length;I<B;I++)v(L[I],M,T,R,y)}}function lm(c,e,t){const n=t.isWebGL2;function i(){let O=!1;const Z=new qe;let ee=null;const fe=new qe(0,0,0,0);return{setMask:function(ge){ee!==ge&&!O&&(c.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){O=ge},setClear:function(ge,Ve,ct,_t,qt){qt===!0&&(ge*=_t,Ve*=_t,ct*=_t),Z.set(ge,Ve,ct,_t),fe.equals(Z)===!1&&(c.clearColor(ge,Ve,ct,_t),fe.copy(Z))},reset:function(){O=!1,ee=null,fe.set(-1,0,0,0)}}}function s(){let O=!1,Z=null,ee=null,fe=null;return{setTest:function(ge){ge?ue(2929):me(2929)},setMask:function(ge){Z!==ge&&!O&&(c.depthMask(ge),Z=ge)},setFunc:function(ge){if(ee!==ge){switch(ge){case Rc:c.depthFunc(512);break;case Dc:c.depthFunc(519);break;case Ic:c.depthFunc(513);break;case qr:c.depthFunc(515);break;case Fc:c.depthFunc(514);break;case Nc:c.depthFunc(518);break;case zc:c.depthFunc(516);break;case Bc:c.depthFunc(517);break;default:c.depthFunc(515)}ee=ge}},setLocked:function(ge){O=ge},setClear:function(ge){fe!==ge&&(c.clearDepth(ge),fe=ge)},reset:function(){O=!1,Z=null,ee=null,fe=null}}}function o(){let O=!1,Z=null,ee=null,fe=null,ge=null,Ve=null,ct=null,_t=null,qt=null;return{setTest:function(Ye){O||(Ye?ue(2960):me(2960))},setMask:function(Ye){Z!==Ye&&!O&&(c.stencilMask(Ye),Z=Ye)},setFunc:function(Ye,Nt,jt){(ee!==Ye||fe!==Nt||ge!==jt)&&(c.stencilFunc(Ye,Nt,jt),ee=Ye,fe=Nt,ge=jt)},setOp:function(Ye,Nt,jt){(Ve!==Ye||ct!==Nt||_t!==jt)&&(c.stencilOp(Ye,Nt,jt),Ve=Ye,ct=Nt,_t=jt)},setLocked:function(Ye){O=Ye},setClear:function(Ye){qt!==Ye&&(c.clearStencil(Ye),qt=Ye)},reset:function(){O=!1,Z=null,ee=null,fe=null,ge=null,Ve=null,ct=null,_t=null,qt=null}}}const r=new i,l=new s,a=new o,u=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,f=[],p=null,x=!1,_=null,v=null,b=null,M=null,T=null,R=null,y=null,S=!1,L=null,I=null,B=null,E=null,A=null;const F=c.getParameter(35661);let N=!1,X=0;const G=c.getParameter(7938);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=X>=2);let j=null,J={};const se=c.getParameter(3088),k=c.getParameter(2978),Q=new qe().fromArray(se),te=new qe().fromArray(k);function H(O,Z,ee){const fe=new Uint8Array(4),ge=c.createTexture();c.bindTexture(O,ge),c.texParameteri(O,10241,9728),c.texParameteri(O,10240,9728);for(let Ve=0;Ve<ee;Ve++)c.texImage2D(Z+Ve,0,6408,1,1,0,6408,5121,fe);return ge}const he={};he[3553]=H(3553,3553,1),he[34067]=H(34067,34069,6),r.setClear(0,0,0,1),l.setClear(1),a.setClear(0),ue(2929),l.setFunc(qr),Je(!1),Qe(fo),ue(2884),Ke(En);function ue(O){h[O]!==!0&&(c.enable(O),h[O]=!0)}function me(O){h[O]!==!1&&(c.disable(O),h[O]=!1)}function pe(O,Z){return m[O]!==Z?(c.bindFramebuffer(O,Z),m[O]=Z,n&&(O===36009&&(m[36160]=Z),O===36160&&(m[36009]=Z)),!0):!1}function Me(O,Z){let ee=f,fe=!1;if(O)if(ee=g.get(Z),ee===void 0&&(ee=[],g.set(Z,ee)),O.isWebGLMultipleRenderTargets){const ge=O.texture;if(ee.length!==ge.length||ee[0]!==36064){for(let Ve=0,ct=ge.length;Ve<ct;Ve++)ee[Ve]=36064+Ve;ee.length=ge.length,fe=!0}}else ee[0]!==36064&&(ee[0]=36064,fe=!0);else ee[0]!==1029&&(ee[0]=1029,fe=!0);fe&&(t.isWebGL2?c.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Se(O){return p!==O?(c.useProgram(O),p=O,!0):!1}const Ee={[gi]:32774,[yc]:32778,[Mc]:32779};if(n)Ee[xo]=32775,Ee[_o]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(Ee[xo]=O.MIN_EXT,Ee[_o]=O.MAX_EXT)}const Pe={[wc]:0,[bc]:1,[Sc]:768,[_l]:770,[Pc]:776,[Cc]:774,[Tc]:772,[Ec]:769,[vl]:771,[Lc]:775,[Ac]:773};function Ke(O,Z,ee,fe,ge,Ve,ct,_t){if(O===En){x===!0&&(me(3042),x=!1);return}if(x===!1&&(ue(3042),x=!0),O!==vc){if(O!==_||_t!==S){if((v!==gi||T!==gi)&&(c.blendEquation(32774),v=gi,T=gi),_t)switch(O){case yi:c.blendFuncSeparate(1,771,1,771);break;case po:c.blendFunc(1,1);break;case mo:c.blendFuncSeparate(0,769,0,1);break;case go:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case yi:c.blendFuncSeparate(770,771,1,771);break;case po:c.blendFunc(770,1);break;case mo:c.blendFuncSeparate(0,769,0,1);break;case go:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,M=null,R=null,y=null,_=O,S=_t}return}ge=ge||Z,Ve=Ve||ee,ct=ct||fe,(Z!==v||ge!==T)&&(c.blendEquationSeparate(Ee[Z],Ee[ge]),v=Z,T=ge),(ee!==b||fe!==M||Ve!==R||ct!==y)&&(c.blendFuncSeparate(Pe[ee],Pe[fe],Pe[Ve],Pe[ct]),b=ee,M=fe,R=Ve,y=ct),_=O,S=!1}function dt(O,Z){O.side===bn?me(2884):ue(2884);let ee=O.side===Dt;Z&&(ee=!ee),Je(ee),O.blending===yi&&O.transparent===!1?Ke(En):Ke(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),r.setMask(O.colorWrite);const fe=O.stencilWrite;a.setTest(fe),fe&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ke(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ue(32926):me(32926)}function Je(O){L!==O&&(O?c.frontFace(2304):c.frontFace(2305),L=O)}function Qe(O){O!==gc?(ue(2884),O!==I&&(O===fo?c.cullFace(1029):O===xc?c.cullFace(1028):c.cullFace(1032))):me(2884),I=O}function Re(O){O!==B&&(N&&c.lineWidth(O),B=O)}function ke(O,Z,ee){O?(ue(32823),(E!==Z||A!==ee)&&(c.polygonOffset(Z,ee),E=Z,A=ee)):me(32823)}function Xe(O){O?ue(3089):me(3089)}function xt(O){O===void 0&&(O=33984+F-1),j!==O&&(c.activeTexture(O),j=O)}function D(O,Z,ee){ee===void 0&&(j===null?ee=33984+F-1:ee=j);let fe=J[ee];fe===void 0&&(fe={type:void 0,texture:void 0},J[ee]=fe),(fe.type!==O||fe.texture!==Z)&&(j!==ee&&(c.activeTexture(ee),j=ee),c.bindTexture(O,Z||he[O]),fe.type=O,fe.texture=Z)}function C(){const O=J[j];O!==void 0&&O.type!==void 0&&(c.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $(){try{c.compressedTexImage2D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{c.compressedTexImage3D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{c.texSubImage2D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{c.texSubImage3D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{c.texStorage2D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{c.texStorage3D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{c.texImage2D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{c.texImage3D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(O){Q.equals(O)===!1&&(c.scissor(O.x,O.y,O.z,O.w),Q.copy(O))}function _e(O){te.equals(O)===!1&&(c.viewport(O.x,O.y,O.z,O.w),te.copy(O))}function De(O,Z){let ee=d.get(Z);ee===void 0&&(ee=new WeakMap,d.set(Z,ee));let fe=ee.get(O);fe===void 0&&(fe=c.getUniformBlockIndex(Z,O.name),ee.set(O,fe))}function ze(O,Z){const fe=d.get(Z).get(O);u.get(Z)!==fe&&(c.uniformBlockBinding(Z,fe,O.__bindingPointIndex),u.set(Z,fe))}function Ge(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),n===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),h={},j=null,J={},m={},g=new WeakMap,f=[],p=null,x=!1,_=null,v=null,b=null,M=null,T=null,R=null,y=null,S=!1,L=null,I=null,B=null,E=null,A=null,Q.set(0,0,c.canvas.width,c.canvas.height),te.set(0,0,c.canvas.width,c.canvas.height),r.reset(),l.reset(),a.reset()}return{buffers:{color:r,depth:l,stencil:a},enable:ue,disable:me,bindFramebuffer:pe,drawBuffers:Me,useProgram:Se,setBlending:Ke,setMaterial:dt,setFlipSided:Je,setCullFace:Qe,setLineWidth:Re,setPolygonOffset:ke,setScissorTest:Xe,activeTexture:xt,bindTexture:D,unbindTexture:C,compressedTexImage2D:$,compressedTexImage3D:ne,texImage2D:oe,texImage3D:xe,updateUBOMapping:De,uniformBlockBinding:ze,texStorage2D:V,texStorage3D:de,texSubImage2D:ie,texSubImage3D:ce,compressedTexSubImage2D:ye,compressedTexSubImage3D:z,scissor:ve,viewport:_e,reset:Ge}}function cm(c,e,t,n,i,s,o){const r=i.isWebGL2,l=i.maxTextures,a=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,C){return x?new OffscreenCanvas(D,C):Is("canvas")}function v(D,C,$,ne){let ie=1;if((D.width>ne||D.height>ne)&&(ie=ne/Math.max(D.width,D.height)),ie<1||C===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const ce=C?dh:Math.floor,ye=ce(ie*D.width),z=ce(ie*D.height);f===void 0&&(f=_(ye,z));const V=$?_(ye,z):f;return V.width=ye,V.height=z,V.getContext("2d").drawImage(D,0,0,ye,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+ye+"x"+z+")."),V}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function b(D){return jo(D.width)&&jo(D.height)}function M(D){return r?!1:D.wrapS!==Vt||D.wrapT!==Vt||D.minFilter!==wt&&D.minFilter!==Bt}function T(D,C){return D.generateMipmaps&&C&&D.minFilter!==wt&&D.minFilter!==Bt}function R(D){c.generateMipmap(D)}function y(D,C,$,ne,ie=!1){if(r===!1)return C;if(D!==null){if(c[D]!==void 0)return c[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=C;return C===6403&&($===5126&&(ce=33326),$===5131&&(ce=33325),$===5121&&(ce=33321)),C===33319&&($===5126&&(ce=33328),$===5131&&(ce=33327),$===5121&&(ce=33323)),C===6408&&($===5126&&(ce=34836),$===5131&&(ce=34842),$===5121&&(ce=ne===He&&ie===!1?35907:32856),$===32819&&(ce=32854),$===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function S(D,C,$){return T(D,$)===!0||D.isFramebufferTexture&&D.minFilter!==wt&&D.minFilter!==Bt?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function L(D){return D===wt||D===vo||D===Js?9728:9729}function I(D){const C=D.target;C.removeEventListener("dispose",I),E(C),C.isVideoTexture&&g.delete(C)}function B(D){const C=D.target;C.removeEventListener("dispose",B),F(C)}function E(D){const C=n.get(D);if(C.__webglInit===void 0)return;const $=D.source,ne=p.get($);if(ne){const ie=ne[C.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&A(D),Object.keys(ne).length===0&&p.delete($)}n.remove(D)}function A(D){const C=n.get(D);c.deleteTexture(C.__webglTexture);const $=D.source,ne=p.get($);delete ne[C.__cacheKey],o.memory.textures--}function F(D){const C=D.texture,$=n.get(D),ne=n.get(C);if(ne.__webglTexture!==void 0&&(c.deleteTexture(ne.__webglTexture),o.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)c.deleteFramebuffer($.__webglFramebuffer[ie]),$.__webglDepthbuffer&&c.deleteRenderbuffer($.__webglDepthbuffer[ie]);else{if(c.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&c.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&c.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ie=0;ie<$.__webglColorRenderbuffer.length;ie++)$.__webglColorRenderbuffer[ie]&&c.deleteRenderbuffer($.__webglColorRenderbuffer[ie]);$.__webglDepthRenderbuffer&&c.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let ie=0,ce=C.length;ie<ce;ie++){const ye=n.get(C[ie]);ye.__webglTexture&&(c.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(C[ie])}n.remove(C),n.remove(D)}let N=0;function X(){N=0}function G(){const D=N;return D>=l&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l),N+=1,D}function j(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.encoding),C.join()}function J(D,C){const $=n.get(D);if(D.isVideoTexture&&Xe(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const ne=D.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me($,D,C);return}}t.bindTexture(3553,$.__webglTexture,33984+C)}function se(D,C){const $=n.get(D);if(D.version>0&&$.__version!==D.version){me($,D,C);return}t.bindTexture(35866,$.__webglTexture,33984+C)}function k(D,C){const $=n.get(D);if(D.version>0&&$.__version!==D.version){me($,D,C);return}t.bindTexture(32879,$.__webglTexture,33984+C)}function Q(D,C){const $=n.get(D);if(D.version>0&&$.__version!==D.version){pe($,D,C);return}t.bindTexture(34067,$.__webglTexture,33984+C)}const te={[Yr]:10497,[Vt]:33071,[$r]:33648},H={[wt]:9728,[vo]:9984,[Js]:9986,[Bt]:9729,[qc]:9985,[Zi]:9987};function he(D,C,$){if($?(c.texParameteri(D,10242,te[C.wrapS]),c.texParameteri(D,10243,te[C.wrapT]),(D===32879||D===35866)&&c.texParameteri(D,32882,te[C.wrapR]),c.texParameteri(D,10240,H[C.magFilter]),c.texParameteri(D,10241,H[C.minFilter])):(c.texParameteri(D,10242,33071),c.texParameteri(D,10243,33071),(D===32879||D===35866)&&c.texParameteri(D,32882,33071),(C.wrapS!==Vt||C.wrapT!==Vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(D,10240,L(C.magFilter)),c.texParameteri(D,10241,L(C.minFilter)),C.minFilter!==wt&&C.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===wt||C.minFilter!==Js&&C.minFilter!==Zi||C.type===Wn&&e.has("OES_texture_float_linear")===!1||r===!1&&C.type===Ki&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(c.texParameterf(D,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function ue(D,C){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",I));const ne=C.source;let ie=p.get(ne);ie===void 0&&(ie={},p.set(ne,ie));const ce=j(C);if(ce!==D.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:c.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ie[ce].usedTimes++;const ye=ie[D.__cacheKey];ye!==void 0&&(ie[D.__cacheKey].usedTimes--,ye.usedTimes===0&&A(C)),D.__cacheKey=ce,D.__webglTexture=ie[ce].texture}return $}function me(D,C,$){let ne=3553;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ne=35866),C.isData3DTexture&&(ne=32879);const ie=ue(D,C),ce=C.source;t.bindTexture(ne,D.__webglTexture,33984+$);const ye=n.get(ce);if(ce.version!==ye.__version||ie===!0){t.activeTexture(33984+$),c.pixelStorei(37440,C.flipY),c.pixelStorei(37441,C.premultiplyAlpha),c.pixelStorei(3317,C.unpackAlignment),c.pixelStorei(37443,0);const z=M(C)&&b(C.image)===!1;let V=v(C.image,z,!1,u);V=xt(C,V);const de=b(V)||r,oe=s.convert(C.format,C.encoding);let xe=s.convert(C.type),ve=y(C.internalFormat,oe,xe,C.encoding,C.isVideoTexture);he(ne,C,de);let _e;const De=C.mipmaps,ze=r&&C.isVideoTexture!==!0,Ge=ye.__version===void 0||ie===!0,O=S(C,V,de);if(C.isDepthTexture)ve=6402,r?C.type===Wn?ve=36012:C.type===Vn?ve=33190:C.type===Mi?ve=35056:ve=33189:C.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Hn&&ve===6402&&C.type!==wl&&C.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Vn,xe=s.convert(C.type)),C.format===Ai&&ve===6402&&(ve=34041,C.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Mi,xe=s.convert(C.type))),Ge&&(ze?t.texStorage2D(3553,1,ve,V.width,V.height):t.texImage2D(3553,0,ve,V.width,V.height,0,oe,xe,null));else if(C.isDataTexture)if(De.length>0&&de){ze&&Ge&&t.texStorage2D(3553,O,ve,De[0].width,De[0].height);for(let Z=0,ee=De.length;Z<ee;Z++)_e=De[Z],ze?t.texSubImage2D(3553,Z,0,0,_e.width,_e.height,oe,xe,_e.data):t.texImage2D(3553,Z,ve,_e.width,_e.height,0,oe,xe,_e.data);C.generateMipmaps=!1}else ze?(Ge&&t.texStorage2D(3553,O,ve,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,oe,xe,V.data)):t.texImage2D(3553,0,ve,V.width,V.height,0,oe,xe,V.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ze&&Ge&&t.texStorage3D(35866,O,ve,De[0].width,De[0].height,V.depth);for(let Z=0,ee=De.length;Z<ee;Z++)_e=De[Z],C.format!==Wt?oe!==null?ze?t.compressedTexSubImage3D(35866,Z,0,0,0,_e.width,_e.height,V.depth,oe,_e.data,0,0):t.compressedTexImage3D(35866,Z,ve,_e.width,_e.height,V.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(35866,Z,0,0,0,_e.width,_e.height,V.depth,oe,xe,_e.data):t.texImage3D(35866,Z,ve,_e.width,_e.height,V.depth,0,oe,xe,_e.data)}else{ze&&Ge&&t.texStorage2D(3553,O,ve,De[0].width,De[0].height);for(let Z=0,ee=De.length;Z<ee;Z++)_e=De[Z],C.format!==Wt?oe!==null?ze?t.compressedTexSubImage2D(3553,Z,0,0,_e.width,_e.height,oe,_e.data):t.compressedTexImage2D(3553,Z,ve,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,Z,0,0,_e.width,_e.height,oe,xe,_e.data):t.texImage2D(3553,Z,ve,_e.width,_e.height,0,oe,xe,_e.data)}else if(C.isDataArrayTexture)ze?(Ge&&t.texStorage3D(35866,O,ve,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,oe,xe,V.data)):t.texImage3D(35866,0,ve,V.width,V.height,V.depth,0,oe,xe,V.data);else if(C.isData3DTexture)ze?(Ge&&t.texStorage3D(32879,O,ve,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,oe,xe,V.data)):t.texImage3D(32879,0,ve,V.width,V.height,V.depth,0,oe,xe,V.data);else if(C.isFramebufferTexture){if(Ge)if(ze)t.texStorage2D(3553,O,ve,V.width,V.height);else{let Z=V.width,ee=V.height;for(let fe=0;fe<O;fe++)t.texImage2D(3553,fe,ve,Z,ee,0,oe,xe,null),Z>>=1,ee>>=1}}else if(De.length>0&&de){ze&&Ge&&t.texStorage2D(3553,O,ve,De[0].width,De[0].height);for(let Z=0,ee=De.length;Z<ee;Z++)_e=De[Z],ze?t.texSubImage2D(3553,Z,0,0,oe,xe,_e):t.texImage2D(3553,Z,ve,oe,xe,_e);C.generateMipmaps=!1}else ze?(Ge&&t.texStorage2D(3553,O,ve,V.width,V.height),t.texSubImage2D(3553,0,0,0,oe,xe,V)):t.texImage2D(3553,0,ve,oe,xe,V);T(C,de)&&R(ne),ye.__version=ce.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function pe(D,C,$){if(C.image.length!==6)return;const ne=ue(D,C),ie=C.source;t.bindTexture(34067,D.__webglTexture,33984+$);const ce=n.get(ie);if(ie.version!==ce.__version||ne===!0){t.activeTexture(33984+$),c.pixelStorei(37440,C.flipY),c.pixelStorei(37441,C.premultiplyAlpha),c.pixelStorei(3317,C.unpackAlignment),c.pixelStorei(37443,0);const ye=C.isCompressedTexture||C.image[0].isCompressedTexture,z=C.image[0]&&C.image[0].isDataTexture,V=[];for(let Z=0;Z<6;Z++)!ye&&!z?V[Z]=v(C.image[Z],!1,!0,a):V[Z]=z?C.image[Z].image:C.image[Z],V[Z]=xt(C,V[Z]);const de=V[0],oe=b(de)||r,xe=s.convert(C.format,C.encoding),ve=s.convert(C.type),_e=y(C.internalFormat,xe,ve,C.encoding),De=r&&C.isVideoTexture!==!0,ze=ce.__version===void 0||ne===!0;let Ge=S(C,de,oe);he(34067,C,oe);let O;if(ye){De&&ze&&t.texStorage2D(34067,Ge,_e,de.width,de.height);for(let Z=0;Z<6;Z++){O=V[Z].mipmaps;for(let ee=0;ee<O.length;ee++){const fe=O[ee];C.format!==Wt?xe!==null?De?t.compressedTexSubImage2D(34069+Z,ee,0,0,fe.width,fe.height,xe,fe.data):t.compressedTexImage2D(34069+Z,ee,_e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+Z,ee,0,0,fe.width,fe.height,xe,ve,fe.data):t.texImage2D(34069+Z,ee,_e,fe.width,fe.height,0,xe,ve,fe.data)}}}else{O=C.mipmaps,De&&ze&&(O.length>0&&Ge++,t.texStorage2D(34067,Ge,_e,V[0].width,V[0].height));for(let Z=0;Z<6;Z++)if(z){De?t.texSubImage2D(34069+Z,0,0,0,V[Z].width,V[Z].height,xe,ve,V[Z].data):t.texImage2D(34069+Z,0,_e,V[Z].width,V[Z].height,0,xe,ve,V[Z].data);for(let ee=0;ee<O.length;ee++){const ge=O[ee].image[Z].image;De?t.texSubImage2D(34069+Z,ee+1,0,0,ge.width,ge.height,xe,ve,ge.data):t.texImage2D(34069+Z,ee+1,_e,ge.width,ge.height,0,xe,ve,ge.data)}}else{De?t.texSubImage2D(34069+Z,0,0,0,xe,ve,V[Z]):t.texImage2D(34069+Z,0,_e,xe,ve,V[Z]);for(let ee=0;ee<O.length;ee++){const fe=O[ee];De?t.texSubImage2D(34069+Z,ee+1,0,0,xe,ve,fe.image[Z]):t.texImage2D(34069+Z,ee+1,_e,xe,ve,fe.image[Z])}}}T(C,oe)&&R(34067),ce.__version=ie.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function Me(D,C,$,ne,ie){const ce=s.convert($.format,$.encoding),ye=s.convert($.type),z=y($.internalFormat,ce,ye,$.encoding);n.get(C).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,z,C.width,C.height,C.depth,0,ce,ye,null):t.texImage2D(ie,0,z,C.width,C.height,0,ce,ye,null)),t.bindFramebuffer(36160,D),ke(C)?h.framebufferTexture2DMultisampleEXT(36160,ne,ie,n.get($).__webglTexture,0,Re(C)):(ie===3553||ie>=34069&&ie<=34074)&&c.framebufferTexture2D(36160,ne,ie,n.get($).__webglTexture,0),t.bindFramebuffer(36160,null)}function Se(D,C,$){if(c.bindRenderbuffer(36161,D),C.depthBuffer&&!C.stencilBuffer){let ne=33189;if($||ke(C)){const ie=C.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Wn?ne=36012:ie.type===Vn&&(ne=33190));const ce=Re(C);ke(C)?h.renderbufferStorageMultisampleEXT(36161,ce,ne,C.width,C.height):c.renderbufferStorageMultisample(36161,ce,ne,C.width,C.height)}else c.renderbufferStorage(36161,ne,C.width,C.height);c.framebufferRenderbuffer(36160,36096,36161,D)}else if(C.depthBuffer&&C.stencilBuffer){const ne=Re(C);$&&ke(C)===!1?c.renderbufferStorageMultisample(36161,ne,35056,C.width,C.height):ke(C)?h.renderbufferStorageMultisampleEXT(36161,ne,35056,C.width,C.height):c.renderbufferStorage(36161,34041,C.width,C.height),c.framebufferRenderbuffer(36160,33306,36161,D)}else{const ne=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ie=0;ie<ne.length;ie++){const ce=ne[ie],ye=s.convert(ce.format,ce.encoding),z=s.convert(ce.type),V=y(ce.internalFormat,ye,z,ce.encoding),de=Re(C);$&&ke(C)===!1?c.renderbufferStorageMultisample(36161,de,V,C.width,C.height):ke(C)?h.renderbufferStorageMultisampleEXT(36161,de,V,C.width,C.height):c.renderbufferStorage(36161,V,C.width,C.height)}}c.bindRenderbuffer(36161,null)}function Ee(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),J(C.depthTexture,0);const ne=n.get(C.depthTexture).__webglTexture,ie=Re(C);if(C.depthTexture.format===Hn)ke(C)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,ie):c.framebufferTexture2D(36160,36096,3553,ne,0);else if(C.depthTexture.format===Ai)ke(C)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,ie):c.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function Pe(D){const C=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ee(C.__webglFramebuffer,D)}else if($){C.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,C.__webglFramebuffer[ne]),C.__webglDepthbuffer[ne]=c.createRenderbuffer(),Se(C.__webglDepthbuffer[ne],D,!1)}else t.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=c.createRenderbuffer(),Se(C.__webglDepthbuffer,D,!1);t.bindFramebuffer(36160,null)}function Ke(D,C,$){const ne=n.get(D);C!==void 0&&Me(ne.__webglFramebuffer,D,D.texture,36064,3553),$!==void 0&&Pe(D)}function dt(D){const C=D.texture,$=n.get(D),ne=n.get(C);D.addEventListener("dispose",B),D.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=c.createTexture()),ne.__version=C.version,o.memory.textures++);const ie=D.isWebGLCubeRenderTarget===!0,ce=D.isWebGLMultipleRenderTargets===!0,ye=b(D)||r;if(ie){$.__webglFramebuffer=[];for(let z=0;z<6;z++)$.__webglFramebuffer[z]=c.createFramebuffer()}else{if($.__webglFramebuffer=c.createFramebuffer(),ce)if(i.drawBuffers){const z=D.texture;for(let V=0,de=z.length;V<de;V++){const oe=n.get(z[V]);oe.__webglTexture===void 0&&(oe.__webglTexture=c.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&D.samples>0&&ke(D)===!1){const z=ce?C:[C];$.__webglMultisampledFramebuffer=c.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer);for(let V=0;V<z.length;V++){const de=z[V];$.__webglColorRenderbuffer[V]=c.createRenderbuffer(),c.bindRenderbuffer(36161,$.__webglColorRenderbuffer[V]);const oe=s.convert(de.format,de.encoding),xe=s.convert(de.type),ve=y(de.internalFormat,oe,xe,de.encoding,D.isXRRenderTarget===!0),_e=Re(D);c.renderbufferStorageMultisample(36161,_e,ve,D.width,D.height),c.framebufferRenderbuffer(36160,36064+V,36161,$.__webglColorRenderbuffer[V])}c.bindRenderbuffer(36161,null),D.depthBuffer&&($.__webglDepthRenderbuffer=c.createRenderbuffer(),Se($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ne.__webglTexture),he(34067,C,ye);for(let z=0;z<6;z++)Me($.__webglFramebuffer[z],D,C,36064,34069+z);T(C,ye)&&R(34067),t.unbindTexture()}else if(ce){const z=D.texture;for(let V=0,de=z.length;V<de;V++){const oe=z[V],xe=n.get(oe);t.bindTexture(3553,xe.__webglTexture),he(3553,oe,ye),Me($.__webglFramebuffer,D,oe,36064+V,3553),T(oe,ye)&&R(3553)}t.unbindTexture()}else{let z=3553;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(r?z=D.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(z,ne.__webglTexture),he(z,C,ye),Me($.__webglFramebuffer,D,C,36064,z),T(C,ye)&&R(z),t.unbindTexture()}D.depthBuffer&&Pe(D)}function Je(D){const C=b(D)||r,$=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ne=0,ie=$.length;ne<ie;ne++){const ce=$[ne];if(T(ce,C)){const ye=D.isWebGLCubeRenderTarget?34067:3553,z=n.get(ce).__webglTexture;t.bindTexture(ye,z),R(ye),t.unbindTexture()}}}function Qe(D){if(r&&D.samples>0&&ke(D)===!1){const C=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],$=D.width,ne=D.height;let ie=16384;const ce=[],ye=D.stencilBuffer?33306:36096,z=n.get(D),V=D.isWebGLMultipleRenderTargets===!0;if(V)for(let de=0;de<C.length;de++)t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,z.__webglFramebuffer),c.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,z.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,z.__webglFramebuffer);for(let de=0;de<C.length;de++){ce.push(36064+de),D.depthBuffer&&ce.push(ye);const oe=z.__ignoreDepthValues!==void 0?z.__ignoreDepthValues:!1;if(oe===!1&&(D.depthBuffer&&(ie|=256),D.stencilBuffer&&(ie|=1024)),V&&c.framebufferRenderbuffer(36008,36064,36161,z.__webglColorRenderbuffer[de]),oe===!0&&(c.invalidateFramebuffer(36008,[ye]),c.invalidateFramebuffer(36009,[ye])),V){const xe=n.get(C[de]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,xe,0)}c.blitFramebuffer(0,0,$,ne,0,0,$,ne,ie,9728),m&&c.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let de=0;de<C.length;de++){t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+de,36161,z.__webglColorRenderbuffer[de]);const oe=n.get(C[de]).__webglTexture;t.bindFramebuffer(36160,z.__webglFramebuffer),c.framebufferTexture2D(36009,36064+de,3553,oe,0)}t.bindFramebuffer(36009,z.__webglMultisampledFramebuffer)}}function Re(D){return Math.min(d,D.samples)}function ke(D){const C=n.get(D);return r&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Xe(D){const C=o.render.frame;g.get(D)!==C&&(g.set(D,C),D.update())}function xt(D,C){const $=D.encoding,ne=D.format,ie=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Zr||$!==Xn&&($===He?r===!1?e.has("EXT_sRGB")===!0&&ne===Wt?(D.format=Zr,D.minFilter=Bt,D.generateMipmaps=!1):C=Tl.sRGBToLinear(C):(ne!==Wt||ie!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),C}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.setTexture2D=J,this.setTexture2DArray=se,this.setTexture3D=k,this.setTextureCube=Q,this.rebindTextures=Ke,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ke}function hm(c,e,t){const n=t.isWebGL2;function i(s,o=null){let r;if(s===jn)return 5121;if(s===$c)return 32819;if(s===Zc)return 32820;if(s===jc)return 5120;if(s===Xc)return 5122;if(s===wl)return 5123;if(s===Yc)return 5124;if(s===Vn)return 5125;if(s===Wn)return 5126;if(s===Ki)return n?5131:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===Kc)return 6406;if(s===Wt)return 6408;if(s===Jc)return 6409;if(s===Qc)return 6410;if(s===Hn)return 6402;if(s===Ai)return 34041;if(s===Zr)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===eh)return 6403;if(s===th)return 36244;if(s===nh)return 33319;if(s===ih)return 33320;if(s===sh)return 36249;if(s===Qs||s===er||s===tr||s===nr)if(o===He)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yo||s===Mo||s===wo||s===bo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rh)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===So||s===Eo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(s===So)return o===He?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===Eo)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===To||s===Ao||s===Co||s===Lo||s===Po||s===Ro||s===Do||s===Io||s===Fo||s===No||s===zo||s===Bo||s===Oo||s===Uo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(s===To)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ao)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Co)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lo)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Po)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ro)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Do)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Io)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fo)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===No)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zo)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bo)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Oo)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uo)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ir)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(s===ir)return o===He?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===oh||s===ko||s===Go||s===Vo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(s===ir)return r.COMPRESSED_RED_RGTC1_EXT;if(s===ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mi?n?34042:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):c[s]!==void 0?c[s]:null}return{convert:i}}class um extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vi extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dm={type:"move"};class Lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const r=this._targetRay,l=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){o=!0;for(const f of e.hand.values()){const p=t.getJointPose(f,n),x=this._getHandJoint(a,f);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const u=a.joints["index-finger-tip"],d=a.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;a.inputState.pinching&&h>m+g?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&h<=m-g&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(dm)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=s!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fm extends It{constructor(e,t,n,i,s,o,r,l,a,u){if(u=u!==void 0?u:Hn,u!==Hn&&u!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Hn&&(n=Vn),n===void 0&&u===Ai&&(n=Mi),super(null,i,s,o,r,l,u,n,a),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1}}class pm extends Zn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,r="local-floor",l=1,a=null,u=null,d=null,h=null,m=null,g=null;const f=t.getContextAttributes();let p=null,x=null;const _=[],v=[],b=new Set,M=new Map,T=new Rt;T.layers.enable(1),T.viewport=new qe;const R=new Rt;R.layers.enable(2),R.viewport=new qe;const y=[T,R],S=new um;S.layers.enable(1),S.layers.enable(2);let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Q=_[k];return Q===void 0&&(Q=new Lr,_[k]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(k){let Q=_[k];return Q===void 0&&(Q=new Lr,_[k]=Q),Q.getGripSpace()},this.getHand=function(k){let Q=_[k];return Q===void 0&&(Q=new Lr,_[k]=Q),Q.getHandSpace()};function B(k){const Q=v.indexOf(k.inputSource);if(Q===-1)return;const te=_[Q];te!==void 0&&te.dispatchEvent({type:k.type,data:k.inputSource})}function E(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",E),i.removeEventListener("inputsourceschange",A);for(let k=0;k<_.length;k++){const Q=v[k];Q!==null&&(v[k]=null,_[k].disconnect(Q))}L=null,I=null,e.setRenderTarget(p),m=null,h=null,d=null,i=null,x=null,se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(k){a=k},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",E),i.addEventListener("inputsourceschange",A),f.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:m}),x=new $n(m.framebufferWidth,m.framebufferHeight,{format:Wt,type:jn,encoding:e.outputEncoding,stencilBuffer:f.stencil})}else{let Q=null,te=null,H=null;f.depth&&(H=f.stencil?35056:33190,Q=f.stencil?Ai:Hn,te=f.stencil?Mi:Vn);const he={colorFormat:32856,depthFormat:H,scaleFactor:s};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(he),i.updateRenderState({layers:[h]}),x=new $n(h.textureWidth,h.textureHeight,{format:Wt,type:jn,depthTexture:new fm(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});const ue=e.properties.get(x);ue.__ignoreDepthValues=h.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),a=null,o=await i.requestReferenceSpace(r),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function A(k){for(let Q=0;Q<k.removed.length;Q++){const te=k.removed[Q],H=v.indexOf(te);H>=0&&(v[H]=null,_[H].disconnect(te))}for(let Q=0;Q<k.added.length;Q++){const te=k.added[Q];let H=v.indexOf(te);if(H===-1){for(let ue=0;ue<_.length;ue++)if(ue>=v.length){v.push(te),H=ue;break}else if(v[ue]===null){v[ue]=te,H=ue;break}if(H===-1)break}const he=_[H];he&&he.connect(te)}}const F=new U,N=new U;function X(k,Q,te){F.setFromMatrixPosition(Q.matrixWorld),N.setFromMatrixPosition(te.matrixWorld);const H=F.distanceTo(N),he=Q.projectionMatrix.elements,ue=te.projectionMatrix.elements,me=he[14]/(he[10]-1),pe=he[14]/(he[10]+1),Me=(he[9]+1)/he[5],Se=(he[9]-1)/he[5],Ee=(he[8]-1)/he[0],Pe=(ue[8]+1)/ue[0],Ke=me*Ee,dt=me*Pe,Je=H/(-Ee+Pe),Qe=Je*-Ee;Q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Qe),k.translateZ(Je),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Re=me+Je,ke=pe+Je,Xe=Ke-Qe,xt=dt+(H-Qe),D=Me*pe/ke*Re,C=Se*pe/ke*Re;k.projectionMatrix.makePerspective(Xe,xt,D,C,Re,ke)}function G(k,Q){Q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;S.near=R.near=T.near=k.near,S.far=R.far=T.far=k.far,(L!==S.near||I!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,I=S.far);const Q=k.parent,te=S.cameras;G(S,Q);for(let he=0;he<te.length;he++)G(te[he],Q);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),k.matrix.copy(S.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const H=k.children;for(let he=0,ue=H.length;he<ue;he++)H[he].updateMatrixWorld(!0);te.length===2?X(S,T,R):S.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.getPlanes=function(){return b};let j=null;function J(k,Q){if(u=Q.getViewerPose(a||o),g=Q,u!==null){const te=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let H=!1;te.length!==S.cameras.length&&(S.cameras.length=0,H=!0);for(let he=0;he<te.length;he++){const ue=te[he];let me=null;if(m!==null)me=m.getViewport(ue);else{const Me=d.getViewSubImage(h,ue);me=Me.viewport,he===0&&(e.setRenderTargetTextures(x,Me.colorTexture,h.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(x))}let pe=y[he];pe===void 0&&(pe=new Rt,pe.layers.enable(he),pe.viewport=new qe,y[he]=pe),pe.matrix.fromArray(ue.transform.matrix),pe.projectionMatrix.fromArray(ue.projectionMatrix),pe.viewport.set(me.x,me.y,me.width,me.height),he===0&&S.matrix.copy(pe.matrix),H===!0&&S.cameras.push(pe)}}for(let te=0;te<_.length;te++){const H=v[te],he=_[te];H!==null&&he!==void 0&&he.update(H,Q,a||o)}if(j&&j(k,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let te=null;for(const H of b)Q.detectedPlanes.has(H)||(te===null&&(te=[]),te.push(H));if(te!==null)for(const H of te)b.delete(H),M.delete(H),n.dispatchEvent({type:"planeremoved",data:H});for(const H of Q.detectedPlanes)if(!b.has(H))b.add(H),M.set(H,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:H});else{const he=M.get(H);H.lastChangedTime>he&&(M.set(H,H.lastChangedTime),n.dispatchEvent({type:"planechanged",data:H}))}}g=null}const se=new Bl;se.setAnimationLoop(J),this.setAnimationLoop=function(k){j=k},this.dispose=function(){}}}function mm(c,e){function t(f,p){p.color.getRGB(f.fogColor.value,Il(c)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,x,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),u(f,p)):p.isMeshPhongMaterial?(i(f,p),a(f,p)):p.isMeshStandardMaterial?(i(f,p),d(f,p),p.isMeshPhysicalMaterial&&h(f,p,v)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?r(f,p,x,_):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===Dt&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===Dt&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(f.envMap.value=x,f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const b=c.useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uv2Transform.value.copy(v.matrix))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function r(f,p,x,_){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*x,f.scale.value=_*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uvTransform.value.copy(x.matrix))}function a(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function h(f,p,x){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Dt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function gm(c,e,t,n){let i={},s={},o=[];const r=t.isWebGL2?c.getParameter(35375):0;function l(_,v){const b=v.program;n.uniformBlockBinding(_,b)}function a(_,v){let b=i[_.id];b===void 0&&(g(_),b=u(_),i[_.id]=b,_.addEventListener("dispose",p));const M=v.program;n.updateUBOMapping(_,M);const T=e.render.frame;s[_.id]!==T&&(h(_),s[_.id]=T)}function u(_){const v=d();_.__bindingPointIndex=v;const b=c.createBuffer(),M=_.__size,T=_.usage;return c.bindBuffer(35345,b),c.bufferData(35345,M,T),c.bindBuffer(35345,null),c.bindBufferBase(35345,v,b),b}function d(){for(let _=0;_<r;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=i[_.id],b=_.uniforms,M=_.__cache;c.bindBuffer(35345,v);for(let T=0,R=b.length;T<R;T++){const y=b[T];if(m(y,T,M)===!0){const S=y.__offset,L=Array.isArray(y.value)?y.value:[y.value];let I=0;for(let B=0;B<L.length;B++){const E=L[B],A=f(E);typeof E=="number"?(y.__data[0]=E,c.bufferSubData(35345,S+I,y.__data)):E.isMatrix3?(y.__data[0]=E.elements[0],y.__data[1]=E.elements[1],y.__data[2]=E.elements[2],y.__data[3]=E.elements[0],y.__data[4]=E.elements[3],y.__data[5]=E.elements[4],y.__data[6]=E.elements[5],y.__data[7]=E.elements[0],y.__data[8]=E.elements[6],y.__data[9]=E.elements[7],y.__data[10]=E.elements[8],y.__data[11]=E.elements[0]):(E.toArray(y.__data,I),I+=A.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(35345,S,y.__data)}}c.bindBuffer(35345,null)}function m(_,v,b){const M=_.value;if(b[v]===void 0){if(typeof M=="number")b[v]=M;else{const T=Array.isArray(M)?M:[M],R=[];for(let y=0;y<T.length;y++)R.push(T[y].clone());b[v]=R}return!0}else if(typeof M=="number"){if(b[v]!==M)return b[v]=M,!0}else{const T=Array.isArray(b[v])?b[v]:[b[v]],R=Array.isArray(M)?M:[M];for(let y=0;y<T.length;y++){const S=T[y];if(S.equals(R[y])===!1)return S.copy(R[y]),!0}}return!1}function g(_){const v=_.uniforms;let b=0;const M=16;let T=0;for(let R=0,y=v.length;R<y;R++){const S=v[R],L={boundary:0,storage:0},I=Array.isArray(S.value)?S.value:[S.value];for(let B=0,E=I.length;B<E;B++){const A=I[B],F=f(A);L.boundary+=F.boundary,L.storage+=F.storage}if(S.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=b,R>0){T=b%M;const B=M-T;T!==0&&B-L.boundary<0&&(b+=M-T,S.__offset=b)}b+=L.storage}return T=b%M,T>0&&(b+=M-T),_.__size=b,_.__cache={},this}function f(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),c.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function x(){for(const _ in i)c.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:a,dispose:x}}function xm(){const c=Is("canvas");return c.style.display="block",c}function io(c={}){this.isWebGLRenderer=!0;const e=c.canvas!==void 0?c.canvas:xm(),t=c.context!==void 0?c.context:null,n=c.depth!==void 0?c.depth:!0,i=c.stencil!==void 0?c.stencil:!0,s=c.antialias!==void 0?c.antialias:!1,o=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,r=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,l=c.powerPreference!==void 0?c.powerPreference:"default",a=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=c.alpha!==void 0?c.alpha:!1;let d=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Xn,this.useLegacyLights=!0,this.toneMapping=pn,this.toneMappingExposure=1;const f=this;let p=!1,x=0,_=0,v=null,b=-1,M=null;const T=new qe,R=new qe;let y=null,S=e.width,L=e.height,I=1,B=null,E=null;const A=new qe(0,0,S,L),F=new qe(0,0,S,L);let N=!1;const X=new to;let G=!1,j=!1,J=null;const se=new je,k=new U,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return v===null?I:1}let H=t;function he(P,q){for(let Y=0;Y<P.length;Y++){const W=P[Y],K=e.getContext(W,q);if(K!==null)return K}return null}try{const P={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:r,powerPreference:l,failIfMajorPerformanceCaveat:a};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${eo}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",_e,!1),H===null){const q=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&q.shift(),H=he(q,P),H===null)throw he(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ue,me,pe,Me,Se,Ee,Pe,Ke,dt,Je,Qe,Re,ke,Xe,xt,D,C,$,ne,ie,ce,ye,z,V;function de(){ue=new Cf(H),me=new Mf(H,ue,c),ue.init(me),ye=new hm(H,ue,me),pe=new lm(H,ue,me),Me=new Rf,Se=new Yp,Ee=new cm(H,ue,pe,Se,me,ye,Me),Pe=new bf(f),Ke=new Af(f),dt=new Oh(H,me),z=new vf(H,ue,dt,me),Je=new Lf(H,dt,Me,z),Qe=new Nf(H,Je,dt,Me),ne=new Ff(H,me,Ee),D=new wf(Se),Re=new Xp(f,Pe,Ke,ue,me,z,D),ke=new mm(f,Se),Xe=new Zp,xt=new nm(ue,me),$=new _f(f,Pe,Ke,pe,Qe,u,o),C=new am(f,Qe,me),V=new gm(H,Me,me,pe),ie=new yf(H,ue,Me,me),ce=new Pf(H,ue,Me,me),Me.programs=Re.programs,f.capabilities=me,f.extensions=ue,f.properties=Se,f.renderLists=Xe,f.shadowMap=C,f.state=pe,f.info=Me}de();const oe=new pm(f,H);this.xr=oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=ue.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ue.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(P){P!==void 0&&(I=P,this.setSize(S,L,!1))},this.getSize=function(P){return P.set(S,L)},this.setSize=function(P,q,Y=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=P,L=q,e.width=Math.floor(P*I),e.height=Math.floor(q*I),Y===!0&&(e.style.width=P+"px",e.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(S*I,L*I).floor()},this.setDrawingBufferSize=function(P,q,Y){S=P,L=q,I=Y,e.width=Math.floor(P*Y),e.height=Math.floor(q*Y),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(A)},this.setViewport=function(P,q,Y,W){P.isVector4?A.set(P.x,P.y,P.z,P.w):A.set(P,q,Y,W),pe.viewport(T.copy(A).multiplyScalar(I).floor())},this.getScissor=function(P){return P.copy(F)},this.setScissor=function(P,q,Y,W){P.isVector4?F.set(P.x,P.y,P.z,P.w):F.set(P,q,Y,W),pe.scissor(R.copy(F).multiplyScalar(I).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(P){pe.setScissorTest(N=P)},this.setOpaqueSort=function(P){B=P},this.setTransparentSort=function(P){E=P},this.getClearColor=function(P){return P.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(P=!0,q=!0,Y=!0){let W=0;P&&(W|=16384),q&&(W|=256),Y&&(W|=1024),H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",_e,!1),Xe.dispose(),xt.dispose(),Se.dispose(),Pe.dispose(),Ke.dispose(),Qe.dispose(),z.dispose(),V.dispose(),Re.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ee),oe.removeEventListener("sessionend",fe),J&&(J.dispose(),J=null),ge.stop()};function xe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const P=Me.autoReset,q=C.enabled,Y=C.autoUpdate,W=C.needsUpdate,K=C.type;de(),Me.autoReset=P,C.enabled=q,C.autoUpdate=Y,C.needsUpdate=W,C.type=K}function _e(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function De(P){const q=P.target;q.removeEventListener("dispose",De),ze(q)}function ze(P){Ge(P),Se.remove(P)}function Ge(P){const q=Se.get(P).programs;q!==void 0&&(q.forEach(function(Y){Re.releaseProgram(Y)}),P.isShaderMaterial&&Re.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,Y,W,K,we){q===null&&(q=Q);const be=K.isMesh&&K.matrixWorld.determinant()<0,Ce=dc(P,q,Y,W,K);pe.setMaterial(W,be);let Le=Y.index,Be=1;W.wireframe===!0&&(Le=Je.getWireframeAttribute(Y),Be=2);const Ie=Y.drawRange,Fe=Y.attributes.position;let et=Ie.start*Be,Tt=(Ie.start+Ie.count)*Be;we!==null&&(et=Math.max(et,we.start*Be),Tt=Math.min(Tt,(we.start+we.count)*Be)),Le!==null?(et=Math.max(et,0),Tt=Math.min(Tt,Le.count)):Fe!=null&&(et=Math.max(et,0),Tt=Math.min(Tt,Fe.count));const en=Tt-et;if(en<0||en===1/0)return;z.setup(K,W,Ce,Y,Le);let Pn,tt=ie;if(Le!==null&&(Pn=dt.get(Le),tt=ce,tt.setIndex(Pn)),K.isMesh)W.wireframe===!0?(pe.setLineWidth(W.wireframeLinewidth*te()),tt.setMode(1)):tt.setMode(4);else if(K.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),pe.setLineWidth(Ne*te()),K.isLineSegments?tt.setMode(1):K.isLineLoop?tt.setMode(2):tt.setMode(3)}else K.isPoints?tt.setMode(0):K.isSprite&&tt.setMode(4);if(K.isInstancedMesh)tt.renderInstances(et,en,K.count);else if(Y.isInstancedBufferGeometry){const Ne=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ys=Math.min(Y.instanceCount,Ne);tt.renderInstances(et,en,Ys)}else tt.render(et,en)},this.compile=function(P,q){function Y(W,K,we){W.transparent===!0&&W.side===bn&&W.forceSinglePass===!1?(W.side=Dt,W.needsUpdate=!0,Nt(W,K,we),W.side=Tn,W.needsUpdate=!0,Nt(W,K,we),W.side=bn):Nt(W,K,we)}h=xt.get(P),h.init(),g.push(h),P.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),h.setupLights(f.useLegacyLights),P.traverse(function(W){const K=W.material;if(K)if(Array.isArray(K))for(let we=0;we<K.length;we++){const be=K[we];Y(be,P,W)}else Y(K,P,W)}),g.pop(),h=null};let O=null;function Z(P){O&&O(P)}function ee(){ge.stop()}function fe(){ge.start()}const ge=new Bl;ge.setAnimationLoop(Z),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(P){O=P,oe.setAnimationLoop(P),P===null?ge.stop():ge.start()},oe.addEventListener("sessionstart",ee),oe.addEventListener("sessionend",fe),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(q),q=oe.getCamera()),P.isScene===!0&&P.onBeforeRender(f,P,q,v),h=xt.get(P,g.length),h.init(),g.push(h),se.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),X.setFromProjectionMatrix(se),j=this.localClippingEnabled,G=D.init(this.clippingPlanes,j),d=Xe.get(P,m.length),d.init(),m.push(d),Ve(P,q,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(B,E),G===!0&&D.beginShadows();const Y=h.state.shadowsArray;if(C.render(Y,P,q),G===!0&&D.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(d,P),h.setupLights(f.useLegacyLights),q.isArrayCamera){const W=q.cameras;for(let K=0,we=W.length;K<we;K++){const be=W[K];ct(d,P,be,be.viewport)}}else ct(d,P,q);v!==null&&(Ee.updateMultisampleRenderTarget(v),Ee.updateRenderTargetMipmap(v)),P.isScene===!0&&P.onAfterRender(f,P,q),z.resetDefaultState(),b=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Ve(P,q,Y,W){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)h.pushLight(P),P.castShadow&&h.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||X.intersectsSprite(P)){W&&k.setFromMatrixPosition(P.matrixWorld).applyMatrix4(se);const be=Qe.update(P),Ce=P.material;Ce.visible&&d.push(P,be,Ce,Y,k.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==Me.render.frame&&(P.skeleton.update(),P.skeleton.frame=Me.render.frame),!P.frustumCulled||X.intersectsObject(P))){W&&k.setFromMatrixPosition(P.matrixWorld).applyMatrix4(se);const be=Qe.update(P),Ce=P.material;if(Array.isArray(Ce)){const Le=be.groups;for(let Be=0,Ie=Le.length;Be<Ie;Be++){const Fe=Le[Be],et=Ce[Fe.materialIndex];et&&et.visible&&d.push(P,be,et,Y,k.z,Fe)}}else Ce.visible&&d.push(P,be,Ce,Y,k.z,null)}}const we=P.children;for(let be=0,Ce=we.length;be<Ce;be++)Ve(we[be],q,Y,W)}function ct(P,q,Y,W){const K=P.opaque,we=P.transmissive,be=P.transparent;h.setupLightsView(Y),G===!0&&D.setGlobalState(f.clippingPlanes,Y),we.length>0&&_t(K,q,Y),W&&pe.viewport(T.copy(W)),K.length>0&&qt(K,q,Y),we.length>0&&qt(we,q,Y),be.length>0&&qt(be,q,Y),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function _t(P,q,Y){const W=me.isWebGL2;J===null&&(J=new $n(1024,1024,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Ki:jn,minFilter:Zi,samples:W&&s===!0?4:0}));const K=f.getRenderTarget();f.setRenderTarget(J),f.clear();const we=f.toneMapping;f.toneMapping=pn,qt(P,q,Y),f.toneMapping=we,Ee.updateMultisampleRenderTarget(J),Ee.updateRenderTargetMipmap(J),f.setRenderTarget(K)}function qt(P,q,Y){const W=q.isScene===!0?q.overrideMaterial:null;for(let K=0,we=P.length;K<we;K++){const be=P[K],Ce=be.object,Le=be.geometry,Be=W===null?be.material:W,Ie=be.group;Ce.layers.test(Y.layers)&&Ye(Ce,q,Y,Le,Be,Ie)}}function Ye(P,q,Y,W,K,we){P.onBeforeRender(f,q,Y,W,K,we),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(f,q,Y,W,P,we),K.transparent===!0&&K.side===bn&&K.forceSinglePass===!1?(K.side=Dt,K.needsUpdate=!0,f.renderBufferDirect(Y,q,W,K,P,we),K.side=Tn,K.needsUpdate=!0,f.renderBufferDirect(Y,q,W,K,P,we),K.side=bn):f.renderBufferDirect(Y,q,W,K,P,we),P.onAfterRender(f,q,Y,W,K,we)}function Nt(P,q,Y){q.isScene!==!0&&(q=Q);const W=Se.get(P),K=h.state.lights,we=h.state.shadowsArray,be=K.state.version,Ce=Re.getParameters(P,K.state,we,q,Y),Le=Re.getProgramCacheKey(Ce);let Be=W.programs;W.environment=P.isMeshStandardMaterial?q.environment:null,W.fog=q.fog,W.envMap=(P.isMeshStandardMaterial?Ke:Pe).get(P.envMap||W.environment),Be===void 0&&(P.addEventListener("dispose",De),Be=new Map,W.programs=Be);let Ie=Be.get(Le);if(Ie!==void 0){if(W.currentProgram===Ie&&W.lightsStateVersion===be)return jt(P,Ce),Ie}else Ce.uniforms=Re.getUniforms(P),P.onBuild(Y,Ce,f),P.onBeforeCompile(Ce,f),Ie=Re.acquireProgram(Ce,Le),Be.set(Le,Ie),W.uniforms=Ce.uniforms;const Fe=W.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Fe.clippingPlanes=D.uniform),jt(P,Ce),W.needsLights=pc(P),W.lightsStateVersion=be,W.needsLights&&(Fe.ambientLightColor.value=K.state.ambient,Fe.lightProbe.value=K.state.probe,Fe.directionalLights.value=K.state.directional,Fe.directionalLightShadows.value=K.state.directionalShadow,Fe.spotLights.value=K.state.spot,Fe.spotLightShadows.value=K.state.spotShadow,Fe.rectAreaLights.value=K.state.rectArea,Fe.ltc_1.value=K.state.rectAreaLTC1,Fe.ltc_2.value=K.state.rectAreaLTC2,Fe.pointLights.value=K.state.point,Fe.pointLightShadows.value=K.state.pointShadow,Fe.hemisphereLights.value=K.state.hemi,Fe.directionalShadowMap.value=K.state.directionalShadowMap,Fe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Fe.spotShadowMap.value=K.state.spotShadowMap,Fe.spotLightMatrix.value=K.state.spotLightMatrix,Fe.spotLightMap.value=K.state.spotLightMap,Fe.pointShadowMap.value=K.state.pointShadowMap,Fe.pointShadowMatrix.value=K.state.pointShadowMatrix);const et=Ie.getUniforms(),Tt=Ps.seqWithValue(et.seq,Fe);return W.currentProgram=Ie,W.uniformsList=Tt,Ie}function jt(P,q){const Y=Se.get(P);Y.outputEncoding=q.outputEncoding,Y.instancing=q.instancing,Y.skinning=q.skinning,Y.morphTargets=q.morphTargets,Y.morphNormals=q.morphNormals,Y.morphColors=q.morphColors,Y.morphTargetsCount=q.morphTargetsCount,Y.numClippingPlanes=q.numClippingPlanes,Y.numIntersection=q.numClipIntersection,Y.vertexAlphas=q.vertexAlphas,Y.vertexTangents=q.vertexTangents,Y.toneMapping=q.toneMapping}function dc(P,q,Y,W,K){q.isScene!==!0&&(q=Q),Ee.resetTextureUnits();const we=q.fog,be=W.isMeshStandardMaterial?q.environment:null,Ce=v===null?f.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:Xn,Le=(W.isMeshStandardMaterial?Ke:Pe).get(W.envMap||be),Be=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ie=!!W.normalMap&&!!Y.attributes.tangent,Fe=!!Y.morphAttributes.position,et=!!Y.morphAttributes.normal,Tt=!!Y.morphAttributes.color,en=W.toneMapped?f.toneMapping:pn,Pn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,tt=Pn!==void 0?Pn.length:0,Ne=Se.get(W),Ys=h.state.lights;if(G===!0&&(j===!0||P!==M)){const At=P===M&&W.id===b;D.setState(W,P,At)}let ht=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Ys.state.version||Ne.outputEncoding!==Ce||K.isInstancedMesh&&Ne.instancing===!1||!K.isInstancedMesh&&Ne.instancing===!0||K.isSkinnedMesh&&Ne.skinning===!1||!K.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Le||W.fog===!0&&Ne.fog!==we||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==D.numPlanes||Ne.numIntersection!==D.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==Ie||Ne.morphTargets!==Fe||Ne.morphNormals!==et||Ne.morphColors!==Tt||Ne.toneMapping!==en||me.isWebGL2===!0&&Ne.morphTargetsCount!==tt)&&(ht=!0):(ht=!0,Ne.__version=W.version);let Rn=Ne.currentProgram;ht===!0&&(Rn=Nt(W,q,K));let ho=!1,Ii=!1,$s=!1;const vt=Rn.getUniforms(),Dn=Ne.uniforms;if(pe.useProgram(Rn.program)&&(ho=!0,Ii=!0,$s=!0),W.id!==b&&(b=W.id,Ii=!0),ho||M!==P){if(vt.setValue(H,"projectionMatrix",P.projectionMatrix),me.logarithmicDepthBuffer&&vt.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),M!==P&&(M=P,Ii=!0,$s=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const At=vt.map.cameraPosition;At!==void 0&&At.setValue(H,k.setFromMatrixPosition(P.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&vt.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||K.isSkinnedMesh)&&vt.setValue(H,"viewMatrix",P.matrixWorldInverse)}if(K.isSkinnedMesh){vt.setOptional(H,K,"bindMatrix"),vt.setOptional(H,K,"bindMatrixInverse");const At=K.skeleton;At&&(me.floatVertexTextures?(At.boneTexture===null&&At.computeBoneTexture(),vt.setValue(H,"boneTexture",At.boneTexture,Ee),vt.setValue(H,"boneTextureSize",At.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zs=Y.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0&&me.isWebGL2===!0)&&ne.update(K,Y,Rn),(Ii||Ne.receiveShadow!==K.receiveShadow)&&(Ne.receiveShadow=K.receiveShadow,vt.setValue(H,"receiveShadow",K.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Dn.envMap.value=Le,Dn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Ii&&(vt.setValue(H,"toneMappingExposure",f.toneMappingExposure),Ne.needsLights&&fc(Dn,$s),we&&W.fog===!0&&ke.refreshFogUniforms(Dn,we),ke.refreshMaterialUniforms(Dn,W,I,L,J),Ps.upload(H,Ne.uniformsList,Dn,Ee)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ps.upload(H,Ne.uniformsList,Dn,Ee),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&vt.setValue(H,"center",K.center),vt.setValue(H,"modelViewMatrix",K.modelViewMatrix),vt.setValue(H,"normalMatrix",K.normalMatrix),vt.setValue(H,"modelMatrix",K.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const At=W.uniformsGroups;for(let Ks=0,mc=At.length;Ks<mc;Ks++)if(me.isWebGL2){const uo=At[Ks];V.update(uo,Rn),V.bind(uo,Rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rn}function fc(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function pc(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(P,q,Y){Se.get(P.texture).__webglTexture=q,Se.get(P.depthTexture).__webglTexture=Y;const W=Se.get(P);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=Y===void 0,W.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,q){const Y=Se.get(P);Y.__webglFramebuffer=q,Y.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,Y=0){v=P,x=q,_=Y;let W=!0,K=null,we=!1,be=!1;if(P){const Le=Se.get(P);Le.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),W=!1):Le.__webglFramebuffer===void 0?Ee.setupRenderTarget(P):Le.__hasExternalTextures&&Ee.rebindTextures(P,Se.get(P.texture).__webglTexture,Se.get(P.depthTexture).__webglTexture);const Be=P.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(be=!0);const Ie=Se.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(K=Ie[q],we=!0):me.isWebGL2&&P.samples>0&&Ee.useMultisampledRTT(P)===!1?K=Se.get(P).__webglMultisampledFramebuffer:K=Ie,T.copy(P.viewport),R.copy(P.scissor),y=P.scissorTest}else T.copy(A).multiplyScalar(I).floor(),R.copy(F).multiplyScalar(I).floor(),y=N;if(pe.bindFramebuffer(36160,K)&&me.drawBuffers&&W&&pe.drawBuffers(P,K),pe.viewport(T),pe.scissor(R),pe.setScissorTest(y),we){const Le=Se.get(P.texture);H.framebufferTexture2D(36160,36064,34069+q,Le.__webglTexture,Y)}else if(be){const Le=Se.get(P.texture),Be=q||0;H.framebufferTextureLayer(36160,36064,Le.__webglTexture,Y||0,Be)}b=-1},this.readRenderTargetPixels=function(P,q,Y,W,K,we,be){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Se.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){pe.bindFramebuffer(36160,Ce);try{const Le=P.texture,Be=Le.format,Ie=Le.type;if(Be!==Wt&&ye.convert(Be)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ie===Ki&&(ue.has("EXT_color_buffer_half_float")||me.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Ie!==jn&&ye.convert(Ie)!==H.getParameter(35738)&&!(Ie===Wn&&(me.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-W&&Y>=0&&Y<=P.height-K&&H.readPixels(q,Y,W,K,ye.convert(Be),ye.convert(Ie),we)}finally{const Le=v!==null?Se.get(v).__webglFramebuffer:null;pe.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(P,q,Y=0){const W=Math.pow(2,-Y),K=Math.floor(q.image.width*W),we=Math.floor(q.image.height*W);Ee.setTexture2D(q,0),H.copyTexSubImage2D(3553,Y,0,0,P.x,P.y,K,we),pe.unbindTexture()},this.copyTextureToTexture=function(P,q,Y,W=0){const K=q.image.width,we=q.image.height,be=ye.convert(Y.format),Ce=ye.convert(Y.type);Ee.setTexture2D(Y,0),H.pixelStorei(37440,Y.flipY),H.pixelStorei(37441,Y.premultiplyAlpha),H.pixelStorei(3317,Y.unpackAlignment),q.isDataTexture?H.texSubImage2D(3553,W,P.x,P.y,K,we,be,Ce,q.image.data):q.isCompressedTexture?H.compressedTexSubImage2D(3553,W,P.x,P.y,q.mipmaps[0].width,q.mipmaps[0].height,be,q.mipmaps[0].data):H.texSubImage2D(3553,W,P.x,P.y,be,Ce,q.image),W===0&&Y.generateMipmaps&&H.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(P,q,Y,W,K=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=P.max.x-P.min.x+1,be=P.max.y-P.min.y+1,Ce=P.max.z-P.min.z+1,Le=ye.convert(W.format),Be=ye.convert(W.type);let Ie;if(W.isData3DTexture)Ee.setTexture3D(W,0),Ie=32879;else if(W.isDataArrayTexture)Ee.setTexture2DArray(W,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,W.flipY),H.pixelStorei(37441,W.premultiplyAlpha),H.pixelStorei(3317,W.unpackAlignment);const Fe=H.getParameter(3314),et=H.getParameter(32878),Tt=H.getParameter(3316),en=H.getParameter(3315),Pn=H.getParameter(32877),tt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;H.pixelStorei(3314,tt.width),H.pixelStorei(32878,tt.height),H.pixelStorei(3316,P.min.x),H.pixelStorei(3315,P.min.y),H.pixelStorei(32877,P.min.z),Y.isDataTexture||Y.isData3DTexture?H.texSubImage3D(Ie,K,q.x,q.y,q.z,we,be,Ce,Le,Be,tt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ie,K,q.x,q.y,q.z,we,be,Ce,Le,tt.data)):H.texSubImage3D(Ie,K,q.x,q.y,q.z,we,be,Ce,Le,Be,tt),H.pixelStorei(3314,Fe),H.pixelStorei(32878,et),H.pixelStorei(3316,Tt),H.pixelStorei(3315,en),H.pixelStorei(32877,Pn),K===0&&W.generateMipmaps&&H.generateMipmap(Ie),pe.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Ee.setTextureCube(P,0):P.isData3DTexture?Ee.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ee.setTexture2DArray(P,0):Ee.setTexture2D(P,0),pe.unbindTexture()},this.resetState=function(){x=0,_=0,v=null,pe.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(io.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(c){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!c}}});class _m extends io{}_m.prototype.isWebGL1Renderer=!0;class vm extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Fs extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ta=new U,Aa=new U,Ca=new je,Pr=new Gs,bs=new ks;class ym extends bt{constructor(e=new ft,t=new Fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ta.fromBufferAttribute(t,i-1),Aa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ta.distanceTo(Aa);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(i),bs.radius+=s,e.ray.intersectsSphere(bs)===!1)return;Ca.copy(i).invert(),Pr.copy(e.ray).applyMatrix4(Ca);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,a=new U,u=new U,d=new U,h=new U,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const x=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let v=x,b=_-1;v<b;v+=m){const M=g.getX(v),T=g.getX(v+1);if(a.fromBufferAttribute(p,M),u.fromBufferAttribute(p,T),Pr.distanceSqToSegment(a,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(h);y<e.near||y>e.far||t.push({distance:y,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=x,b=_-1;v<b;v+=m){if(a.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Pr.distanceSqToSegment(a,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}const La=new U,Pa=new U;class es extends ym{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)La.fromBufferAttribute(t,i),Pa.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+La.distanceTo(Pa);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class so extends ft{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:l};const a=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],m=[];let g=0;const f=[],p=n/2;let x=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(m,2));function _(){const b=new U,M=new U;let T=0;const R=(t-e)/n;for(let y=0;y<=s;y++){const S=[],L=y/s,I=L*(t-e)+e;for(let B=0;B<=i;B++){const E=B/i,A=E*l+r,F=Math.sin(A),N=Math.cos(A);M.x=I*F,M.y=-L*n+p,M.z=I*N,d.push(M.x,M.y,M.z),b.set(F,R,N).normalize(),h.push(b.x,b.y,b.z),m.push(E,1-L),S.push(g++)}f.push(S)}for(let y=0;y<i;y++)for(let S=0;S<s;S++){const L=f[S][y],I=f[S+1][y],B=f[S+1][y+1],E=f[S][y+1];u.push(L,I,E),u.push(I,B,E),T+=6}a.addGroup(x,T,0),x+=T}function v(b){const M=g,T=new Te,R=new U;let y=0;const S=b===!0?e:t,L=b===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,p*L,0),h.push(0,L,0),m.push(.5,.5),g++;const I=g;for(let B=0;B<=i;B++){const A=B/i*l+r,F=Math.cos(A),N=Math.sin(A);R.x=S*N,R.y=p*L,R.z=S*F,d.push(R.x,R.y,R.z),h.push(0,L,0),T.x=F*.5+.5,T.y=N*.5*L+.5,m.push(T.x,T.y),g++}for(let B=0;B<i;B++){const E=M+B,A=I+B;b===!0?u.push(A,A+1,E):u.push(A+1,A,E),y+=3}a.addGroup(x,y,b===!0?1:2),x+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ns extends ft{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+r,Math.PI);let a=0;const u=[],d=new U,h=new U,m=[],g=[],f=[],p=[];for(let x=0;x<=n;x++){const _=[],v=x/n;let b=0;x==0&&o==0?b=.5/t:x==n&&l==Math.PI&&(b=-.5/t);for(let M=0;M<=t;M++){const T=M/t;d.x=-e*Math.cos(i+T*s)*Math.sin(o+v*r),d.y=e*Math.cos(o+v*r),d.z=e*Math.sin(i+T*s)*Math.sin(o+v*r),g.push(d.x,d.y,d.z),h.copy(d).normalize(),f.push(h.x,h.y,h.z),p.push(T+b,1-v),_.push(a++)}u.push(_)}for(let x=0;x<n;x++)for(let _=0;_<t;_++){const v=u[x][_+1],b=u[x][_],M=u[x+1][_],T=u[x+1][_+1];(x!==0||o>0)&&m.push(v,b,T),(x!==n-1||l<Math.PI)&&m.push(b,M,T)}this.setIndex(m),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zn extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bl,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ra={enabled:!1,files:{},add:function(c,e){this.enabled!==!1&&(this.files[c]=e)},get:function(c){if(this.enabled!==!1)return this.files[c]},remove:function(c){delete this.files[c]},clear:function(){this.files={}}};class Mm{constructor(e,t,n){const i=this;let s=!1,o=0,r=0,l;const a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){r++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,r),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,r),o===r&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return a.push(u,d),this},this.removeHandler=function(u){const d=a.indexOf(u);return d!==-1&&a.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=a.length;d<h;d+=2){const m=a[d],g=a[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const wm=new Mm;class Vl{constructor(e){this.manager=e!==void 0?e:wm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const an={};class bm extends Error{constructor(e,t){super(e),this.response=t}}class Jr extends Vl{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ra.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(an[e]!==void 0){an[e].push({onLoad:t,onProgress:n,onError:i});return}an[e]=[],an[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),r=this.mimeType,l=this.responseType;fetch(o).then(a=>{if(a.status===200||a.status===0){if(a.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||a.body===void 0||a.body.getReader===void 0)return a;const u=an[e],d=a.body.getReader(),h=a.headers.get("Content-Length")||a.headers.get("X-File-Size"),m=h?parseInt(h):0,g=m!==0;let f=0;const p=new ReadableStream({start(x){_();function _(){d.read().then(({done:v,value:b})=>{if(v)x.close();else{f+=b.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:f,total:m});for(let T=0,R=u.length;T<R;T++){const y=u[T];y.onProgress&&y.onProgress(M)}x.enqueue(b),_()}})}}});return new Response(p)}else throw new bm(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`,a)}).then(a=>{switch(l){case"arraybuffer":return a.arrayBuffer();case"blob":return a.blob();case"document":return a.text().then(u=>new DOMParser().parseFromString(u,r));case"json":return a.json();default:if(r===void 0)return a.text();{const d=/charset="?([^;"\s]*)"?/i.exec(r),h=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(h);return a.arrayBuffer().then(g=>m.decode(g))}}}).then(a=>{Ra.add(e,a);const u=an[e];delete an[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onLoad&&m.onLoad(a)}}).catch(a=>{const u=an[e];if(u===void 0)throw this.manager.itemError(e),a;delete an[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onError&&m.onError(a)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Sm extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Rr=new je,Da=new U,Ia=new U;class Em{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Da.setFromMatrixPosition(e.matrixWorld),t.position.copy(Da),Ia.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ia),t.updateMatrixWorld(),Rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fa=new je,Gi=new U,Dr=new U;class Tm extends Em{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Gi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gi),Dr.copy(n.position),Dr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dr),n.updateMatrixWorld(),i.makeTranslation(-Gi.x,-Gi.y,-Gi.z),Fa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa)}}class Am extends Sm{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Tm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Na{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cm extends es{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ft;i.setAttribute("position",new rt(t,3)),i.setAttribute("color",new rt(n,3));const s=new Fs({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Ue,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Lm extends mn{constructor(e,t,n,i,s,o){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,n,i,s,o)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eo);const za={type:"change"},Ir={type:"start"},Ba={type:"end"};class Pm extends Zn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qn.ROTATE,MIDDLE:Qn.DOLLY,RIGHT:Qn.PAN},this.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",xt),this._domElementKeyEvents=z},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(za),n.update(),s=i.NONE},this.update=function(){const z=new U,V=new Yn().setFromUnitVectors(e.up,new U(0,1,0)),de=V.clone().invert(),oe=new U,xe=new Yn,ve=2*Math.PI;return function(){const De=n.object.position;z.copy(De).sub(n.target),z.applyQuaternion(V),r.setFromVector3(z),n.autoRotate&&s===i.NONE&&S(R()),n.enableDamping?(r.theta+=l.theta*n.dampingFactor,r.phi+=l.phi*n.dampingFactor):(r.theta+=l.theta,r.phi+=l.phi);let ze=n.minAzimuthAngle,Ge=n.maxAzimuthAngle;return isFinite(ze)&&isFinite(Ge)&&(ze<-Math.PI?ze+=ve:ze>Math.PI&&(ze-=ve),Ge<-Math.PI?Ge+=ve:Ge>Math.PI&&(Ge-=ve),ze<=Ge?r.theta=Math.max(ze,Math.min(Ge,r.theta)):r.theta=r.theta>(ze+Ge)/2?Math.max(ze,r.theta):Math.min(Ge,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=a,r.radius=Math.max(n.minDistance,Math.min(n.maxDistance,r.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),z.setFromSpherical(r),z.applyQuaternion(de),De.copy(n.target).add(z),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),a=1,d||oe.distanceToSquared(n.object.position)>o||8*(1-xe.dot(n.object.quaternion))>o?(n.dispatchEvent(za),oe.copy(n.object.position),xe.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",$),n.domElement.removeEventListener("pointerdown",Ke),n.domElement.removeEventListener("pointercancel",Qe),n.domElement.removeEventListener("wheel",Xe),n.domElement.removeEventListener("pointermove",dt),n.domElement.removeEventListener("pointerup",Je),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",xt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,r=new Na,l=new Na;let a=1;const u=new U;let d=!1;const h=new Te,m=new Te,g=new Te,f=new Te,p=new Te,x=new Te,_=new Te,v=new Te,b=new Te,M=[],T={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function S(z){l.theta-=z}function L(z){l.phi-=z}const I=function(){const z=new U;return function(de,oe){z.setFromMatrixColumn(oe,0),z.multiplyScalar(-de),u.add(z)}}(),B=function(){const z=new U;return function(de,oe){n.screenSpacePanning===!0?z.setFromMatrixColumn(oe,1):(z.setFromMatrixColumn(oe,0),z.crossVectors(n.object.up,z)),z.multiplyScalar(de),u.add(z)}}(),E=function(){const z=new U;return function(de,oe){const xe=n.domElement;if(n.object.isPerspectiveCamera){const ve=n.object.position;z.copy(ve).sub(n.target);let _e=z.length();_e*=Math.tan(n.object.fov/2*Math.PI/180),I(2*de*_e/xe.clientHeight,n.object.matrix),B(2*oe*_e/xe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(de*(n.object.right-n.object.left)/n.object.zoom/xe.clientWidth,n.object.matrix),B(oe*(n.object.top-n.object.bottom)/n.object.zoom/xe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function A(z){n.object.isPerspectiveCamera?a/=z:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*z)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(z){n.object.isPerspectiveCamera?a*=z:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/z)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(z){h.set(z.clientX,z.clientY)}function X(z){_.set(z.clientX,z.clientY)}function G(z){f.set(z.clientX,z.clientY)}function j(z){m.set(z.clientX,z.clientY),g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const V=n.domElement;S(2*Math.PI*g.x/V.clientHeight),L(2*Math.PI*g.y/V.clientHeight),h.copy(m),n.update()}function J(z){v.set(z.clientX,z.clientY),b.subVectors(v,_),b.y>0?A(y()):b.y<0&&F(y()),_.copy(v),n.update()}function se(z){p.set(z.clientX,z.clientY),x.subVectors(p,f).multiplyScalar(n.panSpeed),E(x.x,x.y),f.copy(p),n.update()}function k(z){z.deltaY<0?F(y()):z.deltaY>0&&A(y()),n.update()}function Q(z){let V=!1;switch(z.code){case n.keys.UP:z.ctrlKey||z.metaKey||z.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):E(0,n.keyPanSpeed),V=!0;break;case n.keys.BOTTOM:z.ctrlKey||z.metaKey||z.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):E(0,-n.keyPanSpeed),V=!0;break;case n.keys.LEFT:z.ctrlKey||z.metaKey||z.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):E(n.keyPanSpeed,0),V=!0;break;case n.keys.RIGHT:z.ctrlKey||z.metaKey||z.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):E(-n.keyPanSpeed,0),V=!0;break}V&&(z.preventDefault(),n.update())}function te(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const z=.5*(M[0].pageX+M[1].pageX),V=.5*(M[0].pageY+M[1].pageY);h.set(z,V)}}function H(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const z=.5*(M[0].pageX+M[1].pageX),V=.5*(M[0].pageY+M[1].pageY);f.set(z,V)}}function he(){const z=M[0].pageX-M[1].pageX,V=M[0].pageY-M[1].pageY,de=Math.sqrt(z*z+V*V);_.set(0,de)}function ue(){n.enableZoom&&he(),n.enablePan&&H()}function me(){n.enableZoom&&he(),n.enableRotate&&te()}function pe(z){if(M.length==1)m.set(z.pageX,z.pageY);else{const de=ye(z),oe=.5*(z.pageX+de.x),xe=.5*(z.pageY+de.y);m.set(oe,xe)}g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const V=n.domElement;S(2*Math.PI*g.x/V.clientHeight),L(2*Math.PI*g.y/V.clientHeight),h.copy(m)}function Me(z){if(M.length===1)p.set(z.pageX,z.pageY);else{const V=ye(z),de=.5*(z.pageX+V.x),oe=.5*(z.pageY+V.y);p.set(de,oe)}x.subVectors(p,f).multiplyScalar(n.panSpeed),E(x.x,x.y),f.copy(p)}function Se(z){const V=ye(z),de=z.pageX-V.x,oe=z.pageY-V.y,xe=Math.sqrt(de*de+oe*oe);v.set(0,xe),b.set(0,Math.pow(v.y/_.y,n.zoomSpeed)),A(b.y),_.copy(v)}function Ee(z){n.enableZoom&&Se(z),n.enablePan&&Me(z)}function Pe(z){n.enableZoom&&Se(z),n.enableRotate&&pe(z)}function Ke(z){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(z.pointerId),n.domElement.addEventListener("pointermove",dt),n.domElement.addEventListener("pointerup",Je)),ne(z),z.pointerType==="touch"?D(z):Re(z))}function dt(z){n.enabled!==!1&&(z.pointerType==="touch"?C(z):ke(z))}function Je(z){ie(z),M.length===0&&(n.domElement.releasePointerCapture(z.pointerId),n.domElement.removeEventListener("pointermove",dt),n.domElement.removeEventListener("pointerup",Je)),n.dispatchEvent(Ba),s=i.NONE}function Qe(z){ie(z)}function Re(z){let V;switch(z.button){case 0:V=n.mouseButtons.LEFT;break;case 1:V=n.mouseButtons.MIDDLE;break;case 2:V=n.mouseButtons.RIGHT;break;default:V=-1}switch(V){case Qn.DOLLY:if(n.enableZoom===!1)return;X(z),s=i.DOLLY;break;case Qn.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enablePan===!1)return;G(z),s=i.PAN}else{if(n.enableRotate===!1)return;N(z),s=i.ROTATE}break;case Qn.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enableRotate===!1)return;N(z),s=i.ROTATE}else{if(n.enablePan===!1)return;G(z),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ir)}function ke(z){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;j(z);break;case i.DOLLY:if(n.enableZoom===!1)return;J(z);break;case i.PAN:if(n.enablePan===!1)return;se(z);break}}function Xe(z){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(z.preventDefault(),n.dispatchEvent(Ir),k(z),n.dispatchEvent(Ba))}function xt(z){n.enabled===!1||n.enablePan===!1||Q(z)}function D(z){switch(ce(z),M.length){case 1:switch(n.touches.ONE){case ei.ROTATE:if(n.enableRotate===!1)return;te(),s=i.TOUCH_ROTATE;break;case ei.PAN:if(n.enablePan===!1)return;H(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ei.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ue(),s=i.TOUCH_DOLLY_PAN;break;case ei.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ir)}function C(z){switch(ce(z),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;pe(z),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Me(z),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(z),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(z),n.update();break;default:s=i.NONE}}function $(z){n.enabled!==!1&&z.preventDefault()}function ne(z){M.push(z)}function ie(z){delete T[z.pointerId];for(let V=0;V<M.length;V++)if(M[V].pointerId==z.pointerId){M.splice(V,1);return}}function ce(z){let V=T[z.pointerId];V===void 0&&(V=new Te,T[z.pointerId]=V),V.set(z.pageX,z.pageY)}function ye(z){const V=z.pointerId===M[0].pointerId?M[1]:M[0];return T[V.pointerId]}n.domElement.addEventListener("contextmenu",$),n.domElement.addEventListener("pointerdown",Ke),n.domElement.addEventListener("pointercancel",Qe),n.domElement.addEventListener("wheel",Xe,{passive:!1}),this.update()}}class Ht{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new w);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new w);const n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Ht);const n=this.elements,i=e.elements,s=t.elements,o=n[0],r=n[1],l=n[2],a=n[3],u=n[4],d=n[5],h=n[6],m=n[7],g=n[8],f=i[0],p=i[1],x=i[2],_=i[3],v=i[4],b=i[5],M=i[6],T=i[7],R=i[8];return s[0]=o*f+r*_+l*M,s[1]=o*p+r*v+l*T,s[2]=o*x+r*b+l*R,s[3]=a*f+u*_+d*M,s[4]=a*p+u*v+d*T,s[5]=a*x+u*b+d*R,s[6]=h*f+m*_+g*M,s[7]=h*p+m*v+g*T,s[8]=h*x+m*b+g*R,t}scale(e,t){t===void 0&&(t=new Ht);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new w);const n=3,i=4,s=[];let o,r;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+i*r]=this.elements[o+3*r];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let l=3;const a=l;let u;const d=4;let h;do{if(o=a-l,s[o+i*o]===0){for(r=o+1;r<a;r++)if(s[o+i*r]!==0){u=d;do h=d-u,s[h+i*o]+=s[h+i*r];while(--u);break}}if(s[o+i*o]!==0)for(r=o+1;r<a;r++){const m=s[o+i*r]/s[o+i*o];u=d;do h=d-u,s[h+i*r]=h<=o?0:s[h+i*r]-s[h+i*o]*m;while(--u)}}while(--l);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Ht);const t=3,n=6,i=Rm;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let r=3;const l=r;let a;const u=n;let d;do{if(s=l-r,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){a=u;do d=u-a,i[d+n*s]+=i[d+n*o];while(--a);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const h=i[s+n*o]/i[s+n*s];a=u;do d=u-a,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*h;while(--a)}}while(--r);s=2;do{o=s-1;do{const h=i[s+n*o]/i[s+n*s];a=n;do d=n-a,i[d+n*o]=i[d+n*o]-i[d+n*s]*h;while(--a)}while(o--)}while(--s);s=2;do{const h=1/i[s+n*s];a=n;do d=n-a,i[d+n*s]=i[d+n*s]*h;while(--a)}while(s--);s=2;do{o=2;do{if(d=i[t+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,d)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,r=n+n,l=i+i,a=t*o,u=t*r,d=t*l,h=n*r,m=n*l,g=i*l,f=s*o,p=s*r,x=s*l,_=this.elements;return _[3*0+0]=1-(h+g),_[3*0+1]=u-x,_[3*0+2]=d+p,_[3*1+0]=u+x,_[3*1+1]=1-(a+g),_[3*1+2]=m-f,_[3*2+0]=d-p,_[3*2+1]=m+f,_[3*2+2]=1-(a+h),this}transpose(e){e===void 0&&(e=new Ht);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const Rm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new w);const n=e.x,i=e.y,s=e.z,o=this.x,r=this.y,l=this.z;return t.x=r*s-l*i,t.y=l*n-o*s,t.z=o*i-r*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new w(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new w(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Ht([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new w);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(r-i)*(r-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(r-i)*(r-i)}scale(e,t){t===void 0&&(t=new w);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new w),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new w),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new w),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=Dm,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Im;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Oa),Oa.almostEquals(e,t)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const Dm=new w,Im=new w,Oa=new w;class Ft{constructor(e){e===void 0&&(e={}),this.lowerBound=new w,this.upperBound=new w,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,o=this.upperBound,r=n;s.copy(e[0]),r&&r.vmult(s,s),o.copy(s);for(let l=1;l<e.length;l++){let a=e[l];r&&(r.vmult(a,Ua),a=Ua),a.x>o.x&&(o.x=a.x),a.x<s.x&&(s.x=a.x),a.y>o.y&&(o.y=a.y),a.y<s.y&&(s.y=a.y),a.z>o.z&&(o.z=a.z),a.z<s.z&&(s.z=a.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Ft().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,r=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&r&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,r,l){const a=this.lowerBound,u=this.upperBound;e.copy(a),t.set(u.x,a.y,a.z),n.set(u.x,u.y,a.z),i.set(a.x,u.y,u.z),s.set(u.x,a.y,u.z),o.set(a.x,u.y,a.z),r.set(a.x,a.y,u.z),l.copy(u)}toLocalFrame(e,t){const n=ka,i=n[0],s=n[1],o=n[2],r=n[3],l=n[4],a=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,r,l,a,u,d);for(let h=0;h!==8;h++){const m=n[h];e.pointToLocal(m,m)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=ka,i=n[0],s=n[1],o=n[2],r=n[3],l=n[4],a=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,r,l,a,u,d);for(let h=0;h!==8;h++){const m=n[h];e.pointToWorld(m,m)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,r=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,a=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,m=Math.max(Math.max(Math.min(r,l),Math.min(a,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(r,l),Math.max(a,u)),Math.max(d,h));return!(g<0||m>g)}}const Ua=new w,ka=[new w,new w,new w,new w,new w,new w,new w,new w];class Ga{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Wl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class $e{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new w),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=Fm,i=Nm;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new $e);const n=this.x,i=this.y,s=this.z,o=this.w,r=e.x,l=e.y,a=e.z,u=e.w;return t.x=n*u+o*r+i*a-s*l,t.y=i*u+o*l+s*r-n*a,t.z=s*u+o*a+n*l-i*r,t.w=o*u-n*r-i*l-s*a,t}inverse(e){e===void 0&&(e=new $e);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new $e),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new w);const n=e.x,i=e.y,s=e.z,o=this.x,r=this.y,l=this.z,a=this.w,u=a*n+r*s-l*i,d=a*i+l*n-o*s,h=a*s+o*i-r*n,m=-o*n-r*i-l*s;return t.x=u*a+m*-o+d*-l-h*-r,t.y=d*a+m*-r+h*-o-u*-l,t.z=h*a+m*-l+u*-r-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const o=this.x,r=this.y,l=this.z,a=this.w;switch(t){case"YZX":const u=o*r+l*a;if(u>.499&&(n=2*Math.atan2(o,a),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(o,a),i=-Math.PI/2,s=0),n===void 0){const d=o*o,h=r*r,m=l*l;n=Math.atan2(2*r*a-2*o*l,1-2*h-2*m),i=Math.asin(2*u),s=Math.atan2(2*o*a-2*r*l,1-2*d-2*m)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),r=Math.cos(n/2),l=Math.sin(e/2),a=Math.sin(t/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*r+s*a*u,this.y=s*a*r-l*o*u,this.z=s*o*u+l*a*r,this.w=s*o*r-l*a*u):i==="YXZ"?(this.x=l*o*r+s*a*u,this.y=s*a*r-l*o*u,this.z=s*o*u-l*a*r,this.w=s*o*r+l*a*u):i==="ZXY"?(this.x=l*o*r-s*a*u,this.y=s*a*r+l*o*u,this.z=s*o*u+l*a*r,this.w=s*o*r-l*a*u):i==="ZYX"?(this.x=l*o*r-s*a*u,this.y=s*a*r+l*o*u,this.z=s*o*u-l*a*r,this.w=s*o*r+l*a*u):i==="YZX"?(this.x=l*o*r+s*a*u,this.y=s*a*r+l*o*u,this.z=s*o*u-l*a*r,this.w=s*o*r-l*a*u):i==="XZY"&&(this.x=l*o*r-s*a*u,this.y=s*a*r-l*o*u,this.z=s*o*u+l*a*r,this.w=s*o*r+l*a*u),this}clone(){return new $e(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new $e);const i=this.x,s=this.y,o=this.z,r=this.w;let l=e.x,a=e.y,u=e.z,d=e.w,h,m,g,f,p;return m=i*l+s*a+o*u+r*d,m<0&&(m=-m,l=-l,a=-a,u=-u,d=-d),1-m>1e-6?(h=Math.acos(m),g=Math.sin(h),f=Math.sin((1-t)*h)/g,p=Math.sin(t*h)/g):(f=1-t,p=t),n.x=f*i+p*l,n.y=f*s+p*a,n.z=f*o+p*u,n.w=f*r+p*d,n}integrate(e,t,n,i){i===void 0&&(i=new $e);const s=e.x*n.x,o=e.y*n.y,r=e.z*n.z,l=this.x,a=this.y,u=this.z,d=this.w,h=t*.5;return i.x+=h*(s*d+o*u-r*a),i.y+=h*(o*d+r*l-s*u),i.z+=h*(r*d+s*a-o*l),i.w+=h*(-s*l-o*a-r*u),i}}const Fm=new w,Nm=new w,zm={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ae{constructor(e){e===void 0&&(e={}),this.id=ae.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ae.idCounter=0;ae.types=zm;class Oe{constructor(e){e===void 0&&(e={}),this.position=new w,this.quaternion=new $e,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Oe.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Oe.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new w),n.vsub(e,i),t.conjugate(Va),Va.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new w),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new w),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new w),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const Va=new $e;class Yi extends ae{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:ae.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new w;for(let s=0;s!==e.length;s++){const o=e[s],r=o.length;for(let l=0;l!==r;l++){const a=(l+1)%r;t[o[l]].vsub(t[o[a]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new w;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Yi.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){const s=new w,o=new w;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,r,l,a){const u=new w;let d=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),s.vmult(u,u);const f=u.dot(o);f>h&&(h=f,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const f=n.vertices[n.faces[d][g]],p=new w;p.copy(f),s.vmult(p,p),i.vadd(p,p),m.push(p)}d>=0&&this.clipFaceAgainstHull(o,e,t,m,r,l,a)}findSeparatingAxis(e,t,n,i,s,o,r,l){const a=new w,u=new w,d=new w,h=new w,m=new w,g=new w;let f=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let x=0;x!==p.uniqueAxes.length;x++){n.vmult(p.uniqueAxes[x],a);const _=p.testSepAxis(a,e,t,n,i,s);if(_===!1)return!1;_<f&&(f=_,o.copy(a))}else{const x=r?r.length:p.faces.length;for(let _=0;_<x;_++){const v=r?r[_]:_;a.copy(p.faceNormals[v]),n.vmult(a,a);const b=p.testSepAxis(a,e,t,n,i,s);if(b===!1)return!1;b<f&&(f=b,o.copy(a))}}if(e.uniqueAxes)for(let x=0;x!==e.uniqueAxes.length;x++){s.vmult(e.uniqueAxes[x],u);const _=p.testSepAxis(u,e,t,n,i,s);if(_===!1)return!1;_<f&&(f=_,o.copy(u))}else{const x=l?l.length:e.faces.length;for(let _=0;_<x;_++){const v=l?l[_]:_;u.copy(e.faceNormals[v]),s.vmult(u,u);const b=p.testSepAxis(u,e,t,n,i,s);if(b===!1)return!1;b<f&&(f=b,o.copy(u))}}for(let x=0;x!==p.uniqueEdges.length;x++){n.vmult(p.uniqueEdges[x],h);for(let _=0;_!==e.uniqueEdges.length;_++)if(s.vmult(e.uniqueEdges[_],m),h.cross(m,g),!g.almostZero()){g.normalize();const v=p.testSepAxis(g,e,t,n,i,s);if(v===!1)return!1;v<f&&(f=v,o.copy(g))}}return i.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){const r=this;Yi.project(r,e,n,i,Fr),Yi.project(t,e,s,o,Nr);const l=Fr[0],a=Fr[1],u=Nr[0],d=Nr[1];if(l<d||u<a)return!1;const h=l-d,m=u-a;return h<m?h:m}calculateLocalInertia(e,t){const n=new w,i=new w;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,r=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*r*2*r),t.y=1/12*e*(2*s*2*s+2*r*2*r),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,r){const l=new w,a=new w,u=new w,d=new w,h=new w,m=new w,g=new w,f=new w,p=this,x=[],_=i,v=x;let b=-1,M=Number.MAX_VALUE;for(let L=0;L<p.faces.length;L++){l.copy(p.faceNormals[L]),n.vmult(l,l);const I=l.dot(e);I<M&&(M=I,b=L)}if(b<0)return;const T=p.faces[b];T.connectedFaces=[];for(let L=0;L<p.faces.length;L++)for(let I=0;I<p.faces[L].length;I++)T.indexOf(p.faces[L][I])!==-1&&L!==b&&T.connectedFaces.indexOf(L)===-1&&T.connectedFaces.push(L);const R=T.length;for(let L=0;L<R;L++){const I=p.vertices[T[L]],B=p.vertices[T[(L+1)%R]];I.vsub(B,a),u.copy(a),n.vmult(u,u),t.vadd(u,u),d.copy(this.faceNormals[b]),n.vmult(d,d),t.vadd(d,d),u.cross(d,h),h.negate(h),m.copy(I),n.vmult(m,m),t.vadd(m,m);const E=T.connectedFaces[L];g.copy(this.faceNormals[E]);const A=this.getPlaneConstantOfFace(E);f.copy(g),n.vmult(f,f);const F=A-f.dot(t);for(this.clipFaceAgainstPlane(_,v,f,F);_.length;)_.shift();for(;v.length;)_.push(v.shift())}g.copy(this.faceNormals[b]);const y=this.getPlaneConstantOfFace(b);f.copy(g),n.vmult(f,f);const S=y-f.dot(t);for(let L=0;L<_.length;L++){let I=f.dot(_[L])+S;if(I<=s&&(console.log(`clamped: depth=${I} to minDist=${s}`),I=s),I<=o){const B=_[L];if(I<=1e-6){const E={point:B,normal:f,depth:I};r.push(E)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o;const r=e.length;if(r<2)return t;let l=e[e.length-1],a=e[0];s=n.dot(l)+i;for(let u=0;u<r;u++){if(a=e[u],o=n.dot(a)+i,s<0)if(o<0){const d=new w;d.copy(a),t.push(d)}else{const d=new w;l.lerp(a,s/(s-o),d),t.push(d)}else if(o<0){const d=new w;l.lerp(a,s/(s-o),d),t.push(d),t.push(a)}l=a,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new w);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let o,r,l,a,u,d,h=new w;for(let m=0;m<s.length;m++){h.copy(s[m]),t.vmult(h,h),e.vadd(h,h);const g=h;(o===void 0||g.x<o)&&(o=g.x),(a===void 0||g.x>a)&&(a=g.x),(r===void 0||g.y<r)&&(r=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,r,l),i.set(a,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new w);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){const o=i[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new w;this.getAveragePointLocal(o);for(let r=0;r<this.faces.length;r++){let l=i[r];const a=t[n[r][0]],u=new w;e.vsub(a,u);const d=l.dot(u),h=new w;o.vsub(a,h);const m=l.dot(h);if(d<0&&m>0||d>0&&m<0)return!1}return s?1:-1}static project(e,t,n,i,s){const o=e.vertices.length,r=Bm;let l=0,a=0;const u=Om,d=e.vertices;u.setZero(),Oe.vectorToLocalFrame(n,i,t,r),Oe.pointToLocalFrame(n,i,u,u);const h=u.dot(r);a=l=d[0].dot(r);for(let m=1;m<o;m++){const g=d[m].dot(r);g>l&&(l=g),g<a&&(a=g)}if(a-=h,l-=h,a>l){const m=a;a=l,l=m}s[0]=l,s[1]=a}}const Fr=[],Nr=[];new w;const Bm=new w,Om=new w;class Ln extends ae{constructor(e){super({type:ae.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=w,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],r=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Yi({vertices:s,faces:o,axes:r});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new w),Ln.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Mn.set(s[o][0],s[o][1],s[o][2]),t.vmult(Mn,Mn),e.vadd(Mn,Mn),n(Mn.x,Mn.y,Mn.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Yt[0].set(s.x,s.y,s.z),Yt[1].set(-s.x,s.y,s.z),Yt[2].set(-s.x,-s.y,s.z),Yt[3].set(-s.x,-s.y,-s.z),Yt[4].set(s.x,-s.y,-s.z),Yt[5].set(s.x,s.y,-s.z),Yt[6].set(-s.x,s.y,-s.z),Yt[7].set(s.x,-s.y,s.z);const o=Yt[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let r=1;r<8;r++){const l=Yt[r];t.vmult(l,l),e.vadd(l,l);const a=l.x,u=l.y,d=l.z;a>i.x&&(i.x=a),u>i.y&&(i.y=u),d>i.z&&(i.z=d),a<n.x&&(n.x=a),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const Mn=new w,Yt=[new w,new w,new w,new w,new w,new w,new w,new w],ro={DYNAMIC:1,STATIC:2,KINEMATIC:4},oo={AWAKE:0,SLEEPY:1,SLEEPING:2};class le extends Wl{constructor(e){e===void 0&&(e={}),super(),this.id=le.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new w,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new w,this.force=new w;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?le.STATIC:le.DYNAMIC,typeof e.type==typeof le.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=le.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new $e,this.initQuaternion=new $e,this.previousQuaternion=new $e,this.interpolatedQuaternion=new $e,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new w,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new Ht,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new Ht,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new w(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new w(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Ft,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=le.AWAKE,this.wakeUpAfterNarrowphase=!1,e===le.SLEEPING&&this.dispatchEvent(le.wakeupEvent)}sleep(){this.sleepState=le.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===le.AWAKE&&n<i?(this.sleepState=le.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(le.sleepyEvent)):t===le.SLEEPY&&n>i?this.wakeUp():t===le.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(le.sleepEvent))}}updateSolveMassProperties(){this.sleepState===le.SLEEPING||this.type===le.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new w),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new w),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new w,s=new $e;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const o=e[s];o.updateBoundingSphereRadius();const r=t[s].length(),l=o.boundingSphereRadius;r+l>i&&(i=r+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=Um,o=km,r=this.quaternion,l=this.aabb,a=Gm;for(let u=0;u!==i;u++){const d=e[u];r.vmult(t[u],s),s.vadd(this.position,s),r.mult(n[u],o),d.calculateWorldAABB(s,o,a.lowerBound,a.upperBound),u===0?l.copy(a):l.extend(a)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=Vm,i=Wm;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new w),this.type!==le.DYNAMIC)return;this.sleepState===le.SLEEPING&&this.wakeUp();const n=qm;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new w),this.type!==le.DYNAMIC)return;const n=jm,i=Xm;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===le.DYNAMIC&&(this.sleepState===le.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new w),this.type!==le.DYNAMIC)return;this.sleepState===le.SLEEPING&&this.wakeUp();const n=t,i=Ym;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=$m;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new w),this.type!==le.DYNAMIC)return;const n=Zm,i=Km;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=Jm;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ln.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new w;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===le.DYNAMIC||this.type===le.KINEMATIC)||this.sleepState===le.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,r=this.force,l=this.torque,a=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,m=u*e;i.x+=r.x*m*h.x,i.y+=r.y*m*h.y,i.z+=r.z*m*h.z;const g=d.elements,f=this.angularFactor,p=l.x*f.x,x=l.y*f.y,_=l.z*f.z;s.x+=e*(g[0]*p+g[1]*x+g[2]*_),s.y+=e*(g[3]*p+g[4]*x+g[5]*_),s.z+=e*(g[6]*p+g[7]*x+g[8]*_),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,a.integrate(this.angularVelocity,e,this.angularFactor,a),t&&(n?a.normalizeFast():a.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}le.idCounter=0;le.COLLIDE_EVENT_NAME="collide";le.DYNAMIC=ro.DYNAMIC;le.STATIC=ro.STATIC;le.KINEMATIC=ro.KINEMATIC;le.AWAKE=oo.AWAKE;le.SLEEPY=oo.SLEEPY;le.SLEEPING=oo.SLEEPING;le.wakeupEvent={type:"wakeup"};le.sleepyEvent={type:"sleepy"};le.sleepEvent={type:"sleep"};const Um=new w,km=new $e,Gm=new Ft,Vm=new Ht,Wm=new Ht,Hm=new Ht,qm=new w,jm=new w,Xm=new w,Ym=new w,$m=new w,Zm=new w,Km=new w,Jm=new w;class Qm{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&le.STATIC||e.sleepState===le.SLEEPING)&&(t.type&le.STATIC||t.sleepState===le.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=eg;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=tg,i=ng,s=ig,o=e.length;for(let r=0;r!==o;r++)i[r]=e[r],s[r]=t[r];e.length=0,t.length=0;for(let r=0;r!==o;r++){const l=i[r].id,a=s[r].id,u=l<a?`${l},${a}`:`${a},${l}`;n[u]=r,n.keys.push(u)}for(let r=0;r!==n.keys.length;r++){const l=n.keys.pop(),a=n[l];e.push(i[a]),t.push(s[a]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new w;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const eg=new w;new w;new $e;new w;const tg={keys:[]},ng=[],ig=[];new w;new w;new w;class sg extends Qm{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let o,r;for(let l=0;l!==s;l++)for(let a=0;a!==l;a++)o=i[l],r=i[a],this.needBroadphaseCollision(o,r)&&this.intersectionTest(o,r,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class zs{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,r){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=r}}let Hl,ql,jl,Xl,Yl,$l,Zl;const ao={CLOSEST:1,ANY:2,ALL:4};Hl=ae.types.SPHERE;ql=ae.types.PLANE;jl=ae.types.BOX;Xl=ae.types.CYLINDER;Yl=ae.types.CONVEXPOLYHEDRON;$l=ae.types.HEIGHTFIELD;Zl=ae.types.TRIMESH;class it{get[Hl](){return this._intersectSphere}get[ql](){return this._intersectPlane}get[jl](){return this._intersectBox}get[Xl](){return this._intersectConvex}get[Yl](){return this._intersectConvex}get[$l](){return this._intersectHeightfield}get[Zl](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new w),t===void 0&&(t=new w),this.from=e.clone(),this.to=t.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=it.ANY,this.result=new zs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||it.ANY,this.result=t.result||new zs,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Wa),zr.length=0,e.broadphase.aabbQuery(e,Wa,zr),this.intersectBodies(zr),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=rg,s=og;for(let o=0,r=e.shapes.length;o<r;o++){const l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(yg(s,this.direction,n)>e.boundingSphereRadius)return;const r=this[e.type];r&&r.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const o=this.from,r=this.to,l=this.direction,a=new w(0,0,1);t.vmult(a,a);const u=new w;o.vsub(n,u);const d=u.dot(a);r.vsub(n,u);const h=u.dot(a);if(d*h>0||o.distanceTo(r)<d)return;const m=a.dot(l);if(Math.abs(m)<this.precision)return;const g=new w,f=new w,p=new w;o.vsub(n,g);const x=-a.dot(g)/m;l.scale(x,f),o.vadd(f,p),this.reportIntersection(a,p,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const o=ag;o.from.copy(this.from),o.to.copy(this.to),Oe.pointToLocalFrame(n,t,o.from,o.from),Oe.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const r=lg;let l,a,u,d;l=a=0,u=d=e.data.length-1;const h=new Ft;o.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,r,!0),l=Math.max(l,r[0]),a=Math.max(a,r[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,r,!0),u=Math.min(u,r[0]+1),d=Math.min(d,r[1]+1);for(let m=l;m<u;m++)for(let g=a;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(m,g,h),!!h.overlapsRay(o)){if(e.getConvexTrianglePillar(m,g,!1),Oe.pointToWorldFrame(n,t,e.pillarOffset,Ss),this._intersectConvex(e.pillarConvex,t,Ss,i,s,Ha),this.result.shouldStop)return;e.getConvexTrianglePillar(m,g,!0),Oe.pointToWorldFrame(n,t,e.pillarOffset,Ss),this._intersectConvex(e.pillarConvex,t,Ss,i,s,Ha)}}}_intersectSphere(e,t,n,i,s){const o=this.from,r=this.to,l=e.radius,a=(r.x-o.x)**2+(r.y-o.y)**2+(r.z-o.z)**2,u=2*((r.x-o.x)*(o.x-n.x)+(r.y-o.y)*(o.y-n.y)+(r.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*a*d,m=cg,g=hg;if(!(h<0))if(h===0)o.lerp(r,h,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const f=(-u-Math.sqrt(h))/(2*a),p=(-u+Math.sqrt(h))/(2*a);if(f>=0&&f<=1&&(o.lerp(r,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(r,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){const r=ug,l=qa,a=o&&o.faceList||null,u=e.faces,d=e.vertices,h=e.faceNormals,m=this.direction,g=this.from,f=this.to,p=g.distanceTo(f),x=a?a.length:u.length,_=this.result;for(let v=0;!_.shouldStop&&v<x;v++){const b=a?a[v]:v,M=u[b],T=h[b],R=t,y=n;l.copy(d[M[0]]),R.vmult(l,l),l.vadd(y,l),l.vsub(g,l),R.vmult(T,r);const S=m.dot(r);if(Math.abs(S)<this.precision)continue;const L=r.dot(l)/S;if(!(L<0)){m.scale(L,St),St.vadd(g,St),Gt.copy(d[M[0]]),R.vmult(Gt,Gt),y.vadd(Gt,Gt);for(let I=1;!_.shouldStop&&I<M.length-1;I++){$t.copy(d[M[I]]),Zt.copy(d[M[I+1]]),R.vmult($t,$t),R.vmult(Zt,Zt),y.vadd($t,$t),y.vadd(Zt,Zt);const B=St.distanceTo(g);!(it.pointInTriangle(St,Gt,$t,Zt)||it.pointInTriangle(St,$t,Gt,Zt))||B>p||this.reportIntersection(r,St,s,i,b)}}}}_intersectTrimesh(e,t,n,i,s,o){const r=dg,l=_g,a=vg,u=qa,d=fg,h=pg,m=mg,g=xg,f=gg,p=e.indices;e.vertices;const x=this.from,_=this.to,v=this.direction;a.position.copy(n),a.quaternion.copy(t),Oe.vectorToLocalFrame(n,t,v,d),Oe.pointToLocalFrame(n,t,x,h),Oe.pointToLocalFrame(n,t,_,m),m.x*=e.scale.x,m.y*=e.scale.y,m.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,m.vsub(h,d),d.normalize();const b=h.distanceSquared(m);e.tree.rayQuery(this,a,l);for(let M=0,T=l.length;!this.result.shouldStop&&M!==T;M++){const R=l[M];e.getNormal(R,r),e.getVertex(p[R*3],Gt),Gt.vsub(h,u);const y=d.dot(r),S=r.dot(u)/y;if(S<0)continue;d.scale(S,St),St.vadd(h,St),e.getVertex(p[R*3+1],$t),e.getVertex(p[R*3+2],Zt);const L=St.distanceSquared(h);!(it.pointInTriangle(St,$t,Gt,Zt)||it.pointInTriangle(St,Gt,$t,Zt))||L>b||(Oe.vectorToWorldFrame(t,r,f),Oe.pointToWorldFrame(n,t,St,g),this.reportIntersection(f,g,s,i,R))}l.length=0}reportIntersection(e,t,n,i,s){const o=this.from,r=this.to,l=o.distanceTo(t),a=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(a.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case it.ALL:this.hasHit=!0,a.set(o,r,e,t,n,i,l),a.hasHit=!0,this.callback(a);break;case it.CLOSEST:(l<a.distance||!a.hasHit)&&(this.hasHit=!0,a.hasHit=!0,a.set(o,r,e,t,n,i,l));break;case it.ANY:this.hasHit=!0,a.hasHit=!0,a.set(o,r,e,t,n,i,l),a.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Gn),n.vsub(t,Vi),e.vsub(t,Br);const s=Gn.dot(Gn),o=Gn.dot(Vi),r=Gn.dot(Br),l=Vi.dot(Vi),a=Vi.dot(Br);let u,d;return(u=l*r-o*a)>=0&&(d=s*a-o*r)>=0&&u+d<s*l-o*o}}it.CLOSEST=ao.CLOSEST;it.ANY=ao.ANY;it.ALL=ao.ALL;const Wa=new Ft,zr=[],Vi=new w,Br=new w,rg=new w,og=new $e,St=new w,Gt=new w,$t=new w,Zt=new w;new w;new zs;const Ha={faceList:[0]},Ss=new w,ag=new it,lg=[],cg=new w,hg=new w,ug=new w;new w;new w;const qa=new w,dg=new w,fg=new w,pg=new w,mg=new w,gg=new w,xg=new w;new Ft;const _g=[],vg=new Oe,Gn=new w,Es=new w;function yg(c,e,t){t.vsub(c,Gn);const n=Gn.dot(e);return e.scale(n,Es),Es.vadd(c,Es),t.distanceTo(Es)}class Kl{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Hs{constructor(e,t,n){n===void 0&&(n={}),n=Kl.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=t,this.id=Hs.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(e&&e.wakeUp(),t&&t.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){const e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!0}disable(){const e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!1}}Hs.idCounter=0;class ja{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Kn{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Kn.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new ja,this.jacobianElementB=new ja,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,r=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(s,r)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,r=n.wlambda,l=i.wlambda;return e.multiplyVectors(s,r)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,r=i.force,l=i.torque,a=n.invMassSolve,u=i.invMassSolve;return s.scale(a,Xa),r.scale(u,Ya),n.invInertiaWorldSolve.vmult(o,$a),i.invInertiaWorldSolve.vmult(l,Za),e.multiplyVectors(Xa,$a)+t.multiplyVectors(Ya,Za)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,r=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let a=s+o;return r.vmult(e.rotational,Ts),a+=Ts.dot(e.rotational),l.vmult(t.rotational,Ts),a+=Ts.dot(t.rotational),a}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Mg;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Kn.idCounter=0;const Xa=new w,Ya=new w,$a=new w,Za=new w,Ts=new w,Mg=new w;class Rs extends Kn{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,r=this.rj,l=wg,a=bg,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=Sg,f=this.jacobianElementA,p=this.jacobianElementB,x=this.ni;o.cross(x,l),r.cross(x,a),x.negate(f.spatial),l.negate(f.rotational),p.spatial.copy(x),p.rotational.copy(a),g.copy(s.position),g.vadd(r,g),g.vsub(i.position,g),g.vsub(o,g);const _=x.dot(g),v=this.restitution+1,b=v*h.dot(x)-v*u.dot(x)+m.dot(a)-d.dot(l),M=this.computeGiMf();return-_*t-b*n-e*M}getImpactVelocityAlongNormal(){const e=Eg,t=Tg,n=Ag,i=Cg,s=Lg;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const wg=new w,bg=new w,Sg=new w,Eg=new w,Tg=new w,Ag=new w,Cg=new w,Lg=new w;class Pg extends Hs{constructor(e,t,n,i,s){t===void 0&&(t=new w),i===void 0&&(i=new w),s===void 0&&(s=1e6),super(e,n),this.pivotA=t.clone(),this.pivotB=i.clone();const o=this.equationX=new Rs(e,n),r=this.equationY=new Rs(e,n),l=this.equationZ=new Rs(e,n);this.equations.push(o,r,l),o.minForce=r.minForce=l.minForce=-s,o.maxForce=r.maxForce=l.maxForce=s,o.ni.set(1,0,0),r.ni.set(0,1,0),l.ni.set(0,0,1)}update(){const e=this.bodyA,t=this.bodyB,n=this.equationX,i=this.equationY,s=this.equationZ;e.quaternion.vmult(this.pivotA,n.ri),t.quaternion.vmult(this.pivotB,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj)}}new w;new w;class Ka extends Kn{constructor(e,t,n){n===void 0&&(n={});const i=typeof n.maxForce<"u"?n.maxForce:1e6;super(e,t,-i,i),this.axisA=n.axisA?n.axisA.clone():new w(1,0,0),this.axisB=n.axisB?n.axisB.clone():new w(0,1,0),this.maxAngle=Math.PI/2}computeB(e){const t=this.a,n=this.b,i=this.axisA,s=this.axisB,o=Rg,r=Dg,l=this.jacobianElementA,a=this.jacobianElementB;i.cross(s,o),s.cross(i,r),l.rotational.copy(r),a.rotational.copy(o);const u=Math.cos(this.maxAngle)-i.dot(s),d=this.computeGW(),h=this.computeGiMf();return-u*t-d*n-e*h}}const Rg=new w,Dg=new w;new w;new w;new w;new w;class Ig extends Kn{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,-n,n),this.axisA=new w,this.axisB=new w,this.targetVelocity=0}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.axisA,i=this.axisB,s=this.jacobianElementA,o=this.jacobianElementB;s.rotational.copy(n),i.negate(o.rotational);const r=this.computeGW()-this.targetVelocity,l=this.computeGiMf();return-r*t-e*l}}class Fg extends Pg{constructor(e,t,n){n===void 0&&(n={});const i=typeof n.maxForce<"u"?n.maxForce:1e6,s=n.pivotA?n.pivotA.clone():new w,o=n.pivotB?n.pivotB.clone():new w;super(e,s,t,o,i),(this.axisA=n.axisA?n.axisA.clone():new w(1,0,0)).normalize(),(this.axisB=n.axisB?n.axisB.clone():new w(1,0,0)).normalize(),this.collideConnected=!!n.collideConnected;const a=this.rotationalEquation1=new Ka(e,t,n),u=this.rotationalEquation2=new Ka(e,t,n),d=this.motorEquation=new Ig(e,t,i);d.enabled=!1,this.equations.push(a,u,d)}enableMotor(){this.motorEquation.enabled=!0}disableMotor(){this.motorEquation.enabled=!1}setMotorSpeed(e){this.motorEquation.targetVelocity=e}setMotorMaxForce(e){this.motorEquation.maxForce=e,this.motorEquation.minForce=-e}update(){const e=this.bodyA,t=this.bodyB,n=this.motorEquation,i=this.rotationalEquation1,s=this.rotationalEquation2,o=Ng,r=zg,l=this.axisA,a=this.axisB;super.update(),e.quaternion.vmult(l,o),t.quaternion.vmult(a,r),o.tangents(i.axisA,s.axisA),i.axisB.copy(r),s.axisB.copy(r),this.motorEquation.enabled&&(e.quaternion.vmult(this.axisA,n.axisA),t.quaternion.vmult(this.axisB,n.axisB))}}const Ng=new w,zg=new w;class Ja extends Kn{constructor(e,t,n){super(e,t,-n,n),this.ri=new w,this.rj=new w,this.t=new w}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Bg,o=Og,r=this.t;n.cross(r,s),i.cross(r,o);const l=this.jacobianElementA,a=this.jacobianElementB;r.negate(l.spatial),s.negate(l.rotational),a.spatial.copy(r),a.rotational.copy(o);const u=this.computeGW(),d=this.computeGiMf();return-u*t-e*d}}const Bg=new w,Og=new w;class qs{constructor(e,t,n){n=Kl.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=qs.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}qs.idCounter=0;class is{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=is.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}is.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new it;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class Jl extends ae{constructor(e){if(super({type:ae.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new w);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,o=["x","y","z"];for(let r=0;r<o.length;r++){const l=o[r];n[l]=e[l]-s,i[l]=e[l]+s}}}class Ug{constructor(e){e===void 0&&(e={}),this.wheelBodies=[],this.coordinateSystem=typeof e.coordinateSystem<"u"?e.coordinateSystem.clone():new w(1,2,3),e.chassisBody?this.chassisBody=e.chassisBody:this.chassisBody=new le({mass:1,shape:new Ln(new w(5,.5,2))}),this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}addWheel(e){e===void 0&&(e={});let t;e.body?t=e.body:t=new le({mass:1,shape:new Jl(1.2)}),this.wheelBodies.push(t),this.wheelForces.push(0);const n=typeof e.position<"u"?e.position.clone():new w,i=new w;this.chassisBody.pointToWorldFrame(n,i),t.position.set(i.x,i.y,i.z);const s=typeof e.axis<"u"?e.axis.clone():new w(0,0,1);this.wheelAxes.push(s);const o=new Fg(this.chassisBody,t,{pivotA:n,axisA:s,pivotB:w.ZERO,axisB:s,collideConnected:!1});return this.constraints.push(o),this.wheelBodies.length-1}setSteeringValue(e,t){const n=this.wheelAxes[t],i=Math.cos(e),s=Math.sin(e),o=n.x,r=n.z;this.constraints[t].axisA.set(-i*o+s*r,0,s*o+i*r)}setMotorSpeed(e,t){const n=this.constraints[t];n.enableMotor(),n.motorTargetVelocity=e}disableMotor(e){this.constraints[e].disableMotor()}setWheelForce(e,t){this.wheelForces[t]=e}applyWheelForce(e,t){const n=this.wheelAxes[t],i=this.wheelBodies[t],s=i.torque;n.scale(e,As),i.vectorToWorldFrame(As,As),s.vadd(As,s)}addToWorld(e){const t=this.constraints,n=this.wheelBodies.concat([this.chassisBody]);for(let i=0;i<n.length;i++)e.addBody(n[i]);for(let i=0;i<t.length;i++)e.addConstraint(t[i]);e.addEventListener("preStep",this._update.bind(this))}_update(){const e=this.wheelForces;for(let t=0;t<e.length;t++)this.applyWheelForce(e[t],t)}removeFromWorld(e){const t=this.constraints,n=this.wheelBodies.concat([this.chassisBody]);for(let i=0;i<n.length;i++)e.removeBody(n[i]);for(let i=0;i<t.length;i++)e.removeConstraint(t[i])}getWheelSpeed(e){const t=this.wheelAxes[e],i=this.wheelBodies[e].angularVelocity;return this.chassisBody.vectorToWorldFrame(t,Qa),i.dot(Qa)}}const As=new w,Qa=new w;new w;new w;new w;new w;new w;new w;new w;class kg extends ae{constructor(){super({type:ae.types.PLANE}),this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new w),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){ln.set(0,0,1),t.vmult(ln,ln);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),ln.x===1?i.x=e.x:ln.x===-1&&(n.x=e.x),ln.y===1?i.y=e.y:ln.y===-1&&(n.y=e.y),ln.z===1?i.z=e.z:ln.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const ln=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Ft;new w;new Ft;new w;new w;new w;new w;new w;new w;new w;new Ft;new w;new Oe;new Ft;class Gg{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Vg extends Gg{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,r=o.length,l=t.bodies,a=l.length,u=e;let d,h,m,g,f,p;if(r!==0)for(let b=0;b!==a;b++)l[b].updateSolveMassProperties();const x=Hg,_=qg,v=Wg;x.length=r,_.length=r,v.length=r;for(let b=0;b!==r;b++){const M=o[b];v[b]=0,_[b]=M.computeB(u),x[b]=1/M.computeC()}if(r!==0){for(let T=0;T!==a;T++){const R=l[T],y=R.vlambda,S=R.wlambda;y.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let T=0;T!==r;T++){const R=o[T];d=_[T],h=x[T],p=v[T],f=R.computeGWlambda(),m=h*(d-f-R.eps*p),p+m<R.minForce?m=R.minForce-p:p+m>R.maxForce&&(m=R.maxForce-p),v[T]+=m,g+=m>0?m:-m,R.addToWlambda(m)}if(g*g<s)break}for(let T=0;T!==a;T++){const R=l[T],y=R.velocity,S=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),y.vadd(R.vlambda,y),R.wlambda.vmul(R.angularFactor,R.wlambda),S.vadd(R.wlambda,S)}let b=o.length;const M=1/u;for(;b--;)o[b].multiplier=v[b]*M}return n}}const Wg=[],Hg=[],qg=[];le.STATIC;class jg{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Xg extends jg{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const We={sphereSphere:ae.types.SPHERE,spherePlane:ae.types.SPHERE|ae.types.PLANE,boxBox:ae.types.BOX|ae.types.BOX,sphereBox:ae.types.SPHERE|ae.types.BOX,planeBox:ae.types.PLANE|ae.types.BOX,convexConvex:ae.types.CONVEXPOLYHEDRON,sphereConvex:ae.types.SPHERE|ae.types.CONVEXPOLYHEDRON,planeConvex:ae.types.PLANE|ae.types.CONVEXPOLYHEDRON,boxConvex:ae.types.BOX|ae.types.CONVEXPOLYHEDRON,sphereHeightfield:ae.types.SPHERE|ae.types.HEIGHTFIELD,boxHeightfield:ae.types.BOX|ae.types.HEIGHTFIELD,convexHeightfield:ae.types.CONVEXPOLYHEDRON|ae.types.HEIGHTFIELD,sphereParticle:ae.types.PARTICLE|ae.types.SPHERE,planeParticle:ae.types.PLANE|ae.types.PARTICLE,boxParticle:ae.types.BOX|ae.types.PARTICLE,convexParticle:ae.types.PARTICLE|ae.types.CONVEXPOLYHEDRON,cylinderCylinder:ae.types.CYLINDER,sphereCylinder:ae.types.SPHERE|ae.types.CYLINDER,planeCylinder:ae.types.PLANE|ae.types.CYLINDER,boxCylinder:ae.types.BOX|ae.types.CYLINDER,convexCylinder:ae.types.CONVEXPOLYHEDRON|ae.types.CYLINDER,heightfieldCylinder:ae.types.HEIGHTFIELD|ae.types.CYLINDER,particleCylinder:ae.types.PARTICLE|ae.types.CYLINDER,sphereTrimesh:ae.types.SPHERE|ae.types.TRIMESH,planeTrimesh:ae.types.PLANE|ae.types.TRIMESH};class Yg{get[We.sphereSphere](){return this.sphereSphere}get[We.spherePlane](){return this.spherePlane}get[We.boxBox](){return this.boxBox}get[We.sphereBox](){return this.sphereBox}get[We.planeBox](){return this.planeBox}get[We.convexConvex](){return this.convexConvex}get[We.sphereConvex](){return this.sphereConvex}get[We.planeConvex](){return this.planeConvex}get[We.boxConvex](){return this.boxConvex}get[We.sphereHeightfield](){return this.sphereHeightfield}get[We.boxHeightfield](){return this.boxHeightfield}get[We.convexHeightfield](){return this.convexHeightfield}get[We.sphereParticle](){return this.sphereParticle}get[We.planeParticle](){return this.planeParticle}get[We.boxParticle](){return this.boxParticle}get[We.convexParticle](){return this.convexParticle}get[We.cylinderCylinder](){return this.convexConvex}get[We.sphereCylinder](){return this.sphereConvex}get[We.planeCylinder](){return this.planeConvex}get[We.boxCylinder](){return this.boxConvex}get[We.convexCylinder](){return this.convexConvex}get[We.heightfieldCylinder](){return this.heightfieldCylinder}get[We.particleCylinder](){return this.particleCylinder}get[We.sphereTrimesh](){return this.sphereTrimesh}get[We.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Xg,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let r;this.contactPointPool.length?(r=this.contactPointPool.pop(),r.bi=e,r.bj=t):r=new Rs(e,t),r.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;r.restitution=l.restitution,r.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const a=n.material||e.material,u=i.material||t.material;return a&&u&&a.restitution>=0&&u.restitution>=0&&(r.restitution=a.restitution*u.restitution),r.si=s||n,r.sj=o||i,r}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,o=e.sj,r=this.world,l=this.currentContactMaterial;let a=l.friction;const u=s.material||n.material,d=o.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(a=u.friction*d.friction),a>0){const h=a*(r.frictionGravity||r.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,f=g.length?g.pop():new Ja(n,i,h*m),p=g.length?g.pop():new Ja(n,i,h*m);return f.bi=p.bi=n,f.bj=p.bj=i,f.minForce=p.minForce=-h*m,f.maxForce=p.maxForce=h*m,f.ri.copy(e.ri),f.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(f.t,p.t),f.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,r.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,r.dt),f.enabled=p.enabled=e.enabled,t.push(f,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Bn.setZero(),pi.setZero(),mi.setZero();const s=t.bi;t.bj;for(let r=0;r!==e;r++)t=this.result[this.result.length-1-r],t.bi!==s?(Bn.vadd(t.ni,Bn),pi.vadd(t.ri,pi),mi.vadd(t.rj,mi)):(Bn.vsub(t.ni,Bn),pi.vadd(t.rj,pi),mi.vadd(t.ri,mi));const o=1/e;pi.scale(o,n.ri),mi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Bn.normalize(),Bn.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,r){this.contactPointPool=s,this.frictionEquationPool=r,this.result=i,this.frictionResult=o;const l=Kg,a=Jg,u=$g,d=Zg;for(let h=0,m=e.length;h!==m;h++){const g=e[h],f=t[h];let p=null;g.material&&f.material&&(p=n.getContactMaterial(g.material,f.material)||null);const x=g.type&le.KINEMATIC&&f.type&le.STATIC||g.type&le.STATIC&&f.type&le.KINEMATIC||g.type&le.KINEMATIC&&f.type&le.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],l),g.quaternion.vmult(g.shapeOffsets[_],u),u.vadd(g.position,u);const v=g.shapes[_];for(let b=0;b<f.shapes.length;b++){f.quaternion.mult(f.shapeOrientations[b],a),f.quaternion.vmult(f.shapeOffsets[b],d),d.vadd(f.position,d);const M=f.shapes[b];if(!(v.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&v.collisionFilterGroup)||u.distanceTo(d)>v.boundingSphereRadius+M.boundingSphereRadius)continue;let T=null;v.material&&M.material&&(T=n.getContactMaterial(v.material,M.material)||null),this.currentContactMaterial=T||p||n.defaultContactMaterial;const R=v.type|M.type,y=this[R];if(y){let S=!1;v.type<M.type?S=y.call(this,v,M,u,d,l,a,g,f,v,M,x):S=y.call(this,M,v,d,u,a,l,f,g,v,M,x),S&&x&&(n.shapeOverlapKeeper.set(v.id,M.id),n.bodyOverlapKeeper.set(g.id,f.id))}}}}}sphereSphere(e,t,n,i,s,o,r,l,a,u,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const h=this.createContactEquation(r,l,e,t,a,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(r.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,n,i,s,o,r,l,a,u,d){const h=this.createContactEquation(r,l,e,t,a,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),n.vsub(i,Cs),h.ni.scale(h.ni.dot(Cs),el),Cs.vsub(el,h.rj),-Cs.dot(h.ni)<=e.radius){if(d)return!0;const m=h.ri,g=h.rj;m.vadd(n,m),m.vsub(r.position,m),g.vadd(i,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,n,i,s,o,r,l,a,u,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,r,l,e,t,d)}sphereBox(e,t,n,i,s,o,r,l,a,u,d){const h=this.v3pool,m=S0;n.vsub(i,Ls),t.getSideNormals(m,o);const g=e.radius;let f=!1;const p=T0,x=A0,_=C0;let v=null,b=0,M=0,T=0,R=null;for(let N=0,X=m.length;N!==X&&f===!1;N++){const G=M0;G.copy(m[N]);const j=G.length();G.normalize();const J=Ls.dot(G);if(J<j+g&&J>0){const se=w0,k=b0;se.copy(m[(N+1)%3]),k.copy(m[(N+2)%3]);const Q=se.length(),te=k.length();se.normalize(),k.normalize();const H=Ls.dot(se),he=Ls.dot(k);if(H<Q&&H>-Q&&he<te&&he>-te){const ue=Math.abs(J-j-g);if((R===null||ue<R)&&(R=ue,M=H,T=he,v=j,p.copy(G),x.copy(se),_.copy(k),b++,d))return!0}}}if(b){f=!0;const N=this.createContactEquation(r,l,e,t,a,u);p.scale(-g,N.ri),N.ni.copy(p),N.ni.negate(N.ni),p.scale(v,p),x.scale(M,x),p.vadd(x,p),_.scale(T,_),p.vadd(_,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(r.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let y=h.get();const S=E0;for(let N=0;N!==2&&!f;N++)for(let X=0;X!==2&&!f;X++)for(let G=0;G!==2&&!f;G++)if(y.set(0,0,0),N?y.vadd(m[0],y):y.vsub(m[0],y),X?y.vadd(m[1],y):y.vsub(m[1],y),G?y.vadd(m[2],y):y.vsub(m[2],y),i.vadd(y,S),S.vsub(n,S),S.lengthSquared()<g*g){if(d)return!0;f=!0;const j=this.createContactEquation(r,l,e,t,a,u);j.ri.copy(S),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(g,j.ri),j.rj.copy(y),j.ri.vadd(n,j.ri),j.ri.vsub(r.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(l.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}h.release(y),y=null;const L=h.get(),I=h.get(),B=h.get(),E=h.get(),A=h.get(),F=m.length;for(let N=0;N!==F&&!f;N++)for(let X=0;X!==F&&!f;X++)if(N%3!==X%3){m[X].cross(m[N],L),L.normalize(),m[N].vadd(m[X],I),B.copy(n),B.vsub(I,B),B.vsub(i,B);const G=B.dot(L);L.scale(G,E);let j=0;for(;j===N%3||j===X%3;)j++;A.copy(n),A.vsub(E,A),A.vsub(I,A),A.vsub(i,A);const J=Math.abs(G),se=A.length();if(J<m[j].length()&&se<g){if(d)return!0;f=!0;const k=this.createContactEquation(r,l,e,t,a,u);I.vadd(E,k.rj),k.rj.copy(k.rj),A.negate(k.ni),k.ni.normalize(),k.ri.copy(k.rj),k.ri.vadd(i,k.ri),k.ri.vsub(n,k.ri),k.ri.normalize(),k.ri.scale(g,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(r.position,k.ri),k.rj.vadd(i,k.rj),k.rj.vsub(l.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}h.release(L,I,B,E,A)}planeBox(e,t,n,i,s,o,r,l,a,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,r,l,e,t,d)}convexConvex(e,t,n,i,s,o,r,l,a,u,d,h,m){const g=W0;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,g,h,m)){const f=[],p=H0;e.clipAgainstHull(n,s,t,i,o,g,-100,100,f);let x=0;for(let _=0;_!==f.length;_++){if(d)return!0;const v=this.createContactEquation(r,l,e,t,a,u),b=v.ri,M=v.rj;g.negate(v.ni),f[_].normal.negate(p),p.scale(f[_].depth,p),f[_].point.vadd(p,b),M.copy(f[_].point),b.vsub(n,b),M.vsub(i,M),b.vadd(n,b),b.vsub(r.position,b),M.vadd(i,M),M.vsub(l.position,M),this.result.push(v),x++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&x&&this.createFrictionFromAverage(x)}}sphereConvex(e,t,n,i,s,o,r,l,a,u,d){const h=this.v3pool;n.vsub(i,L0);const m=t.faceNormals,g=t.faces,f=t.vertices,p=e.radius;let x=!1;for(let _=0;_!==f.length;_++){const v=f[_],b=I0;o.vmult(v,b),i.vadd(b,b);const M=D0;if(b.vsub(n,M),M.lengthSquared()<p*p){if(d)return!0;x=!0;const T=this.createContactEquation(r,l,e,t,a,u);T.ri.copy(M),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(p,T.ri),b.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(r.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let _=0,v=g.length;_!==v&&x===!1;_++){const b=m[_],M=g[_],T=F0;o.vmult(b,T);const R=N0;o.vmult(f[M[0]],R),R.vadd(i,R);const y=z0;T.scale(-p,y),n.vadd(y,y);const S=B0;y.vsub(R,S);const L=S.dot(T),I=O0;if(n.vsub(R,I),L<0&&I.dot(T)>0){const B=[];for(let E=0,A=M.length;E!==A;E++){const F=h.get();o.vmult(f[M[E]],F),i.vadd(F,F),B.push(F)}if(y0(B,T,n)){if(d)return!0;x=!0;const E=this.createContactEquation(r,l,e,t,a,u);T.scale(-p,E.ri),T.negate(E.ni);const A=h.get();T.scale(-L,A);const F=h.get();T.scale(-p,F),n.vsub(i,E.rj),E.rj.vadd(F,E.rj),E.rj.vadd(A,E.rj),E.rj.vadd(i,E.rj),E.rj.vsub(l.position,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(r.position,E.ri),h.release(A),h.release(F),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);for(let N=0,X=B.length;N!==X;N++)h.release(B[N]);return}else for(let E=0;E!==M.length;E++){const A=h.get(),F=h.get();o.vmult(f[M[(E+1)%M.length]],A),o.vmult(f[M[(E+2)%M.length]],F),i.vadd(A,A),i.vadd(F,F);const N=P0;F.vsub(A,N);const X=R0;N.unit(X);const G=h.get(),j=h.get();n.vsub(A,j);const J=j.dot(X);X.scale(J,G),G.vadd(A,G);const se=h.get();if(G.vsub(n,se),J>0&&J*J<N.lengthSquared()&&se.lengthSquared()<p*p){if(d)return!0;const k=this.createContactEquation(r,l,e,t,a,u);G.vsub(i,k.rj),G.vsub(n,k.ni),k.ni.normalize(),k.ni.scale(p,k.ri),k.rj.vadd(i,k.rj),k.rj.vsub(l.position,k.rj),k.ri.vadd(n,k.ri),k.ri.vsub(r.position,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult);for(let Q=0,te=B.length;Q!==te;Q++)h.release(B[Q]);h.release(A),h.release(F),h.release(G),h.release(se),h.release(j);return}h.release(A),h.release(F),h.release(G),h.release(se),h.release(j)}for(let E=0,A=B.length;E!==A;E++)h.release(B[E])}}}planeConvex(e,t,n,i,s,o,r,l,a,u,d){const h=U0,m=k0;m.set(0,0,1),s.vmult(m,m);let g=0;const f=G0;for(let p=0;p!==t.vertices.length;p++)if(h.copy(t.vertices[p]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,f),m.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(r,l,e,t,a,u),v=V0;m.scale(m.dot(f),v),h.vsub(v,v),v.vsub(n,_.ri),_.ni.copy(m),h.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(r.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,o,r,l,a,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,r,l,e,t,d)}sphereHeightfield(e,t,n,i,s,o,r,l,a,u,d){const h=t.data,m=e.radius,g=t.elementSize,f=nx,p=tx;Oe.pointToLocalFrame(i,o,n,p);let x=Math.floor((p.x-m)/g)-1,_=Math.ceil((p.x+m)/g)+1,v=Math.floor((p.y-m)/g)-1,b=Math.ceil((p.y+m)/g)+1;if(_<0||b<0||x>h.length||v>h[0].length)return;x<0&&(x=0),_<0&&(_=0),v<0&&(v=0),b<0&&(b=0),x>=h.length&&(x=h.length-1),_>=h.length&&(_=h.length-1),b>=h[0].length&&(b=h[0].length-1),v>=h[0].length&&(v=h[0].length-1);const M=[];t.getRectMinMax(x,v,_,b,M);const T=M[0],R=M[1];if(p.z-m>R||p.z+m<T)return;const y=this.result;for(let S=x;S<_;S++)for(let L=v;L<b;L++){const I=y.length;let B=!1;if(t.getConvexTrianglePillar(S,L,!1),Oe.pointToWorldFrame(i,o,t.pillarOffset,f),n.distanceTo(f)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.sphereConvex(e,t.pillarConvex,n,f,s,o,r,l,e,t,d)),d&&B||(t.getConvexTrianglePillar(S,L,!0),Oe.pointToWorldFrame(i,o,t.pillarOffset,f),n.distanceTo(f)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.sphereConvex(e,t.pillarConvex,n,f,s,o,r,l,e,t,d)),d&&B))return!0;if(y.length-I>2)return}}boxHeightfield(e,t,n,i,s,o,r,l,a,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,r,l,e,t,d)}convexHeightfield(e,t,n,i,s,o,r,l,a,u,d){const h=t.data,m=t.elementSize,g=e.boundingSphereRadius,f=Q0,p=ex,x=J0;Oe.pointToLocalFrame(i,o,n,x);let _=Math.floor((x.x-g)/m)-1,v=Math.ceil((x.x+g)/m)+1,b=Math.floor((x.y-g)/m)-1,M=Math.ceil((x.y+g)/m)+1;if(v<0||M<0||_>h.length||b>h[0].length)return;_<0&&(_=0),v<0&&(v=0),b<0&&(b=0),M<0&&(M=0),_>=h.length&&(_=h.length-1),v>=h.length&&(v=h.length-1),M>=h[0].length&&(M=h[0].length-1),b>=h[0].length&&(b=h[0].length-1);const T=[];t.getRectMinMax(_,b,v,M,T);const R=T[0],y=T[1];if(!(x.z-g>y||x.z+g<R))for(let S=_;S<v;S++)for(let L=b;L<M;L++){let I=!1;if(t.getConvexTrianglePillar(S,L,!1),Oe.pointToWorldFrame(i,o,t.pillarOffset,f),n.distanceTo(f)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,f,s,o,r,l,null,null,d,p,null)),d&&I||(t.getConvexTrianglePillar(S,L,!0),Oe.pointToWorldFrame(i,o,t.pillarOffset,f),n.distanceTo(f)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,f,s,o,r,l,null,null,d,p,null)),d&&I))return!0}}sphereParticle(e,t,n,i,s,o,r,l,a,u,d){const h=Y0;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(l,r,t,e,a,u);h.normalize(),g.rj.copy(h),g.rj.scale(e.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,o,r,l,a,u,d){const h=q0;h.set(0,0,1),r.quaternion.vmult(h,h);const m=j0;if(i.vsub(r.position,m),h.dot(m)<=0){if(d)return!0;const f=this.createContactEquation(l,r,t,e,a,u);f.ni.copy(h),f.ni.negate(f.ni),f.ri.set(0,0,0);const p=X0;h.scale(h.dot(i),p),i.vsub(p,p),f.rj.copy(p),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}boxParticle(e,t,n,i,s,o,r,l,a,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,r,l,e,t,d)}convexParticle(e,t,n,i,s,o,r,l,a,u,d){let h=-1;const m=Z0,g=K0;let f=null;const p=$0;if(p.copy(i),p.vsub(n,p),s.conjugate(tl),tl.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let x=0,_=e.faces.length;x!==_;x++){const v=[e.worldVertices[e.faces[x][0]]],b=e.worldFaceNormals[x];i.vsub(v[0],nl);const M=-b.dot(nl);if(f===null||Math.abs(M)<Math.abs(f)){if(d)return!0;f=M,h=x,m.copy(b)}}if(h!==-1){const x=this.createContactEquation(l,r,t,e,a,u);m.scale(f,g),g.vadd(i,g),g.vsub(n,g),x.rj.copy(g),m.negate(x.ni),x.ri.set(0,0,0);const _=x.ri,v=x.rj;_.vadd(i,_),_.vsub(l.position,_),v.vadd(n,v),v.vsub(r.position,v),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,r,l,a,u,d){return this.convexHeightfield(t,e,i,n,o,s,l,r,a,u,d)}particleCylinder(e,t,n,i,s,o,r,l,a,u,d){return this.convexParticle(t,e,i,n,o,s,l,r,a,u,d)}sphereTrimesh(e,t,n,i,s,o,r,l,a,u,d){const h=o0,m=a0,g=l0,f=c0,p=h0,x=u0,_=m0,v=r0,b=i0,M=g0;Oe.pointToLocalFrame(i,o,n,p);const T=e.radius;_.lowerBound.set(p.x-T,p.y-T,p.z-T),_.upperBound.set(p.x+T,p.y+T,p.z+T),t.getTrianglesInAABB(_,M);const R=s0,y=e.radius*e.radius;for(let E=0;E<M.length;E++)for(let A=0;A<3;A++)if(t.getVertex(t.indices[M[E]*3+A],R),R.vsub(p,b),b.lengthSquared()<=y){if(v.copy(R),Oe.pointToWorldFrame(i,o,v,R),R.vsub(n,b),d)return!0;let F=this.createContactEquation(r,l,e,t,a,u);F.ni.copy(b),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(e.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(r.position,F.ri),F.rj.copy(R),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let E=0;E<M.length;E++)for(let A=0;A<3;A++){t.getVertex(t.indices[M[E]*3+A],h),t.getVertex(t.indices[M[E]*3+(A+1)%3],m),m.vsub(h,g),p.vsub(m,x);const F=x.dot(g);p.vsub(h,x);let N=x.dot(g);if(N>0&&F<0&&(p.vsub(h,x),f.copy(g),f.normalize(),N=x.dot(f),f.scale(N,x),x.vadd(h,x),x.distanceTo(p)<e.radius)){if(d)return!0;const G=this.createContactEquation(r,l,e,t,a,u);x.vsub(p,G.ni),G.ni.normalize(),G.ni.scale(e.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(r.position,G.ri),Oe.pointToWorldFrame(i,o,x,x),x.vsub(l.position,G.rj),Oe.vectorToWorldFrame(o,G.ni,G.ni),Oe.vectorToWorldFrame(o,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const S=d0,L=f0,I=p0,B=n0;for(let E=0,A=M.length;E!==A;E++){t.getTriangleVertices(M[E],S,L,I),t.getNormal(M[E],B),p.vsub(S,x);let F=x.dot(B);if(B.scale(F,x),p.vsub(x,x),F=x.distanceTo(p),it.pointInTriangle(x,S,L,I)&&F<e.radius){if(d)return!0;let N=this.createContactEquation(r,l,e,t,a,u);x.vsub(p,N.ni),N.ni.normalize(),N.ni.scale(e.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(r.position,N.ri),Oe.pointToWorldFrame(i,o,x,x),x.vsub(l.position,N.rj),Oe.vectorToWorldFrame(o,N.ni,N.ni),Oe.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}M.length=0}planeTrimesh(e,t,n,i,s,o,r,l,a,u,d){const h=new w,m=Qg;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,h);const f=new w;f.copy(h),Oe.pointToWorldFrame(i,o,f,h);const p=e0;if(h.vsub(n,p),m.dot(p)<=0){if(d)return!0;const _=this.createContactEquation(r,l,e,t,a,u);_.ni.copy(m);const v=t0;m.scale(p.dot(m),v),h.vsub(v,v),_.ri.copy(v),_.ri.vsub(r.position,_.ri),_.rj.copy(h),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Bn=new w,pi=new w,mi=new w,$g=new w,Zg=new w,Kg=new $e,Jg=new $e,Qg=new w,e0=new w,t0=new w,n0=new w,i0=new w;new w;const s0=new w,r0=new w,o0=new w,a0=new w,l0=new w,c0=new w,h0=new w,u0=new w,d0=new w,f0=new w,p0=new w,m0=new Ft,g0=[],Cs=new w,el=new w,x0=new w,_0=new w,v0=new w;function y0(c,e,t){let n=null;const i=c.length;for(let s=0;s!==i;s++){const o=c[s],r=x0;c[(s+1)%i].vsub(o,r);const l=_0;r.cross(e,l);const a=v0;t.vsub(o,a);const u=l.dot(a);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Ls=new w,M0=new w,w0=new w,b0=new w,S0=[new w,new w,new w,new w,new w,new w],E0=new w,T0=new w,A0=new w,C0=new w,L0=new w,P0=new w,R0=new w,D0=new w,I0=new w,F0=new w,N0=new w,z0=new w,B0=new w,O0=new w;new w;new w;const U0=new w,k0=new w,G0=new w,V0=new w,W0=new w,H0=new w,q0=new w,j0=new w,X0=new w,Y0=new w,tl=new $e,$0=new w;new w;const Z0=new w,nl=new w,K0=new w,J0=new w,Q0=new w,ex=[0],tx=new w,nx=new w;class il{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,o=i.length;let r=0;for(let l=0;l<s;l++){let a=!1;const u=n[l];for(;u>i[r];)r++;a=u===i[r],a||sl(e,u)}r=0;for(let l=0;l<o;l++){let a=!1;const u=i[l];for(;u>n[r];)r++;a=n[r]===u,a||sl(t,u)}}}function sl(c,e){c.push((e&4294901760)>>16,e&65535)}const Or=(c,e)=>c<e?`${c}-${e}`:`${e}-${c}`;class ix{constructor(){this.data={keys:[]}}get(e,t){const n=Or(e,t);return this.data[n]}set(e,t,n){const i=Or(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Or(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class sx extends Wl{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new sg,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Vg,this.constraints=[],this.narrowphase=new Yg(this),this.collisionMatrix=new Ga,this.collisionMatrixPrevious=new Ga,this.bodyOverlapKeeper=new il,this.shapeOverlapKeeper=new il,this.contactmaterials=[],this.contactMaterialTable=new ix,this.defaultMaterial=new is("default"),this.defaultContactMaterial=new qs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof zs?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=it.ALL,n.from=e,n.to=t,n.callback=i,Ur.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=it.ANY,n.from=e,n.to=t,n.result=i,Ur.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=it.CLOSEST,n.from=e,n.to=t,n.result=i,Ur.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof le&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=ot.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=ot.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(ot.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let r=0;r!==this.bodies.length;r++){const l=this.bodies[r];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=cx,i=hx,s=this.bodies.length,o=this.bodies,r=this.solver,l=this.gravity,a=this.doProfiling,u=this.profile,d=le.DYNAMIC;let h=-1/0;const m=this.constraints,g=lx;l.length();const f=l.x,p=l.y,x=l.z;let _=0;for(a&&(h=ot.now()),_=0;_!==s;_++){const E=o[_];if(E.type===d){const A=E.force,F=E.mass;A.x+=F*f,A.y+=F*p,A.z+=F*x}}for(let E=0,A=this.subsystems.length;E!==A;E++)this.subsystems[E].update();a&&(h=ot.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),a&&(u.broadphase=ot.now()-h);let v=m.length;for(_=0;_!==v;_++){const E=m[_];if(!E.collideConnected)for(let A=n.length-1;A>=0;A-=1)(E.bodyA===n[A]&&E.bodyB===i[A]||E.bodyB===n[A]&&E.bodyA===i[A])&&(n.splice(A,1),i.splice(A,1))}this.collisionMatrixTick(),a&&(h=ot.now());const b=ax,M=t.length;for(_=0;_!==M;_++)b.push(t[_]);t.length=0;const T=this.frictionEquations.length;for(_=0;_!==T;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,b,this.frictionEquations,g),a&&(u.narrowphase=ot.now()-h),a&&(h=ot.now()),_=0;_<this.frictionEquations.length;_++)r.addEquation(this.frictionEquations[_]);const R=t.length;for(let E=0;E!==R;E++){const A=t[E],F=A.bi,N=A.bj,X=A.si,G=A.sj;let j;if(F.material&&N.material?j=this.getContactMaterial(F.material,N.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,F.material&&N.material&&(F.material.friction>=0&&N.material.friction>=0&&F.material.friction*N.material.friction,F.material.restitution>=0&&N.material.restitution>=0&&(A.restitution=F.material.restitution*N.material.restitution)),r.addEquation(A),F.allowSleep&&F.type===le.DYNAMIC&&F.sleepState===le.SLEEPING&&N.sleepState===le.AWAKE&&N.type!==le.STATIC){const J=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),se=N.sleepSpeedLimit**2;J>=se*2&&(F.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===le.DYNAMIC&&N.sleepState===le.SLEEPING&&F.sleepState===le.AWAKE&&F.type!==le.STATIC){const J=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),se=F.sleepSpeedLimit**2;J>=se*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,N,!0),this.collisionMatrixPrevious.get(F,N)||(Wi.body=N,Wi.contact=A,F.dispatchEvent(Wi),Wi.body=F,N.dispatchEvent(Wi)),this.bodyOverlapKeeper.set(F.id,N.id),this.shapeOverlapKeeper.set(X.id,G.id)}for(this.emitContactEvents(),a&&(u.makeContactConstraints=ot.now()-h,h=ot.now()),_=0;_!==s;_++){const E=o[_];E.wakeUpAfterNarrowphase&&(E.wakeUp(),E.wakeUpAfterNarrowphase=!1)}for(v=m.length,_=0;_!==v;_++){const E=m[_];E.update();for(let A=0,F=E.equations.length;A!==F;A++){const N=E.equations[A];r.addEquation(N)}}r.solve(e,this),a&&(u.solve=ot.now()-h),r.removeAllEquations();const y=Math.pow;for(_=0;_!==s;_++){const E=o[_];if(E.type&d){const A=y(1-E.linearDamping,e),F=E.velocity;F.scale(A,F);const N=E.angularVelocity;if(N){const X=y(1-E.angularDamping,e);N.scale(X,N)}}}this.dispatchEvent(ox),a&&(h=ot.now());const L=this.stepnumber%(this.quatNormalizeSkip+1)===0,I=this.quatNormalizeFast;for(_=0;_!==s;_++)o[_].integrate(e,L,I);this.clearForces(),this.broadphase.dirty=!0,a&&(u.integrate=ot.now()-h),this.stepnumber+=1,this.dispatchEvent(rx);let B=!0;if(this.allowSleep)for(B=!1,_=0;_!==s;_++){const E=o[_];E.sleepTick(this.time),E.sleepState!==le.SLEEPING&&(B=!0)}this.hasActiveBodies=B}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(cn,hn),e){for(let s=0,o=cn.length;s<o;s+=2)Hi.bodyA=this.getBodyById(cn[s]),Hi.bodyB=this.getBodyById(cn[s+1]),this.dispatchEvent(Hi);Hi.bodyA=Hi.bodyB=null}if(t){for(let s=0,o=hn.length;s<o;s+=2)qi.bodyA=this.getBodyById(hn[s]),qi.bodyB=this.getBodyById(hn[s+1]),this.dispatchEvent(qi);qi.bodyA=qi.bodyB=null}cn.length=hn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(cn,hn),n){for(let s=0,o=cn.length;s<o;s+=2){const r=this.getShapeById(cn[s]),l=this.getShapeById(cn[s+1]);un.shapeA=r,un.shapeB=l,r&&(un.bodyA=r.body),l&&(un.bodyB=l.body),this.dispatchEvent(un)}un.bodyA=un.bodyB=un.shapeA=un.shapeB=null}if(i){for(let s=0,o=hn.length;s<o;s+=2){const r=this.getShapeById(hn[s]),l=this.getShapeById(hn[s+1]);dn.shapeA=r,dn.shapeB=l,r&&(dn.bodyA=r.body),l&&(dn.bodyB=l.body),this.dispatchEvent(dn)}dn.bodyA=dn.bodyB=dn.shapeA=dn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ft;const Ur=new it,ot=globalThis.performance||{};if(!ot.now){let c=Date.now();ot.timing&&ot.timing.navigationStart&&(c=ot.timing.navigationStart),ot.now=()=>Date.now()-c}new w;const rx={type:"postStep"},ox={type:"preStep"},Wi={type:le.COLLIDE_EVENT_NAME,body:null,contact:null},ax=[],lx=[],cx=[],hx=[],cn=[],hn=[],Hi={type:"beginContact",bodyA:null,bodyB:null},qi={type:"endContact",bodyA:null,bodyB:null},un={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},dn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function ux(c,e,t){let{color:n=65280,scale:i=1,onInit:s,onUpdate:o}=t===void 0?{}:t;const r=[],l=new Ri({color:n??65280,wireframe:!0}),a=new w,u=new w,d=new w,h=new $e,m=new Ns(1),g=new mn(1,1,1),f=new Qi(10,10,10,10);f.translate(0,0,1e-4);function p(y){const S=new ft,L=[];for(let B=0;B<y.vertices.length;B++){const E=y.vertices[B];L.push(E.x,E.y,E.z)}S.setAttribute("position",new rt(L,3));const I=[];for(let B=0;B<y.faces.length;B++){const E=y.faces[B],A=E[0];for(let F=1;F<E.length-1;F++){const N=E[F],X=E[F+1];I.push(A,N,X)}}return S.setIndex(I),S.computeBoundingSphere(),S.computeVertexNormals(),S}function x(y){const S=new ft,L=[],I=a,B=u,E=d;for(let A=0;A<y.indices.length/3;A++)y.getTriangleVertices(A,I,B,E),L.push(I.x,I.y,I.z),L.push(B.x,B.y,B.z),L.push(E.x,E.y,E.z);return S.setAttribute("position",new rt(L,3)),S.computeBoundingSphere(),S.computeVertexNormals(),S}function _(y){const S=new ft,L=y.elementSize||1,I=y.data.flatMap((E,A)=>E.flatMap((F,N)=>[A*L,N*L,F])),B=[];for(let E=0;E<y.data.length-1;E++)for(let A=0;A<y.data[E].length-1;A++){const F=y.data[E].length,N=E*F+A;B.push(N+1,N+F,N+F+1),B.push(N+F,N+1,N)}return S.setIndex(B),S.setAttribute("position",new rt(I,3)),S.computeBoundingSphere(),S.computeVertexNormals(),S}function v(y){let S=new st;const{SPHERE:L,BOX:I,PLANE:B,CYLINDER:E,CONVEXPOLYHEDRON:A,TRIMESH:F,HEIGHTFIELD:N}=ae.types;switch(y.type){case L:{S=new st(m,l);break}case I:{S=new st(g,l);break}case B:{S=new st(f,l);break}case E:{const X=new so(y.radiusTop,y.radiusBottom,y.height,y.numSegments);S=new st(X,l),y.geometryId=X.id;break}case A:{const X=p(y);S=new st(X,l),y.geometryId=X.id;break}case F:{const X=x(y);S=new st(X,l),y.geometryId=X.id;break}case N:{const X=_(y);S=new st(X,l),y.geometryId=X.id;break}}return c.add(S),S}function b(y,S){const{SPHERE:L,BOX:I,PLANE:B,CYLINDER:E,CONVEXPOLYHEDRON:A,TRIMESH:F,HEIGHTFIELD:N}=ae.types;switch(S.type){case L:{const{radius:X}=S;y.scale.set(X*i,X*i,X*i);break}case I:{y.scale.copy(S.halfExtents),y.scale.multiplyScalar(2*i);break}case B:break;case E:{y.scale.set(1*i,1*i,1*i);break}case A:{y.scale.set(1*i,1*i,1*i);break}case F:{y.scale.copy(S.scale).multiplyScalar(i);break}case N:{y.scale.set(1*i,1*i,1*i);break}}}function M(y,S){if(!y)return!1;const{geometry:L}=y;return L instanceof Ns&&S.type===ae.types.SPHERE||L instanceof mn&&S.type===ae.types.BOX||L instanceof Qi&&S.type===ae.types.PLANE||L.id===S.geometryId&&S.type===ae.types.CYLINDER||L.id===S.geometryId&&S.type===ae.types.CONVEXPOLYHEDRON||L.id===S.geometryId&&S.type===ae.types.TRIMESH||L.id===S.geometryId&&S.type===ae.types.HEIGHTFIELD}function T(y,S){let L=r[y],I=!1;return M(L,S)||(L&&c.remove(L),r[y]=L=v(S),I=!0),b(L,S),I}function R(){const y=r,S=a,L=h;let I=0;for(const B of e.bodies)for(let E=0;E!==B.shapes.length;E++){const A=B.shapes[E],F=T(I,A),N=y[I];N&&(B.quaternion.vmult(B.shapeOffsets[E],S),B.position.vadd(S,S),B.quaternion.mult(B.shapeOrientations[E],L),N.position.copy(S),N.quaternion.copy(L),F&&s instanceof Function&&s(B,N,A),!F&&o instanceof Function&&o(B,N,A)),I++}for(let B=I;B<y.length;B++){const E=y[B];E&&c.remove(E)}y.length=I}return{update:R}}const rl=0,ol=1,al=2,ll=3,cl=4,hl=5,kr=0,dx=1,fx=2,px=3,mx=4,gx=5,ul=6,wn="16",bi="24",Bs=new U,Os=new U;class dl extends An{constructor(e){super({uniforms:Fl.merge([re.fog,{diffuse:{value:new Ue},opacity:{value:1}}]),vertexShader:`
				attribute vec3 control0;
				attribute vec3 control1;
				attribute vec3 direction;
				varying float discardFlag;

				#include <common>
				#include <color_pars_vertex>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>
				void main() {
					#include <color_vertex>

					vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

					// Transform the line segment ends and control points into camera clip space
					vec4 c0 = projectionMatrix * modelViewMatrix * vec4( control0, 1.0 );
					vec4 c1 = projectionMatrix * modelViewMatrix * vec4( control1, 1.0 );
					vec4 p0 = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
					vec4 p1 = projectionMatrix * modelViewMatrix * vec4( position + direction, 1.0 );

					c0.xy /= c0.w;
					c1.xy /= c1.w;
					p0.xy /= p0.w;
					p1.xy /= p1.w;

					// Get the direction of the segment and an orthogonal vector
					vec2 dir = p1.xy - p0.xy;
					vec2 norm = vec2( -dir.y, dir.x );

					// Get control point directions from the line
					vec2 c0dir = c0.xy - p1.xy;
					vec2 c1dir = c1.xy - p1.xy;

					// If the vectors to the controls points are pointed in different directions away
					// from the line segment then the line should not be drawn.
					float d0 = dot( normalize( norm ), normalize( c0dir ) );
					float d1 = dot( normalize( norm ), normalize( c1dir ) );
					discardFlag = float( sign( d0 ) != sign( d1 ) );

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>
				}
			`,fragmentShader:`
			uniform vec3 diffuse;
			uniform float opacity;
			varying float discardFlag;

			#include <common>
			#include <color_pars_fragment>
			#include <fog_pars_fragment>
			#include <logdepthbuf_pars_fragment>
			#include <clipping_planes_pars_fragment>
			void main() {

				if ( discardFlag > 0.5 ) discard;

				#include <clipping_planes_fragment>
				vec3 outgoingLight = vec3( 0.0 );
				vec4 diffuseColor = vec4( diffuse, opacity );
				#include <logdepthbuf_fragment>
				#include <color_fragment>
				outgoingLight = diffuseColor.rgb; // simple shader
				gl_FragColor = vec4( outgoingLight, diffuseColor.a );
				#include <tonemapping_fragment>
				#include <encodings_fragment>
				#include <fog_fragment>
				#include <premultiplied_alpha_fragment>
			}
			`}),Object.defineProperties(this,{opacity:{get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},color:{get:function(){return this.uniforms.diffuse.value}}}),this.setValues(e),this.isLDrawConditionalLineMaterial=!0}}class xx extends es{constructor(e,t){super(e,t),this.isConditionalLine=!0}}function _x(c){for(let e=0,t=c.length;e<t;e++){const n=c[e],i=n.vertices,s=i[0],o=i[1],r=i[2];Bs.subVectors(o,s),Os.subVectors(r,o),n.faceNormal=new U().crossVectors(Bs,Os).normalize()}}const fl=new Gs;function vx(c,e,t=!1){const n=100.00000001000001;function i(h){const m=~~(h.x*n),g=~~(h.y*n),f=~~(h.z*n);return`${m},${g},${f}`}function s(h,m){return`${i(h)}_${i(m)}`}function o(h,m,g){g.direction.subVectors(m,h).normalize();const f=h.dot(g.direction);return g.origin.copy(h).addScaledVector(g.direction,-f),g}function r(h){return s(h.origin,h.direction)}const l=new Set,a=new Map,u={},d=[];for(let h=0,m=e.length;h<m;h++){const f=e[h].vertices,p=f[0],x=f[1];if(l.add(s(p,x)),l.add(s(x,p)),t){const _=o(p,x,new Gs),v=r(_);if(!a.has(v)){o(x,p,_);const R=r(_),y={ray:_,distances:[]};a.set(v,y),a.set(R,y)}const b=a.get(v);let M=b.ray.direction.dot(p),T=b.ray.direction.dot(x);M>T&&([M,T]=[T,M]),b.distances.push(M,T)}}for(let h=0,m=c.length;h<m;h++){const g=c[h],f=g.vertices,p=f.length;for(let x=0;x<p;x++){const _=x,v=(x+1)%p,b=f[_],M=f[v],T=s(b,M);if(l.has(T))continue;if(t){o(b,M,fl);const y=r(fl);if(a.has(y)){const S=a.get(y),{ray:L,distances:I}=S;let B=L.direction.dot(b),E=L.direction.dot(M);B>E&&([B,E]=[E,B]);let A=!1;for(let F=0,N=I.length;F<N;F+=2)if(B>=I[F]&&E<=I[F+1]){A=!0;break}if(A)continue}}const R={index:_,tri:g};u[T]=R}}for(;;){let h=null;for(const g in u){h=u[g];break}if(h===null)break;const m=[h];for(;m.length>0;){const g=m.pop().tri,f=g.vertices,p=g.normals,x=g.faceNormal,_=f.length;for(let v=0;v<_;v++){const b=v,M=(v+1)%_,T=f[b],R=f[M],y=s(T,R);delete u[y];const S=s(R,T),L=u[S];if(L){const I=L.tri,B=L.index,E=I.normals,A=E.length,F=I.faceNormal;if(Math.abs(I.faceNormal.dot(g.faceNormal))<.25)continue;S in u&&(m.push(L),delete u[S]);const N=(B+1)%A;p[b]&&E[N]&&p[b]!==E[N]&&(E[N].norm.add(p[b].norm),p[b].norm=E[N].norm);let X=p[b]||E[N];X===null&&(X={norm:new U},d.push(X.norm)),p[b]===null&&(p[b]=X,X.norm.add(x)),E[N]===null&&(E[N]=X,X.norm.add(F)),p[M]&&E[B]&&p[M]!==E[B]&&(E[B].norm.add(p[M].norm),p[M].norm=E[B].norm);let G=p[M]||E[B];G===null&&(G={norm:new U},d.push(G.norm)),p[M]===null&&(p[M]=G,G.norm.add(x)),E[B]===null&&(E[B]=G,G.norm.add(F))}}}}for(let h=0,m=d.length;h<m;h++)d[h].normalize()}function pl(c){return c==="Part"||c==="Unofficial_Part"}function yx(c){return/primitive/i.test(c)||c==="Subpart"}class xi{constructor(e,t){this.line=e,this.lineLength=e.length,this.currentCharIndex=0,this.currentChar=" ",this.lineNumber=t}seekNonSpace(){for(;this.currentCharIndex<this.lineLength;){if(this.currentChar=this.line.charAt(this.currentCharIndex),this.currentChar!==" "&&this.currentChar!=="	")return;this.currentCharIndex++}}getToken(){const e=this.currentCharIndex++;for(;this.currentCharIndex<this.lineLength&&(this.currentChar=this.line.charAt(this.currentCharIndex),!(this.currentChar===" "||this.currentChar==="	"));)this.currentCharIndex++;const t=this.currentCharIndex;return this.seekNonSpace(),this.line.substring(e,t)}getVector(){return new U(parseFloat(this.getToken()),parseFloat(this.getToken()),parseFloat(this.getToken()))}getRemainingString(){return this.line.substring(this.currentCharIndex,this.lineLength)}isAtTheEnd(){return this.currentCharIndex>=this.lineLength}setToEnd(){this.currentCharIndex=this.lineLength}getLineNumberString(){return this.lineNumber>=0?" at line "+this.lineNumber:""}}class Mx{constructor(e){this.loader=e,this._cache={}}cloneResult(e){const t={};return t.faces=e.faces.map(n=>({colorCode:n.colorCode,material:n.material,vertices:n.vertices.map(i=>i.clone()),normals:n.normals.map(()=>null),faceNormal:null})),t.conditionalSegments=e.conditionalSegments.map(n=>({colorCode:n.colorCode,material:n.material,vertices:n.vertices.map(i=>i.clone()),controlPoints:n.controlPoints.map(i=>i.clone())})),t.lineSegments=e.lineSegments.map(n=>({colorCode:n.colorCode,material:n.material,vertices:n.vertices.map(i=>i.clone())})),t.type=e.type,t.category=e.category,t.keywords=e.keywords,t.author=e.author,t.subobjects=e.subobjects,t.fileName=e.fileName,t.totalFaces=e.totalFaces,t.startingBuildingStep=e.startingBuildingStep,t.materials=e.materials,t.group=null,t}async fetchData(e){let t=!1,n=kr;for(;n!==ul;){let i=e;switch(n){case px:n=n+1;break;case kr:i="parts/"+i,n=n+1;break;case dx:i="p/"+i,n=n+1;break;case fx:i="models/"+i,n=n+1;break;case mx:i=e.substring(0,e.lastIndexOf("/")+1)+i,n=n+1;break;case gx:t?n=ul:(e=e.toLowerCase(),i=e,t=!0,n=kr);break}const s=this.loader,o=new Jr(s.manager);o.setPath(s.partsLibraryPath),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials);try{return await o.loadAsync(i)}catch{continue}}throw new Error('LDrawLoader: Subobject "'+e+'" could not be loaded.')}parse(e,t=null){const n=this.loader,i=[],s=[],o=[],r=[],l={},a=S=>l[S]||null;let u="Model",d=null,h=null,m=null,g=0;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`));const f=e.split(`
`),p=f.length;let x=!1,_=null,v=null,b=!1,M=!0,T=!1,R=!0,y=!1;for(let S=0;S<p;S++){const L=f[S];if(L.length===0)continue;if(x){L.startsWith("0 FILE ")?(this.setData(_,v),_=L.substring(7),v=""):v+=L+`
`;continue}const I=new xi(L,S+1);if(I.seekNonSpace(),I.isAtTheEnd())continue;const B=I.getToken();let E,A,F,N,X,G,j,J,se,k,Q;switch(B){case"0":const te=I.getToken();if(te)switch(te){case"!LDRAW_ORG":u=I.getToken();break;case"!COLOUR":E=n.parseColorMetaDirective(I),E?l[E.userData.code]=E:console.warn("LDrawLoader: Error parsing material"+I.getLineNumberString());break;case"!CATEGORY":d=I.getToken();break;case"!KEYWORDS":const ke=I.getRemainingString().split(",");ke.length>0&&(h||(h=[]),ke.forEach(function(Xe){h.push(Xe.trim())}));break;case"FILE":S>0&&(x=!0,_=I.getRemainingString(),v="",b=!1,M=!0);break;case"BFC":for(;!I.isAtTheEnd();){const Xe=I.getToken();switch(Xe){case"CERTIFY":case"NOCERTIFY":b=Xe==="CERTIFY",M=!0;break;case"CW":case"CCW":M=Xe==="CCW";break;case"INVERTNEXT":T=!0;break;case"CLIP":case"NOCLIP":R=Xe==="CLIP";break;default:console.warn('THREE.LDrawLoader: BFC directive "'+Xe+'" is unknown.');break}}break;case"STEP":y=!0;break;case"Author:":m=I.getToken();break}break;case"1":A=I.getToken(),E=a(A);const H=parseFloat(I.getToken()),he=parseFloat(I.getToken()),ue=parseFloat(I.getToken()),me=parseFloat(I.getToken()),pe=parseFloat(I.getToken()),Me=parseFloat(I.getToken()),Se=parseFloat(I.getToken()),Ee=parseFloat(I.getToken()),Pe=parseFloat(I.getToken()),Ke=parseFloat(I.getToken()),dt=parseFloat(I.getToken()),Je=parseFloat(I.getToken()),Qe=new je().set(me,pe,Me,H,Se,Ee,Pe,he,Ke,dt,Je,ue,0,0,0,1);let Re=I.getRemainingString().trim().replace(/\\/g,"/");n.fileMap[Re]?Re=n.fileMap[Re]:Re.startsWith("s/")?Re="parts/"+Re:Re.startsWith("48/")&&(Re="p/"+Re),r.push({material:E,colorCode:A,matrix:Qe,fileName:Re,inverted:T,startingBuildingStep:y}),y=!1,T=!1;break;case"2":A=I.getToken(),E=a(A),G=I.getVector(),j=I.getVector(),F={material:E,colorCode:A,vertices:[G,j]},s.push(F);break;case"5":A=I.getToken(),E=a(A),G=I.getVector(),j=I.getVector(),k=I.getVector(),Q=I.getVector(),F={material:E,colorCode:A,vertices:[G,j],controlPoints:[k,Q]},o.push(F);break;case"3":A=I.getToken(),E=a(A),N=M,X=!b||!R,N===!0?(G=I.getVector(),j=I.getVector(),J=I.getVector()):(J=I.getVector(),j=I.getVector(),G=I.getVector()),i.push({material:E,colorCode:A,faceNormal:null,vertices:[G,j,J],normals:[null,null,null]}),g++,X===!0&&(i.push({material:E,colorCode:A,faceNormal:null,vertices:[J,j,G],normals:[null,null,null]}),g++);break;case"4":A=I.getToken(),E=a(A),N=M,X=!b||!R,N===!0?(G=I.getVector(),j=I.getVector(),J=I.getVector(),se=I.getVector()):(se=I.getVector(),J=I.getVector(),j=I.getVector(),G=I.getVector()),i.push({material:E,colorCode:A,faceNormal:null,vertices:[G,j,J,se],normals:[null,null,null,null]}),g+=2,X===!0&&(i.push({material:E,colorCode:A,faceNormal:null,vertices:[se,J,j,G],normals:[null,null,null,null]}),g+=2);break;default:throw new Error('LDrawLoader: Unknown line type "'+B+'"'+I.getLineNumberString()+".")}}return x&&this.setData(_,v),{faces:i,conditionalSegments:o,lineSegments:s,type:u,category:d,keywords:h,author:m,subobjects:r,totalFaces:g,startingBuildingStep:y,materials:l,fileName:t,group:null}}getData(e,t=!0){const n=e.toLowerCase(),i=this._cache[n];return i===null||i instanceof Promise?null:t?this.cloneResult(i):i}async ensureDataLoaded(e){const t=e.toLowerCase();t in this._cache||(this._cache[t]=this.fetchData(e).then(n=>{const i=this.parse(n,e);return this._cache[t]=i,i})),await this._cache[t]}setData(e,t){const n=e.toLowerCase();this._cache[n]=this.parse(t,e)}}function Gr(c,e,t,n){return(!n&&c===wn||n&&c===bi)&&(c=e),t[c]||null}class wx{constructor(e){this.loader=e,this.parseCache=new Mx(e),this._cache={}}async processIntoMesh(e){const t=this.loader,n=this.parseCache,i=new Set,s=async(r,l=null)=>{const a=r.subobjects,u=[];for(let m=0,g=a.length;m<g;m++){const f=a[m],p=n.ensureDataLoaded(f.fileName).then(()=>{const x=n.getData(f.fileName,!1);return yx(x.type)?s(n.getData(f.fileName),f):this.loadModel(f.fileName).catch(_=>(console.warn(_),null))});u.push(p)}const d=new vi;d.userData.category=r.category,d.userData.keywords=r.keywords,d.userData.author=r.author,d.userData.type=r.type,d.userData.fileName=r.fileName,r.group=d;const h=await Promise.all(u);for(let m=0,g=h.length;m<g;m++){const f=r.subobjects[m],p=h[m];if(p===null)continue;if(p.isGroup){const B=p;f.matrix.decompose(B.position,B.quaternion,B.scale),B.userData.startingBuildingStep=f.startingBuildingStep,B.name=f.fileName,t.applyMaterialsToMesh(B,f.colorCode,r.materials),B.userData.colorCode=f.colorCode,d.add(B);continue}p.group.children.length&&d.add(p.group);const x=r.lineSegments,_=r.conditionalSegments,v=r.faces,b=p.lineSegments,M=p.conditionalSegments,T=p.faces,R=f.matrix,y=f.inverted,S=R.determinant()<0,L=f.colorCode,I=L===wn?bi:L;for(let B=0,E=b.length;B<E;B++){const A=b[B],F=A.vertices;F[0].applyMatrix4(R),F[1].applyMatrix4(R),A.colorCode=A.colorCode===bi?I:A.colorCode,A.material=A.material||Gr(A.colorCode,A.colorCode,r.materials,!0),x.push(A)}for(let B=0,E=M.length;B<E;B++){const A=M[B],F=A.vertices,N=A.controlPoints;F[0].applyMatrix4(R),F[1].applyMatrix4(R),N[0].applyMatrix4(R),N[1].applyMatrix4(R),A.colorCode=A.colorCode===bi?I:A.colorCode,A.material=A.material||Gr(A.colorCode,A.colorCode,r.materials,!0),_.push(A)}for(let B=0,E=T.length;B<E;B++){const A=T[B],F=A.vertices;for(let N=0,X=F.length;N<X;N++)F[N].applyMatrix4(R);A.colorCode=A.colorCode===wn?L:A.colorCode,A.material=A.material||Gr(A.colorCode,L,r.materials,!1),i.add(A.colorCode),S!==y&&F.reverse(),v.push(A)}r.totalFaces+=p.totalFaces}return l&&(t.applyMaterialsToMesh(d,l.colorCode,r.materials),d.userData.colorCode=l.colorCode),r};for(let r=0,l=e.faces;r<l;r++)i.add(e.faces[r].colorCode);if(await s(e),t.smoothNormals){const r=i.size>1;_x(e.faces),vx(e.faces,e.lineSegments,r)}const o=e.group;return e.faces.length>0&&o.add(Vr(e.faces,3,!1,e.totalFaces)),e.lineSegments.length>0&&o.add(Vr(e.lineSegments,2)),e.conditionalSegments.length>0&&o.add(Vr(e.conditionalSegments,2,!0)),o}hasCachedModel(e){return e!==null&&e.toLowerCase()in this._cache}async getCachedModel(e){if(e!==null&&this.hasCachedModel(e)){const t=e.toLowerCase();return(await this._cache[t]).clone()}else return null}async loadModel(e){const t=this.parseCache,n=e.toLowerCase();if(this.hasCachedModel(e))return this.getCachedModel(e);{await t.ensureDataLoaded(e);const i=t.getData(e),s=this.processIntoMesh(i);return this.hasCachedModel(e)?this.getCachedModel(e):(pl(i.type)&&(this._cache[n]=s),(await s).clone())}}async parseModel(e){const n=this.parseCache.parse(e);return pl(n.type)&&this.hasCachedModel(n.fileName)?this.getCachedModel(n.fileName):this.processIntoMesh(n)}}function bx(c,e){return c.colorCode===e.colorCode?0:c.colorCode<e.colorCode?-1:1}function Vr(c,e,t=!1,n=null){c.sort(bx),n===null&&(n=c.length);const i=new Float32Array(e*n*3),s=e===3?new Float32Array(e*n*3):null,o=[],r=new Array(6),l=new ft;let a=null,u=0,d=0,h=0;for(let g=0,f=c.length;g<f;g++){const p=c[g];let x=p.vertices;x.length===4&&(r[0]=x[0],r[1]=x[1],r[2]=x[2],r[3]=x[0],r[4]=x[2],r[5]=x[3],x=r);for(let _=0,v=x.length;_<v;_++){const b=x[_],M=h+_*3;i[M+0]=b.x,i[M+1]=b.y,i[M+2]=b.z}if(e===3){if(!p.faceNormal){const v=x[0],b=x[1],M=x[2];Bs.subVectors(b,v),Os.subVectors(M,b),p.faceNormal=new U().crossVectors(Bs,Os).normalize()}let _=p.normals;_.length===4&&(r[0]=_[0],r[1]=_[1],r[2]=_[2],r[3]=_[0],r[4]=_[2],r[5]=_[3],_=r);for(let v=0,b=_.length;v<b;v++){let M=p.faceNormal;_[v]&&(M=_[v].norm);const T=h+v*3;s[T+0]=M.x,s[T+1]=M.y,s[T+2]=M.z}}if(a!==p.colorCode){a!==null&&l.addGroup(u,d,o.length-1);const _=p.material;_!==null?e===3?o.push(_):e===2&&(t?o.push(_.userData.edgeMaterial.userData.conditionalEdgeMaterial):o.push(_.userData.edgeMaterial)):o.push(p.colorCode),a=p.colorCode,u=h/3,d=x.length}else d+=x.length;h+=3*x.length}d>0&&l.addGroup(u,1/0,o.length-1),l.setAttribute("position",new Ze(i,3)),s!==null&&l.setAttribute("normal",new Ze(s,3));let m=null;if(e===2?t?m=new xx(l,o.length===1?o[0]:o):m=new es(l,o.length===1?o[0]:o):e===3&&(m=new st(l,o.length===1?o[0]:o)),t){m.isConditionalLine=!0;const g=new Float32Array(c.length*3*2),f=new Float32Array(c.length*3*2),p=new Float32Array(c.length*3*2);for(let x=0,_=c.length;x<_;x++){const v=c[x],b=v.vertices,M=v.controlPoints,T=M[0],R=M[1],y=b[0],S=b[1],L=x*3*2;g[L+0]=T.x,g[L+1]=T.y,g[L+2]=T.z,g[L+3]=T.x,g[L+4]=T.y,g[L+5]=T.z,f[L+0]=R.x,f[L+1]=R.y,f[L+2]=R.z,f[L+3]=R.x,f[L+4]=R.y,f[L+5]=R.z,p[L+0]=S.x-y.x,p[L+1]=S.y-y.y,p[L+2]=S.z-y.z,p[L+3]=S.x-y.x,p[L+4]=S.y-y.y,p[L+5]=S.z-y.z}l.setAttribute("control0",new Ze(g,3,!1)),l.setAttribute("control1",new Ze(f,3,!1)),l.setAttribute("direction",new Ze(p,3,!1))}return m}class Sx extends Vl{constructor(e){super(e),this.materials=[],this.materialLibrary={},this.partsCache=new wx(this),this.fileMap={},this.setMaterials([]),this.smoothNormals=!0,this.partsLibraryPath="",this.missingColorMaterial=new zn({color:16711935,roughness:.3,metalness:0}),this.missingColorMaterial.name="Missing material",this.missingEdgeColorMaterial=new Fs({color:16711935}),this.missingEdgeColorMaterial.name="Missing material - Edge",this.missingConditionalEdgeColorMaterial=new dl({fog:!0,color:16711935}),this.missingConditionalEdgeColorMaterial.name="Missing material - Conditional Edge",this.missingColorMaterial.userData.edgeMaterial=this.missingEdgeColorMaterial,this.missingEdgeColorMaterial.userData.conditionalEdgeMaterial=this.missingConditionalEdgeColorMaterial}setPartsLibraryPath(e){return this.partsLibraryPath=e,this}async preloadMaterials(e){const t=new Jr(this.manager);t.setPath(this.path),t.setRequestHeader(this.requestHeader),t.setWithCredentials(this.withCredentials);const n=await t.loadAsync(e),i=/^0 !COLOUR/,s=n.split(/[\n\r]/g),o=[];for(let r=0,l=s.length;r<l;r++){const a=s[r];if(i.test(a)){const u=a.replace(i,""),d=this.parseColorMetaDirective(new xi(u));o.push(d)}}this.setMaterials(o)}load(e,t,n,i){const s=new Jr(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.partsCache.parseModel(o,this.materialLibrary).then(r=>{this.applyMaterialsToMesh(r,wn,this.materialLibrary,!0),this.computeBuildingSteps(r),r.userData.fileName=e,t(r)}).catch(i)},n,i)}parse(e,t){this.partsCache.parseModel(e,this.materialLibrary).then(n=>{this.applyMaterialsToMesh(n,wn,this.materialLibrary,!0),this.computeBuildingSteps(n),n.userData.fileName="",t(n)})}setMaterials(e){this.materialLibrary={},this.materials=[];for(let t=0,n=e.length;t<n;t++)this.addMaterial(e[t]);return this.addMaterial(this.parseColorMetaDirective(new xi("Main_Colour CODE 16 VALUE #FF8080 EDGE #333333"))),this.addMaterial(this.parseColorMetaDirective(new xi("Edge_Colour CODE 24 VALUE #A0A0A0 EDGE #333333"))),this}setFileMap(e){return this.fileMap=e,this}addMaterial(e){const t=this.materialLibrary;return t[e.userData.code]||(this.materials.push(e),t[e.userData.code]=e),this}getMaterial(e){if(e.startsWith("0x2")){const t=e.substring(3);return this.parseColorMetaDirective(new xi("Direct_Color_"+t+" CODE -1 VALUE #"+t+" EDGE #"+t))}return this.materialLibrary[e]||null}applyMaterialsToMesh(e,t,n,i=!1){const s=this,o=t===wn;e.traverse(l=>{if(l.isMesh||l.isLineSegments)if(Array.isArray(l.material))for(let a=0,u=l.material.length;a<u;a++)l.material[a].isMaterial||(l.material[a]=r(l,l.material[a]));else l.material.isMaterial||(l.material=r(l,l.material))});function r(l,a){if(o&&!(a in n)&&!i)return a;const u=l.isLineSegments||l.isConditionalLine;(!u&&a===wn||u&&a===bi)&&(a=t);let h=null;if(a in n)h=n[a];else if(i)h=s.getMaterial(a),h===null&&(console.warn(`LDrawLoader: Material properties for code ${a} not available.`),h=s.missingColorMaterial);else return a;return l.isLineSegments&&(h=h.userData.edgeMaterial,l.isConditionalLine&&(h=h.userData.conditionalEdgeMaterial)),h}}getMainMaterial(){return this.getMaterial(wn)}getMainEdgeMaterial(){const e=this.getMaterial(bi);return e?e.userData.edgeMaterial:null}parseColorMetaDirective(e){let t=null,n=16711935,i=16711935,s=1,o=!1,r=0,l=rl,a=null;const u=e.getToken();if(!u)throw new Error('LDrawLoader: Material name was expected after "!COLOUR tag'+e.getLineNumberString()+".");let d=null;for(;d=e.getToken(),!!d;)if(!m(d))switch(d.toUpperCase()){case"CODE":t=e.getToken();break;case"VALUE":if(n=e.getToken(),n.startsWith("0x"))n="#"+n.substring(2);else if(!n.startsWith("#"))throw new Error("LDrawLoader: Invalid color while parsing material"+e.getLineNumberString()+".");break;case"EDGE":if(i=e.getToken(),i.startsWith("0x"))i="#"+i.substring(2);else if(!i.startsWith("#")){if(a=this.getMaterial(i),!a)throw new Error("LDrawLoader: Invalid edge color while parsing material"+e.getLineNumberString()+".");a=a.userData.edgeMaterial}break;case"ALPHA":if(s=parseInt(e.getToken()),isNaN(s))throw new Error("LDrawLoader: Invalid alpha value in material definition"+e.getLineNumberString()+".");s=Math.max(0,Math.min(1,s/255)),s<1&&(o=!0);break;case"LUMINANCE":if(!m(e.getToken()))throw new Error("LDrawLoader: Invalid luminance value in material definition"+xi.getLineNumberString()+".");break;case"CHROME":l=ol;break;case"PEARLESCENT":l=al;break;case"RUBBER":l=ll;break;case"MATTE_METALLIC":l=cl;break;case"METAL":l=hl;break;case"MATERIAL":e.setToEnd();break;default:throw new Error('LDrawLoader: Unknown token "'+d+'" while parsing material'+e.getLineNumberString()+".")}let h=null;switch(l){case rl:h=new zn({color:n,roughness:.3,metalness:0});break;case al:h=new zn({color:n,roughness:.3,metalness:.25});break;case ol:h=new zn({color:n,roughness:0,metalness:1});break;case ll:h=new zn({color:n,roughness:.9,metalness:0});break;case cl:h=new zn({color:n,roughness:.8,metalness:.4});break;case hl:h=new zn({color:n,roughness:.2,metalness:.85});break}return h.transparent=o,h.premultipliedAlpha=!0,h.opacity=s,h.depthWrite=!o,h.color.convertSRGBToLinear(),h.polygonOffset=!0,h.polygonOffsetFactor=1,r!==0&&h.emissive.set(h.color).multiplyScalar(r),a||(a=new Fs({color:i,transparent:o,opacity:s,depthWrite:!o}),a.userData.code=t,a.name=u+" - Edge",a.color.convertSRGBToLinear(),a.userData.conditionalEdgeMaterial=new dl({fog:!0,transparent:o,depthWrite:!o,color:i,opacity:s}),a.userData.conditionalEdgeMaterial.color.convertSRGBToLinear(),a.userData.conditionalEdgeMaterial.userData.code=t,a.userData.conditionalEdgeMaterial.name=u+" - Conditional Edge"),h.userData.code=t,h.name=u,h.userData.edgeMaterial=a,this.addMaterial(h),h;function m(g){let f;return g.startsWith("LUMINANCE")?f=parseInt(g.substring(9)):f=parseInt(g),isNaN(f)?!1:(r=Math.max(0,Math.min(1,f/255)),!0)}}computeBuildingSteps(e){let t=0;e.traverse(n=>{n.isGroup&&(n.userData.startingBuildingStep&&t++,n.userData.buildingStep=t)}),e.userData.numBuildingSteps=t+1}}function Wr(c,e=!1){const t=c[0].index!==null,n=new Set(Object.keys(c[0].attributes)),i=new Set(Object.keys(c[0].morphAttributes)),s={},o={},r=c[0].morphTargetsRelative,l=new ft;let a=0;for(let u=0;u<c.length;++u){const d=c[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in d.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(d.attributes[m]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(r!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in d.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(d.morphAttributes[m])}if(e){let m;if(t)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(a,m,u),a+=m}}if(t){let u=0;const d=[];for(let h=0;h<c.length;++h){const m=c[h].index;for(let g=0;g<m.count;++g)d.push(m.getX(g)+u);u+=c[h].attributes.position.count}l.setIndex(d)}for(const u in s){const d=ml(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const m=[];for(let f=0;f<o[u].length;++f)m.push(o[u][f][h]);const g=ml(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function ml(c){let e,t,n,i=0;for(let r=0;r<c.length;++r){const l=c[r];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=l.array.length}const s=new e(i);let o=0;for(let r=0;r<c.length;++r)s.set(c[r].array,o),o+=c[r].array.length;return new Ze(s,t,n)}class Ex{static mergeObject(e){function t(m,g,f,p){const x=new ft,_=m.getAttribute("position").array,v=f===3?m.getAttribute("normal").array:null,b=Math.min(g.count,Math.floor(_.length/3)-g.start),M=g.start*3,T=(g.start+b)*3,R=_.subarray(M,T),y=v!==null?v.subarray(M,T):null;if(x.setAttribute("position",new Ze(R,3)),y!==null&&x.setAttribute("normal",new Ze(y,3)),p){const S=m.getAttribute("control0").array.subarray(M,T),L=m.getAttribute("control1").array.subarray(M,T),I=m.getAttribute("direction").array.subarray(M,T);x.setAttribute("control0",new Ze(S,3,!1)),x.setAttribute("control1",new Ze(L,3,!1)),x.setAttribute("direction",new Ze(I,3,!1))}return x}function n(m,g,f){const p=f[m.uuid];p?p.arr.push(g):f[m.uuid]={mat:m,arr:[g]}}function i(m,g){if(!m)return;const f=m.array,p=Math.floor(f.length/3);let x=0;for(let _=0;_<p;_++){const v=f[x],b=f[x+1],M=f[x+2];f[x]=f[x+3],f[x+1]=f[x+4],f[x+2]=f[x+5],f[x+3]=v,f[x+4]=b,f[x+5]=M,x+=g*3}}const s={},o={},r={};e.updateMatrixWorld(!0);const l=new gt;e.traverse(m=>{if(m.isMesh|m.isLineSegments){const g=m.isMesh?3:2,f=m.geometry.clone();m.matrixWorld.determinant()<0&&(i(f.attributes.position,g),i(f.attributes.normal,g)),f.applyMatrix4(m.matrixWorld),m.isConditionalLine&&(f.attributes.control0.applyMatrix4(m.matrixWorld),f.attributes.control1.applyMatrix4(m.matrixWorld),l.getNormalMatrix(m.matrixWorld),f.attributes.direction.applyNormalMatrix(l));const x=m.isMesh?s:m.isConditionalLine?r:o;if(Array.isArray(m.material))for(const _ in f.groups){const v=f.groups[_],b=m.material[v.materialIndex],M=t(f,v,g,m.isConditionalLine);n(b,M,x)}else n(m.material,f,x)}});const a=new vi,u=Object.keys(s);for(const m of u){const g=s[m],f=Wr(g.arr);a.add(new st(f,g.mat))}const d=Object.keys(o);for(const m of d){const g=o[m],f=Wr(g.arr);a.add(new es(f,g.mat))}const h=Object.keys(r);for(const m of h){const g=r[m],f=Wr(g.arr),p=new es(f,g.mat);p.isConditionalLine=!0,a.add(p)}return a.userData.constructionStep=0,a.userData.numConstructionSteps=1,a}}var Qt={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Qt.width=window.innerWidth,Qt.height=window.innerHeight,Cn.aspect=Qt.width/Qt.height,Cn.updateProjectionMatrix(),Xs.setSize(Qt.width,Qt.height)});const Tx=new Cm(8),gn=new vm;gn.add(Tx);const Jn=new sx({gravity:new w(0,-9.82,0)}),Ql=new le({type:le.STATIC,shape:new kg});Jn.addBody(Ql);Ql.quaternion.setFromEuler(-Math.PI/2,0,0);let $i=new w(20,30,200);const Ax=new le({type:le.STATIC,shape:new Ln($i)});Jn.addBody(Ax);let Ds=new w(500,2,200);const Li=new le({shape:new Ln(Ds),mass:5});Li.position.y=$i.y+10;Jn.addBody(Li);let ec=200;var tc=new le({shape:new Ln(new w(ec,20,100)),mass:1,position:new w(200,Li.position.y+40,0)});const js=new Ug({chassisBody:tc});function Cx(c){if(c<0||c>3)return;const e=1;let t=ec;const n=new Jl(20.5),i=new is("wheel"),s=new w(0,-1,0),o=new w(0,-1,0),r=new le({mass:e,material:i});let l=1;(c==0||c==1)&&(l=l*-1,t=t*-1);let a=100;(c==0||c==3)&&(a=a*-1),r.addShape(n),js.addWheel({body:r,position:new w(a,0,t/2).vadd(o),axis:new w(0,0,l),direction:s})}for(let c=0;c<4;c++)Cx(c);js.addToWorld(Jn);let lo=[],co=[];function nc(c,e){let t=Math.random()*-200-100,n=(Math.random()-5)*20;e||c>6&&(t=Math.random()*300+400,n=c*20);var i=new le({shape:new Ln(new w(4,20,4)),mass:.1,position:new w(t,Li.position.y+60,n)});Jn.addBody(i),e?co[c]=i:lo[c]=i}for(var qn=0;qn<17;qn++)nc(qn,!1);for(var qn=0;qn<2;qn++)nc(qn,!0);new ux(gn,Jn);const Cn=new Rt(45,Qt.width/Qt.height,.1,3e3);Cn.position.y=200;Cn.position.z=1e3;gn.add(Cn);const ic=new Am(16777215,1,100);ic.position.set(0,10,10);gn.add(ic);const sc=document.querySelector(".webgl");var rc=new Pm(Cn,sc);rc.enableDamping=!0;var Xs=new io({canvas:sc});Xs.setSize(Qt.width,Qt.height);Xs.render(gn,Cn);var gl=[{type:"tyre",path:"models/tyre.ldr_Packed.mpd"},{type:"bulldozer",path:"models/bulldozerTest.ldr_Packed.mpd"},{type:"people",path:"models/char1.ldr_Packed.mpd"},{type:"singles",path:"models/hammer.ldr_Packed.mpd"},{type:"singles",path:"models/house.ldr_Packed.mpd"}];const oc=new Sx;await oc.setPartsLibraryPath("/models/ldraw/");var ac=[],lc=[],Si,cc=[],Hr=0;async function hc(){var c=gl[Hr];await oc.load(c.path,async function(e){let t=1;console.log(c.type),c.type=="tyre"?t=4:c.type=="people"&&(t=lo.length);let n=[];for(var i=0;i<t;i++){let s=function(o){const r=new Ri;return r.color.copy(o.color),r.polygonOffset=o.polygonOffset,r.polygonOffsetUnits=o.polygonOffsetUnits,r.polygonOffsetFactor=o.polygonOffsetFactor,r.opacity=o.opacity,r.transparent=o.transparent,r.depthWrite=o.depthWrite,r.toneMapping=!1,r};n[i]=e,console.log("LOADED"),n[i].traverse(o=>{o.isMesh&&(Array.isArray(o.material)?o.material=o.material.map(s):o.material=s(o.material))}),n[i]=await Ex.mergeObject(e),(c.type=="people"||c.type=="singles")&&(n[i].rotation.z=Math.PI),gn.add(n[i])}c.type=="tyre"?cc=[...n]:c.type=="bulldozer"?(Si=n[0],Si.rotation.x=Math.PI,Si.rotation.y=Math.PI):c.type=="people"?(console.log("people"),ac=[...n]):c.type=="singles"?(lc.push(...n),console.log(co)):console.log("Unknown model object type given"+c.type),Hr++,Hr<gl.length&&hc()},function(e){console.log(e.loaded/e.total*100+"% loaded")},function(e){console.log("An error happened"+e)})}await hc();const Lx=new Ri({color:"#21130d"}),Px=new mn($i.x*2,$i.y*2,$i.z*2);var Rx=new st(Px,Lx);gn.add(Rx);const Dx=new Ri({color:"#eab676"}),Ix=new Lm(Ds.x*2,Ds.y*2,Ds.z*2);var Qr=new st(Ix,Dx);gn.add(Qr);js.setWheelForce(600,3);js.setWheelForce(600,2);const uc=()=>{var c=0;cc.forEach(e=>{e!=null&&e.position!=null,c++});var c=0;ac.forEach(e=>{e!=null&&e.position!=null&&e.position.copy(lo[c].position),c++});var c=0;lc.forEach(e=>{e!=null&&e.position!=null&&e.position.copy(co[c].position),c++}),Si&&(Si.position.copy(tc.position),Si.position.y-=30),Qr.position.copy(Li.position),Qr.quaternion.copy(Li.quaternion),Jn.fixedStep(),rc.update(),Xs.render(gn,Cn),window.requestAnimationFrame(uc)};uc();

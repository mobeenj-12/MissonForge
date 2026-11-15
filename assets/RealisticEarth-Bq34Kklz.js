import{r as x,j as S}from"./index-BYb0xYln.js";import{k as E,R as F,l as G,V as we,S as H,A as Ce,B as Te,u as be,N as Me,M as J}from"./react-three-fiber.esm-CVM4fwKT.js";let X=null;function De(){if(X)return X;const c=2048,u=1024,o=(r,g)=>{const d=(r+180)/360*c,i=(90-g)/180*u;return[d,i]},w=document.createElement("canvas");w.width=c,w.height=u;const e=w.getContext("2d"),f=e.createLinearGradient(0,0,0,u);f.addColorStop(0,"#051329"),f.addColorStop(.18,"#082142"),f.addColorStop(.42,"#0c3870"),f.addColorStop(.5,"#0e417e"),f.addColorStop(.58,"#0c3870"),f.addColorStop(.82,"#082142"),f.addColorStop(1,"#051329"),e.fillStyle=f,e.fillRect(0,0,c,u);const n=(r,g,d="#0f5c80",i=14)=>{if(r.length<3)return;const t=r.map(l=>o(l[0],l[1])),s=l=>{l.beginPath(),l.moveTo(t[0][0],t[0][1]);for(let v=0;v<t.length-1;v++){const y=(t[v][0]+t[v+1][0])/2,z=(t[v][1]+t[v+1][1])/2;l.quadraticCurveTo(t[v][0],t[v][1],y,z)}l.quadraticCurveTo(t[t.length-1][0],t[t.length-1][1],t[0][0],t[0][1]),l.closePath()};i>0&&(s(e),e.strokeStyle=d,e.lineWidth=i,e.lineJoin="round",e.lineCap="round",e.stroke()),s(e),e.fillStyle=g,e.fill()};n([[-168,65],[-162,71],[-140,70],[-130,69],[-115,68],[-95,73],[-80,74],[-70,62],[-64,58],[-55,52],[-60,46],[-66,44],[-71,41],[-75,37],[-80,32],[-80,25],[-81,24],[-82,28],[-87,30],[-95,29],[-97,26],[-97,20],[-90,19],[-87,16],[-83,10],[-77,8],[-80,8],[-85,12],[-92,14],[-98,16],[-105,20],[-110,23],[-112,28],[-115,32],[-117,32],[-120,34],[-124,40],[-124,48],[-130,54],[-140,59],[-150,60],[-160,58],[-168,65]],"#2e5926"),e.fillStyle="#0a264a",e.beginPath();const[b,M]=o(-84,45);e.ellipse(b,M,18,9,-.3,0,Math.PI*2),e.fill(),n([[-77,8],[-74,11],[-65,11],[-60,9],[-50,0],[-44,-2],[-35,-5],[-35,-8],[-37,-12],[-39,-17],[-43,-23],[-48,-28],[-52,-32],[-58,-35],[-63,-40],[-67,-46],[-66,-53],[-70,-55],[-75,-52],[-74,-45],[-72,-35],[-70,-20],[-76,-14],[-81,-5],[-80,1],[-77,8]],"#1c4a22"),n([[-9,36],[-9,43],[-2,43],[-5,48],[0,49],[3,51],[8,54],[5,58],[10,63],[18,70],[28,71],[40,68],[60,73],[80,73],[100,76],[130,74],[165,68],[175,65],[162,57],[156,51],[140,50],[135,44],[130,42],[128,38],[122,38],[121,31],[115,23],[108,22],[108,14],[105,9],[101,10],[98,16],[90,22],[85,20],[80,13],[80,9],[77,15],[73,20],[68,24],[60,25],[50,28],[42,38],[34,36],[27,37],[24,38],[20,39],[15,41],[12,44],[9,44],[3,42],[-2,37],[-9,36]],"#395e29"),n([[-5,50],[-5,55],[-3,58],[-1,53],[1,51],[-3,50],[-5,50]],"#2e5e29","#136d94",8),n([[-10,51],[-6,54],[-8,55],[-10,52],[-10,51]],"#255e24","#136d94",6),n([[9,44],[12,44],[15,41],[18,40],[16,38],[13,42],[10,44]],"#5c6838","#167b9a",6),n([[13,37],[15,37],[14,38],[13,37]],"#686b36","#167b9a",4),n([[130,32],[133,34],[137,35],[140,37],[142,43],[141,45],[139,41],[134,35],[130,32]],"#2f5928","#14789e",7),n([[-17,14],[-17,21],[-13,28],[-5,36],[11,37],[15,32],[25,31],[30,31],[33,28],[38,22],[43,12],[51,12],[48,5],[41,-4],[39,-10],[35,-25],[32,-28],[28,-34],[18,-34],[16,-28],[14,-22],[12,-10],[9,1],[9,4],[4,5],[-4,5],[-14,8],[-17,14]],"#826d36"),n([[44,-13],[50,-15],[47,-25],[43,-25],[44,-18],[44,-13]],"#2d5e27","#127398",8),n([[35,30],[44,30],[50,26],[56,24],[59,22],[55,17],[45,12],[43,14],[38,22],[35,30]],"#bf9343","#197899",7),n([[114,-22],[120,-14],[130,-12],[136,-12],[142,-11],[150,-22],[153,-28],[150,-37],[138,-35],[135,-32],[116,-35],[113,-26],[114,-22]],"#9e5f2e","#14799c",10),n([[173,-35],[178,-38],[175,-41],[173,-35]],"#2a5a24","#157596",6),n([[167,-44],[173,-41],[170,-46],[167,-44]],"#2a5a24","#157596",6),n([[96,4],[104,-5],[100,-2],[96,4]],"#1b4a20","#1583a6",6),n([[106,-6],[114,-8],[110,-7],[106,-6]],"#1b4a20","#1583a6",6),n([[110,4],[118,5],[117,-3],[110,0],[110,4]],"#1b4a20","#1583a6",7),n([[131,-1],[140,-3],[150,-10],[142,-9],[131,-1]],"#1b4a20","#1583a6",7),n([[-180,-70],[-120,-72],[-60,-64],[0,-68],[60,-66],[120,-65],[180,-70],[180,-90],[-180,-90]],"#edf4fa","#3898c8",14),n([[-55,60],[-40,60],[-20,70],[-25,82],[-50,83],[-55,60]],"#e2eaf2","#258ec2",10),e.fillStyle="#b88c3a",e.beginPath();const[A,D]=o(16,23);e.ellipse(A,D,175,48,.08,0,Math.PI*2),e.fill(),e.fillStyle="#c49642",e.beginPath();const[C,U]=o(46,23);e.ellipse(C,U,60,35,.15,0,Math.PI*2),e.fill(),e.fillStyle="#17401c",e.beginPath();const[Y,O]=o(22,0);e.ellipse(Y,O,65,45,0,0,Math.PI*2),e.fill(),e.strokeStyle="#18799e",e.lineWidth=3,e.beginPath();const[T,K]=o(31,31),[Q,Z]=o(32,27),[ee,te]=o(32,22),[ae,oe]=o(31,16);e.moveTo(T,K),e.lineTo(Q,Z),e.lineTo(ee,te),e.lineTo(ae,oe),e.stroke(),e.fillStyle="#f8fafc",e.beginPath();const[re,ne]=o(86,32);e.ellipse(re,ne,80,16,-.15,0,Math.PI*2),e.fill(),e.strokeStyle="#e2e8f0",e.lineWidth=4,e.beginPath();const[ie,le]=o(-76,-5),[se,ce]=o(-71,-20),[de,ue]=o(-70,-35),[he,me]=o(-71,-48);e.moveTo(ie,le),e.lineTo(se,ce),e.lineTo(de,ue),e.lineTo(he,me),e.stroke(),e.strokeStyle="#e2e8f0",e.lineWidth=4,e.beginPath();const[ge,ve]=o(-116,54),[fe,pe]=o(-110,42),[ye,xe]=o(-106,34);e.moveTo(ge,ve),e.lineTo(fe,pe),e.lineTo(ye,xe),e.stroke(),e.fillStyle="#f1f5f9",e.beginPath();const[Se,Pe]=o(10,46);e.ellipse(Se,Pe,20,8,.2,0,Math.PI*2),e.fill();const R=document.createElement("canvas");R.width=c,R.height=u;const h=R.getContext("2d");h.fillStyle="#010307",h.fillRect(0,0,c,u);const a=(r,g,d,i)=>{const[t,s]=o(r,g),l=h.createRadialGradient(t,s,0,t,s,i);l.addColorStop(0,`rgba(255, 235, 160, ${d})`),l.addColorStop(.25,`rgba(245, 165, 36, ${d*.75})`),l.addColorStop(.65,`rgba(217, 119, 6, ${d*.25})`),l.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=l,h.beginPath(),h.arc(t,s,i,0,Math.PI*2),h.fill(),h.fillStyle="rgba(255, 255, 235, 0.9)";const v=Math.floor(i*.5);for(let y=0;y<v;y++){const z=Math.random()*Math.PI*2,q=Math.random()*i*.65;h.fillRect(t+Math.cos(z)*q,s+Math.sin(z)*q,1.5,1.5)}},p=(r,g,d=1.5)=>{const[i,t]=o(r[0],r[1]),[s,l]=o(g[0],g[1]);h.strokeStyle="rgba(245, 175, 45, 0.35)",h.lineWidth=d,h.beginPath(),h.moveTo(i,t),h.lineTo(s,l),h.stroke()};a(-74,40.7,1,38),a(-87.6,41.8,.95,28),a(-118.2,34,1,32),a(-122.4,37.7,.85,22),a(-95.3,29.7,.8,22),a(-80.2,25.7,.75,18),a(-122.3,47.6,.75,18),p([-74,40.7],[-87.6,41.8]),p([-87.6,41.8],[-95.3,29.7]),p([-118.2,34],[-122.4,37.7]),a(0,51.5,1,34),a(2.35,48.8,.95,30),a(9,51,1,48),a(12.5,41.9,.85,22),a(-3.7,40.4,.8,20),a(37.6,55.7,.9,28),p([0,51.5],[2.35,48.8]),p([2.35,48.8],[9,51]),a(31.2,30,.95,26),p([31.2,30],[32.5,25],2.5),p([32.5,25],[32.9,24],2),a(55.3,25.2,.9,24),a(46.7,24.7,.8,20),a(139.7,35.6,1,42),a(135.5,34.7,.95,30),a(121.5,31.2,1,38),a(116.4,39.9,.95,34),a(113.2,23.1,1,38),a(127,37.5,.95,28),a(77.2,28.6,1,36),a(72.8,19,.95,32),a(77.6,12.9,.9,26),a(100.5,13.7,.85,22),a(103.8,1.3,.9,20),p([116.4,39.9],[121.5,31.2]),p([121.5,31.2],[113.2,23.1]),a(-46.6,-23.5,.9,30),a(-43.2,-22.9,.85,24),a(-58.4,-34.6,.85,24),a(151.2,-33.8,.85,24),a(144.9,-37.8,.8,22);const I=document.createElement("canvas");I.width=c,I.height=u;const m=I.getContext("2d");m.clearRect(0,0,c,u);const W=(r,g,d,i)=>{m.fillStyle=`rgba(255, 255, 255, ${d})`;for(let t=0;t<c;t+=18){const s=t/c,l=Math.sin(s*Math.PI*i)*28+Math.cos(s*Math.PI*(i*1.8))*14,[,v]=o(0,r),y=g*(.6+Math.sin(t*.04)*.4);m.beginPath(),m.arc(t,v+l,y,0,Math.PI*2),m.fill()}};W(5,28,.38,12),W(48,45,.45,8),W(-48,52,.42,7),W(72,35,.32,6);const B=(r,g,d)=>{const[i,t]=o(r,g);for(let s=0;s<Math.PI*6.5;s+=.2){const l=s/(Math.PI*6.5)*d,v=i+Math.cos(s)*l,y=t+Math.sin(s)*l;m.fillStyle=`rgba(255, 255, 255, ${.52-l/d*.28})`,m.beginPath(),m.arc(v,y,14,0,Math.PI*2),m.fill()}m.save(),m.globalCompositeOperation="destination-out",m.beginPath(),m.arc(i,t,7,0,Math.PI*2),m.fill(),m.restore()};B(-55,28,70),B(138,22,85),B(88,18,60);const k=document.createElement("canvas");k.width=c,k.height=u;const N=k.getContext("2d");N.fillStyle="#ffffff",N.fillRect(0,0,c,u);const j=e.getImageData(0,0,c,u),P=N.getImageData(0,0,c,u);for(let r=0;r<j.data.length;r+=4){const g=j.data[r],d=j.data[r+1],i=j.data[r+2],t=i>g&&i>d&&i>60,s=g>210&&d>220&&i>230;t||(s?(P.data[r]=110,P.data[r+1]=110,P.data[r+2]=110):(P.data[r]=12,P.data[r+1]=12,P.data[r+2]=12))}N.putImageData(P,0,0);const V=new E(w);V.wrapS=F,V.wrapT=G;const _=new E(R);_.wrapS=F,_.wrapT=G;const $=new E(I);$.wrapS=F,$.wrapT=G;const L=new E(k);return L.wrapS=F,L.wrapT=G,X={dayTexture:V,nightTexture:_,cloudsTexture:$,specularTexture:L},X}const We=({radius:c=3.6,sunDirection:u=[1,.35,.7],rotationSpeed:o=.06})=>{const w=x.useRef(null),e=x.useRef(null),f=x.useRef(null),n=x.useRef(null),{dayTexture:b,nightTexture:M,cloudsTexture:A,specularTexture:D}=x.useMemo(()=>De(),[]),C=x.useMemo(()=>new we(...u).normalize(),[u]),U=x.useMemo(()=>new H({uniforms:{uDayTexture:{value:b},uNightTexture:{value:M},uSpecularTexture:{value:D},uSunDirection:{value:C}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vUv = uv;
          vNormal = normalize(mat3(modelMatrix) * normal);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,fragmentShader:`
        uniform sampler2D uDayTexture;
        uniform sampler2D uNightTexture;
        uniform sampler2D uSpecularTexture;
        uniform vec3 uSunDirection;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          // Normalize normal in world space approximation
          vec3 normal = normalize(vNormal);
          float sunDot = dot(normal, uSunDirection);

          // Day and night color lookups
          vec4 dayColor = texture2D(uDayTexture, vUv);
          vec4 nightColor = texture2D(uNightTexture, vUv);
          float specular = texture2D(uSpecularTexture, vUv).r;

          // Smooth terminator transition
          float dayFactor = smoothstep(-0.15, 0.25, sunDot);

          // Specular glint on daylight oceans
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          vec3 halfVector = normalize(uSunDirection + viewDir);
          float specAngle = max(dot(normal, halfVector), 0.0);
          float specFactor = pow(specAngle, 32.0) * specular * max(0.0, sunDot) * 1.4;

          // Warm atmospheric scattering at terminator (golden hour sunset glow)
          float sunsetFactor = smoothstep(-0.1, 0.1, sunDot) * (1.0 - smoothstep(0.1, 0.35, sunDot));
          vec3 sunsetColor = vec3(0.98, 0.45, 0.15) * sunsetFactor * 0.45;

          // Atmospheric diffuse tint on daylight side (Rayleigh blue haze)
          vec3 atmosphereTint = vec3(0.2, 0.65, 1.0) * (1.0 - dot(normal, viewDir)) * 0.35 * max(0.0, sunDot);

          // Compose final surface radiance
          vec3 dayRadiance = (dayColor.rgb * max(0.08, sunDot) + vec3(specFactor) + atmosphereTint + sunsetColor);
          vec3 nightRadiance = nightColor.rgb * (1.0 - dayFactor) * 2.2; // Boost city lights brightness

          vec3 finalColor = mix(nightRadiance, dayRadiance, dayFactor);

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `}),[b,M,D,C]),Y=x.useMemo(()=>new H({uniforms:{uSunDirection:{value:C}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vNormal = normalize(mat3(modelMatrix) * normal);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,fragmentShader:`
        uniform vec3 uSunDirection;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          vec3 normal = normalize(vNormal);

          // Fresnel edge intensity
          float fresnel = pow(1.0 - abs(dot(viewDir, normal)), 2.8);

          // Higher intensity on sunward limb
          float sunAlignment = max(0.0, dot(normal, uSunDirection));
          float intensity = fresnel * (0.4 + 0.6 * sunAlignment);

          // Electric cyan and rich blue atmospheric scattering
          vec3 atmColor = mix(vec3(0.02, 0.45, 0.95), vec3(0.22, 0.85, 1.0), intensity);

          gl_FragColor = vec4(atmColor, intensity * 0.85);
        }
      `,side:Te,blending:Ce,transparent:!0}),[C]);return be((O,T)=>{e.current&&(e.current.rotation.y+=T*o),f.current&&(f.current.rotation.y+=T*(o*1.25)),n.current&&(n.current.rotation.y+=T*o)}),S.jsxs("group",{ref:w,rotation:[J.degToRad(23.44),0,J.degToRad(-10)],children:[S.jsx("mesh",{ref:e,material:U,castShadow:!0,receiveShadow:!0,children:S.jsx("sphereGeometry",{args:[c,64,64]})}),S.jsxs("mesh",{ref:f,children:[S.jsx("sphereGeometry",{args:[c*1.012,48,48]}),S.jsx("meshStandardMaterial",{map:A,transparent:!0,opacity:.42,blending:Me,depthWrite:!1,roughness:1})]}),S.jsx("mesh",{ref:n,material:Y,children:S.jsx("sphereGeometry",{args:[c*1.035,48,48]})})]})};export{We as R};

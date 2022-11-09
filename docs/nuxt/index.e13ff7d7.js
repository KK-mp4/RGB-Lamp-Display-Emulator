import{a as Q,b as W,r as h,o as O,e as U,f as m,w as A,v as q,t as E,h as J,i as X,u as F,j as S,k as $}from"./entry.35f53dad.js";function K(e,a){for(let n=0;n<e.data.length;n+=4){const t=e.data[n]/255*a,l=e.data[n+1]/255*a,i=e.data[n+2]/255*a,r=N(t,l,i);e.data[n]=r[0],e.data[n+1]=r[1],e.data[n+2]=r[2]}return e}function Z(e,a){const n=[[0,127],[192,63]];for(let t=0;t<e.data.length;t+=4){const l=t/4%e.width,i=Math.floor(t/4/e.width),r=(e.data[t]+n[l%2][i%2])/510*a,g=(e.data[t+1]+n[l%2][i%2])/510*a,v=(e.data[t+2]+n[l%2][i%2])/510*a,f=N(r,g,v);e.data[t]=f[0],e.data[t+1]=f[1],e.data[t+2]=f[2]}return e}function tt(e,a){const n=[[15,135,45,165],[195,75,225,105],[60,180,30,150],[240,120,210,90]];for(let t=0;t<e.data.length;t+=4){const l=t/4%e.width,i=Math.floor(t/4/e.width),r=(e.data[t]+n[l%4][i%4])/510*a,g=(e.data[t+1]+n[l%4][i%4])/510*a,v=(e.data[t+2]+n[l%4][i%4])/510*a,f=N(r,g,v);e.data[t]=f[0],e.data[t+1]=f[1],e.data[t+2]=f[2]}return e}function et(e,a){const n=[[0,128,32,160,8,136,40,168],[192,64,224,96,200,72,232,104],[48,176,16,144,56,184,24,152],[240,112,208,80,248,120,216,88],[12,140,44,172,4,132,36,164],[204,76,236,108,196,68,228,100],[60,188,28,156,52,180,20,148],[252,124,220,92,244,116,212,84]];for(let t=0;t<e.data.length;t+=4){const l=t/4%e.width,i=Math.floor(t/4/e.width),r=(e.data[t]+n[l%8][i%8])/510*a,g=(e.data[t+1]+n[l%8][i%8])/510*a,v=(e.data[t+2]+n[l%8][i%8])/510*a,f=N(r,g,v);e.data[t]=f[0],e.data[t+1]=f[1],e.data[t+2]=f[2]}return e}function N(e,a,n){const t=[[255,255,255],[255,0,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[255,0,255],[0,0,0]];let l=[255,255,255],i=Math.sqrt(Math.pow(e-t[0][0],2)+Math.pow(a-t[0][1],2)+Math.pow(n-t[0][2],2));for(let r=1;r<t.length;r++){const g=Math.sqrt(Math.pow(e-t[r][0],2)+Math.pow(a-t[r][1],2)+Math.pow(n-t[r][2],2));g<i&&(l=[t[r][0],t[r][1],t[r][2]],i=g)}return l}const at=""+globalThis.__publicAssetsURL("load.png"),ot={class:"flex justify-center flex-wrap pt-2 flex-col items-center"},nt=m("p",{class:"text-lg text-gray-300"},"RGB Lamp Display Emulator by KK",-1),st=m("a",{class:"text-xs text-blue-400 underline",href:"https://github.com/KK-mp4/RGB-Lamp-Display-Emulator#readme",target:"_blank"},"More info in GitHub",-1),lt=m("a",{class:"mb-5 text-xs text-blue-400 underline",href:"https://kk-mp4.github.io/Lamp-Display-Emulator/"},"Monochrome 1 bit version",-1),rt={class:"flex flex-wrap flex-row justify-center"},it={class:"w-[300px] mb-5"},dt=m("p",{class:"mb-1 text-sm text-gray-300"},"Lamp texture resolution:",-1),ct=$('<option value="1x1">1x1</option><option value="2x2">2x2</option><option value="4x4">4x4</option><option value="8x8">8x8</option><option value="16x16">16x16</option>',5),ut=[ct],pt={class:"mb-1 text-sm text-gray-300"},mt={class:"mt-3"},gt=m("label",{for:"default-checkbox",class:"ml-1 text-xs font-medium text-gray-300"},"Apply lamp texture",-1),ft={class:"w-[300px] mb-5"},xt=m("p",{class:"mb-1 text-sm text-gray-300"},"Dithering algorithm:",-1),wt=$('<option value="None">None</option><option class="text-[0px] bg-gray-500" disabled>\xA0</option><option value="Bayer 2x2">Bayer 2x2</option><option value="Bayer 4x4">Bayer 4x4</option><option value="Bayer 8x8">Bayer 8x8</option><option value="Yliluoma">WIP Yliluoma 2 4x4</option>',6),vt=[wt],ht={class:"block mb-2 text-sm font-medium text-gray-300"},yt={key:0,class:"animate-spin h-7 w-7 top-52 absolute",src:at},bt={class:"flex justify-center",style:{"image-rendering":"pixelated"}},_t=["src"],It={key:1,class:"fixed bottom-5 right-5"},Rt=Q({__name:"index",setup(e){W({title:"Generator"});const a=h("16x16"),n=h("");let t=16;const l=h(512);let i;const r=h("Bayer 8x8"),g=h(255);let v=h(!1);const f=h(0),j=h(!1);let I=document.createElement("canvas");I.width=16,I.height=16;let V=I.getContext("2d");async function z(){const x=Date.now();H(),v.value=!0;const o=new Image;o.src=i,await new Promise(d=>{o.onload=()=>d(1)});let s=o.width,b=o.height;s>512&&(s=512),b>512&&(b=512);const L=document.createElement("canvas");L.width=s,L.height=b;const y=L.getContext("2d",{willReadFrequently:!0});y.drawImage(o,0,0,o.width,o.height);const w=y.getImageData(0,0,s,b);switch(r.value){case"None":{K(w,g.value),y.putImageData(w,0,0);break}case"Bayer 2x2":{Z(w,g.value),y.putImageData(w,0,0);break}case"Bayer 4x4":{tt(w,g.value),y.putImageData(w,0,0);break}case"Bayer 8x8":{et(w,g.value),y.putImageData(w,0,0);break}case"Yliluoma":{K(w,g.value),y.putImageData(w,0,0);break}}const B=new Image;B.src="./"+a.value+"/ROff.png",await new Promise(d=>{B.onload=()=>d(1)});const R=new Image;R.src="./"+a.value+"/ROn.png",await new Promise(d=>{R.onload=()=>d(1)});const C=new Image;C.src="./"+a.value+"/GOff.png",await new Promise(d=>{C.onload=()=>d(1)});const D=new Image;D.src="./"+a.value+"/GOn.png",await new Promise(d=>{D.onload=()=>d(1)});const k=new Image;k.src="./"+a.value+"/BOff.png",await new Promise(d=>{k.onload=()=>d(1)});const M=new Image;M.src="./"+a.value+"/BOn.png",await new Promise(d=>{M.onload=()=>d(1)});const P=document.createElement("canvas");P.width=s*3*t,P.height=b*3*t;const p=P.getContext("2d");let c=0,u=0;if(j.value){for(let d=0;d<b;d++)for(let _=0;_<s;_++)c=_*3*t,u=d*3*t,w.data[(d*s+_)*4]===255?(p.drawImage(R,c,u),p.drawImage(R,c,u+t),p.drawImage(R,c,u+t*2)):(p.drawImage(B,c,u),p.drawImage(B,c,u+t),p.drawImage(B,c,u+t*2)),w.data[(d*s+_)*4+1]===255?(p.drawImage(D,c+t,u),p.drawImage(D,c+t,u+t),p.drawImage(D,c+t,u+t*2)):(p.drawImage(C,c+t,u),p.drawImage(C,c+t,u+t),p.drawImage(C,c+t,u+t*2)),w.data[(d*s+_)*4+2]===255?(p.drawImage(M,c+t*2,u),p.drawImage(M,c+t*2,u+t),p.drawImage(M,c+t*2,u+t*2)):(p.drawImage(k,c+t*2,u),p.drawImage(k,c+t*2,u+t),p.drawImage(k,c+t*2,u+t*2));n.value=P.toDataURL()}else n.value=L.toDataURL();v.value=!1,T(),f.value=Date.now()-x}async function H(){const x=new Image;x.src="./faviconLoad.ico",await new Promise(s=>{x.onload=()=>s(1)}),V.drawImage(x,0,0,16,16),document.getElementById("favicon").setAttribute("href",I.toDataURL()),history.replaceState(null,null,window.location.hash=="#1"?"#0":"#1")}async function T(){const x=new Image;x.src="./favicon.ico",await new Promise(s=>{x.onload=()=>s(1)}),V.drawImage(x,0,0,16,16),document.getElementById("favicon").setAttribute("href",I.toDataURL()),history.replaceState(null,null,window.location.hash=="#1"?"#0":"#1")}async function Y(x){if(x.target.files&&x.target.files[0]){let o=new FileReader;o.readAsDataURL(x.target.files[0]),o.onload=s=>{i=s.target.result,z()}}}async function G(){a.value==="1x1"?(t=1,l.value=8192):a.value==="2x2"?(t=2,l.value=4096):a.value==="4x4"?(t=4,l.value=2048):a.value==="8x8"?(t=8,l.value=1024):(t=16,l.value=512),i&&z()}return(x,o)=>(O(),U("div",ot,[nt,st,lt,m("div",rt,[m("div",it,[dt,A(m("select",{"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),class:"w-64 mb-5 rounded-lg border h-7 bg-gray-700 border-gray-600 text-gray-400",onChange:o[1]||(o[1]=s=>G())},ut,544),[[q,a.value]]),m("p",pt,"PNG or JPG ("+E(l.value)+"x"+E(l.value)+"px max)",1),m("input",{"aria-label":"Input for images to process",class:"block text-sm text-gray-400 rounded-lg border cursor-pointer focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400",type:"file",accept:".png, .jpg",onChange:o[2]||(o[2]=s=>Y(s))},null,32),m("div",mt,[A(m("input",{"aria-label":"Render lamps?","onUpdate:modelValue":o[3]||(o[3]=s=>j.value=s),onChange:o[4]||(o[4]=s=>G()),id:"Apply lamp texture",type:"checkbox",class:"w-3 h-3 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"},null,544),[[J,j.value]]),gt])]),m("div",ft,[xt,A(m("select",{"onUpdate:modelValue":o[5]||(o[5]=s=>r.value=s),class:"w-[90%] mb-5 rounded-lg border h-7 bg-gray-700 border-gray-600 text-gray-400",onChange:o[6]||(o[6]=s=>G())},vt,544),[[q,r.value]]),m("label",ht,"Quantization threshold: "+E(g.value),1),A(m("input",{"aria-label":"Quantization threshold","onUpdate:modelValue":o[7]||(o[7]=s=>g.value=s),type:"range",min:"0",max:"255",class:"mb-4 w-[90%] h-2 rounded-lg appearance-none cursor-pointer bg-gray-700",onChange:o[8]||(o[8]=s=>G())},null,544),[[X,g.value]])])]),F(v)?(O(),U("img",yt)):S("",!0),m("div",bt,[n.value?(O(),U("img",{key:0,src:n.value,class:"min-w-[300px] w-[90vw] h-[70vh] object-contain"},null,8,_t)):S("",!0)]),n.value&&!F(v)?(O(),U("p",It,E(f.value)+" ms",1)):S("",!0)]))}});export{Rt as default};

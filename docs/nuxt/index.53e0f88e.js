import{a as T,b as Y,r as v,o as L,e as P,f as p,w as O,v as V,t as U,h as Q,i as W,u as z,j as N,k as F}from"./entry.a79111cf.js";function q(e,o){for(let s=0;s<e.data.length;s+=4){const t=e.data[s]/255*o,r=e.data[s+1]/255*o,c=e.data[s+2]/255*o,d=A(t,r,c);e.data[s]=d[0],e.data[s+1]=d[1],e.data[s+2]=d[2]}return e}function J(e,o){const s=[[0,127],[192,63]];for(let t=0;t<e.data.length;t+=4){const r=t/4%e.width,c=Math.floor(t/4/e.width),d=(e.data[t]+s[r%2][c%2])/510*o,m=(e.data[t+1]+s[r%2][c%2])/510*o,w=(e.data[t+2]+s[r%2][c%2])/510*o,g=A(d,m,w);e.data[t]=g[0],e.data[t+1]=g[1],e.data[t+2]=g[2]}return e}function X(e,o){const s=[[15,135,45,165],[195,75,225,105],[60,180,30,150],[240,120,210,90]];for(let t=0;t<e.data.length;t+=4){const r=t/4%e.width,c=Math.floor(t/4/e.width),d=(e.data[t]+s[r%4][c%4])/510*o,m=(e.data[t+1]+s[r%4][c%4])/510*o,w=(e.data[t+2]+s[r%4][c%4])/510*o,g=A(d,m,w);e.data[t]=g[0],e.data[t+1]=g[1],e.data[t+2]=g[2]}return e}function Z(e,o){const s=[[0,128,32,160,8,136,40,168],[192,64,224,96,200,72,232,104],[48,176,16,144,56,184,24,152],[240,112,208,80,248,120,216,88],[12,140,44,172,4,132,36,164],[204,76,236,108,196,68,228,100],[60,188,28,156,52,180,20,148],[252,124,220,92,244,116,212,84]];for(let t=0;t<e.data.length;t+=4){const r=t/4%e.width,c=Math.floor(t/4/e.width),d=(e.data[t]+s[r%8][c%8])/510*o,m=(e.data[t+1]+s[r%8][c%8])/510*o,w=(e.data[t+2]+s[r%8][c%8])/510*o,g=A(d,m,w);e.data[t]=g[0],e.data[t+1]=g[1],e.data[t+2]=g[2]}return e}function A(e,o,s){const t=[[255,255,255],[255,0,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[0,0,0]];let r=[255,255,255],c=Math.sqrt(Math.pow(e-t[0][0],2)+Math.pow(o-t[0][1],2)+Math.pow(s-t[0][2],2));for(let d=1;d<t.length;d++){const m=Math.sqrt(Math.pow(e-t[d][0],2)+Math.pow(o-t[d][1],2)+Math.pow(s-t[d][2],2));m<c&&(r=[t[d][0],t[d][1],t[d][2]],c=m)}return r}const tt=""+globalThis.__publicAssetsURL("load.png"),et={class:"flex justify-center flex-wrap pt-2 flex-col items-center"},at=p("p",{class:"text-lg text-gray-300"},"RGB Lamp Display Emulator by KK",-1),ot=p("a",{class:"text-xs text-blue-400 underline",href:"https://github.com/KK-mp4/RGB-Lamp-Display-Emulator#readme",target:"_blank"},"More info in GitHub",-1),nt=p("a",{class:"mb-5 text-xs text-blue-400 underline",href:"https://kk-mp4.github.io/Lamp-Display-Emulator/"},"Monochrome 1 bit version",-1),st={class:"flex flex-wrap flex-row justify-center"},lt={class:"w-[300px] mb-5"},rt=p("p",{class:"mb-1 text-sm text-gray-300"},"Lamp texture resolution:",-1),it=F('<option value="1x1">1x1</option><option value="2x2">2x2</option><option value="4x4">4x4</option><option value="8x8">8x8</option><option value="16x16">16x16</option>',5),dt=[it],ct={class:"mb-1 text-sm text-gray-300"},ut={class:"mt-3"},pt=p("label",{for:"default-checkbox",class:"ml-1 text-xs font-medium text-gray-300"},"Apply lamp texture",-1),mt={class:"w-[300px] mb-5"},gt=p("p",{class:"mb-1 text-sm text-gray-300"},"Dithering algorithm:",-1),ft=F('<option value="None">None</option><option class="text-[0px] bg-gray-500" disabled>\xA0</option><option value="Bayer 2x2">Bayer 2x2</option><option value="Bayer 4x4">Bayer 4x4</option><option value="Bayer 8x8">Bayer 8x8</option><option value="Yliluoma">WIP Yliluoma 2 4x4</option>',6),xt=[ft],wt={class:"block mb-2 text-sm font-medium text-gray-300"},vt={key:0,class:"animate-spin h-7 w-7 top-52 absolute",src:tt},ht={class:"flex justify-center",style:{"image-rendering":"pixelated"}},yt=["src"],bt={key:1,class:"fixed bottom-5 right-5"},It=T({__name:"index",setup(e){Y({title:"Generator"});const o=v("1x1"),s=v("");let t=16;const r=v(512);let c;const d=v("Bayer 4x4"),m=v(255);let w=v(!1);const g=v(0),E=v(!1);let b=document.createElement("canvas");b.width=16,b.height=16;let j=b.getContext("2d");async function S(){const f=Date.now();K(),w.value=!0;const n=new Image;n.src=c,await new Promise(a=>{n.onload=()=>a(1)});let l=n.width,y=n.height;l>512&&(l=512),y>512&&(y=512);const M=document.createElement("canvas");M.width=l,M.height=y;const h=M.getContext("2d",{willReadFrequently:!0});h.drawImage(n,0,0,n.width,n.height);const x=h.getImageData(0,0,l,y);switch(d.value){case"None":{q(x,m.value),h.putImageData(x,0,0);break}case"Bayer 2x2":{J(x,m.value),h.putImageData(x,0,0);break}case"Bayer 4x4":{X(x,m.value),h.putImageData(x,0,0);break}case"Bayer 8x8":{Z(x,m.value),h.putImageData(x,0,0);break}case"Yliluoma":{q(x,m.value),h.putImageData(x,0,0);break}}const _=new Image;_.src="./"+o.value+"/ROff.png",await new Promise(a=>{_.onload=()=>a(1)});const I=new Image;I.src="./"+o.value+"/ROn.png",await new Promise(a=>{I.onload=()=>a(1)});const B=new Image;B.src="./"+o.value+"/GOff.png",await new Promise(a=>{B.onload=()=>a(1)});const R=new Image;R.src="./"+o.value+"/GOn.png",await new Promise(a=>{R.onload=()=>a(1)});const C=new Image;C.src="./"+o.value+"/BOff.png",await new Promise(a=>{C.onload=()=>a(1)});const D=new Image;D.src="./"+o.value+"/BOn.png",await new Promise(a=>{D.onload=()=>a(1)});const G=document.createElement("canvas");G.width=l*3*t,G.height=y*3*t;const u=G.getContext("2d");if(E.value){for(let a=0;a<y;a++)for(let i=0;i<l;i++)x.data[(a*l+i)*4]===255?(u.drawImage(I,i*3*t,a*3*t),u.drawImage(I,i*3*t,a*3*t+t),u.drawImage(I,i*3*t,a*3*t+t*2)):(u.drawImage(_,i*3*t,a*3*t),u.drawImage(_,i*3*t,a*3*t+t),u.drawImage(_,i*3*t,a*3*t+t*2)),x.data[(a*l+i)*4+1]===255?(u.drawImage(R,i*3*t+t,a*3*t),u.drawImage(R,i*3*t+t,a*3*t+t),u.drawImage(R,i*3*t+t,a*3*t+t*2)):(u.drawImage(B,i*3*t+t,a*3*t),u.drawImage(B,i*3*t+t,a*3*t+t),u.drawImage(B,i*3*t+t,a*3*t+t*2)),x.data[(a*l+i)*4+2]===255?(u.drawImage(D,i*3*t+t*2,a*3*t),u.drawImage(D,i*3*t+t*2,a*3*t+t),u.drawImage(D,i*3*t+t*2,a*3*t+t*2)):(u.drawImage(C,i*3*t+t*2,a*3*t),u.drawImage(C,i*3*t+t*2,a*3*t+t),u.drawImage(C,i*3*t+t*2,a*3*t+t*2));s.value=G.toDataURL()}else s.value=M.toDataURL();w.value=!1,$(),g.value=Date.now()-f}async function K(){const f=new Image;f.src="./faviconLoad.ico",await new Promise(l=>{f.onload=()=>l(1)}),j.drawImage(f,0,0,16,16),document.getElementById("favicon").setAttribute("href",b.toDataURL()),history.replaceState(null,null,window.location.hash=="#1"?"#0":"#1")}async function $(){const f=new Image;f.src="./favicon.ico",await new Promise(l=>{f.onload=()=>l(1)}),j.drawImage(f,0,0,16,16),document.getElementById("favicon").setAttribute("href",b.toDataURL()),history.replaceState(null,null,window.location.hash=="#1"?"#0":"#1")}async function H(f){if(f.target.files&&f.target.files[0]){let n=new FileReader;n.readAsDataURL(f.target.files[0]),n.onload=l=>{c=l.target.result,S()}}}async function k(){o.value==="1x1"?(t=1,r.value=8192):o.value==="2x2"?(t=2,r.value=4096):o.value==="4x4"?(t=4,r.value=2048):o.value==="8x8"?(t=8,r.value=1024):(t=16,r.value=512),c&&S()}return(f,n)=>(L(),P("div",et,[at,ot,nt,p("div",st,[p("div",lt,[rt,O(p("select",{"onUpdate:modelValue":n[0]||(n[0]=l=>o.value=l),class:"w-64 mb-5 rounded-lg border h-7 bg-gray-700 border-gray-600 text-gray-400",onChange:n[1]||(n[1]=l=>k())},dt,544),[[V,o.value]]),p("p",ct,"PNG or JPG ("+U(r.value)+"x"+U(r.value)+"px max)",1),p("input",{"aria-label":"Input for images to process",class:"block text-sm text-gray-400 rounded-lg border cursor-pointer focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400",type:"file",accept:".png, .jpg",onChange:n[2]||(n[2]=l=>H(l))},null,32),p("div",ut,[O(p("input",{"aria-label":"Render lamps?","onUpdate:modelValue":n[3]||(n[3]=l=>E.value=l),onChange:n[4]||(n[4]=l=>k()),id:"Apply lamp texture",type:"checkbox",class:"ml-7 w-3 h-3 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"},null,544),[[Q,E.value]]),pt])]),p("div",mt,[gt,O(p("select",{"onUpdate:modelValue":n[5]||(n[5]=l=>d.value=l),class:"w-[90%] mb-5 rounded-lg border h-7 bg-gray-700 border-gray-600 text-gray-400",onChange:n[6]||(n[6]=l=>k())},xt,544),[[V,d.value]]),p("label",wt,"Quantization threshold: "+U(m.value),1),O(p("input",{"aria-label":"Quantization threshold","onUpdate:modelValue":n[7]||(n[7]=l=>m.value=l),type:"range",min:"0",max:"255",class:"mb-4 w-[90%] h-2 rounded-lg appearance-none cursor-pointer bg-gray-700",onChange:n[8]||(n[8]=l=>k())},null,544),[[W,m.value]])])]),z(w)?(L(),P("img",vt)):N("",!0),p("div",ht,[s.value?(L(),P("img",{key:0,src:s.value,class:"min-w-[300px] w-[90vw] h-[70vh] object-contain"},null,8,yt)):N("",!0)]),s.value&&!z(w)?(L(),P("p",bt,U(g.value)+" ms",1)):N("",!0)]))}});export{It as default};

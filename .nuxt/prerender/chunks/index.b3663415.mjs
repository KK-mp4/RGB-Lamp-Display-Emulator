import { u as useHead } from './server.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/ohmyfetch/dist/node.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/ufo/dist/index.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/hookable/dist/index.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/unctx/dist/index.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/h3/dist/index.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/defu/dist/defu.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/@vue/shared/index.js';
import './nitro-prerenderer.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/destr/dist/index.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/radix3/dist/index.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/scule/dist/index.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/ohash/dist/index.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/unstorage/dist/index.mjs';
import 'file://C:/WIP%20Projects/RGB-Lamp-Display-Emulator/node_modules/unstorage/dist/drivers/fs.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Generator" });
    ref("8x8");
    const src = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center flex-wrap pt-2 flex-col items-center" }, _attrs))}><p class="text-lg text-gray-300">RGB Lamp Display Emulator by KK</p><a class="mb-5 text-xs text-blue-400 underline" href="https://github.com/KK-mp4/RGB-Lamp-Display-Emulator#readme" target="_blank">More info in GitHub</a><select class="w-64 mb-5 rounded-lg border h-7 bg-gray-700 border-gray-600 text-gray-400"><option value="4x4">4x4</option><option value="8x8">8x8</option><option value="16x16">16x16</option></select><input class="block text-sm text-gray-400 rounded-lg border cursor-pointer focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400" type="file" accept=".png, .jpg"><p class="mt-1 text-sm text-gray-300">PNG or JPG (512x512px max).</p><div class="w-full h-full mt-5 flex justify-center" style="${ssrRenderStyle({ "image-rendering": "pixelated" })}"><img${ssrRenderAttr("src", src.value)} class="w-[75%]"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.b3663415.mjs.map

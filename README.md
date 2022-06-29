# How to reproduce ? 

```shell
npm install
npm run test:run
```

Test result should be an exception:
```text
TypeError: n.compareDocumentPosition is not a function
 ❯ node_modules/@headlessui/vue/dist/utils/focus-management.js:1:1285
 ❯ w node_modules/@headlessui/vue/dist/utils/focus-management.js:1:1215
 ❯ w node_modules/@headlessui/vue/dist/components/listbox/listbox.js:1:1989

 ❯ Object.registerOption node_modules/@headlessui/vue/dist/components/listbox/listbox.js:1:3244
 ❯ node_modules/@headlessui/vue/dist/components/listbox/listbox.js:1:9198
 ❯ callWithErrorHandling node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:157:22
 ❯ callWithAsyncErrorHandling node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:166:21
 ❯ Array.hook.__weh.hook.__weh node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:2677:29
 ❯ flushPostFlushCbs node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:354:47
```

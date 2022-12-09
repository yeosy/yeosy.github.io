exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7fe1cd2e", content, true, context)
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_5_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_7179d64c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_5_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_7179d64c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_5_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_7179d64c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_5_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_7179d64c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_5_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_7179d64c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main[data-v-7179d64c]{display:flex;justify-content:center;flex-direction:column;align-items:center;width:100%;height:100vh;background-color:#20b2aa}.main .text[data-v-7179d64c]{padding-right:5px;color:#fff;font-size:10vw;font-weight:900}.main .typing[data-v-7179d64c]{margin-top:20px;height:1.5em;color:#fff;font-size:5vw;font-weight:700;animation:cursor-7179d64c .5s infinite}@keyframes cursor-7179d64c{0%{border-right:1px solid #fff}50%{border-right:1px solid transparent}to{border-right:1px solid #fff}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Main.vue?vue&type=template&id=7179d64c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    directives: [{
      name: "intersect",
      rawName: "v-intersect",
      value: _vm.setRouteSec,
      expression: "setRouteSec"
    }],
    staticClass: "main",
    class: {
      intersect: _vm.isIntersectSec
    },
    attrs: {
      "id": "main"
    }
  }, [_vm._ssrNode("<p class=\"text\" data-v-7179d64c>Hello World!</p> <p class=\"typing\" data-v-7179d64c></p>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Main.vue?vue&type=template&id=7179d64c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Main.vue?vue&type=script&lang=js&
/* harmony default export */ var Mainvue_type_script_lang_js_ = ({
  name: 'Main',
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.typing();
  },
  destroyed() {},
  methods: {
    typing() {
      const $text = document.querySelector(".typing");

      // 글자 모음
      const letters = ["안녕하세요.", "반갑습니다.", "여소영입니다 :)"];

      // 글자 입력 속도
      const speed = 100;
      let i = 0;

      // 타이핑 효과
      const typing = async () => {
        const letter = letters[i].split("");
        while (letter.length) {
          await wait(speed);
          $text.innerHTML += letter.shift();
        }

        // 잠시 대기
        await wait(800);

        // 지우는 효과
        remove();
      };

      // 글자 지우는 효과
      const remove = async () => {
        const letter = letters[i].split("");
        while (letter.length) {
          await wait(speed);
          letter.pop();
          $text.innerHTML = letter.join("");
        }

        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        i = !letters[i + 1] ? 0 : i + 1;
        typing();
      };

      // 딜레이 기능 ( 마이크로초 )
      function wait(ms) {
        return new Promise(res => setTimeout(res, ms));
      }

      // 초기 실행
      setTimeout(typing, 1500);
    }
  }
});
// CONCATENATED MODULE: ./components/Main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mainvue_type_script_lang_js_ = (Mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Main.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(29)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7179d64c",
  "343bd94f"
  
)

/* harmony default export */ var Main = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=main.js.map
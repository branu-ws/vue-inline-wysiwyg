import InlineWysiwyg from './inline-wysiwyg.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('inline-wysiwyg', InlineWysiwyg);
  }
};

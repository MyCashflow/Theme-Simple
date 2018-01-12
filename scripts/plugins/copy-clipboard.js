/**
 * MyCashflow Default Theme
 * Copyright (c) 2017 Pulse247 Oy
 * MIT License <http://opensource.org/licenses/MIT>
 */
;(function ($) {
  'use strict';

  var CopyClipboard = {

    // default configs
    container: '',
    button: '',

    // hooks
    beforeInit: function () {},
    afterInit: function () {},
    beforeClipboardCopy: function () {},
    afterClipboardCopy: function() {},

    /**
     * Plugin init method
     *
     * @param array config Plugin configs to override defaults
     */

    init: function (config) {
      $.extend(true, this, config);
      this.beforeInit();
      this.bindEvents();
      this.afterInit();
    },

    /**
     * Bind events
     *
     */

    bindEvents: function () {
      $(document).on('click', this.button,
        $.proxy(this.copyToClipboard, this));
    },

    /**
     * Get containing element
     *
     * @return object Containing element as an jQuery object
     */

    getContainerElement: function () {
      var $elm = $(document).find(this.container);
      return $elm.length ? $elm : $();
    },

    /**
     * Command to copy the content to the clipboard
     *
     */

    copyToClipboard: function () {
      this.beforeClipboardCopy();
      this.getContainerElement().select();
      document.execCommand('copy');
      this.afterClipboardCopy();
    },

    /**
     * Get container content
     *
     * @return string URL to the cart
     */

    getContainerContent: function () {
      var $elm = this.getContainerElement();
      var url = $elm.val();
      return url;
    }

  };

  $.extend(true, window, { MCF: { CopyClipboard: CopyClipboard }});
})(jQuery);

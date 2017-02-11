// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .


var App = function () {

  var handleAjaxSetup = function () {

    /**
     * Ajax beforeSend için x-csrf token
     * @return {[type]}
     */
    $.ajaxSetup({
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      },
    });

    /**
     * $.post gibi çağırılan put ve delete metodları
     * @return {[function]}
     */
    $.each( [ "put", "delete" ], function ( i, method ) {
      jQuery[ method ] = function( url, data, callback, type, contentType ) {
        if (typeof contentType === 'undefined') contentType = false;

        if ( $.isFunction( data ) ) {
          type = type || callback;
          callback = data;
          data = undefined;
        }

        return $.ajax({
          url: url,
          type: method,
          dataType: type,
          data: data,
          async: true,
          cache: false,
          processData: false,
          contentType: contentType,
          success: callback
        });
      };
    });

  };

  return {
    init: function () {
      handleAjaxSetup();
    }
  };

}();

$(function () {

  'use strict';

  App.init();

  $('.tweets input[type=checkbox]').on('change', function () {
    if ($(this).is(':checked')) {
      $(this).closest('div').addClass('selected');
    } else {
      $(this).closest('div').removeClass('selected');
    }
  });

  $('.tweets > div').on('click', function (e) {
    if ($(e.target).prop('tagName') === 'A'||$(e.target).prop('tagName') === 'LABEL'||$(e.target).prop('tagName') === 'INPUT')
      return;
    var input = $(this).find('input');

    input.prop('checked', !input.is(':checked'));

    if (input.is(':checked')) {
      $(this).addClass('selected');
    } else {
      $(this).removeClass('selected');
    }
  });

  $('#delete-tweets-button').on('click', function (e) {
    e.preventDefault();

    var selecteds = $('#tweets-form').serializeArray();

    if (selecteds.length === 0) {
      swal(
        'Oops...',
        'Hiç bir tweet seçmediğiniz için silme işlemi yapamazsınız.',
        'error'
      );
    } else {
      swal({
        title: 'Emin misiniz?',
        text: "Bu işlemi onaylarsanız seçtiğiniz tweet'ler teker teker silinecektir!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ff7761',
        cancelButtonColor: '#aaa',
        confirmButtonText: 'Eminim, sil!'
      }).then(function () {
        $.post('/destroy', selecteds, function (result) {
          if (result.status === 'success') {
            $('.tweets > div.selected').animate({ 'transform': 'translateX(140px)' }, 600).fadeOut(600);
            swal(
              'İşleniyor!',
              'Tweet\'leriniz teker teker silinecektir. Bu işlem biraz zaman alabilir.',
              'success'
            );
          } else {
            swal(
              'Oops...',
              'İşlem sırasında bir sorun oluştu. :(',
              'error'
            );
          }
        });
      });
    }
  });

});

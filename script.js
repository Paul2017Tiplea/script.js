$('.collapse').collapse()
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})
$('body').scrollspy({ target: '#navbar-example' })
$('.carousel').carousel()
$('.carousel').carousel({
  interval: 2000
})
$('#myModal').modal(options)

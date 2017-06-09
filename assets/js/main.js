/*mensaje estilo tooltip para botón "see more de sección welcome*/
$(function () {
  $('[data-tooltip]').tooltip();
})

/*modal para botón "read more" de sección 3*/
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})



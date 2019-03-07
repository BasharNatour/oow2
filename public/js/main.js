$('.navbar-nav li a').click(function(){

    $(this).parent().addClass('active').siblings().removeClass('active');


})

// Smooth Scroll top div

$('.navbar-nav li a').click(function(){

   $('html, body').animate({


       scrollTop: $("#" + $(this).data('value')).offset().top


   } , 1000 );


});



// button img setting account for workers
function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
		$('.image-upload-wrap').addClass('image-dropping');
	});
	$('.image-upload-wrap').bind('dragleave', function () {
		$('.image-upload-wrap').removeClass('image-dropping');
});



// selected pricing

$(".whole").on("click","a",function(){
  event.preventDefault();
  $(".plan").removeClass("selected");
  $(this).closest(".whole").find(".plan").addClass("selected");


});


// table Services
function addRow(tableID) {
  var tr = $("#" + tableID).find("tr:last-child").clone();
  var n = +tr.attr("data-id") + 1;
  tr.attr("data-id", n);
  tr.find("input").each(function () {
    var name = $(this).attr("name");

    $(this).attr("name", name.replace(/\[\d+\]/, "[" + n + "]"))
    $(this).val("");
  });

  // var table = document.getElementById(tableID);
  // var rowCount = table.rows.length;
  // var row = table.insertRow(rowCount);
  // var colCount = table.rows[0].cells.length;

  // for(var i=0; i<colCount; i++) {
  //   var newRow = row.insertCell(i);

  //   newRow.innerHTML = table.rows[0].cells[i].innerHTML;
  //   newRow.childNodes[0].value = "";
  // }
  $("#" + tableID).find("tbody").append(tr);
}

function deleteRow(row) {
  var table = document.getElementById("data");
  var rowCount = table.rows.length;
  if (rowCount > 1) {
    var rowIndex = row.parentNode.parentNode.rowIndex;
    document.getElementById("data").deleteRow(rowIndex);
  }
  else {
    alert("Please specify at least one value.");
  }
}

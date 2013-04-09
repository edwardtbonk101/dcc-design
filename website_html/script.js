 $(document).ready(function($) {
   var maxHeight = -1;

   $('li h2').each(function() {
     maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
   });

   $('li h2').each(function() {
     $(this).height(maxHeight);
   });
 });

 
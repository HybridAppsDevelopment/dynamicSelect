//place inside the partial view, within a <script> tag
$('select').formSelect();
//Detect School select
$('#schoolName').on('change', function(){

var selected = $("#schoolName option:selected" ).val();

//selectSchoolCourse(selected);
getJSONListCourses(selected);
//alert("selected: "+selected)

});

function getJSONListCourses(selected){

var selected ;
  $('#courseName').empty();


  $.getJSON('js/'+selected+'.json', function(courses) {
    var totalcourses = courses.coursesList.length;
    //alert(totalcourses)

    for (i = 0; i < totalcourses; i++) {
      coursetoAppend = courses.coursesList[i].courseName;
      courseValue = courses.coursesList[i].courseValue;
      ////console.log("course: "+coursetoAppend)
      $('#courseName').append('<option value="'+courseValue+'">'+coursetoAppend+'</option>');

    }

//re-render the select once we have loaded all courses
$('select').formSelect();

  });//end get json

}//close function


// Saves data entry to backend system for Wait List
function saveEntryForWaitlist(){
  var name = document.getElementById('fullName').value;
  var email = document.getElementById('emailAddress').value;
  $.ajax({
    type: "POST",
    url: "server.php?p=addsuckertowaitlist",
    data: "name="+name+"&email="+email,
    success: function(msg) {
      alert('Got it! We will call you sometime... next year.');
    }
  });
}

// Retrieves data entry from backend system for displaying Wait List
function retrieveFormattedWaitlistList(){
  $.ajax({
    type: "GET",
    url: "http://localhost/server.php?p=viewsuckerwaitinglist",
    success: function(data) {
      $('tbody').html(data);
    }
  });
}

// Retrieves data entry from backend system for displaying Wait List
function retrieveSuckerCountOnWaitList(){
  $.ajax({
    type: "GET",
    url: "http://localhost/server.php?p=retrievesuckercount",
    async: false,
    success: function(data) {
      console.log(data);
      return data;
    },
  });
  return 1;
}

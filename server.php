<?php

// Define variables
$servername = "localhost";
$username = "root";
$password = "eEYYYSlLpfqh0YQu";
$dbname = "legodata";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Grab values from the POST request
$name = $_POST['name'];
$email = $_POST['email'];
$idrand = rand();
$page = $_GET['p'];

if($page == 'addsuckertowaitlist') {
  $sql = "INSERT INTO waitinglist (id, email, name)
  VALUES ('$idrand','$email', '$name')";

  if ($conn->query($sql)) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }
} else if($page == 'viewsuckerwaitinglist') {
  $sql = "SELECT * from waitinglist";
  foreach ($conn->query($sql) as $row) {
        // ?>  <tr>
        //     <td><?php echo $row['id'] ?></td>;
        //     <td><?php echo $row['email'] ?></td>;
        //     <td><?php echo $row['name'] ?></td>;
        //   </tr> <?php>
        print $row['id'] . "\t";
        print $row['email'] . "\t";
        print $row['name'] . "\n";
      }
} else {
  echo "Something bad happened";

}

$conn->close();
?>

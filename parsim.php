<?php


if($_POST['search']) {
 $str = $_POST['search'];
}

// $oshibka = var_dump($_POST['search']);
// echo "<p>";
// echo $oshibka;
// echo "</p>";
$row = 1;
if (($handle = fopen("/var/www/u1124859/data/www/unionstandard.ru/codephp/baza.csv", "r")) !== FALSE) {

    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);
        // echo "<p> $num полей в строке $row: <br /></p>\n";
        
        $row++;
        for ($c=0; $c < $num; $c++) {

        	if ( $data[$c] === $str ) {
            echo "<tr>";
            
            //echo $str;
            echo "</td></tr>";
        		echo "<tr>";
        		for ($c=0; $c < $num; $c++) {
        			echo "<td>";
        			echo $data[$c];
        			/*echo "<td>"$data[$c] . "<br />\n";*/
        			echo "</td>";
        		}echo "</tr>\n";
        	}
        	
        }
    }

    fclose($handle);
}


?>

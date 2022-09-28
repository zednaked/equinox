<?
	
$conn = mysqli_connect("127.0.0.1", "rodri617", "caroco23", "rodri617_playbc");

if (!$conn) {
  die("falha na conexao: " . mysqli_connect_error());
}


$sql = "select status, id from BCjogoAndando where id=1";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0)
{
 
  while($row = mysqli_fetch_assoc($result)) 
  {
		//echo "mysql status - " . $row['status'];
		
		if ($row['status']== '0')	
		{
			mysqli_query ($conn, "UPDATE BCjogoAndando SET status=1 WHERE id=1");
			echo "jogador 0";
		}else
		{
			mysqli_query ($conn, "UPDATE BCjogoAndando SET status=0 WHERE id=1");
			echo "jogador 1";
		}		
  }		
} else 
{
  	echo "0";//erro
}

mysqli_close($conn);


//echo ("vez das peças brancas - variavel enviada pelo js:  ".$_GET["a"])
	

function validaposicao (){
	
	
	
	
}

?>
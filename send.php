<?
session_start();
if (isset($_GET['action']) && $_GET['action']=='send_form'){
	foreach ($_GET as $key => $val) {
		${$key} = $val;
	}

	$to  = "kuboww@gmail.com";
	$from='Заявка з сайту';

	$emessage = "
      <html>
        Заявку надіслано з сайту: Time English Studio <br/> <br/>
                Ім'я: <b>".$name."</b> <br/> <br/>
                Телефон: <b>".$tel."</b> <br/> <br/>                
               
      </html>";

	$headers  = "Content-type: text/html; charset=utf-8 \r\n";

	$headers .= "From: ".$from."\r\n";

	$subject = 'Повідомлення з сайту Time English Studio';

	mail($to, $subject, $emessage, $headers);

	$emessage;

	echo 'sended';
}
?>

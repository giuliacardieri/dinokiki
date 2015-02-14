<?php
if($_POST)
{
    $to_email       = "dinokikiteam@gmail.com";
    $from_email     = "mail@dinokiki.com";
    $user_name      = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $user_email     = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $user_kikiName  = filter_var($_POST["kiki-name"], FILTER_SANITIZE_STRING);
    $user_twitter   = filter_var($_POST["twitter"], FILTER_SANITIZE_STRING);
    $user_message  = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
    $subject        = "A New Kiki!";
    $message        = "You've got a brand new kiki!";

    $message_body = $message."\r\n\r\nName:".$user_name."\r\nEmail: ".$user_email."\r\nKiki Name: ".$user_kikiName."\r\nTwitter: ".$user_twitter."\r\nMessage: ".$user_message;

    ### Attachment Preparation ###
    $file_attached = false;
    if(isset($_FILES['kiki-file'])) //check uploaded file
    {
        //get file details we need
        $file_tmp_name    = $_FILES['kiki-file']['tmp_name'];
        $file_name        = $_FILES['kiki-file']['name'];
        $file_size        = $_FILES['kiki-file']['size'];
        $file_type        = $_FILES['kiki-file']['type'];
        $file_error       = $_FILES['kiki-file']['error'];

        //exit script and output error if we encounter any
        if($file_error>0)
        {
            $mymsg = array( 
            1=>"The uploaded file exceeds the upload_max_filesize directive in php.ini", 
            2=>"The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form", 
            3=>"The uploaded file was only partially uploaded", 
            4=>"No file was uploaded", 
            6=>"Missing a temporary folder" ); 
            
            $output = json_encode(array('type'=>'error', 'text' => $mymsg[$file_error]));
            die($output); 
        }
        
        //read from the uploaded file & base64_encode content for the mail
        $handle = fopen($file_tmp_name, "r");
        $content = fread($handle, $file_size);
        fclose($handle);
        $encoded_content = chunk_split(base64_encode($content));
        //now we know we have the file for attachment, set $file_attached to true
        $file_attached = true;
    }
    
    if($file_attached) //continue if we have the file
    {
        # Mail headers should work with most clients
        $headers = "MIME-Version: 1.0\r\n";
        $headers = "X-Mailer: PHP/" . phpversion()."\r\n";
        $headers .= "From: ".$from_email."\r\n";
        $headers .= "Subject: ".$subject."\r\n";
        $headers .= "Reply-To: ".$user_email."" . "\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=".md5('boundary1')."\r\n\r\n";
        
        $headers .= "--".md5('boundary1')."\r\n";
        $headers .= "Content-Type: multipart/alternative;  boundary=".md5('boundary2')."\r\n\r\n";
        
        $headers .= "--".md5('boundary2')."\r\n";
        $headers .= "Content-Type: text/plain; charset=utf-8\r\n\r\n";
        $headers .= $message_body."\r\n\r\n";
        
        $headers .= "--".md5('boundary2')."--\r\n";
        $headers .= "--".md5('boundary1')."\r\n";
        $headers .= "Content-Type:  ".$file_type."; ";
        $headers .= "name=\"".$file_name."\"\r\n";
        $headers .= "Content-Transfer-Encoding:base64\r\n";
        $headers .= "Content-Disposition:attachment; ";
        $headers .= "filename=\"".$file_name."\"\r\n";
        $headers .= "X-Attachment-Id:".rand(1000,9000)."\r\n\r\n";
        $headers .= $encoded_content."\r\n";
        $headers .= "--".md5('boundary1')."--";
    }else{
        //proceed with PHP email.
        $headers = 'From: '.$user_name.'' . "\r\n" .
        'Reply-To: '.$user_email.'' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    }
   
    $send_mail = mail($to_email, $subject, $message_body, $headers);
}
<?php
class Test extends CI_Controller {
    
    public function __construct()
    {
        parent::__construct();
        $this->load->model('kiki_model');
    }
    
    public function index()
    {
        $data['title'] = 'Test your Kiki';
        
        $this->load->view('templates/head', $data);
        $this->load->view('test');
        $this->load->view('templates/footer');
    }
    
    
    public function test_kiki()
    {
        $config =  array(
                  'upload_path'     => dirname($_SERVER["SCRIPT_FILENAME"])."/assets/testing_kikis/",
                  'upload_url'      => base_url()."assets/testing_kikis/",
                  'allowed_types'   => "mp3|m4a|wav",
                  'overwrite'       => TRUE,
                  'max_size'        => "1000KB", 
                  'encrypt_name'    => TRUE
                );
            
            $this->load->library('upload', $config);
            
            if ($this->upload->do_upload('kiki-test'))
            {
                $upload_data = $this->upload->data();
                $file_name = $upload_data['file_name'];
                echo $config['upload_url'] . $file_name;
            }
    }
}
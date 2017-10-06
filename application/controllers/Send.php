<?php
class Send extends CI_Controller {
    
    public function __construct()
    {
        parent::__construct();
        $this->load->model('kiki_model');
    }
    
    public function index()
    {
        $data['title'] = 'Send your Kiki';
        $data['active'] = 'send';
        
        $this->load->view('templates/head', $data);
        $this->load->view('send');
        $this->load->view('templates/footer');
    }
    
    public function send_kiki()
    {
            $config =  array(
                  'upload_path'     => dirname($_SERVER["SCRIPT_FILENAME"])."/assets/uploaded_kikis/",
                  'upload_url'      => base_url()."assets/uploaded_kikis/",
                  'allowed_types'   => "mp3|m4a|wav",
                  'overwrite'       => TRUE,
                  'max_size'        => "1000KB", 
                  'encrypt_name'    => TRUE
                );
            
            $this->load->library('upload', $config);

            if ($this->upload->do_upload('kiki'))
            {
                $upload_data = $this->upload->data();
                $file_name = $upload_data['file_name'];
                
                $data = array(
                    'name' => $this->input->post('name'),
                    'email' => $this->input->post('email'),
                    'twitter' => $this->input->post('twitter'),
                );

                $kiki = array(
                    'name' => $this->input->post('kiki_name'),
                    'file_name' => $file_name,                
                );

                $friend_id = $this->kiki_model->insert_friend($data);
                $kiki_id = $this->kiki_model->insert_kiki($kiki);
                $this->kiki_model->insert_kiki_friend( array(
                    'friend_id' => $friend_id,
                    'kiki_id' => $kiki_id
                ));
            }
    }
}
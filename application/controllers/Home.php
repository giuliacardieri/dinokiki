<?php
class Home extends CI_Controller {
    
    public function index()
    {
        $data['title'] = 'Home';
        
        $this->load->view('templates/head', $data);
        $this->load->view('home');
        $this->load->view('templates/footer');
    }
}
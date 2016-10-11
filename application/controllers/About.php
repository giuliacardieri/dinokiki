<?php
class About extends CI_Controller {
    
    public function __construct()
    {
        parent::__construct();
        $this->load->model('kiki_model');
    }
    
    public function index()
    {
        $data['title'] = 'About';
        $data['kikis'] = $this->kiki_model->get_kikis();
        
        $this->load->view('templates/head', $data);
        $this->load->view('about');
        $this->load->view('templates/footer');
    }

    public function load_kiki_info($id)
    {
        $data['kiki'] = $this->kiki_model->get_kiki_info($id);
        return $this->load->view('templates/dino-modal', $data);
    }
}
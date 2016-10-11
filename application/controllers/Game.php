<?php
class Game extends CI_Controller {
    
    public function __construct()
    {
        parent::__construct();
        $this->load->model('kiki_model');
    }
    
    public function index()
    {
        $data['title'] = 'Play The Kiki Game';
        $data['kikis'] = $this->kiki_model->get_kikis();
        
        $this->load->view('templates/head', $data);
        $this->load->view('game');
        $this->load->view('templates/footer');
    }
}
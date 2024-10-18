<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Chat extends CI_Controller {
    public function index() {
        // Carga la vista index.php desde la carpeta views/chat/
        $this->load->view('chat/index');
    }
}

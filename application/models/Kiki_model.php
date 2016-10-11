<?php
class Kiki_model extends CI_Model {

        public function __construct()
        {
            $this->load->database();
        }

        public function get_friends()
        {
            $query = $this->db->get_where('dinofriends', array('checked' => 1));
            return $query->result_array();
        }

        public function get_friend($id)
        {
            $this->db->select('name, twitter');
            $query = $this->db->get_where('dinofriends', array('id' => $id));
            return $query->result_array();
        }
    
        public function insert_friend($data)
        {          
            $this->db->insert('dinofriends', $data);
            return $this->db->insert_id();
        }
    
        public function insert_kiki($data)
        {          
            $this->db->insert('kikis', $data);
            return $this->db->insert_id();
        }
    
        public function insert_kiki_friend($data)
        {          
            $this->db->insert('friends_kiki', $data);
        }

        public function get_kikis()
        {   
            $this->db->order_by('name', 'asc');
            $this->db->where('checked', 1);
            $query = $this->db->get('kikis');
            return $query->result_array();   
        }

        public function get_kiki_info($id) 
        {
            $this->db->select('kikis.id as id, name, img, file_name, friends_kiki.friend_id', false);
            $this->db->from('kikis');
            $this->db->join('friends_kiki', 'kiki_id = kikis.id', 'inner');
            $this->db->where('kikis.id', $id);
            $query = $this->db->get();
            $num = $query->num_rows();
            $ar = $query->result_array();
            $aux = array();
            for ($i=0; $i < $num; $i++) {
                array_push($aux, $this->get_friend($ar[$i]['friend_id']));
            }
           array_push($ar[0], $aux); 
           return $ar[0];
        }
}
?>
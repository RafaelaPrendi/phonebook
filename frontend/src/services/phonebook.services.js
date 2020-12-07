import http from "../http-common";

class PhonebookDataService {
    getAll(){
        return http.get('/phonebook');
    }
    get(id){
        return http.get(`/phonebook/${id}`);
    }
     create(data) {
    return http.post("/phonebook", data);
  }
  update(id, data) {
    return http.put(`/phonebook/${id}`, data);
  }
   delete(id) {
    return http.delete(`/phonebook/${id}`);
  }
  deleteAll() {
    return http.delete(`/phonebook`);
  }
  findByName(name) {
    return http.get(`/phonebook?first_name=${name}`);
  }
}
export default new PhonebookDataService();
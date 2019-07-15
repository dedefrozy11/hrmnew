import Api from "@/service/Api";

export default {
  getCandidate(params,callback, errCallback) {
    // const authUser = JSON.parse(window.localStorage.getItem("user"));

    return Api()
      .get("/hrm/_table/Candidate", {
        params: params
      })
      .then(data => {
        callback(data);
      })
      .catch(error => {
        errCallback(error);
      });
  },
  deleteCandidate(id,callback, errCallback){
    return Api()
      .delete("/hrm/_table/Candidate/"+id)
      .then(data => {
        callback(data);
      })
      .catch(error => {
        errCallback(error);
      });
  },
  patcCandidate(id,callback, errCallback){
    return Api()
      .pacth("/hrm/_table/Candidate/"+id)
      .then(data => {
        callback(data);
      })
      .catch(error => {
        errCallback(error);
      });
  },
};


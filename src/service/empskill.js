import Api from "@/service/Api";

export default {
  getemployee(params, callback, errCallback) {
    // const authUser = JSON.parse(window.localStorage.getItem("user"));

    return Api()
      .get("/hrm/_table/employeeskill", {
        params: params
      })
      .then(data => {
        callback(data);
      })
      .catch(error => {
        errCallback(error);
      });
  },
  deleteemployee(id, callback, errCallback) {
    return Api()
      .delete("/hrm/_table/employeeskill/" + id)
      .then(data => {
        callback(data);
      })
      .catch(error => {
        errCallback(error);
      });
  },
  editemployee(id, data, callback, errCallback) {
    return Api()
      .put("/hrm/_table/employeeskill/" + id, data)
      .then(data => {
        callback(data);
      })
      .catch(error => {
        errCallback(error);
      });
  },
  addemployee(data, callback, errCallback) {
    var datArr = [Object.assign({}, data)];
    var resData = {
      resource: datArr
    };
    // console.log(resData);
    // return false;
    return Api()
      .post("/hrm/_table/employeeskill/", resData)
      .then(data => {
        callback(data);
      })
      .catch(error => {
        errCallback(error);
      });
  }
};

// Core Components
import Toolbar from "../components/core/Toolbar.vue";
import Navigation from "../components/core/NavigationDrawer.vue";
import Breadcrumbs from "../components/core/Breadcrumbs.vue";
import PageFooter from "../components/core/PageFooter.vue";
import addcandidate from "../components/addcandidate.vue";
import Candidate from "../components/Candidate.vue";
// --employee--//
// --employee --//
import addemployees from "../components/employee/employee/addemployees.vue";
import Employees from "../components/employee/employee/Employees.vue";
import editemployees from "../components/employee/employee/editemployee.vue";
import edit from "../components/employee/employee/edit.vue";

// --Employee Family --//
import addempfamily from "../components/employee/EmpFamily/addempfamily.vue";
import Empfamily from "../components/employee/EmpFamily/Empfamily.vue";
import editempfamily from "../components/employee/EmpFamily/editempfamily.vue";

// --Employee Address --//
import addempaddress from "../components/employee/EmpAddress/addempaddress.vue";
import Empaddress from "../components/employee/EmpAddress/Empaddress.vue";
import editempaddress from "../components/employee/EmpAddress/editempaddress.vue";

// --Employee Education --//
import addempeducation from "../components/employee/EmpEducation/addempeducation.vue";
import Empeducation from "../components/employee/EmpEducation/Empeducation.vue";
import editempeducation from "../components/employee/EmpEducation/editempeducation.vue";

// --Employee Courses --//
import addempcourses from "../components/employee/EmpCourses/addempcourses.vue";
import Empcourses from "../components/employee/EmpCourses/Empcourses.vue";
import editempcourses from "../components/employee/EmpCourses/editempcourses.vue";

// --Employee Experience --//
import addempexperience from "../components/employee/EmpExperience/addempexperience.vue";
import Empexperience from "../components/employee/EmpExperience/Empexperience.vue";
import editempexperience from "../components/employee/EmpExperience/editempexperience.vue";

// --Employee Phone --//
import addempphone from "../components/employee/EmpPhone/addempphone.vue";
import Empphone from "../components/employee/EmpPhone/Empphone.vue";
import editempphone from "../components/employee/EmpPhone/editempphone.vue";

// --Employee Position --//
import addempposition from "../components/employee/EmpPosition/addempposition.vue";
import Empposition from "../components/employee/EmpPosition/Empposition.vue";
import editempposition from "../components/employee/EmpPosition/editempposition.vue";

// --Employee Skill --//
import addempskill from "../components/employee/EmpSkill/addempskill.vue";
import Empskill from "../components/employee/EmpSkill/Empskill.vue";
import editempskill from "../components/employee/EmpSkill/editempskill.vue";

function setupComponents(Vue) {
  //------------- body  ------------//
  Vue.component("toolbar", Toolbar);
  Vue.component("navigation", Navigation);
  Vue.component("breadcrumbs", Breadcrumbs);
  Vue.component("page-footer", PageFooter);
  // -------------employee---------------//
  // ----------------------------employee ------------------------//
  Vue.component("Employees", Employees);
  Vue.component("addemployees", addemployees);
  Vue.component("editemployees", editemployees);
  Vue.component("edit", edit);

  // ----------------------------Employee Family ----------------//
  Vue.component("Empfamily", Empfamily);
  Vue.component("addempfamily", addempfamily);
  Vue.component("editempfamily", editempfamily);

  // ----------------------------Employee Address ----------------//
  Vue.component("Empaddress", Empaddress);
  Vue.component("addempaddress", addempaddress);
  Vue.component("editempaddress", editempaddress);

  // ----------------------------Employee Education ----------------//
  Vue.component("Empeducation", Empeducation);
  Vue.component("addempeducation", addempeducation);
  Vue.component("editempeducation", editempeducation);

  // ----------------------------Employee Courses ----------------//
  Vue.component("Empcourses", Empcourses);
  Vue.component("addempcourses", addempcourses);
  Vue.component("editempcourses", editempcourses);

  // ----------------------------Employee Experience ----------------//
  Vue.component("Empexperience", Empexperience);
  Vue.component("addempexperience", addempexperience);
  Vue.component("editempexperience", editempexperience);

  // ----------------------------Employee Phone ----------------//
  Vue.component("Empphone", Empphone);
  Vue.component("addempphone", addempphone);
  Vue.component("editempphone", editempphone);

  // ----------------------------Employee Position ----------------//
  Vue.component("Empposition", Empposition);
  Vue.component("addempposition", addempposition);
  Vue.component("editempposition", editempposition);

  // ----------------------------Employee Skill ----------------//
  Vue.component("Empskill", Empskill);
  Vue.component("addempskill", addempskill);
  Vue.component("editempskill", editempskill);

  // -------------candidate ------------//
  Vue.component("Candidate", Candidate);
  Vue.component("addcandidate", addcandidate);
}
export { setupComponents };

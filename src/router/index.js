import Vue from "vue";
import Router from "vue-router";

import Dashboard from "../pages/Dashboard.vue";
import Empdata from "../pages/employee/empdata.vue";
import EmpFamily from "../pages/employee/empfamily.vue";
import EmpAddress from "../pages/employee/empaddress.vue";
import EmpEducation from "../pages/employee/empeducation.vue";
import EmpCourses from "../pages/employee/empcourses.vue";
import Empexperience from "../pages/employee/empexperience.vue";
import EmpPhone from "../pages/employee/empphone.vue";
import EmpPosition from "../pages/employee/empposition.vue";
import Empskill from "../pages/employee/empskill.vue";
import Addemp from "../pages/employee/addemp.vue";
import Canddata from "../pages/Canddata.vue";
import Addcand from "../pages/addcand.vue";
import Login from "../pages/core/Login.vue";

import edit from "../pages/employee/Edit.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        breadcrumb: [{ name: "Dashboard" }]
      }
    },

    {
      path: "/empfamily",
      name: "EmpFamily",
      component: EmpFamily,
      meta: {
        breadcrumb: [
          { name: "Dashboard", href: "Dashboard" },
          { name: "Employee Family" }
        ]
      }
    },
    {
      path: "/empaddress",
      name: "EmpAddress",
      component: EmpAddress,
      meta: {
        breadcrumb: [
          { name: "Dashboard", href: "Dashboard" },
          { name: "Employee Address" }
        ]
      }
    },
    {
      path: "/empeducation",
      name: "EmpEducation",
      component: EmpEducation,
      meta: {
        breadcrumb: [
          { name: "Dashboard", href: "Dashboard" },
          { name: "Employee Education" }
        ]
      }
    },
    {
      path: "/empcourses",
      name: "EmpCourses",
      component: EmpCourses,
      meta: {
        breadcrumb: [
          { name: "Dashboard", href: "Dashboard" },
          { name: "Employee Courses" }
        ]
      }
    },
    {
      path: "/empexperience",
      name: "Empexperience",
      component: Empexperience,
      meta: {
        breadcrumb: [
          { name: "Dashboard", href: "Dashboard" },
          { name: "Employee Experience" }
        ]
      }
    },
    {
      path: "/empphone",
      name: "EmpPhone",
      component: EmpPhone,
      meta: {
        breadcrumb: [
          { name: "Dashboard", href: "Dashboard" },
          { name: "Employee Phone" }
        ]
      }
    },
    {
      path: "/empposition",
      name: "EmpPosition",
      component: EmpPosition,
      meta: {
        breadcrumb: [
          { name: "Dashboard", href: "Dashboard" },
          { name: "Employee Position" }
        ]
      }
    },
    {
      path: "/empdata",
      name: "Empdata",
      component: Empdata,
      meta: {
        breadcrumb: [
          { name: "Dashboard", href: "Dashboard" },
          { name: "Employee Data" }
        ]
      }
    },
    {
      path: "/empskill",
      name: "Empskill",
      component: Empskill,
      meta: {
        breadcrumb: [
          { name: "Dashboard", href: "Dashboard" },
          { name: "Employee Skill" }
        ]
      }
    },
    {
      path: "/edit",
      name: "edit",
      component: edit
    },

    {
      path: "/addemp",
      name: "Addemp",
      component: Addemp,
      meta: {
        breadcrumb: [
          { name: "Dashboard", href: "Dashboard" },
          { name: "Added Employees" }
        ]
      }
    },
    {
      path: "/Canddata",
      name: "Canddata",
      component: Canddata,
      meta: {
        breadcrumb: [
          { name: "Dashboard", href: "Dashboard" },
          { name: "Candidate Data" }
        ]
      }
    },

    {
      path: "/addcand",
      name: "Addcand",
      component: Addcand,
      meta: {
        breadcrumb: [
          { name: "Dashboard", href: "Dashboard" },
          { name: "Added Candidate" }
        ]
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        allowAnonymous: true
      }
    }
  ]
});

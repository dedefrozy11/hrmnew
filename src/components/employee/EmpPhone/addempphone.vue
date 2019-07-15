<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-stepper-content step="1">
          <h2>Form Tambah Info Telepon</h2>
          <p>PT.Lestari Jaya Raya</p>
          <v-container>
            <v-layout flex wrap row>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.employeeId" label="ID Karyawan"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.phoneNumber" label="No Telepon"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-select
                  :items="items5"
                  item-text="name"
                  item-value="id"
                  v-model="editedData.type"
                  label="Jenis"
                ></v-select>
              </v-flex>
              <v-flex d-flex lg2></v-flex>
            </v-layout>
          </v-container>
          <v-flex d-flex lg12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="save">
                <v-text @click="dialog = false">Save</v-text>
              </v-btn>
              <v-dialog v-model="dialog" hide-overlay persistent width="300">
                <v-card color="primary" dark>
                  <v-card-text>
                    Sedang mengirim
                    <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-flex>
        </v-stepper-content>
      </v-form>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import VueAxios from "vue-axios";
import employeeApi from "@/service/empphone";
export default {
  // e1: '#app',
  data: vm => ({
    items5: [
      {
        id: "1",
        name: "Telepon Rumah"
      },
      {
        id: "2",
        name: "Hp"
      },
      {
        id: "3",
        name: "Whatsapp"
      }
    ],

    step: 0,
    e1: 0,
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    editedItem: {
      id: "",
      employeeId: "",
      phoneNumber: "",
      type: ""
    },
    dialog: false,
    radioGroup: 1,
    switch1: true
  }),
  // data1 () {
  //   return {
  //     step: 0,
  //     e1: 0,
  //     valid: true,
  //     name: '',
  //     nameRules: [
  //       v => !!v || 'Name is required',
  //       v => (v && v.length <= 10) || 'Name must be less than 10 characters',
  //     ],

  //     date: new Date().toISOString().substr(0, 10),
  //     checkbox: false,
  //     checkbox: true,
  //     radioGroup: 1,

  //     switch1: true,
  //   dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
  //   menu: false,
  //   menu2: false,

  //   }
  // },

  computed: {
    editedData() {
      return this.editedItem;
    }
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
      }
      this.step = 2;
    },

    clear() {
      this.$refs.form.reset();
    },

    close() {
      this.$emit("closeDialog");
    },

    save() {
      if (this.$refs.form.validate()) {
        var vm = this;
        var vItem = this.editedData;
        employeeApi.addemployee(
          vItem,
          function(response) {
            vm.$refs.form.reset();
          },
          function(error) {
            // eslint-disable-next-line no-console
            console.log(error);
          }
        );
      }
    },
    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.modal1 = true;
    }
  },
  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(() => (this.dialog = false), 2000);
    }
  }
};
</script>

<style>
</style> 
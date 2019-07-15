<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Lestari Jaya Raya</v-stepper-step>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-stepper-content step="1">
          <h2>Form Tambah Data Posisi</h2>
          <p>PT.Lestari Jaya Raya</p>
          <v-container>
            <v-layout flex wrap row>
              <v-flex xs12 sm6 d-flex>
                <v-select
                  :items="items1"
                  item-text="name"
                  item-value="id"
                  v-model="editedData.relationship"
                  label="Hubungan Keluarga"
                ></v-select>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.name" label="Nama Lengkap"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="editedData.birthDate"
                      label="Tanggal Lahir"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="editedData.birthDate"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="save1"
                  ></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.education" label="Pendidikan"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.occupation" label="Pekerjaan"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-flex d-flex lg12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="save">
                <v-text @click="dialog1 = true">Save</v-text>
              </v-btn>
              <v-dialog v-model="dialog1" hide-overlay persistent width="300">
                <v-card color="primary" dark>
                  <v-card-text>
                    Sedang Menghapus
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
import employeeApi from "@/service/empfamily";
export default {
  // e1: '#app',
  data: vm => ({
    items1: [
      {
        id: 1,
        name: "Ayah"
      },
      {
        id: 2,
        name: "Ibu"
      },
      {
        id: 3,
        name: "Kakak"
      },
      {
        id: 4,
        name: "Adik"
      },
      {
        id: 5,
        name: "Istri"
      },
      {
        id: 6,
        name: "Suami"
      },
      {
        id: 7,
        name: "Anak"
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
      departemenId: "",
      positionId: "",
      rankId: "",
      startDate: "",
      endDate: "",
      jobDescription: ""
    },
    date: null,
    dialog1: false,
    menu: false,
    checkbox: false,
    checkbox: true,
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
    save1(date) {
      this.$refs.menu.save(date);
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
    },
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  }
};
</script>

<style>
</style> 
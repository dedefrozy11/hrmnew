<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Lestari Jaya Raya</v-stepper-step>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-stepper-content step="1">
          <h2>Form Tambah Data Pengalaman Kerja Karyawan</h2>
          <p>PT.Lestari Jaya Raya</p>
          <v-container>
            <v-layout flex wrap row>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.companyName" label="Nama Perusahaan"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.title" label="Judul"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 d-flex>
                <v-select
                  :items="items1"
                  item-text="name"
                  item-value="id"
                  v-model="editedData.startMonth"
                  label="Mulai Bulan"
                ></v-select>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.staryYear" label="Awal Tahun"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 d-flex>
                <v-select
                  :items="items1"
                  item-text="name"
                  item-value="id"
                  v-model="editedData.endMonth"
                  label="Akhir Bulan"
                ></v-select>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.endYear" label="Akhir Tahun"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.location" label="Lokasi"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.jobDescription" label="Keterangan Pekerjaan"></v-text-field>
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
                    Sedang Mengirim Data
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
import employeeApi from "@/service/empexperience";
export default {
  // e1: '#app',
  data: vm => ({
    items1: [
      {
        id: 1,
        name: "Januari"
      },
      {
        id: 2,
        name: "Februari"
      },
      {
        id: 3,
        name: "Maret"
      },
      {
        id: 4,
        name: "April"
      },
      {
        id: 5,
        name: "Mei"
      },
      {
        id: 6,
        name: "Juni"
      },
      {
        id: 7,
        name: "Juli"
      },
      {
        id: 8,
        name: "Agustus"
      },
      {
        id: 9,
        name: "September"
      },
      {
        id: 10,
        name: "Oktober"
      },
      {
        id: 11,
        name: "November"
      },
      {
        id: 12,
        name: "Desember"
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
      employeeId: 17,
      companyName: "",
      title: "",
      startMonth: "",
      staryYear: "",
      endMonth: "",
      endYear: "",
      location: "",
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
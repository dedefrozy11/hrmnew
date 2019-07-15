<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Lestari Jaya Raya</v-stepper-step>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-stepper-content step="1">
          <h2>Form Tambah Data Keluarga</h2>
          <p>PT.Lestari Jaya Raya</p>
          <v-container>
            <v-layout flex wrap row>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.streetName" label="Alamat"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.city" label="Kota"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.province" label="Provinsi"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.postalCode" label="Kode Pos"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 d-flex>
                <v-select
                  :items="items1"
                  item-text="name"
                  item-value="id"
                  v-model="editedData.type"
                  label="Tipe"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6 d-flex>
                <v-select
                  :items="items2"
                  item-text="name"
                  item-value="id"
                  v-model="editedData.default"
                  label="Standar"
                ></v-select>
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
import employeeApi from "@/service/empaddress";
export default {
  name: "App",
  data: vm => ({
    items1: [
      {
        id: 1,
        name: "Alamat KTP"
      },
      {
        id: 2,
        name: "Alamat Luar Kota"
      },
      {
        id: 3,
        name: "Alamat Saat Ini"
      }
    ],
    items2: [
      {
        id: 1,
        name: "Aktif"
      },
      {
        id: 2,
        name: "Tidak Aktif"
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
      employeeId: 16,
      streetName: "",
      city: "",
      province: "",
      postalCode: "",
      type: "",
      default: ""
    },
    date: null,
    dialog1: false,
    menu: false,
    checkbox: false,
    checkbox: true,
    radioGroup: 1,
    switch1: true
  }),

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
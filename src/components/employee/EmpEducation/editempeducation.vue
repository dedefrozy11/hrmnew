<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-stepper-content step="1">
          <h2>Form Edit Pendidikan Karyawan</h2>
          <p>PT.Lestari Jaya Raya</p>
          <v-container>
            <v-layout flex wrap row>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.employeeId" label="ID Karyawan"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.institutionName" label="Nama Lembaga"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.degree" label="Gelar"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.fieldOfStudy" label="Bidang Studi"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.startYear" label="Tahun Masuk"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.endYear" label="Tahun Lulus"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.description" label="Keterangan"></v-text-field>
              </v-flex>

              <v-flex d-flex lg6>
                <v-select
                  :items="items5"
                  item-text="name"
                  item-value="id"
                  v-model="editedData.educationType"
                  label="Kenis Pendidikan"
                ></v-select>
              </v-flex>

              <v-flex d-flex lg2></v-flex>
            </v-layout>
          </v-container>
          <v-flex d-flex lg12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-stepper-content>
      </v-form>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import employeeApi from "@/service/empeducation";
export default {
  // e1: '#app',
  props: {
    editedItem: Object
  },
  data: vm => ({
    items5: [
      {
        id: "1",
        name: "Aktif"
      },
      {
        id: "2",
        name: "Non Aktif"
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
      institutionName: "",
      degree: "",
      fieldOfStudy: "",
      startYear: "",
      endYear: "",
      description: "",
      educationType: ""
    },
    date: new Date().toISOString().substr(0, 10),
    checkbox: false,
    checkbox: true,
    radioGroup: 1,
    switch1: true,
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu: false,
    menu2: false,
    dialog: false
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
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    editedData() {
      return this.editedItem;
    }
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
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
      var vm = this;
      var vItem = this.editedData;
      employeeApi.editemployee(
        vItem.id,
        vItem,
        function(response) {
          vm.$emit("insertUpdateItem", vItem);
        },
        function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      );
    }
  }
};
</script>

<style>
</style> 
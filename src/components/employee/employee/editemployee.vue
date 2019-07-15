<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-stepper-content step="1">
          <h2>Form Candidate Date</h2>
          <p>Candidate Date PT.Lestari Jaya Raya</p>
          <v-container>
            <v-layout flex wrap row>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.nik" label="NIK"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.name" label="Nama Lengkap"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.nickname" label="Nama Panggilan"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.birthPlace" label="Tempat Lahir"></v-text-field>
              </v-flex>
              <v-flex d-flex lg6>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="50"
                  :return-value.sync="date"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                  </v-date-picker>
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="editedData.birthDate"
                      label="Picker in menu"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                </v-menu>
              </v-flex>

              <v-flex xs12 sm6 d-flex>
                <v-select
                  :items="items1"
                  item-text="name"
                  item-value="id"
                  v-model="editedData.religion"
                  label="Agama"
                ></v-select>
              </v-flex>
              <v-flex d-flex lg6>
                <v-select
                  :items="items2"
                  item-text="name"
                  item-value="id"
                  v-model="editedData.gender"
                  label="Gender"
                ></v-select>
              </v-flex>
              <v-flex d-flex lg6>
                <v-select
                  :items="items3"
                  item-text="name"
                  item-value="id"
                  v-model="editedData.maritalStatus"
                  label="Status Pernikahan"
                ></v-select>
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field v-model="editedData.idNumber" label="Nomor ID"/>
              </v-flex>

              <v-flex d-flex lg6>
                <v-select
                  :items="items4"
                  item-text="name"
                  item-value="id"
                  v-model="editedData.bloodType"
                  label="Golongan Darah"
                ></v-select>
              </v-flex>
              <v-flex d-flex lg6>
                <v-select
                  :items="items5"
                  item-text="name"
                  item-value="id"
                  v-model="editedData.active"
                  label="Status"
                ></v-select>
              </v-flex>

              <v-flex
                d-flex
                xs6
                class="text-xs-center text-sm-center text-md-center text-lg-center"
              >
                <img :src="imageUrl" v-if="imageUrl">
                <v-text-field
                  label="Select Image"
                  @click="pickFile"
                  v-model="imageName"
                  prepend-icon="attach_file"
                ></v-text-field>
                <input
                  type="file"
                  style="display: none"
                  ref="image"
                  accept="image/*"
                  @change="onFilePicked"
                >
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
import employeeApi from "@/service/employees";
export default {
  // e1: '#app',
  props: {
    editedItem: Object
  },
  data: vm => ({
    items1: [
      {
        id: 1,
        name: "Islam"
      },
      {
        id: 2,
        name: "Kristen"
      },
      {
        id: 3,
        name: "Budha"
      },
      {
        id: 4,
        name: "Hindu"
      }
    ],
    items2: [
      {
        id: 1,
        name: "Laki-Laki"
      },
      {
        id: 2,
        name: "Perempuan"
      }
    ],
    items3: [
      {
        id: 1,
        name: "Lajang"
      },
      {
        id: 2,
        name: "Menikah"
      },
      {
        id: 3,
        name: "Cerai Hidup"
      },
      {
        id: 4,
        name: "Cerai Mati"
      }
    ],
    items4: [
      {
        id: "O",
        name: "O  "
      },
      {
        id: "A",
        name: "A"
      },
      {
        id: "B",
        name: "B"
      },
      {
        id: "AB",
        name: "AB"
      }
    ],
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
      nik: "",
      name: "",
      nickname: "",
      gender: "",
      birthPlace: "",
      birthDate: "",
      religion: "",
      maritalStatus: "",
      idNumber: "",
      bloodType: "",
      picture: "",
      active: ""
    },
    date: new Date().toISOString().substr(0, 10),
    checkbox: false,
    checkbox: true,
    radioGroup: 1,
    switch1: true,
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu: false,
    menu2: false,
    title: "Image Upload",
    dialog: false,
    imageName: "",
    imageUrl: "",
    imageFile: ""
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

    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },

    pickFile() {
      this.$refs.image.click();
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
    },

    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    }
  }
};
</script>

<style>
</style> 
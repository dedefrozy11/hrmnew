<template>
  <v-card>
    <v-responsive :aspect-ratio="19/9">
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table
        class="table"
        :headers="headers"
        :items="users"
        :search="search"
        :rows-per-page-items="[12, 20]"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.idNumber }}</td>
          <td class="text-xs-left">{{ props.item.nik }}</td>
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.birthPlace }}</td>
          <td class="text-xs-left">
            <div v-if="props.item.active == '1'">Aktif</div>
            <div v-else>Nonaktif</div>
          </td>
          <td class="text-xs-left">
            <v-container fluid class="pa-0">
              <v-layout row wrap>
                <v-flex xs12 sm3>
                  <!-- <v-dialog ref="dialog1" v-model="modal1" lazy width="1000px">
                  <template v-slot:activator="{ on }">-->
                  <v-btn flat icon color="primary" @click="changeRoute('edit', 1)">
                    <v-icon :class="[{'active': selectedIndex === 1}, 'item-title' ]">edit</v-icon>
                  </v-btn>
                  <!-- <v-btn flat icon color="primary" @click="editItem(props.item)">
                        <v-icon>edit</v-icon>
                      </v-btn>
                    </template>
                    <v-card class="zeropadding">
                      <v-card-text>
                        <v-container>
                          <v-layout>
                            <v-flex xs12 sm12>
                              <editemployees
                                :editedItem="editedItem"
                                @insertUpdateItem="onInsertUpdateItem"
                                @closeDialog="onCloseDialog"
                              />
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <h5>Tekan Di Luar Kolom Ini</h5>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>-->
                </v-flex>

                <v-flex xs12 sm3>
                  <v-btn flat icon color="error" @click="deleteemployee(props.item)">
                    <v-icon @click="dialog = true">delete</v-icon>
                  </v-btn>
                  <v-dialog v-model="dialog" hide-overlay persistent width="300">
                    <v-card color="primary" dark>
                      <v-card-text>
                        Sedang Menghapus
                        <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </v-flex>
              </v-layout>
            </v-container>
          </td>
        </template>
        <template v-slot:no-results>
          <v-alert
            :value="true"
            color="error"
            icon="warning"
          >Pencarian Atas Data "{{ search }}" Tidak Di Temukan.</v-alert>
        </template>
      </v-data-table>
    </v-responsive>
  </v-card>
</template>
<script>
import employeeApi from "@/service/employees";
import VueAxios from "vue-axios";
export default {
  data() {
    return {
      selectedIndex: 1,
      admins: [["Management", "people_outline"], ["Settings", "settings"]],
      search: "",
      modal: false,
      modal1: false,
      dialog: false,
      dialog1: false,
      users: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        name: "",
        nik: "",
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
      headers: [
        {
          text: "Nomor ID",
          value: "idNumber",
          align: "left"
        },
        {
          text: "NIK",
          value: "nik",
          align: "left"
        },
        {
          text: "Nama",
          value: "name",
          align: "left"
        },
        {
          text: "Tempat Lahir",
          value: "birthPlace",
          align: "left"
        },
        {
          text: "Status",
          value: "active",
          align: "left"
        },
        {
          text: "Aksi",
          align: "left"
        }
      ]
    };
  },

  methods: {
    viewemployee(item) {
      this.editedItem = Object.assign({}, item);
      this.modal = true;
    },
    deleteemployee(item) {
      const index = this.users.indexOf(item);
      var vm = this;
      var res = confirm("Are you sure you want to delete this item?");
      if (res == true) {
        employeeApi.deleteemployee(
          item.id,
          function(response) {
            vm.users.splice(index, 1);
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
    },

    onCloseDialog() {
      this.modal1 = false;
      setTimeout(() => {
        this.editedData = Object.assign({});
      }, 300);
    },

    onInsertUpdateItem(item) {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], item);
      } else {
        this.users.push(item);
      }
      this.onCloseDialog();
    },
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    }
  },

  created() {
    const vm = this;

    // vm.axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
    //   var result = response && response.data;

    //   vm.users = result;
    // });
    var params = {};

    employeeApi.getemployee(
      params,
      function(response) {
        // const pagination = { ...vthis.pagination };
        // const results = data.data;
        // const meta = results.meta;
        // pagination.total = meta.count;
        // vthis.loading = false;
        // vthis.data = results.resource;
        // vthis.pagination = pagination;
        // console.log(data.data);
        var result = response && response.data;
        vm.users = result.resource;
      },
      function(error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    );
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
.table {
  border-radius: 3px;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
  background-color: transparent;
}
</style>

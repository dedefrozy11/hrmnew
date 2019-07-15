<template>
  <v-card>
    <v-responsive :aspect-ratio="19/9">
      <v-data-table class="table" :headers="headers" :items="users" :rows-per-page-items="[5, 200]">
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.idNumber }}</td>
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.birthPlace }}</td>
          <td class="text-xs-left">{{ props.item.phoneNumber }}</td>
          <td class="text-xs-left">
            <div v-if="props.item.active == '1'">Aktif</div>
            <div v-else>Nonaktif</div>
          </td>
          <td class="text-xs-left">
            <v-container fluid class="pa-0">
              <v-layout row wrap>
                <v-flex xs12 sm3>
                  <v-dialog ref="dialog1" v-model="modal1" lazy width="1000px">
                    <template v-slot:activator="{ on }">
                      <v-btn flat icon color="primary" @click="editCandidate(props.item)">
                        <v-icon>edit</v-icon>
                      </v-btn>
                    </template>
                    <v-card class="zeropadding">
                      <v-card-text>
                        <v-container>
                          <v-layout>
                            <v-flex xs12 sm12>
                              <addcandidate/>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <h5>Tekan Di Luar Kolom Ini</h5>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-flex>

                <v-flex xs12 sm3>
                  <v-dialog ref="dialog" v-model="modal" lazy width="1000px">
                    <template v-slot:activator="{ on }">
                      <v-btn flat icon color="success" @click="viewCandidate(props.item)">
                        <v-icon>search</v-icon>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-text>
                        <v-container fluid grid-list-sm>
                          <v-layout>
                            <v-flex xs3 sm4>
                              <v-avatar size="180">
                                <img src="@/assets/14.jpg" alt="avatar">
                                <div class="fill-height repeating-gradient"></div>
                              </v-avatar>
                            </v-flex>
                            <v-flex xs9 sm12>
                              <h1>Nama Detail</h1>
                              <div>
                                <h3>Nomer ID : {{ editedItem.idNumber }}</h3>
                              </div>
                              <div>
                                <h3>Nama : {{ editedItem.name }}</h3>
                              </div>
                              <div>
                                <h3>Nama Panggilan : {{ editedItem.nickname }}</h3>
                              </div>
                              <div>
                                <h3>
                                  Gender :
                                  <div v-if="editedItem.gender == '1'">Laki-laki</div>
                                  <div v-else>wanita</div>
                                </h3>
                              </div>
                              <div>
                                <h3>Tempat Lahir : {{ editedItem.birthPlace }}</h3>
                              </div>
                              <div>
                                <h3>Tanggal Lahir : {{ editedItem.birthDate }}</h3>
                              </div>
                            </v-flex>
                          </v-layout>
                          <v-layout>
                            <v-flex xs9 sm12>
                              <div>
                                <h3>
                                  Agama :
                                  <div v-if="editedItem.religion == '1'">Islam</div>
                                  <div v-else-if="editedItem.religion == '2'">Kristen</div>
                                  <div v-else-if="editedItem.religion == '3'">Katolik</div>
                                  <div v-else-if="editedItem.religion == '4'">Hindu</div>
                                  <div v-else-if="editedItem.religion == '5'">Budha</div>
                                  <div v-else>Kong Hu Cu</div>
                                </h3>
                              </div>
                              <div>
                                <h3>
                                  Status Pernikahan :
                                  <div v-if="editedItem.maritalStatus == '1'">Lajang</div>
                                  <div v-else-if="editedItem.maritalStatus == '2'">Menikah</div>
                                  <div v-else-if="editedItem.maritalStatus == '3'">Cerai Hidup</div>
                                  <div v-else>Cerai Mati</div>
                                </h3>
                              </div>
                              <div>
                                <h3>Alamat : {{ editedItem.streetName }}</h3>
                              </div>
                              <div>
                                <h3>Kota : {{ editedItem.city }}</h3>
                              </div>
                              <div>
                                <h3>Provinsi : {{ editedItem.province }}</h3>
                              </div>
                              <div>
                                <h3>Kode Pos : {{ editedItem.postalCode }}</h3>
                              </div>
                              <div>
                                <h3>Nomber Hp : {{ editedItem.phoneNumber }}</h3>
                              </div>
                              <div>
                                <h3>
                                  Aktif :
                                  <div v-if="editedItem.active == '1'">Aktif</div>
                                  <div v-else>Nonaktif</div>
                                </h3>
                              </div>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <h5>Tekan Di Luar Kolom Ini</h5>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-flex>

                <v-flex xs12 sm3>
                  <v-btn flat icon color="error" @click="deleteCandidate(props.item)">
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
      </v-data-table>
    </v-responsive>
  </v-card>
</template>
<script>
import CandidateApi from "@/service/candidateApi";
import VueAxios from "vue-axios";
export default {
  data() {
    return {
      modal: false,
      modal1: false,
      dialog: false,
      dialog1: false,
      users: [],
      editedItem: {
        id: 0,
        name: "",
        nickname: "",
        gender: "",
        birthPlace: "",
        birthDate: "",
        religion: "",
        maritalStatus: "",
        idNumber: "",
        idType: "",
        streetName: "",
        city: "",
        province: "",
        postalCode: "",
        phoneNumber: "",
        picture: "",
        active: ""
      },
      headers: [
        {
          text: "Nomor ID",
          value: "Username",
          align: "left"
        },
        {
          text: "Nama",
          value: "Name",
          align: "left"
        },
        {
          text: "Tempat Lahir",
          value: "Email",
          align: "left"
        },
        {
          text: "No Telpon",
          value: "Phone",
          align: "left"
        },
        {
          text: "Status",
          value: "Company",
          align: "left"
        },
        {
          text: "Aksi",
          value: "Website",
          align: "center"
        }
      ]
    };
  },
  methods: {
    viewCandidate(item) {
      this.editedItem = Object.assign({}, item);
      this.modal = true;
    },
    deleteCandidate(item) {
      const index = this.users.indexOf(item);
      var vm = this;
      var res = confirm("Are you sure you want to delete this item?");
      if (res == true) {
        CandidateApi.deleteCandidate(
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
    editCandidate(item) {
      this.editedItem = Object.assign({}, item);
      this.modal1 = true;
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    }
  },
  created() {
    const vm = this;
    // vm.axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
    //   var result = response && response.data;
    //   vm.users = result;
    // });
    var params = {};
    CandidateApi.getCandidate(
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
        console.log(result.resource);
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
.zeropadding {
  padding: 0;
}
</style>
<template>
  <DashboardContainer>
    <div class="mydiv">
      <div class="a">
        <div class="fileinputs">
          <label for="id-field">ID:</label>
          <input type="text" id="id-field" v-model="clientId" />
        </div>
        <div class="fileinputs">
          <label for="pdf-field">PDF:</label>
          <input type="file" id="pdf-field" @change="onFileChange" multiple />
        </div>
        <div class="filesub">
          <button @click="submitForm">Submit</button>
        </div>
      </div>
      <div v-if="showBox" class="element element--double">
        <h2>Success : {{ response }}</h2>
      </div>
      <div class="filesub1">
        <button @click="buildDoc">Build Document</button>
      </div>
      <div v-if="show" class="modal">
        <div class="modal-content">
          <span class="close" @click="hideModal">&times;</span>
          <h2>{{ response1 }}</h2>
          <br />
          <a
            href="/chat"
            @click="hideModal"
            style="
              color: #0787c7;
              border: 2px solid #0787c7;
              padding: 10px;
              margin-left: 17px;
            "
            >Go to Chat Application</a
          >
        </div>
      </div>
    </div>
  </DashboardContainer>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {
      clientId: "",
      file: "",
      showBox: false,
      response: "",
      response1: "",
      show: false,
    };
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files;
    },
    submitForm() {
      var formdata = new FormData();
      var totalfiles = this.file.length;
      var allfiles = [];
      for (let i = 0; i < totalfiles; i++) {
        console.log(document.getElementById("pdf-field").files[i]);
        formdata.append("file", document.getElementById("pdf-field").files[i]);
      }
      formdata.append("clientId", this.clientId);
      localStorage.setItem("myData", this.clientId);

      for (var key of formdata.entries()) {
        console.log(key[0] + ", " + key[1]);
      }

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(`${process.env.VUE_APP_API_URL}/api/filesUpload`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          this.response = result.message;
          this.showBox = true;
          setTimeout(() => {
            this.showBox = false;
          }, 6000);
          // if (result.message !== "file name exists") {
          //    this.show = true;
          // }
        })
        .catch((error) => console.log("error", error));

      this.file = "";
      this.clientId = "";
    },
    buildDoc() {
      const data = {
        clientId: localStorage.getItem("myData"),
        mock: "test",
      };

      var requestData = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
        redirect: "follow",
      };

      fetch(
        `${process.env.VUE_APP_API_URL}/api/buildIndexForQuery`,
        requestData
      )
        .then((response) => response.text())
        .then((result) => {
          console.log("dataA", result);
          if (result === "Mock Built and printed tokens") {
            this.response1 = "Successfully created";
            this.show = true;
          } else {
            this.response1 = "Directory already exists";
          }
        })
        .catch((error) => console.log("error", error));
    },
    hideModal() {
      this.show = false;
    },
  },
};
</script>
<script setup>
import DashboardContainer from "../components/DashboardContainer.vue";
</script>

<style>
.fileinputs input::file-selector-button {
  font-weight: bold;
  color: dodgerblue;
  padding: 0.5em;
  border: none;
  border-radius: 8px 0 0 8px;
}

.fileinputs label {
  color: #093e58;
  width: 57px;
  font-weight: 600;
  font-size: 21px;
  display: inline-block;
}

.fileinputs input {
  border: 1px solid #379ed242;
  margin-bottom: 16px;
  height: 42px;
  border-radius: 8px;
}

.filesub button {
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1px;
  border-radius: 4px;
  margin-top: -4px !important;
  border: 1px solid #0787c7;
  color: #fff;
  display: inline-block;
  box-shadow: 3px 4px 3px 0px #00000021;
  background: #0787c7;
  transition-duration: 0.3s;
  padding: 12px 36px;
}

.filesub button:hover {
  color: #0787c7;
  background-color: #fff;
  transition-duration: 0.3s;
  border: 1px solid #0787c7;
}

.filesub1 button {
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1px;
  border-radius: 4px;
  margin-top: 40px;
  border: 1px solid #0787c7;
  color: #fff;
  display: inline-block;
  box-shadow: 3px 4px 3px 0px #00000021;
  background: #0787c7;
  transition-duration: 0.3s;
  padding: 12px 36px;
}

.filesub1 button:hover {
  color: #0787c7;
  background-color: #fff;
  transition-duration: 0.3s;
  border: 1px solid #0787c7;
}

.element {
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  height: fit-content;
  margin: 20px;
  border-color: #0787c7;
  border-width: 10px;
  text-align: center;
  font-size: 0px !important;
  color: #093e58;
  /* line-height: 180px; */
  margin-left: -2px;
  font-weight: 600;
}

h2 {
  font-size: 25px !important;
}

.element--double {
  border-style: double;
}

/* .top {
  margin-top: -70px;
} */

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.modal-content {
  background-color: white;
  padding: 80px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
}
.close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
}

.a {
  display: flex;
  gap: 25px;
  margin-top: 50px;
}

@media screen and (min-width: 848px) {
  .a {
    display: flex-col;
  }
}
</style>

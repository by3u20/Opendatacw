const destlist = {
  data() {
    return {
      titleText: "Here Is Your Destination List!",
      btnText: "Go Back",
    }
  },
  template: `
  <div class="row">
    <div class="col-12 text-center">
      <h1>{{ titleText }}</h1>
    </div>
    <div class="col-12">
      <div class="my-3 p-3 bg-light rounded shadow">

        <!-- Sample Data -->
        <div class="row fs-5">
          <div class="col-12 col-md-2 col-xl-1">No. 1</div>
          <div class="col-12 col-md-10 col-xl-5">London</div>
          <div class="col-12 col-md-6 col-xl-3">Sunny</div>
          <div class="col-12 col-md-6 col-xl-3">+2849</div>
        </div>

      </div>
    </div>
  </div>
  <div class="text-end">
    <router-link to="/" class="btn btn-primary">{{ btnText }}</router-link>
  </div>`
}

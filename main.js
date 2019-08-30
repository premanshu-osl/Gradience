//API being used for testing purposes : https://ghibliapi.herokuapp.com/films
localStorage.clear();
if (window.localStorage.length === 0) {
  $('#myModal').modal('show');

  document.querySelector('#submit-json').addEventListener('click', function () {

    var jsonFile = document.querySelector('#json-entry').value;
    alert(jsonFile);
    var request = new XMLHttpRequest();

    request.open('GET', jsonFile, true);

    request.onload = function () {
      var data = this.response;

      if (request.status >= 200 && request.status < 400 && typeof (Storage) !== undefined) {
        localStorage.setItem("avlData", data);
        $('#myModal').modal('hide');
        $('#myModalTwo').modal('show');
      } else {
      }
      fieldpopulator();
      // let parsedJSON = JSON.parse(localStorage.getItem('avlData'));
      // let targetObj = Object.keys(parsedJSON[0]);
      // let targetObjLength = Object.keys(parsedJSON[0]).length;

      // if(targetObjLength !== null) {
      //   const fieldNames = document.getElementById('field-names');

        

      //   targetObj.forEach(element => {
      //     const fields = document.createElement('p');
      //   fields.setAttribute('class', 'field');
      //     fields.textContent = element;
      //     fieldNames.appendChild(fields);
      //   });
      // }
    }

    request.send();

  });
} else {
  alert("Local Storage not empty. May contain relevant JSON format files.");

  $('#myModalTwo').modal('show');
  fieldpopulator();
      // let parsedJSON = JSON.parse(localStorage.getItem('avlData'));
      // let targetObj = Object.keys(parsedJSON[0]);
      // let targetObjLength = Object.keys(parsedJSON[0]).length;

      // if(targetObjLength !== null) {
      //   const fieldNames = document.getElementById('field-names');

        

      //   targetObj.forEach(element => {
      //     const fields = document.createElement('p');
      //   fields.setAttribute('class', 'field');
      //     fields.textContent = element;
      //     fieldNames.appendChild(fields);
      //   });
      // }
}

function fieldpopulator() {
  let parsedJSON = JSON.parse(localStorage.getItem('avlData'));
      let targetObj = Object.keys(parsedJSON[0]);
      let targetObjLength = Object.keys(parsedJSON[0]).length;

      if(targetObjLength !== null) {
        const fieldNames = document.getElementById('field-names');

        

        targetObj.forEach(element => {
          const fields = document.createElement('p');
        fields.setAttribute('class', 'field');
          fields.textContent = element;
          fieldNames.appendChild(fields);
        });
      }
}



// let jsonFile = document.querySelector('#json-entry');

// document.querySelector('#submit-json').addEventListener('click', function () {

//   var jsonFile = document.querySelector('#json-entry').value;
//   alert(jsonFile);
//   var request = new XMLHttpRequest();

//   request.open('GET', jsonFile, true);

//   request.onload = function () {
//     var data = this.response;

//     if (request.status >= 200 && request.status < 400 && typeof (Storage) !== undefined) {
//       localStorage.setItem("avlData", data);
//     } else {
//     }
//   }

//   request.send();

// });
//API being used for testing purposes : https://ghibliapi.herokuapp.com/films

// Clears Local Storage On Reload
localStorage.clear();

if (window.localStorage.length === 0) {
  $('#myModal').modal({ backdrop: 'static', keyboard: false });
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
        $('#myModalTwo').modal({ backdrop: 'static', keyboard: false });
        $('#myModalTwo').modal('show');
      } else {
      }
      fieldpopulator();
    }

    request.send();

  });

} else {

  alert("Local Storage not empty. May contain relevant JSON format files.");

  $('#myModalTwo').modal('show');
  fieldpopulator();
}

// Populates the field on 2nd Screen

function fieldpopulator() {
  let parsedJSON = JSON.parse(localStorage.getItem('avlData'));
  let targetObj = Object.keys(parsedJSON[0]);
  let targetObjLength = Object.keys(parsedJSON[0]).length;

  if (targetObjLength !== null) {
    const fieldNames = document.getElementById('field-names');

    targetObj.forEach(element => {
      const fields = document.createElement('p');
      fields.setAttribute('class', 'field');
      fields.textContent = element;
      fieldNames.appendChild(fields);
    });
  }
}

document.querySelector('#submit-layout').addEventListener('click', function () {

  $('#myModalTwo').modal('hide');

  let parsedJSON = JSON.parse(localStorage.getItem('avlData'));

  let values = [];

  values.push(document.getElementById('val1').value);
  values.push(document.getElementById('val2').value);
  values.push(document.getElementById('val3').value);
  values.push(document.getElementById('val4').value);
  const app = document.getElementById('root');
  for (j = 0; j <= parsedJSON.length - 1; j++) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    app.appendChild(card);
    for (i = 0; i <= values.length - 1; i++) {
      let targetObj = Object.keys(parsedJSON[j]);

      targetObj.forEach(element => {
        if (values[i] === element) {
          console.log(element);

          let fapp = document.createElement('p')
          fapp.textContent = parsedJSON[j][element];

          card.appendChild(fapp);

        }
      });
    }
  }

  console.log(values);
});
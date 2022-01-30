// Ping REST API with team name

function ping_api_cs684() {
  const request = new XMLHttpRequest();
  const url = 'https://cs684api.7g2rji63c728k.us-east-1.cs.amazonlightsail.com/hw3?';
  //var teamName = document.getElementById("teamname").value;
  var teamname_inpt = document.getElementById("teamname").value;
  //teamname_inpt = teamname_inpt.replace(/\s+/g, '%20');
  request.open("GET", url +teamname_inpt);
  request.send();
  request.onload = (e) => {
    var teamhash = JSON.parse(request.responseText);
    string_display = teamhash.token;
    display_string();
  }
}

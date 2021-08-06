window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   let endpoint = "https://wp.zybooks.com/quotes.php";
   let queryString = "topic=" + topic + "&count=" + count;
   let url = endpoint + "?" + queryString;

   let xhr = new XMLHttpRequest();
   xhr.addEventListener("load", responseReceivedHandler);
   xhr.responseType = "json";
   xhr.open("GET", url);
   xhr.send();
}

function responseReceivedHandler() {
   console.log(this.response);
   let quotesDiv = document.getElementById("quotes");
   quotesDiv.innerHTML = "";
      if (typeof this.response.error === "string")  {
         console.log("unsuccessful")
         quotesDiv.appendChild(document.createTextNode(this.response.error));
      }
      else {
         let listNode = document.createElement("ol");
         quotesDiv.appendChild(listNode);
         for (i = 0; i <= (this.response.length - 1); i++) {
            console.log(i)
            let listItem = document.createElement("li");
            listNode.appendChild(listItem);
            let quoteNode = document.createTextNode(this.response[i].quote + " - " + this.response[i].source);

            listItem.appendChild(quoteNode);
      }
   }
}

// TODO: Add responseReceivedHandler() here
const form = document.querySelector('form');
const table = document.getElementById('api-data-table');

form.addEventListener("submit", async function(event){
    event.preventDefault();
    table.innerHTML = "";
    
    const url = form.elements["api-url"].value;
    const callDelay = form.elements["call-delay"].value;
    const numberOfCalls = form.elements["number-of-calls"].value;
    
    try {
      for(let i=0; i<numberOfCalls; i++){
        await new Promise(resolve => setTimeout(resolve, callDelay));
        const response = await fetch(url);
        const data = await response.json();
        const userData = data.results[0];
        
        console.log(userData);
        
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        cell1.innerHTML = JSON.stringify(userData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error fetching data. Please check the console for details.");
    }
});
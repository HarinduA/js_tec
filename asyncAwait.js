async function fetchData() {
    const data = await fetch('https://api.example.com/data');
    const json = await data.json();
    console.log(json);
}
fetchData();

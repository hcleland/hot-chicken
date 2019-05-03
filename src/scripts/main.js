console.log("I'm here");

/* <div>
    <section>
        <h3>Name:</h3>
        <h4>Spice Level:</h4>
        <p>purchased</p>
        <p>color:</p>
        <button>Edit</button>
        <button>Delete</button>

    </section>
</div> */

function populatePage(chickenArray) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = chickenArray.map(makeGrid).join("");
    // now attach to the DOM
    document.querySelector("#chicken-cards").append(newDiv);
}

// this function takes the data and plugs it in HTML 
const makeGrid = (item, index) => {
    let sold = `<p class="buy">Eat more Chicken</p>`;
    if(item.purchased){
        sold = `<p class="buy">All Sold Out</p>`
    }

    let block = `
        <section id="card--${index}" style="border: 2px solid ${item.color}">
            <h3>#${index} Name: ${item.name}</h3>
            <h4>Spice Level: ${item.spiceLevel}</h4>
            ${sold}
            <p>Color: ${item.color}</p>
            <button data-edit-id="${item.id}" onClick="handleEdit(this)">Edit</button>
            <button data-delete-id="${item.id}" onClick="handleDelete(this)">Delete</button>
    `
    return block;
}

getAllChickens()
    .then(
        (inventoryFromGetAllChickens) => {
            console.log("the chickens", inventoryFromGetAllChickens);
            populatePage(inventoryFromGetAllChickens);
        }
    )

function handleEdit(chicken){
    let whichChicken = chicken.getAttribute("data-edit-id");
    console.log("Let's Edit ", whichChicken);
    const showChickenObject = document.querySelector("#editForm")
    showChickenObject.innerHTML += `
    <p>Showing Which Chicken to Edit: ${whichChicken}</p>
    `
}

function handleDelete(chicken){
    let whichChicken = chicken.getAttribute("data-delete-id");
    console.log("Let's Delete ", whichChicken);
}





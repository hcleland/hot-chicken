const apiBaseURL = "http://localhost:3000";

// ***** Get All Chickens *****
const getAllChickens = () => {
    return fetch(`${apiBaseURL}/chicken`)
    .then(response => response.json())
    }

// ***** Get One Chicken *****
const getOneChicken = (chickenId) => {
    fetch(`${apiBaseURL}/chicken/${chickenId}`)
    .then(response => response.json())
    .then(parsedResult => {
        console.log("one chicken", parsedResult);
    })
}

// ***** Update One Chicken ******
const updateChicken = (chickenId, chickenObj) => {
    fetch(`${apiBaseURL}/chicken/${chickenId}`, 
        {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(chickenObj)
        }
    )
    .then(response => response.json())
    .then(parsedResult => {
        console.log("udpated chicken", parsedResult);
    })
}

// ***** Create a Chicken *****
const makeChicken = (chickenObj) => {
fetch(`${apiBaseURL}/chicken/`, 
    {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(chickenObj)
    }
)
.then(response => response.json())
.then(parsedResult => {
    console.log("make a chicken", parsedResult);
})
}

// ***** Delete the Chicken *****
const deleteChicken = (chickenId) => {
    fetch(`${apiBaseURL}/chicken/${chickenId}`, 
        {
            method: "DELETE"
        }
    )
    .then(response => response.json())
    .then(parsedResult => {
        console.log("Delete is done", parsedResult);
    })
}



const testChickenObj = {
    name: "Joe Thighsman",
    color: "red",
    gender: "male",
    'spiceLevel': "3"
}

const newChickenObj = {
    name: "Chuck Norris",
    color: "white",
    gender: "female",
    'spiceLevel': "3"
}


// deleteChicken(2);
// getAllChickens();
// getOneChicken(3);
// updateChicken(1, testChickenObj);
// makeChicken(newChickenObj);
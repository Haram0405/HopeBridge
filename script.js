const tableBody =
document.getElementById("donationTableBody");

let donations =
JSON.parse(localStorage.getItem("donations")) || [];

// DISPLAY FUNCTION
function showDonations(){

    tableBody.innerHTML = "";

    if(donations.length === 0){

        tableBody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center">
                    No Donations Yet
                </td>
            </tr>
        `;

    }else{

        donations.forEach((item,index)=>{

            tableBody.innerHTML += `

                <tr>

                    <td>${index + 1}</td>

                    <td>${item.name}</td>

                    <td>$${item.amount}</td>

                    <td>${item.cause}</td>

                    <td>

                        <button
                        class="btn btn-sm btn-dark me-2"
                        onclick="editDonation(${index})">

                        Edit

                        </button>

                        <button
                        class="btn btn-sm btn-danger"
                        onclick="deleteDonation(${index})">

                        Delete

                        </button>

                    </td>

                </tr>

            `;

        });

    }

}

// DELETE FUNCTION

function deleteDonation(index){

    if(confirm("Delete this donation?")){

        donations.splice(index,1);

        localStorage.setItem(
            "donations",
            JSON.stringify(donations)
        );

        showDonations();

    }

}


// EDIT FUNCTION

function editDonation(index){

    let newName =
    prompt("Enter new donor name:",
    donations[index].name);

    let newAmount =
    prompt("Enter new amount:",
    donations[index].amount);

    let newCause =
    prompt("Enter new cause:",
    donations[index].cause);

    if(newName && newAmount && newCause){

        donations[index].name = newName;
        donations[index].amount = newAmount;
        donations[index].cause = newCause;

        localStorage.setItem(
            "donations",
            JSON.stringify(donations)
        );

        showDonations();

    }

}

// INITIAL SHOW
showDonations();
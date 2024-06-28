let users : string [] = ["eric","haseeb","ali","fatima","saima"]
for (let user of users) {
if (user === "saima") {
    console.log("hello admin, would you loke to see a status report")
}else {
    console.log("hello ${user}, thank you for logging in again")
}
}
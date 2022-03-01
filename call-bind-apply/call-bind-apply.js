const manchesterUnited = {
    "name" : "Manchester United",
    "mananger" : "Ole",
    "captain" : "Harry Maguire",
    getName: function(){
        return this.name;
    },
    getCaptain : function(){
        return this.captain;
    }
 };

const getFootballClubCDetails = function(league,country) {
     console.log(`${this.getName()} is captained by ${this.getCaptain()} in ${league}, ${country}`);
};

//bind
const newFunction = getFootballClubCDetails.bind(manchesterUnited);
newFunction("EPL", "England");

//call
getFootballClubCDetails.call(manchesterUnited, "EPL", "England");

//apply
getFootballClubCDetails.apply(manchesterUnited, ["EPL", "Engalnd"]);



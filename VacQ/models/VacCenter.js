const sql = require("../config/vacCenterDB");

// constructor

const VacCenter = function(vacCenter) {
    this.id = vacCenter.id;
    this.name = vacCenter.name;
    this.tel = vacCenter.tel;
};

VacCenter.getAll = result => {
    sql.query("SELECT * FROM vacCenters;", (error, res) => {
        if (error) {
            console.log("error: ", error);
            result(error, null);
            return;
        }
        console.log("vacCenters: ", res);
        result(null, res);
    });
};

module.exports = VacCenter;
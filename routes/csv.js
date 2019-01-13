var csv = require('fast-csv');
var multer = require('multer');
var upload = multer({dest:'tmp/csv/'});

var rowsToRecords = function(rows, includesHeaderRow = true){
    if (includesHeaderRow) rows = rows.slice(1);
    var records = [];
    rows.forEach((row) => {
        records.push({
            customer: {
                name: row[0],
                email: row[1]
            },
            organisation: {
                name: row[2]
            }
        })
    });
    return records;
};

module.exports = function (app, addon) {

    app.get('/csv/new', addon.authenticate(), function (req, res) {
        res.render('upload-csv', {
            title: 'Bulk Upload'
            //issueId: req.query['issueId']
        });
    });

    app.post('/csv/upload', addon.authenticate(), upload.single('customerFile'), function (req, res) {

        /* TODO: Validate! Validate! Validate! */

        var rows = [];
        csv.fromPath(req.file.path)
            .on("data", function(data){
                rows.push(data);
            })
            .on("end", function() {
                records = rowsToRecords(rows);
                res.render('confirm', {
                    records: records,
                    csv: req.file.path /* Is this secure? */
                });
            });
    });
};
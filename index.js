var express = require("express");
var mysql = require("mysql");
var bodyparser = require("body-parser");
var path = require("path");
const { connect } = require("http2");
let port = process.env.PORT || 8080;
var pda = express();
pda.set("view engine", "ejs");
pda.use(express.static(path.join(__dirname, "/public")));
pda.use(bodyparser.urlencoded({ extended: true }));

var currentYear = new Intl.DateTimeFormat('en-IN', { year: 'numeric' }).format(new Date());
var config = {
  host: "localhost",
  user: "root",
  password: "rehaan",
  database: "student",
};
var con;
function retryOnDisconnect() {
  con = mysql.createConnection(config);
  con.connect(function (err) {
    if (err) {
      console.log("DB disconnect: ", err);
      setTimeout(retryOnDisconnect, 2000);
    }
  });
  con.on("error", function (err) {
    console.log("DB Error: ", err);
    if (err.code == "PROTOCOL_CONNECTION_LOST") {
      retryOnDisconnect();
    }
  });
}

retryOnDisconnect();

pda.get("/", function (err, results) {
  results.render("menu1");
});

pda.post("/check", function (req, res) {
  var sem = req.body.semester;
  var chk = req.body.vtunumber1;
  switch (sem) {
    case "1":
      con.query(
        "SELECT * FROM sem1 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var v = results[0].usn;
            var address = results[0].studentaddress;
            var admissionyear = results[0].admissionyear;
            var cgpa = results[0].cgpa;
            var sslc = results[0].sslc;
            var puc = results[0].puc;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              vtunumber: v,
              address: address,
              admissionyear: admissionyear,
              cgpa: cgpa,
              sslc: sslc,
              puc: puc,
              phonenumber: p,
            });
          }
        }
      );
      break;
    case "2":
      con.query(
        "SELECT * FROM sem2 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var v = results[0].usn;
            var address = results[0].studentaddress;
            var admissionyear = results[0].admissionyear;
            var cgpa = results[0].cgpa;
            var sslc = results[0].sslc;
            var puc = results[0].puc;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              vtunumber: v,
              address: address,
              admissionyear: admissionyear,
              cgpa: cgpa,
              sslc: sslc,
              puc: puc,
              phonenumber: p,
            });
          }
        }
      );
      break;
    case "3":
      con.query(
        "SELECT * FROM sem3 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var v = results[0].usn;
            var address = results[0].studentaddress;
            var admissionyear = results[0].admissionyear;
            var cgpa = results[0].cgpa;
            var sslc = results[0].sslc;
            var puc = results[0].puc;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              vtunumber: v,
              address: address,
              admissionyear: admissionyear,
              cgpa: cgpa,
              sslc: sslc,
              puc: puc,
              phonenumber: p,
            });
          }
        }
      );
      break;
    case "4":
      con.query(
        "SELECT * FROM sem4 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var v = results[0].usn;
            var address = results[0].studentaddress;
            var admissionyear = results[0].admissionyear;
            var cgpa = results[0].cgpa;
            var sslc = results[0].sslc;
            var puc = results[0].puc;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              vtunumber: v,
              address: address,
              admissionyear: admissionyear,
              cgpa: cgpa,
              sslc: sslc,
              puc: puc,
              phonenumber: p,
            });
          }
        }
      );
      break;
    case "5":
      con.query(
        "SELECT * FROM sem5 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var v = results[0].usn;
            var address = results[0].studentaddress;
            var admissionyear = results[0].admissionyear;
            var cgpa = results[0].cgpa;
            var sslc = results[0].sslc;
            var puc = results[0].puc;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              vtunumber: v,
              address: address,
              admissionyear: admissionyear,
              cgpa: cgpa,
              sslc: sslc,
              puc: puc,
              phonenumber: p,
            });
          }
        }
      );
      break;
    case "6":
      con.query(
        "SELECT * FROM sem6 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var v = results[0].usn;
            var address = results[0].studentaddress;
            var admissionyear = results[0].admissionyear;
            var cgpa = results[0].cgpa;
            var sslc = results[0].sslc;
            var puc = results[0].puc;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              vtunumber: v,
              address: address,
              admissionyear: admissionyear,
              cgpa: cgpa,
              sslc: sslc,
              puc: puc,
              phonenumber: p,
            });
          }
        }
      );
      break;
    case "7":
      con.query(
        "SELECT * FROM sem7 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var v = results[0].usn;
            var address = results[0].studentaddress;
            var admissionyear = results[0].admissionyear;
            var cgpa = results[0].cgpa;
            var sslc = results[0].sslc;
            var puc = results[0].puc;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              vtunumber: v,
              address: address,
              admissionyear: admissionyear,
              cgpa: cgpa,
              sslc: sslc,
              puc: puc,
              phonenumber: p,
            });
          }
        }
      );
      break;
    case "8":
      con.query(
        "SELECT * FROM sem8 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var v = results[0].usn;
            var address = results[0].studentaddress;
            var admissionyear = results[0].admissionyear;
            var cgpa = results[0].cgpa;
            var sslc = results[0].sslc;
            var puc = results[0].puc;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              vtunumber: v,
              address: address,
              admissionyear: admissionyear,
              cgpa: cgpa,
              sslc: sslc,
              puc: puc,
              phonenumber: p,
            });
          }
        }
      );
      break;
  }
});

// const databaseInsertor = function (sem) {
//   pda.get(`/${sem}`, function (req, res) {
//     res.render("student_registration");
//     pda.post(`/${sem}`, function (req, res) {
//       var student = {
//         fname: req.body.fname,
//         mname: req.body.mname,
//         lname: req.body.lname,
//         usn: req.body.vtunumber,
//         mobile: req.body.phonenumber,
//       };

//       con.query(`INSERT INTO ${sem} SET ?`, student, function (err, results) {
//         if (err) throw err;
//         res.redirect("/");
//       });
//     });
//   });
// };
//********************************* SEM 1 **************************************************************
pda.get("/sem1", function (req, res) {
  res.render("student_registration");
  pda.post("/sem1", function (req, res) {
    var student = {
      fname: req.body.fname,
      usn: req.body.vtunumber,
      studentaddress: req.body.address,
      admissionyear: req.body.year,
      cgpa: req.body.cgpa,
      sslc: req.body.sslc,
      puc: req.body.puc,
      mobile: req.body.phonenumber,
    };

    if (req.body.cgpa > 10 || req.body.cgpa < 0 || +req.body.year < 1975 || +req.body.year > currentYear) {
      console.log('Oh You Are Mad I think : XD');
      res.send('ERR_WRONG_DETAILS_PROVIDED');
    }
    else {

      con.query("INSERT INTO sem1 SET ?", student, function (err, results) {
        if (err) throw err;
        res.redirect("/");
      });
    }
  });
});

//********************************* SEM 2 **************************************************************
pda.get("/sem2", function (req, res) {
  res.render("student_registration");

  pda.post("/sem2", function (req, res) {
    var student = {
      fname: req.body.fname,
      usn: req.body.vtunumber,
      studentaddress: req.body.address,
      admissionyear: req.body.year,
      cgpa: req.body.cgpa,
      sslc: req.body.sslc,
      puc: req.body.puc,
      mobile: req.body.phonenumber,
    };

    if (req.body.cgpa > 10 || req.body.cgpa < 0 || +req.body.year < 1975 || +req.body.year > currentYear) {
      console.log('Oh You Are Mad I think : XD');
      res.send('ERR_WRONG_DETAILS_PROVIDED');
    }
    else {

      con.query("INSERT INTO sem2 SET ?", student, function (err, results) {
        if (err) throw err;
        res.redirect("/");
      });
    }
  });
});

//********************************* SEM 3 **************************************************************

pda.get("/sem3", function (req, res) {
  res.render("student_registration");

  pda.post("/sem3", function (req, res) {
    var student = {
      fname: req.body.fname,
      usn: req.body.vtunumber,
      studentaddress: req.body.address,
      admissionyear: req.body.year,
      cgpa: req.body.cgpa,
      sslc: req.body.sslc,
      puc: req.body.puc,
      mobile: req.body.phonenumber,
    };

    if (req.body.cgpa > 10 || req.body.cgpa < 0 || +req.body.year < 1975 || +req.body.year > currentYear) {
      console.log('Oh You Are Mad I think : XD');
      res.send('ERR_WRONG_DETAILS_PROVIDED');
    }
    else {

      con.query("INSERT INTO sem3 SET ?", student, function (err, results) {
        if (err) throw err;
        res.redirect("/");
      });
    }
  });
});

//*********************************SEM 4**************************************************************

pda.get("/sem4", function (req, res) {
  res.render("student_registration");

  pda.post("/sem4", function (req, res) {
    var student = {
      fname: req.body.fname,
      usn: req.body.vtunumber,
      studentaddress: req.body.address,
      admissionyear: req.body.year,
      cgpa: req.body.cgpa,
      sslc: req.body.sslc,
      puc: req.body.puc,
      mobile: req.body.phonenumber,
    };

    if (req.body.cgpa > 10 || req.body.cgpa < 0 || +req.body.year < 1975 || +req.body.year > currentYear) {
      console.log('Oh You Are Mad I think : XD');
      res.send('ERR_WRONG_DETAILS_PROVIDED');
    }
    else {

      con.query("INSERT INTO sem4 SET ?", student, function (err, results) {
        if (err) throw err;
        res.redirect("/");
      });
    }
  });
});

//*********************************SEM 5**************************************************************

pda.get("/sem5", function (req, res) {
  res.render("student_registration");

  pda.post("/sem5", function (req, res) {
    var student = {
      fname: req.body.fname,
      usn: req.body.vtunumber,
      studentaddress: req.body.address,
      admissionyear: req.body.year,
      cgpa: req.body.cgpa,
      sslc: req.body.sslc,
      puc: req.body.puc,
      mobile: req.body.phonenumber,
    };

    if (req.body.cgpa > 10 || req.body.cgpa < 0 || +req.body.year < 1975 || +req.body.year > currentYear) {
      console.log('Oh You Are Mad I think : XD');
      res.send('ERR_WRONG_DETAILS_PROVIDED');
    }
    else {

      con.query("INSERT INTO sem5 SET ?", student, function (err, results) {
        if (err) throw err;
        res.redirect("/");
      });
    }
  });
});

//*********************************SEM 6**************************************************************

pda.get("/sem6", function (req, res) {
  res.render("student_registration");

  pda.post("/sem6", function (req, res) {
    var student = {
      fname: req.body.fname,
      usn: req.body.vtunumber,
      studentaddress: req.body.address,
      admissionyear: req.body.year,
      cgpa: req.body.cgpa,
      sslc: req.body.sslc,
      puc: req.body.puc,
      mobile: req.body.phonenumber,
    };

    if (req.body.cgpa > 10 || req.body.cgpa < 0 || +req.body.year < 1975 || +req.body.year > currentYear) {
      console.log('Oh You Are Mad I think : XD');
      res.send('ERR_WRONG_DETAILS_PROVIDED');
    }
    else {

      con.query("INSERT INTO sem6 SET ?", student, function (err, results) {
        if (err) throw err;
        res.redirect("/");
      });
    }
  });
});

//*********************************SEM 7**************************************************************

pda.get("/sem7", function (req, res) {
  res.render("student_registration");

  pda.post("/sem7", function (req, res) {
    var student = {
      fname: req.body.fname,
      usn: req.body.vtunumber,
      studentaddress: req.body.address,
      admissionyear: req.body.year,
      cgpa: req.body.cgpa,
      sslc: req.body.sslc,
      puc: req.body.puc,
      mobile: req.body.phonenumber,
    };

    if (req.body.cgpa > 10 || req.body.cgpa < 0 || +req.body.year < 1975 || +req.body.year > currentYear) {
      console.log('Oh You Are Mad I think : XD');
      res.send('ERR_WRONG_DETAILS_PROVIDED');
    }
    else {

      con.query("INSERT INTO sem7 SET ?", student, function (err, results) {
        if (err) throw err;
        res.redirect("/");
      });
    }
  });
});

//*********************************SEM 8**************************************************************

pda.get("/sem8", function (req, res) {
  res.render("student_registration");

  pda.post("/sem8", function (req, res) {
    var student = {
      fname: req.body.fname,
      usn: req.body.vtunumber,
      studentaddress: req.body.address,
      admissionyear: req.body.year,
      cgpa: req.body.cgpa,
      sslc: req.body.sslc,
      puc: req.body.puc,
      mobile: req.body.phonenumber,
    };
    console.log(req.body.year);
    console.log(typeof req.body.year);
    console.log(typeof +req.body.year);


    if (req.body.cgpa > 10 || req.body.cgpa < 0 || +req.body.year < 1975 || +req.body.year > currentYear) {
      console.log('Oh You Are Mad I think : XD');
      res.send('ERR_WRONG_DETAILS_PROVIDED');
    }
    else {

      con.query("INSERT INTO sem8 SET ?", student, function (err, results) {
        if (err) throw err;
        res.redirect("/");
      });
    }
  });
});

//
pda.post("/test", (req, resp) => {
  if (req.body.semester == undefined) {
    resp.redirect("/");
  } else {
    resp.redirect(`/${req.body.semester}`);
  }
});

pda.listen(port, function () {
  console.log("Server Online ...");
});




console.log();
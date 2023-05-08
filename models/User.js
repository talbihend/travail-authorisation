const  mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema ({
    fullName : String,
    email : String,
    password : String,
});

// nzid schema o5ra nsamih clothes mathalan w n7ot ih dbach w lmouwasafat mte3om; bch schema heki tasna3li collection o5ra fi wast DB  auth

module.exports = mongoose.model("User", userSchema);
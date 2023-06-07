const express = require('express')
const app = express()
app.use(express.json());
app.all('/', (req, res) => {
    const requestBody = req.body;
    const authKey =requestBody.authKey;
    const keyList=["ABCD-1234-EFGH-5678",
            "JKLM-5678-NOPQ-9012",
            "UVWX-9012-YZAB-3456",
            "CDEF-3456-GHIJ-7890",
            "PQRS-7890-TUVW-1234",
            "XYZA-1234-BCDE-5678",
            "HIJK-5678-LMNO-9012",
            "BCDE-9012-FGHI-3456",
            "MNOP-3456-QRST-7890",
            "WXYZ-7890-1234-5678"];
    if(authKey){
        if(keyList.includes(authKey.trim()){
           res.send(true)
        }
        else{
            res.send(false);
        }
    }
    else{
        res.send(false);
    }
})
app.listen(process.env.PORT || 3000)

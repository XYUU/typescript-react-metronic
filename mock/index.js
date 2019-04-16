const proxy = {
    'POST /forgetPassword': (req, res) => {
        res.json({ "message":"短信发送成功", "status": 0 });
    },
    'POST /signup': (req, res) => {
        res.json({ "message":"短信发送成功", "status": 0 });
    },
    'POST /signin': (req, res) => {
        res.json({ "message":"短信发送成功", "status": 0 })
    }
}
module.exports = proxy;
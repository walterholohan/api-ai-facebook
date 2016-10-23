import { actionGetStarted, actionExplainBill } from './actions/bill'

var message = {
    "attachment": {
        "type": "image",
        "payload": {
            "url": "http://cdn.c.photoshelter.com/img-get/I0000AnnFYWsU3Uo/s/750/750/Reenard-GAA-014.jpg"
        }
    }
};

export function postAction(req, res, next) {
    switch (req.body.result.action) {
        case 'explainbill':
            return actionExplainBill(req, res);
            break;
        case 'getstarted':
            return actionGetStarted(req, res);
            break;
        case 'testhook':
            return res.json({
                speech: 'Hook is working!',
                displayText: 'Hook is working!',
                data: { "facebook": message}
            });
            break;
    }
}

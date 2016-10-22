export function actionGetStarted(req, res) {
    let context = req.body.result.contexts.filter(c => {
        return c.name === 'getstarted';
    });

    if (context.length == 0) {
        return res.json({
            speech: 'Sorry, some system error occurred. Please try again!',
            displayText: 'Sorry, some system error occurred. Please try again!',
            // data: [],
            contextOut: [],
            source: ''
        });
    }

    let quickreplys = {
        "text": "Welcome Mary,\r\nI’m Chip, the Electric Ireland messenger service.\r\nI notice your bill is €30 higher than last month, I can explain this if you like?",
        "quick_replies": [{
            "content_type": "text",
            "title": "Explain Bill",
            "payload": "EXPLAIN_BILL"
        }, {
            "content_type": "text",
            "title": "Pay Bill",
            "payload": "PAY_BILL"
        }, {
            "content_type": "text",
            "title": "Set Savings Goal",
            "payload": "SAVINGS"
        }]
    };

    return res.json({
        speech: 'Get Started',
        displayText: 'Get Started',
        data: [{ "facebook": quickreplys }]
    });
}

export function actionExplainBill(req, res) {
    let context = req.body.result.contexts.filter(c => {
        return c.name === 'explainbill';
    });

    if (context.length == 0) {
        return res.json({
            speech: 'Sorry, some system error occurred. Please try again!',
            displayText: 'Sorry, some system error occurred. Please try again!',
            // data: [],
            contextOut: [],
            source: ''
        });
    }

    let bill = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "receipt",
                "recipient_name": "Latest Bill",
                "order_number": "12345678902",
                "currency": "EUR",
                "payment_method": "-",
                "elements": [{
                    "title": "Heating",
                    "price": 50,
                    "currency": "EUR",
                    "image_url": "http://petersapparel.parseapp.com/img/whiteshirt.png"
                }, {
                    "title": "Hot Water",
                    "price": 25,
                    "currency": "EUR",
                    "image_url": "http://petersapparel.parseapp.com/img/grayshirt.png"
                }, {
                    "title": "Lighting",
                    "price": 22,
                    "currency": "EUR",
                    "image_url": "http://petersapparel.parseapp.com/img/grayshirt.png"
                }, {
                    "title": "Appliances",
                    "price": 32,
                    "currency": "EUR",
                    "image_url": "http://petersapparel.parseapp.com/img/grayshirt.png"
                }],
                "summary": {
                    "total_cost": 56.14
                }
            }
        }
    };

    let quickreplys = {
        "text": "You spent €30 more on heating, as the heating was on for an extra 20(X) last month. This increase is the same as other households of your size so don’t worry! :)",
        "quick_replies": [{
            "content_type": "text",
            "title": "Pay Bill",
            "payload": "PAY_BILL"
        }, {
            "content_type": "text",
            "title": "Set Savings Goal",
            "payload": "SAVINGS"
        }]
    };

    return res.json({
        speech: 'Explain Bill',
        displayText: 'Explain Bill',
        data: {
            "facebook": [bill,quickreplys]
        }
    });
}

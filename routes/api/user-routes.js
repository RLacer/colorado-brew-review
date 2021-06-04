const router = require('express').Router();
const { User } = require('../../models');

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.email = dbUserData.email;
                req.session.username = dbUserData.username;
                req.session. logged_in = true;

                res.json(dbUserData);
            })
            
        })

        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })

});

router.post('/login', (req, res) => {
    User.findOne({
        where: { email: req.body.email }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(400).json({ message: "no user found with that user name" });
                return;
            }

            const validPassword = dbUserData.checkPassword(req.body.password);

            if (!validPassword) {
                res.status(400).json({ message: "incorrect email or password" });
                return;
            }
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.email = dbUserData.email;
                req.session. logged_in = true;

                res.json({
                    user: dbUserData,
                    message: "You are logged in"
                });
            })

        })
})
module.exports = router;
class UserService {
    constructor(model) {
        this.model = model;
    }

    create(req, res) {
        let {name, email, pwd} = req.body;
        console.log(req.body);
        return this.model.create(
            {
                name,
                email,
                pwd
            }
        )
        .then (
            Res => {
                return res.send(Res);
            }
        )
    }

    get(req, res) {
        let {id} = req.params;
        return this.model.get(
            id
        )
        .then (
            Res => {
                return res.send(Res);
            }
        )
    }

    update(req, res) {
        let updated = {};
        let {id} = req.params;
        let {name, email, pwd} = req.body;
        if (name) {
            updated["name"] = name;
        }
        if (email) {
            updated["email"] = email;
        }
        if (pwd) {
            updated["pwd"] = pwd;
        }
        return this.model.update(
            id,
            updated
        )
        .then(
            Res => {
                return res.send(Res);
            }
        )
    }
    
    delete(req, res) {
        let {id} = req.params;
        return this.model.delete(
            id
        )
        .then (
            Res => {
                return res.send(Res);
            }
        )
    }
}

module.exports = {
    UserService
}
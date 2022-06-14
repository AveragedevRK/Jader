const { ObjectId } = require("mongodb");

class UserModel {
    constructor(model) {
        this.model = model;
    }

    create(
        {
            name,
            email,
            pwd
        }
    ) {
        return this.model.insertOne(
            {
                name,
                email,
                pwd
            }
        )
            .then(
                Res => {
                    let { acknowledged, ...res } = Res;
                    return res;
                }
            )
    }

    get(id) {
        return this.model.findOne(
            {
                _id: new ObjectId(id)
            }
        )
            .then(
                Res => {
                    return Res;
                }
            )
    }

    update(
        id,
        updated
    ) {
        return this.model.updateOne(
            {
                _id: new ObjectId(id),
            },
            {
                $set: updated
            }
        )
        .then(
            Res => {
                return Res;
            }
        )
    }

    delete(id) {
        return this.model.deleteOne(
            {
                _id: new ObjectId(id)
            }
        )
        .then(
            Res => {
                return Res;
            }
        )
    }
}

module.exports = {
    UserModel
}
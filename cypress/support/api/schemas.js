import spok from 'cy-spok'

class Schemas {

    signUpSchema(){
        return spok({
            user:{
                id: spok.number,
                email: spok.string,
                createdAt: spok.string, 
                updatedAt: spok.string,
                username: spok.string,
                bio: spok.notDefined,
                image: spok.notDefined,
                token: spok.string
            }
        })
    }
}

export default new Schemas()
import Realm from 'realm';

class UserSchema extends Realm.Object {}
UserSchema.schema = {
  name: 'User',
  properties: {
    username: 'string',
    password: 'string',
  },
};

export default new Realm({ schema: [UserSchema] });

import mongoose from 'mongoose';

const USER_DB = 'daikon_code';
const PASSWORD_DB = 'wjVBrHyPldjdEZgb';

const URL_API = `mongodb+srv://${USER_DB}:${PASSWORD_DB}@cluster0.ahwnm.mongodb.net/cryptomania?retryWrites=true&w=majority`;

mongoose.connect(URL_API, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})  .then(db => console.log('connect'))
.catch(err => console.error(err))

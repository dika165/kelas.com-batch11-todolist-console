/*
    1. Buat table dengan nama tasks dan buat field / column sebagai berikut: 
        - task_id => int auto increment
        - user_id => int
        - title => varchar
        - is_done => tinyint / enum (0/1)
        - created_at => datetime
        - updated_at => datetime
    
    2. buat process CRUD untuk table tersebut
    3. Pada function create task setelah berhasil menambahkan tampilkan data yang ditambahkan
    4. pada function update setelah berhasil memperbarui data tampilkan data yang di perbarui
*/

import { stdout } from 'process';
import * as UserService from './services/user.js';
import {rl, questionAsync} from './utils/ui.js';

greeting();
rl.on('line', (input) => {
    switch (input) {
        case "1": 
            uiCreateUser();
        break;
        case "2":
            UserService.getUsers();
            break;
        default:
            console.log("perintah yang dimasukkan tidak sesuai");
            break;
    }
});

function greeting() {
    console.log(`
        Pilih perintah berikut: 
        1. add user
        2. list user
        3. update user
        4. delete user
    `);
}
const uiCreateUser = async () => {
    try {
        const name = await questionAsync('Masukkan nama user: ');
        const email = await questionAsync('Masukkan email user: ');
        const password = await questionAsync('Masukkan password: ');
        await UserService.createUser(name, email,password);
        greeting();
    } catch (error) {
        console.error('Terjadi kesalahan: ', error);
    }
}
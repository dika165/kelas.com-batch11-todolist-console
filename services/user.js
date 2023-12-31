import { getData, createData, updateData, deleteData } from "../repositories/users.js";


export const getUsers = async () => {
    let [users] = await getData();
    
    if (users.length >0) {
        console.log(users);
    } else {
        console.log("Tidak ada data users");
    }
}

export const createUser = async (name, email, password) => {
    let [result] = await createData(name, email,password);

    if(result.insertId > 0) {
        console.log(`Data user berhasil ditambahkan dengan id: ${result.insertId}`);
    } else {
        console.log("gagal menambahkan data user")
    }
}

export const updateUser = async (id, name, email) => {
    let [result] = await updateData(id, name, email);

    if(result.affectedRows != 0) {
        console.log("update data user berhasil")
    } else {
        console.log("gagal update data/user tidak ditemukan")
    }
}

export const deleteUser = async (id) => {
    let [result] = await deleteData(id);
    
    if(result.affectedRows > 0) {
        console.log("menghapus data berhasil")
    } else {
        console.log("gagal menghapus data")
    }
}
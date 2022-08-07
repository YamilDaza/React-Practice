//Clase para exportar y usar en el componente A

export class ContactClass {
    names = '';
    lastName = '';
    email = '';
    online = false;
    constructor(names,lastName,email,online){
        this.names = names;
        this.lastName = lastName;
        this.email = email;
        this.online = online;
    }
} 
export class ResponseUsuario {
    datos?: Usuario;
    resultado?: Resultado;
}

export class Usuario {
    idUsuario?: number;
    usuario?: string;
    nombre?: string;
    apellidos?: string;
    password?: string;
    rol?: Rol;
}

export class Rol {
    idRol?: number;
    nombre?: string;
}

export class Resultado {
    codigo?: string;
    descripcion?: string;
}
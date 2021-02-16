export class ResponseColor {
    datos: Colores[];
    resultado: Resultado;

    constructor(){} 
}

export class Colores {
    id: number;
    name: string;
    color: string;
    pantone: string;
    year: number;
    fechaModificacion: string;
    fechaCreacion: string;

    constructor(){} 
}

export class Resultado {
    codigo: string;
    descripcion: string;

    constructor(){} 
}
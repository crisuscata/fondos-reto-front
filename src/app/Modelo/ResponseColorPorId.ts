export class ResponseColorPorId {
    datos: Color;
    resultado: Resultado;

    constructor(){} 
}

export class Color {
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
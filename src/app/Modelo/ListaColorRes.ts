export class ResponseListColor {
    datos: Paginas;
    resultado: Resultado;
}

export class Paginas {
    pagina1: Colores[];
    pagina2: Colores[];
    pagina3: Colores[]
}

export class Colores {
    id: number;
    name: string;
    color: string;
    pantone: string;
    year: number;
    fechaModificacion: string;
    fechaCreacion: string;
}

export class Resultado {
    codigo: string;
    descripcion: string;
}
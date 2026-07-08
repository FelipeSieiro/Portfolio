export interface Training {
    curso: string;
    faculdade: string;
    data: string;
    color: string;
    tipo: 'faculdade' | 'curso';
    certificado?: string;
}


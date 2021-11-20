import { CidadeInterface } from 'data/@types/EnderecoInterface';
import { LocationService } from 'data/services/LocationService';
import { useState, useEffect } from 'react';

export default function useCities(estado: string): CidadeInterface[] {
    const [listaCidades, setListaCidades] = useState<CidadeInterface[]>([]);

    useEffect(() => {
        if (estado) {
            setListaCidades([]);
            LocationService.cidades(estado).then((listaCidade) => {
                listaCidade && setListaCidades(listaCidade);
            });
        }
    }, [estado]);

    return listaCidades;
}

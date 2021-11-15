import {useState, useMemo} from 'react';
import { UserShortInformationInterface } from 'data/@types/UserInterface';
import { ValidationService } from 'data/services/ValidationService';
import { ApiService } from 'data/services/ApiService';

export default function userVerificarProfissionais(){
    const [cep, setCep] = useState('');
   
    const cepValido = useMemo(()=>{
        return ValidationService.cep(cep);
    }, [cep]);
   
    const [erro, setErro] = useState('');
    const [buscaFeita, setBuscaFeita] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [diaristas, setDiaristas] = useState([] as UserShortInformationInterface[]);
    const [diaristasRestantes, setDiaristasRestantes] = useState(0);

    async function buscarProfissionais(cep: string){
        setBuscaFeita(false);
        setCarregando(true);
        setErro('');

        try{
            const {data} = await ApiService.get<{
                diaristas: UserShortInformationInterface[];
                quantidade_diaristas: number;    
            }>(`/api/diaristas/localidades?cep=${cep.replace(/\D/g, '')}`);

            setBuscaFeita(true);
            setDiaristas(data.diaristas);
            setDiaristasRestantes(data.quantidade_diaristas);
            setCarregando(false);
        }catch(error){
            setErro('CEP não encontrado');
            setCarregando(false);
        }
    }

    return {
        cep,
        setCep,
        cepValido,
        buscarProfissionais,
        erro,
        diaristas,
        buscaFeita,
        carregando,
        diaristasRestantes,
    }
}
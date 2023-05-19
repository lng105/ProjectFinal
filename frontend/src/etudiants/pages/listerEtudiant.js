import React, { useState, useEffect } from "react";
import { useHttpClient } from '../../Shared/hooks/http-hook';
import EtudiantList from "../components/EtudiantList";

const Etudiants =() => {
    const {error, sendRequest, clearError } = useHttpClient();
    
    const [etudiants, setEtudiants] = useState([]);

    useEffect(() => {
        const recupererEtudiants = async () => {
            try {
                const responseData = await sendRequest("http://localhost:5000/api/etudiants");

                setEtudiants(responseData.etudiants);
            }catch(err){

            }
        }
        recupererEtudiants();
    }, [sendRequest]);

    return (
        <React.Fragment>
            {etudiants && <EtudiantList items={etudiants}/>}
        </React.Fragment>
    )
}
export default Etudiants;
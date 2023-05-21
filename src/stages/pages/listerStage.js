import React, { useState, useEffect } from "react";
import { useHttpClient } from '../../Shared/hooks/http-hook';
import StageList from "../components/StageList";

const Stages =() => {
    const {error, sendRequest, clearError } = useHttpClient();
    const [stages, setStages] = useState([]);

    useEffect(() => {
        const recupererStages = async () => {
            try {
                const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL+ "/stages");

                setStages(responseData.stages);
            }catch(err){

            }
        }
        recupererStages();
    }, [sendRequest]);

    return (
        <React.Fragment>
            {stages && <StageList items={stages}/>}
        </React.Fragment>
    )
}
export default Stages;
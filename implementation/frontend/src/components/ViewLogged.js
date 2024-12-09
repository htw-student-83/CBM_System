import {useEffect, useState} from "react";
import axios from "axios";

function User() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:4000/api/user/userdetail/`)
            .then((response) => {
                if (response) {
                    setUser(response.data);
                    setLoading(false);
                } else {
                    return response.statusText;
                }
            })
            .catch((error) => {
                console.log("Data couldn't loaded: " + error.message);
                setLoading(false);
            });
    }, [])
    return (
        <div>
            <span className="font-bold">Angemeldet:</span> <span>{user.vorname +" "+ user.nachname }</span>
        </div>
    )
}

export default User;
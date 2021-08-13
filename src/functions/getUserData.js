export const getUserData = async (setLoading, setUser, token) =>{
    setLoading(true);

    const request = await fetch('https://desafio-m03.herokuapp.com/perfil/', {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    setLoading(false);
    
    const response = await request.json();
    return setUser(response);
}
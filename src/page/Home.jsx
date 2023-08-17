import React, { useEffect, useState } from 'react'

const Home = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Kathmandu")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=44d823a436504efe6bba0990da16ade1`
            const response = await fetch(url)
            const resJson = await response.json()
            console.log(resJson)
            setCity(resJson.main)
        };
        fetchApi();
    }, [search])
    return (
        <>
            <div className="modal modal-sheet position-static d-block p-4 py-md-5 mt-5" tabindex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h1 className="fw-bold mb-0 fs-2 m-auto">Weather App</h1>
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form className="">
                                <div className="form-floating mb-3">
                                    <input type="search" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
                                        setSearch(event.target.value)
                                    }} />
                                    <label for="floatingInput">Enter City Name</label>
                                </div>
                                {!city ? (
                                    <p>No Data Found</p>
                                ) : (
                                    <div>
                                        <h2>{search}</h2>
                                        <small className="text-body-secondary">{city.temp} <span>&#176; C</span></small>
                                    </div>
                                )

                                }

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
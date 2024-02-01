/* eslint-disable react/prop-types */
import './countries.css'

function Countries({countries}) {
    return (
        <div className="country">
    {countries.map((country) => (<div className="card text-bg-primary mb3" key={country.cca3}><h2>{country.name.common}</h2></div>))}
        </div>
    )
    
}

export default Countries
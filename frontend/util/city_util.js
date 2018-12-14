export const fetchCities = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/cities'
    })
};

export const fetchCity = city => {
    return $.ajax({
        method: 'GET',
        url: `api/cities/${city.id}`,
    })
};
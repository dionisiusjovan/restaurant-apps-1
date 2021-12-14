class DataSource {
    static getData() {
        return fetch(`./DATA.json`)
        .then(resp => resp.json())
        .then(respJSON => {
            if (respJSON.restaurants) {
                return Promise.resolve(respJSON.restaurants);
            } else {
                return Promise.reject(`Data is not found`)
            }
        })
    }
}

export default DataSource;
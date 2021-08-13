import axios, { AxiosResponse } from "axios"

const getCountries = () => {
    
    let countriesOptions: ICountries[] = [];
    axios.get('https://restcountries.eu/rest/v2/all').then((response: AxiosResponse) => {
                    response.data.forEach((item: any, index: number) => {
            countriesOptions.push({id: index,name: item.name,flag:item.flag})
                    })
    })
    return countriesOptions;
}


interface ICountries {
    id: number,
    name: string,
    flag: string,
}

export const countries: ICountries[] = getCountries();
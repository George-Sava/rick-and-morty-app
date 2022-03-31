import { 
    OptionList, 
    ActiveOptions, 
    UrlParameter 
} from "./models";

export const BASE_URL = 'https://rickandmortyapi.com/api';

export const generateUrl = (query: string, optionList: OptionList) =>
{
    const {alive, dead, unknown: statusU} = optionList.status;
    const {female, male, genderless, unknown: genderU } = optionList.gender;
    const {name, type, species} = optionList;
    
    let activeOptions: ActiveOptions = {
        firstParameter: {
            name: '',
            value: ''
        },
        secondParameter: {
            name: '',
            value: ''
        }
    };

    let firstParameterObj: UrlParameter = {
        name: '',
        value: ''
    };

    let secondParameterObj: UrlParameter = {
        name: '',
        value: ''
    };

    if(name || type || species)
    {
        if(name) firstParameterObj = {name: 'name', value: query};
        if(type) firstParameterObj = {name: 'type', value: query};
        if(species) firstParameterObj = {name: 'species', value: query};
    }

    if(female || male || genderless || genderU)
    {
        if(female) secondParameterObj = {name: 'gender', value: 'female'};
        if(male) secondParameterObj = {name: 'gender', value: 'male'};
        if(genderless) secondParameterObj = {name: 'gender', value: 'genderless'};
        if(genderU) secondParameterObj = {name: 'gender', value: 'unknown'};
    }

    if(alive || dead || statusU)
    {
        if(alive) secondParameterObj = {name: 'status', value: 'alive'};
        if(dead) secondParameterObj = {name: 'status', value: 'dead'};
        if(statusU) secondParameterObj = {name: 'status', value: 'unknown'};
    }

    activeOptions.firstParameter.name = firstParameterObj.name;
    activeOptions.firstParameter.value = firstParameterObj.value;

    activeOptions.secondParameter.name = secondParameterObj.name;
    activeOptions.secondParameter.value = secondParameterObj.value;

    if(activeOptions.firstParameter.name === '')
    {
        return(`${BASE_URL}/character/?${activeOptions.secondParameter.name}=${activeOptions.secondParameter.value}`);
    }
    else if (activeOptions.secondParameter.name === '')
    {
        return(`${BASE_URL}/character/?${activeOptions.firstParameter.name}=${activeOptions.firstParameter.value}`)
    }
    else if(activeOptions.secondParameter.name !== '' && activeOptions.firstParameter.name !== '')
    {
        return(`${BASE_URL}/character/?${activeOptions.firstParameter.name}=${activeOptions.firstParameter.value}&${activeOptions.secondParameter.name}=${activeOptions.secondParameter.value}`)
    }
    
    return `${BASE_URL}/character`;
    
}
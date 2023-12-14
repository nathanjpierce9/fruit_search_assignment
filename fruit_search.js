const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
    const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    const lowercaseStr = str.toLowerCase();
        for (let fruits of fruit) {
            if (fruits.includes(capitalizedStr) === true || fruits.includes(str) === true || fruits.includes(lowercaseStr) === true){
            results.push(fruits);
        }
    }     
	return results;
}

function searchHandler(e) {
    let value = e.target.value.tostring();
    return search(value);
}

function showSuggestions(results, inputVal) {
    for (let result of results) {
        const suggestion = document.createElement('li')
        suggestion.appendChild(document.createTextNode(result));
        suggestions.appendChild(suggestion);
    }
    return suggestions;
}

function useSuggestion(e) {
	// TODO
    input.value = e.target.innerHTML;
    suggestions.innerHTML = ''; 
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
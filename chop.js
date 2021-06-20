export const chop = (template, data) => {

    let chopped = template

    if (typeof data === 'object' && typeof template === 'string') {

        for (const [key, value] of Object.entries(data)) {

            if (isValidType(key) && isValidType(value)) {

                chopped = chopped.replaceAll(`{{${key}}}`, value)
            }
            else {
                const errorMessage = 'Dataset should only contains strings or numbers!'
                console.log(errorMessage)
            }
        }
    }
    else {
        console.log('Template must be a string and data must be an object type!')
    }
    return chopped
}

function isValidType(value) {
    return typeof value === 'string' || typeof value === 'number'
}
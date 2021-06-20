export const chop = (template, data) => {

    let chopped = template

    for (const [key, value] of Object.entries(data)) {

        if ((typeof key === 'string' || typeof key === 'number') && (typeof value === 'string' || typeof value === 'number')) {

            chopped = chopped.replaceAll(`{{${key}}}`, value)
        }
        else {
            const errorMessage = "Dataset should only contains strings or numbers!"
        }
    }
    return chopped
}